import mongoose, { Document, Model } from "mongoose";

interface Cmt extends Document {
  post: mongoose.Types.ObjectId;
  user: mongoose.Types.ObjectId;
  body: string;
  likes: number;
}

const commentSchema = new mongoose.Schema<Cmt>(
  {
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    body: {
      type: String,
      required: true,
      trim: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const Comment: Model<Cmt> =
  mongoose.models.Comment || mongoose.model<Cmt>("Comment", commentSchema);
// export default mongoose.model<Cmt>("Comment", commentSchema);