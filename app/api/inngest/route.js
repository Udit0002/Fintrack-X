// app/api/inngest/route.js
import { serve } from "inngest/next";
// import { inngest } from "@/lib/inngest/client";
import { inngest } from "../../../lib/inngest/client"; // <-- relative path from route.js
import {
  checkBudgetAlerts,
  generateMonthlyReports,
  processRecurringTransaction,
  triggerRecurringTransactions,
} from "../../../lib/inngest/function"; // <-- singular to match your file


export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    processRecurringTransaction,
    triggerRecurringTransactions,
    generateMonthlyReports,
    checkBudgetAlerts,
  ],
});
