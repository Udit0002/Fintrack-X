import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "Fintrack-X", // Unique app ID
  name: "Fintrack-X",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});
