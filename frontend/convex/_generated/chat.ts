import { mutation } from "_generated/server";
import { v } from "convex/values";

export const sendMessage = mutation({
  args: {
    user: v.string(),
    body: v.string(),
  },
  handler: async (ctx, { user, body }) => {
    const identity = await ctx.auth.getUserIdentity();
    if (identity === null) {
      throw new Error("Not authenticated");
    }
    await ctx.db.insert("messages", {
      user: args.user,
      body: args.body,
    });
  },
});
