"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  ListTodo, 
  PlusCircle,
  Menu
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Quản lý Task",
    href: "/admin/tasks",
    icon: ListTodo,
  },
  {
    title: "Tạo Task",
    href: "/admin/create-task",
    icon: PlusCircle,
  },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen transition-all duration-300 bg-white border-r border-gray-200",
          sidebarOpen ? "w-64" : "w-20"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
            {sidebarOpen && (
              <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
            )}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4 space-y-1">
            {sidebarItems.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
                    "hover:bg-gray-100",
                    isActive && "bg-blue-50 text-blue-600 hover:bg-blue-100",
                    !isActive && "text-gray-700"
                  )}
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  {sidebarOpen && (
                    <span className="text-sm font-medium">{item.title}</span>
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <div className={cn(
              "flex items-center gap-3",
              !sidebarOpen && "justify-center"
            )}>
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-medium">
                A
              </div>
              {sidebarOpen && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-700 truncate">
                    Admin User
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    admin@nianverse.com
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={cn(
          "transition-all duration-300",
          sidebarOpen ? "ml-64" : "ml-20"
        )}
      >
        {/* Top Bar */}
        <div className="sticky top-0 z-30 h-16 bg-white border-b border-gray-200 flex items-center px-6">
          <h2 className="text-lg font-semibold text-gray-800">
            {sidebarItems.find(item => item.href === pathname)?.title || "Admin"}
          </h2>
        </div>

        {/* Page Content */}
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  )
}
