"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Loader2, Github, Globe } from "lucide-react";
import Link from "next/link";

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
      <Card className="w-full max-w-md rounded-lg shadow-2xl border border-gray-700">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-extrabold text-blue-500 tracking-wide">
            Devsphere
          </CardTitle>
          <p className="text-gray-400">Join the dev community</p>
        </CardHeader>

        <CardContent className="space-y-6">
          <form className="space-y-4">

            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-400 font-semibold">Full Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                required
                className="bg-gray-100 text-gray-800 placeholder-gray-500 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 h-12 px-4"
              />
            </div>

            {/* Username */}
            <div className="space-y-2">
              <Label htmlFor="username" className="text-gray-400 font-semibold">Username</Label>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="dev_john"
                required
                className="bg-gray-100 text-gray-800 placeholder-gray-500 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 h-12 px-4"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-400 font-semibold">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="bg-gray-100 text-gray-800 placeholder-gray-500 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 h-12 px-4"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-400 font-semibold">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                required
                className="bg-gray-100 text-gray-800 placeholder-gray-500 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 h-12 px-4"
              />
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="text-gray-400 font-semibold">Confirm Password</Label>
              <Input
                id="confirm-password"
                name="confirmPassword"
                type="password"
                placeholder="••••••••"
                required
                className="bg-gray-100 text-gray-800 placeholder-gray-500 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 h-12 px-4"
              />
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 rounded-md"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin mr-2" /> Creating account...
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-600"></div>
            <p className="mx-3 text-sm text-gray-400">OR</p>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>

          {/* Social Sign-Up Buttons */}
          <div className="flex flex-col space-y-4">
            <Button className="w-full flex items-center justify-center bg-white hover:bg-gray-100 text-gray-900 h-14 rounded-md shadow-md transition-transform transform hover:scale-105 border-2 border-blue-500">
              <Globe className="w-6 h-6 mr-3 text-blue-500" /> Sign up with Google
            </Button>
            <Button className="w-full flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white h-14 rounded-md shadow-md transition-transform transform hover:scale-105">
              <Github className="w-6 h-6 mr-3" /> Sign up with GitHub
            </Button>
          </div>

          {/* Sign-In Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              Already have an account?{" "}
              <a href="/sign-in" className="text-blue-400 hover:underline">
                Sign in
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
