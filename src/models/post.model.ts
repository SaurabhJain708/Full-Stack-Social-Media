import mongoose, { Document, Model } from "mongoose";

interface Pst extends Document {
  title: string;
  body: string;
  Video?: string;
  image?: string[];
  author: mongoose.Types.ObjectId;
  likes: number;
  views: number;
  tags: string[];
}

const postSchema: mongoose.Schema<Pst> = new mongoose.Schema<Pst>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    body: {
      type: String,
      required: true,
      trim: true,
    },
    Video: {
      type: String,
    },
    image: [{ type: String }],
    likes: {
      type: Number,
    },
    views: {
      type: Number,
    },
    tags: [{ type: String }],
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Post: Model<Pst> =
  mongoose.models.Post || mongoose.model("Post", postSchema);
// export default mongoose.model<Pst>("Post", postSchema);
