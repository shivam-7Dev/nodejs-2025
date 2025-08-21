import { Worker } from "bullmq";

const worker = new Worker(
  "audio-queue",
  async (job) => {
    console.log(`Processing job ${job.id}:`, job.data);

    // Simulate some work (e.g., processing audio file)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Whatever you return here will be stored as job result
    return { status: "done", file: job.data.file };
  },
  {
    connection: {
      host: "localhost",
      port: 6379,
    },
  }
);

// Optional event listeners
worker.on("completed", (job, result) => {
  console.log(`Job ${job.id} has completed with result:`, result);
});

worker.on("failed", (job, err) => {
  console.error(`Job ${job?.id} has failed with error:`, err);
});
