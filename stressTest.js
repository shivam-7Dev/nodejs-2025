// autocannon-test.js

const autocannon = require("autocannon");

const baseUrl = "localhost:8000/api";
// const baseUrl = "http://52.56.98.164:8000/api";

const enpoint = {
  userDashboard: `${baseUrl}/user/dashboard`,
  userShoots: `${baseUrl}/user/shoots`,
  leaderBoard: `${baseUrl}/leaderboard`,
  userSyndicates: `${baseUrl}/syndicate`,
  friends: `${baseUrl}/friends`,
};

const loaclToken =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MzZkM2ViMmY4OWZiM2U4NmI4ZDNhOCIsImVtYWlsIjoic2hpdmFtNy5kZXZAZ21haWwuY29tIiwiaWF0IjoxNzU1MzI0NDUzLCJleHAiOjE3NTU0MTA4NTN9.fNRKQEtC_U3rs0M5OyVY7Jylp2kltLLYSCtLLlIj8YI";
const devserverToken =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MzZkM2ViMmY4OWZiM2U4NmI4ZDNhOCIsImVtYWlsIjoic2hpdmFtNy5kZXZAZ21haWwuY29tIiwiaWF0IjoxNzUzODcxOTcxLCJleHAiOjE3NTM5NTgzNzF9.M8JpDicXVIycyZfuNJqURfiGaha1zpjR-kfe-fSXmCI";
const instance = autocannon(
  {
    url: enpoint.userDashboard,
    connections: 100,
    duration: 30, // test duration in seconds
    headers: {
      Authorization: loaclToken, // insert your JWT here
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


=================after aggregation========================


{
  url: 'http://52.56.98.164:8000/api/friends',
  errors: 0,
  timeouts: 0,
  statusCodeStats: { '200': { count: 1243 } },
  latency: { latencyAvg: 2318.84, latencyMax: 3076, latencyMean: 2318.84 },
  requests: { reqAvg: 41.44, requestsMean: 41.44, reqestMax: 45 },
  throughput: {
    throughputAvg: 76431.47,
    throughputMean: 76431.47,
    throughputMax: 83025
  }
}
 */

///******************************LocalTesting********************************* */

/**
 {
  url: 'http://localhost:8000/api/friends',
  errors: 0,
  timeouts: 0,
  statusCodeStats: { '200': { count: 403 } },
  latency: { latencyAvg: 6297.46, latencyMax: 7238, latencyMean: 6297.46 },
  requests: { reqAvg: 13.44, requestsMean: 13.44, reqestMax: 40 },
  throughput: {
    throughputAvg: 13918.2,
    throughputMean: 13918.2,
    throughputMax: 41440
  }
}


{
  url: 'http://52.56.98.164:8000/api/friends',
  errors: 0,
  timeouts: 0,
  statusCodeStats: { '401': { count: 13787 } },
  latency: { latencyAvg: 216.42, latencyMax: 1127, latencyMean: 216.42 },
  requests: { reqAvg: 459.57, requestsMean: 459.57, reqestMax: 494 },
  throughput: {
    throughputAvg: 177396.27,
    throughputMean: 177396.27,
    throughputMax: 190684
  }
}




 */
