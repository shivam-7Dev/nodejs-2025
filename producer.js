import { Queue } from "bullmq";

// Create a new connection in every instance
const myQueue = new Queue("audio-queue", {
  connection: {
    host: "localhost",
    port: 6379,
  },
});

/**
 * Push a task to the queue.
 * @param {Object} task - The data to add to the queue.
 * @param {string} [jobName] - Optional job name.
 */
async function pushToQueue(task, jobName) {
  const res = await myQueue.add(jobName, task);
  console.log({ res });
}

// Example usage:
for (let index = 100; index < 200; index++) {
  pushToQueue({ file: "song.mp3", user: "shivam" }, `job-${index}`);
}
