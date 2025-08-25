// convex/schema.ts
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  posts: defineTable({
    authorId: v.string(),
    content: v.string(),
    createdAt: v.number(), // Date.now()
    likes: v.array(v.string()), // store user IDs
    reposts: v.array(v.string()), // store user IDs who reposted
    name: v.string(),
    email: v.string(),
    tokenIdentifier: v.string(), // from Clerk or other auth provider
    qrId: v.string(), // for QR code generation
  }).index("by_token", ["tokenIdentifier"]),

  comments: defineTable({
    postId: v.id("posts"),
    authorId: v.string(),
    content: v.string(),
    createdAt: v.number(),
  }),
});
