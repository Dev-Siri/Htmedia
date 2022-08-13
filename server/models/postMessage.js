import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
  title: String,
  description: String,
  user: String,
});

const PostMessage = mongoose.model("PostMessage", PostSchema);

export default PostMessage;
