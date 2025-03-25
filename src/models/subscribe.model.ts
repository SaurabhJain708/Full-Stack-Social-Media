import mongoose, { Document, Model } from "mongoose";

interface Subscribe extends Document {
  subscriber: mongoose.Types.ObjectId;
  subscribedTo: mongoose.Types.ObjectId;
}

const subscriberSchema: mongoose.Schema<Subscribe> =
  new mongoose.Schema<Subscribe>(
    {
      subscriber: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
      subscribedTo: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
    },
    { timestamps: true }
  );

export const Subscriber: Model<Subscribe> =
  mongoose.models.Subscriber || mongoose.model("Subscriber", subscriberSchema);
// export default mongoose.model<Subscribe>("Subscriber", subscriberSchema);
