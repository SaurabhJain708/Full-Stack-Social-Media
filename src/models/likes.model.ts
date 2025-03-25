import mongoose, { Document, Model } from "mongoose";

interface Lke extends Document {
  post: mongoose.Types.ObjectId;
  user: mongoose.Types.ObjectId;
}

const likeSchema: mongoose.Schema<Lke> = new mongoose.Schema<Lke>(
  {
    post: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Post",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Like: Model<Lke> =
  mongoose.models.Like || mongoose.model("Like", likeSchema);
// export default mongoose.model<Lke>("Like", likeSchema);
