import { createClient } from "@/genql";

export const client = createClient({
  url: "https://yurakuna.vercel.app/graphql",
});
