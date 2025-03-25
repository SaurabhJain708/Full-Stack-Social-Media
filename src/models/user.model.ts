import mongoose, { Document, Model } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface Uts extends Document {
  name: string;
  email: string;
  username: string;
  bio?: string;
  profileImage?: string;
  refreshToken?: string;
  password: string;
  links: {
    website?: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  following: number;
  followers: number;
  posts: mongoose.Types.ObjectId[];
  likedPosts: mongoose.Types.ObjectId[];
  bookmarks: mongoose.Types.ObjectId[];
  tags: "NEW" | "MID" | "PRO" | "LEAD";
  skills: string[];
  theme: "DARK" | "LIGHT";
}

const userSchema: mongoose.Schema<Uts> = new mongoose.Schema<Uts>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    bio: {
      type: String,
      trim: true,
    },
    profileImage: {
      type: String,
    },
    refreshToken: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    links: {
      website: {
        type: String,
      },
      github: {
        type: String,
      },
      linkedin: {
        type: String,
      },
      twitter: {
        type: String,
      },
    },
    following: {
      type: Number,
      default: 0,
    },
    followers: {
      type: Number,
      default: 0,
    },
    posts: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Post",
        index: true,
      },
    ],
    likedPosts: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Post",
        index: true,
      },
    ],
    bookmarks: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Post",
        index: true,
      },
    ],
    tags: {
      type: String,
      enum: ["NEW", "MID", "PRO", "LEAD"],
      default: "NEW",
    },
    skills: [
      {
        type: String,
      },
    ],
    theme: {
      type: String,
      enum: ["DARK", "LIGHT"],
      default: "LIGHT",
    },
  },
  { timestamps: true }
);

userSchema.pre<Uts>("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.methods.comparePassword = async function (
  password: string
): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateRefreshToken = function (): string {
  const secret: string = process.env.REFRESH_TOKEN_SECRET!;
  const refreshtoken = jwt.sign({ id: this._id }, secret, {
    expiresIn: "7d",
  });
  return refreshtoken;
};

userSchema.methods.generateAccessToken = function (): string {
  const accesstoken = jwt.sign(
    { id: this._id },
    process.env.ACCESS_TOKEN_SECRET!,
    {
      expiresIn: "15m",
    }
  );
  return accesstoken;
};

export const User: Model<Uts> =
  mongoose.models.User || mongoose.model("User", userSchema);