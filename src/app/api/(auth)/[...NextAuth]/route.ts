import { mongoDb } from "@/db/mongoDb";
import { ApiError } from "@/lib/Apierror";
import { User } from "@/models/user.model";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          await mongoDb();
          const user = await User.findOne({
            email: credentials.email,
          }).exec();
          if (!user) {
            throw new ApiError(404, "User not found");
          }
          const validatePassword = await user.comparePassword(
            credentials.password as string
          );
          if (!validatePassword) {
            throw new ApiError(401, "Invalid password");
          }
          return user;
        } catch (error: any) {
          return null;
        }
      },
    }),
  ],
});
