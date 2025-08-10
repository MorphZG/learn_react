import { initDatabase } from "./db/init.js";
import { Post } from "./db/models/post.js";
import mongoose from "mongoose";

// await for connection before accessing the database
await initDatabase();

const post = new Post({
  title: "Hello Mongoose!",
  author: "Zoran Topic",
  contents: "This post is stored in a MongoDB database using Mongoose",
  tags: ["mongoose", "mongodb", "docker"],
});

const createdPost = await post.save();

await Post.findByIdAndUpdate(createdPost._id, {
  $set: { title: "Hello, Mongoose. Updated title!" },
});

const posts = await Post.find();
console.log(posts);

mongoose.connection.close();
