import { Home, User, Bell, Settings, Briefcase, MessageSquare, LogOut } from "lucide-react";

export default function DesktopSidebar() {
  return (
    <aside className="hidden lg:flex w-80 h-screen fixed left-0 top-0 border-r bg-gray-100 dark:bg-gray-900 p-8">
      <div className="flex flex-col h-full">
        
        {/* Profile Section */}
        <div className="flex flex-col items-center border-b border-gray-700 pb-6">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-blue-500"
          />
          <h2 className="text-xl font-semibold mt-3">John Doe</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Software Engineer at DevSphere</p>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 mt-8 space-y-6">
          <div className="flex items-center gap-4 text-lg hover:bg-blue-600 hover:text-white transition p-3 rounded-lg cursor-pointer">
            <Home className="h-5 w-5" /> Home
          </div>
          <div className="flex items-center gap-4 text-lg hover:bg-blue-600 hover:text-white transition p-3 rounded-lg cursor-pointer">
            <User className="h-5 w-5" /> My Network
          </div>
          <div className="flex items-center gap-4 text-lg hover:bg-blue-600 hover:text-white transition p-3 rounded-lg cursor-pointer">
            <Briefcase className="h-5 w-5" /> Jobs
          </div>
          <div className="flex items-center gap-4 text-lg hover:bg-blue-600 hover:text-white transition p-3 rounded-lg cursor-pointer">
            <MessageSquare className="h-5 w-5" /> Messaging
          </div>
          <div className="flex items-center gap-4 text-lg hover:bg-blue-600 hover:text-white transition p-3 rounded-lg cursor-pointer">
            <Bell className="h-5 w-5" /> Notifications
          </div>
          <div className="flex items-center gap-4 text-lg hover:bg-blue-600 hover:text-white transition p-3 rounded-lg cursor-pointer">
            <Settings className="h-5 w-5" /> Settings
          </div>
        </nav>

        {/* Bottom Shortcuts */}
        <div className="mt-auto border-t border-gray-700 pt-6">
          <div className="flex items-center gap-4 text-lg hover:bg-red-600 hover:text-white transition p-3 rounded-lg cursor-pointer">
            <LogOut className="h-5 w-5" /> Log Out
          </div>
        </div>
      </div>
    </aside>
  );
}
