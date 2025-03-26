"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {ThumbsUp, MessageSquare, Share2 } from "lucide-react";
import PhoneSidebar from "@/components/homepage/Phonesidebar";
import DesktopSidebar from "@/components/homepage/DesktopSidebar";
import Header from "@/components/homepage/Header";

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const demoPosts = [
    {
      id: 1,
      title: "Building a Modern Web App with Next.js",
      author: "John Doe",
      content: "Next.js offers server-side rendering, API routes, and more...",
      avatar: "https://via.placeholder.com/50",
      tags: ["Next.js", "TypeScript", "SSR"],
    },
    {
      id: 2,
      title: "Mastering Git Workflows",
      author: "Alice Smith",
      content: "Learn advanced branching strategies and rebasing techniques...",
      avatar: "https://via.placeholder.com/50",
      tags: ["Git", "Version Control", "DevOps"],
    },
    {
      id: 3,
      title: "Deploying with Docker and Kubernetes",
      author: "Bob Johnson",
      content: "Discover how to containerize your apps and scale with K8s...",
      avatar: "https://via.placeholder.com/50",
      tags: ["Docker", "Kubernetes", "CI/CD"],
    },
  ];

  const recommendations = [
    "10 Tips for Better Code Efficiency",
    "How to Optimize MongoDB Queries",
    "Mastering TypeScript with Next.js",
  ];

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all duration-300">

        {/* Mobile Sidebar (Sheet) */}
        <PhoneSidebar/>

        {/* Desktop Sidebar */}
       <DesktopSidebar/>

        {/* Main Content */}
        <div className="flex-1 lg:ml-72 lg:mr-72 p-10">
          {/* Header */}
         <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>

          <div className="max-w-4xl mx-auto space-y-12 mt-12">

            {/* Posts Feed */}
            <div className="space-y-8">
              {demoPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* Post Header */}
                  <div className="flex items-center gap-4">
                    <img
                      src={post.avatar}
                      alt={post.author}
                      className="w-12 h-12 rounded-full border-2 border-blue-500"
                    />
                    <div>
                      <h3 className="text-lg font-bold">{post.author}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">DevSphere Contributor</p>
                    </div>
                  </div>

                  {/* Post Content */}
                  <h2 className="text-2xl font-semibold mt-4">{post.title}</h2>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{post.content}</p>

                  {/* Tags */}
                  <div className="flex gap-2 mt-4">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-700 text-blue-600 dark:text-blue-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex justify-between items-center mt-6">
                    <Button variant="ghost" className="flex items-center gap-2 text-gray-600 hover:text-blue-500">
                      <ThumbsUp className="h-5 w-5" /> Like
                    </Button>
                    <Button variant="ghost" className="flex items-center gap-2 text-gray-600 hover:text-blue-500">
                      <MessageSquare className="h-5 w-5" /> Comment
                    </Button>
                    <Button variant="ghost" className="flex items-center gap-2 text-gray-600 hover:text-blue-500">
                      <Share2 className="h-5 w-5" /> Share
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Recommendations (Desktop Only) */}
        <aside className="hidden lg:flex w-72 h-screen fixed right-0 top-0 border-l bg-gray-100 dark:bg-gray-800 p-8">
          <div className="w-full space-y-8">
            <h2 className="text-2xl font-bold">Recommended Reads</h2>
            {recommendations.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-600 transition"
              >
                {item}
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
