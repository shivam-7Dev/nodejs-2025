// Use this valid shootId for all events
const joinShootRoom = "6875024bce604f6c8b1ec87e";

// 1. To start the first drive
const startDrive = {
  shootId: "6875024bce604f6c8b1ec87e",
  driveNumber: 1,
};

// 2. To end the first drive (must be started first)
const endDrive = {
  shootId: "6875024bce604f6c8b1ec87e",
  driveNumber: 1,
};

// 3. For a gun to submit their data for the first drive
const submitDriveData = {
  shootId: "6875024bce604f6c8b1ec87e",
  driveNumber: 1,
  bagInput: 2,
  gaugePreference: "20 Gauge",
};

//data to emit
const driveStartData = {
  shootId: "6875024bce604f6c8b1ec87e",
  driveNumber: 1,
};
const driveEndData = {
  shootId: "6875024bce604f6c8b1ec87e",
  driveNumber: 1,
};

/**
 *   DRIVE_STARTED:"",
  dRIVE-ENDED:""
 */
/*


import LeaderboardModel from "../model/leaderboardModel";
import ShootModel, { ShootStatusEnum } from "../../shoot/model/ShootModel";
import UserModel from "../../user/model/UserModel";

import { Types } from "mongoose";
import SyndicateModel from "../../syndicate/model/SyndicateModel";
import FriendRequest from "../../friends/model/FriendsModel";
interface GetLeaderboardOptions {
  limit?: number;
  page?: number;
  requestingUserId?: string;
  season?: string; // e.g., "2025-2026"
  location?: string;
  sortBy?: "shotToHitRatio" | "totalBirdsBagged" | "avgBagPerShoot";
  syndicateId?: string;
  friends?: boolean;
}

class LeaderBoardService {
  public async getLeaderboard(options: GetLeaderboardOptions = {}) {
    const {
      limit = 10,
      page = 1,
      requestingUserId,
      season,
      location,
      syndicateId,
      friends,
    } = options;

    let seasonStartDate;
    let seasonEndDate;

    if (season) {
      const { startDate, endDate } = this._getSeasonDateRange(season);
      seasonStartDate = startDate;
      seasonEndDate = endDate;
    }
    let friendsId: Types.ObjectId[] | null = null;
    if (friends) {
      if (!requestingUserId) {
        throw new Error(
          "A user must be logged in to view the friends leaderboard."
        );
      }
      // Find all accepted friendships for the current user
      const friendships = await FriendRequest.find({
        status: "accepted",
        $or: [
          { sender: new Types.ObjectId(requestingUserId) },
          { receiver: new Types.ObjectId(requestingUserId) },
        ],
      })
        .select("sender receiver")
        .lean();

      // Collect the IDs of the friends
      const friendUserIds = friendships.map((friendship) =>
        friendship.sender.toString() === requestingUserId
          ? friendship.receiver
          : friendship.sender
      );

      // The filter will include the user and their friends
      friendsId = [new Types.ObjectId(requestingUserId), ...friendUserIds];
    }

    let syndicateMemberIds: Types.ObjectId[] | null = null;
    if (syndicateId) {
      const syndicate = await SyndicateModel.findById(syndicateId)
        .select("members.userId members.status")
        .lean();

      if (!syndicate) {
        throw new Error("Syndicate not found.");
      }
      syndicateMemberIds = syndicate.members
        .filter((member) => member.status === "accepted" && member.userId)
        .map((member) => new Types.ObjectId(member.userId!));
    }

    // --- Main Aggregation Pipeline ---
    const pipeline: any[] = [];

    // Initial match for shoots
    const initialMatch: any = { shootStatus: ShootStatusEnum.COMPLETED };
    if (seasonStartDate && seasonEndDate) {
      initialMatch.dateOfShoot = {
        $gte: new Date(seasonStartDate),
        $lte: new Date(seasonEndDate),
      };
    }
    if (location) {
      // Using a case-insensitive regex for location search
      initialMatch["location.name"] = new RegExp(location, "i");
    }
    pipeline.push({ $match: initialMatch });

    // Unwind guns to process each participant
    pipeline.push({ $unwind: "$guns" });

    // Match for accepted guns and syndicate members
    const gunMatch: any = { "guns.inviteStatus": "accepted" };
    if (syndicateMemberIds) {
      gunMatch["guns.userId"] = { $in: syndicateMemberIds };
    } else if (friendsId) {
      gunMatch["guns.userId"] = { $in: friendsId };
    }

    pipeline.push({ $match: gunMatch });

    // Group by user to calculate stats
    pipeline.push({
      $group: {
        _id: "$guns.userId",
        totalShotsFired: { $sum: "$guns.shootCountByAdmin" },
        totalBirdsBagged: { $sum: "$guns.bagCountByAdmin" },
        shootsCompleted: { $sum: 1 },
      },
    });

    //push a person if he has hit atleast more than one bird
    pipeline.push({
      $match: {
        totalBirdsBagged: { $gte: 1 },
        shootsCompleted: { $gte: 1 },
      },
    });

    // Project the final calculated fields
    pipeline.push({
      $project: {
        userId: "$_id",
        totalShotsFired: 1,
        totalBirdsBagged: 1,
        shootsCompleted: 1,
        avgBagPerShoot: {
          $cond: [
            { $gt: ["$shootsCompleted", 0] },
            { $divide: ["$totalBirdsBagged", "$shootsCompleted"] },
            0,
          ],
        },
        shotToHitRatio: {
          $cond: [
            { $gt: ["$totalBirdsBagged", 0] },
            { $divide: ["$totalShotsFired", "$totalBirdsBagged"] },
            0,
          ],
        },
        _id: 0,
      },
    });

    // Add a lookup to get user details for sorting and final output
    pipeline.push(
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "user",
          pipeline: [
            {
              $project: {
                firstName: 1,
                lastName: 1,
                userTag: 1,
                avatar: 1,
                "privacySettings.publicProfileOnLeaderboard": 1,
              },
            },
          ],
        },
      },
      { $unwind: "$user" }
    );

    // --- Sorting Order ---
    const sortOrder: any = {
      shotToHitRatio: 1,
      totalBirdsBagged: -1,
      totalShotsFired: 1,
      shootsCompleted: 1,
      "user.userTag": 1, // Final tie-breaker: sort by username A-Z
    };

    // --- Execute Queries Concurrently ---
    const [leaderboardPage, totalCountResult, userRankData] = await Promise.all(
      [
        // 1. Get the paginated leaderboard results
        ShootModel.aggregate([
          ...pipeline,
          { $sort: sortOrder },
          { $skip: (page - 1) * limit },
          { $limit: limit },
        ]),

        // 2. Get the total count of documents matching the filter
        ShootModel.aggregate([...pipeline, { $count: "totalDocuments" }]),

        // 3. Calculate the rank of the requesting user
        requestingUserId
          ? ShootModel.aggregate([
              ...pipeline,
              { $sort: sortOrder },
              {
                // Group all users into a single document to find the rank
                $group: {
                  _id: null,
                  // Store the necessary fields of all sorted users
                  sortedUsers: {
                    $push: {
                      userId: "$userId",
                      shotToHitRatio: "$shotToHitRatio",
                      shootsCompleted: "$shootsCompleted",
                      userTag: "$user.userTag",
                      avatar: "$user.avatar",
                    },
                  },
                },
              },
              {
                // Find the 0-based index of the requesting user
                $addFields: {
                  userIndex: {
                    $indexOfArray: [
                      "$sortedUsers.userId",
                      new Types.ObjectId(requestingUserId),
                    ],
                  },
                },
              },
              {
                // Project the final rank and stats if the user was found
                $project: {
                  _id: 0,
                  rank: {
                    $cond: {
                      if: { $ne: ["$userIndex", -1] },
                      then: { $add: ["$userIndex", 1] }, // Add 1 for 1-based rank
                      else: null, // User not found in the list
                    },
                  },
                  userStats: {
                    $cond: {
                      if: { $ne: ["$userIndex", -1] },
                      then: { $arrayElemAt: ["$sortedUsers", "$userIndex"] },
                      else: {},
                    },
                  },
                },
              },
              // Reshape the output to be flat
              {
                $project: {
                  rank: "$rank",
                  shotToHitRatio: "$userStats.shotToHitRatio",
                  shootsCompleted: "$userStats.shootsCompleted",
                  userTag: "$userStats.userTag",
                  avatar: "$userStats.avatar",
                },
              },
            ])
          : Promise.resolve([]),
      ]
    );

    // --- Format and Return Response ---
    const totalDocuments =
      totalCountResult.length > 0 ? totalCountResult[0].totalDocuments : 0;
    const totalPages = Math.ceil(totalDocuments / limit);
    const userRank = userRankData.length > 0 ? userRankData[0] : null;

    return {
      leaderboard: leaderboardPage,
      currentPage: page,
      totalPages: totalPages,
      userRank: userRank,
    };
  }

  public getLeaderBoardFilters = async (userId: string) => {
    try {
      // Find all syndicates where the user is an accepted member

      const filters: { displayName: string; queryValue: any }[] = [
        { displayName: "National", queryValue: "" },
        { displayName: "Friends", queryValue: "friends=true" },
      ];

      const userSyndicates = await SyndicateModel.find({
        members: {
          $elemMatch: {
            userId: new Types.ObjectId(userId),
            status: "accepted",
          },
        },
      })
        .select("_id syndicateName") // Select only the ID and name
        .lean();

      if (userSyndicates.length > 0) {
        for (const syndicate of userSyndicates) {
          filters.push({
            displayName: syndicate["syndicateName"],
            queryValue: `syndicateId=${syndicate["_id"]}`,
          });
        }
      }

      // You can add other filters here in the future, e.g., unique locations
      return {
        filters,
      };
    } catch (error) {
      throw new Error("Could not retrieve leaderboard filters.");
    }
  };

  private _getSeasonDateRange(season: string) {
    const [startYear, endYear] = season.split("-").map(Number);
    return {
      startDate: `${startYear}-08-01`, //august one
      endDate: `${endYear}-01-31`, //January 31
    };
  }
}
export default LeaderBoardService;

*/
