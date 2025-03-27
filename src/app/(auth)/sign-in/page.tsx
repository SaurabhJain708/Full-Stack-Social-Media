"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Loader2, Github, Globe } from "lucide-react";

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
      <Card className="w-full max-w-md rounded-lg shadow-2xl border border-gray-700">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-extrabold text-blue-500 tracking-wide">
            Devsphere
          </CardTitle>
          <p className="text-gray-400">Connect with devs worldwide</p>
        </CardHeader>

        <CardContent className="space-y-6">
          <form className="space-y-4">
            
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-black font-semibold">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="bg-gray-800 border-gray-600 text-gray-100 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-black font-semibold">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                required
                className="bg-gray-800 border-gray-600 text-gray-100 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="flex justify-end">
                <a href="/forgot-password" className="text-sm text-blue-400 hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin mr-2" /> Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-600"></div>
            <p className="mx-3 text-sm text-gray-400">OR</p>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>

          {/* Social Sign-In Buttons */}
          <div className="flex flex-col space-y-4">
            <Button className="w-full flex items-center justify-center bg-white hover:bg-gray-100 text-gray-900 h-14 rounded-lg shadow-md transition-transform transform hover:scale-105 border-2 border-blue-500">
              <Globe className="w-6 h-6 mr-3 text-blue-500" /> Sign in with Google
            </Button>
            <Button className="w-full flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white h-14 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <Github className="w-6 h-6 mr-3" /> Sign in with GitHub
            </Button>
          </div>

          {/* Sign-Up Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              Don't have an account?{" "}
              <a href="/sign-up" className="text-blue-400 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
