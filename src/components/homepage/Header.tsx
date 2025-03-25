import { Sun, Moon, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header({ isDarkMode, setIsDarkMode }: { isDarkMode: boolean; setIsDarkMode: (dark: boolean) => void }) {
    return<header className="flex justify-between items-center py-6 px-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
            <div className="flex items-center gap-4">
              <Code className="h-8 w-8 text-blue-500" />
              <h1 className="text-3xl font-bold">DevSphere</h1>
            </div>
            <div className="flex items-center gap-6">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="text-gray-700 dark:text-gray-300"
              >
                {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
              </Button>
            </div>
          </header>
}
