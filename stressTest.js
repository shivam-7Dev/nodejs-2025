// autocannon-test.js

const autocannon = require("autocannon");

const enpoint = {
  userDashboard: "http://52.56.98.164:8000/api/user/dashboard",
  userShoots: "http://52.56.98.164:8000/api/user/shoots",
  leaderBoard: "http://52.56.98.164:8000/api/leaderboard",
  userSyndicates: "http://52.56.98.164:8000/api/syndicate",
  friends: "http://52.56.98.164:8000/api/friends",
};

const instance = autocannon(
  {
    url: enpoint.friends,
    connections: 100,
    duration: 30, // test duration in seconds
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4M2ZlYjNmMWE5MTczN2EwYjdkODdiNSIsImVtYWlsIjoic2hla2hhckBnbWFpbC5jb20iLCJpYXQiOjE3NTM4NTYxMDgsImV4cCI6MTc1Mzk0MjUwOH0.GUYOQ7R7K1bPn6vRT_-ehfDJQQQZi6pms67ZHGsOACY", // insert your JWT here
    },
    method: "GET",
  },
  finishedBench
);

function finishedBench(err, res) {
  if (err) {
    console.error("Autocannon error:", err);
    return;
  }
  console.dir(res, { depth: null });

  const {
    url,
    errors,
    timeouts,
    statusCodeStats,
    latency: { average: latencyAvg, mean: latencyMean, max: latencyMax },
    requests: { average: reqAvg, mean: requestsMean, max: reqestMax },
    throughput: {
      average: throughputAvg,
      mean: throughputMean,
      max: throughputMax,
    },
  } = res;

  console.log({
    url,
    errors,
    timeouts,
    statusCodeStats,
    latency: { latencyAvg, latencyMax, latencyMean },
    requests: { reqAvg, requestsMean, reqestMax },
    throughput: {
      throughputAvg,
      throughputMean,
      throughputMax,
    },
  });
}

//Results

/**
 * userDashboard:
  {
  url: 'http://52.56.98.164:8000/api/user/dashboard',
  errors: 231,
  timeouts: 231,
  statusCodeStats: { '200': { count: 66 } },
  latency: { latencyAvg: 5339.28, latencyMax: 9964, latencyMean: 5339.28 },
  requests: { reqAvg: 2.21, requestsMean: 2.21, reqestMax: 7 },
  throughput: {
    throughputAvg: 10364.74,
    throughputMean: 10364.74,
    throughputMax: 32991
  }
}

 */

/**
 * userShoots:
 * {
  url: 'http://52.56.98.164:8000/api/user/shoots',
  errors: 1,
  timeouts: 1,
  statusCodeStats: { '200': { count: 388 } },
  latency: { latencyAvg: 7228.48, latencyMax: 8497, latencyMean: 7228.48 },
  requests: { reqAvg: 12.94, requestsMean: 12.94, reqestMax: 39 },
  throughput: {
    throughputAvg: 45563.27,
    throughputMean: 45563.27,
    throughputMax: 137397
  }
}
 */

/**
 * leaderBoard: good  no fail
 {
  url: 'http://52.56.98.164:8000/api/leaderboard',
  errors: 0,
  timeouts: 0,
  statusCodeStats: { '200': { count: 399 } },
  latency: { latencyAvg: 6594.57, latencyMax: 7979, latencyMean: 6594.57 },
  requests: { reqAvg: 13.3, requestsMean: 13.3, reqestMax: 14 },
  throughput: {
    throughputAvg: 37531.47,
    throughputMean: 37531.47,
    throughputMax: 39508
  }
}
 */

/**
 * userSyndicates:
 {
  url: 'http://52.56.98.164:8000/api/syndicate',
  errors: 0,
  timeouts: 0,
  statusCodeStats: { '200': { count: 572 } },
  latency: { latencyAvg: 4856.3, latencyMax: 7813, latencyMean: 4856.3 },
  requests: { reqAvg: 19.07, requestsMean: 19.07, reqestMax: 40 },
  throughput: {
    throughputAvg: 34179.2,
    throughputMean: 34179.2,
    throughputMax: 71680
  }
}
 */

/*
 * friends:
{
  url: 'http://52.56.98.164:8000/api/friends',
  errors: 267,
  timeouts: 267,
  statusCodeStats: { '200': { count: 33 } },
  latency: { latencyAvg: 8688.82, latencyMax: 9926, latencyMean: 8688.82 },
  requests: { reqAvg: 1.11, requestsMean: 1.11, reqestMax: 15 },
  throughput: {
    throughputAvg: 2617.9,
    throughputMean: 2617.9,
    throughputMax: 35700
  }
}
 */
