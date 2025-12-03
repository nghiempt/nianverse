"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Menu,
  Blocks,
  Stethoscope,
  CircleDollarSign,
  BriefcaseBusiness,
  House,
  Handshake,
  TreePalm,
  LineSquiggle,
  Settings,
  Component
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import Image from "next/image"
import { IMAGES } from "@/utils/images"

const sidebarItems = [
  {
    title: "Self",
    href: "/admin",
    icon: Blocks,
  },
  {
    title: "Health",
    href: "/admin/health",
    icon: Stethoscope,
  },
  {
    title: "Finance",
    href: "/admin/finance",
    icon: CircleDollarSign,
  },
  {
    title: "Work",
    href: "/admin/work",
    icon: BriefcaseBusiness,
  },
  {
    title: "Home",
    href: "/admin/home",
    icon: House,
  },
  {
    title: "Relationship",
    href: "/admin/relationship",
    icon: Handshake,
  },
  {
    title: "Growth",
    href: "/admin/growth",
    icon: TreePalm,
  },
  {
    title: "Digital",
    href: "/admin/digital",
    icon: Component,
  },
  {
    title: "Creativity",
    href: "/admin/creativity",
    icon: LineSquiggle,
  },
  {
    title: "Operation",
    href: "/admin/operation",
    icon: Settings,
  }
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
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen transition-all duration-300 bg-white border-r border-gray-200",
          sidebarOpen ? "w-64" : "w-20"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
            {sidebarOpen && (
              <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
            )}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
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
          <div className="p-4 border-t border-gray-200">
            <div className={cn(
              "flex items-center gap-3",
              !sidebarOpen && "justify-center"
            )}>
              <Image
                className="dark:invert"
                src={IMAGES.LOGO}
                alt="Logo"
                width={40}
                height={0}
                priority
              />
              {sidebarOpen && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-700 truncate">
                    Nian Pham
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    me@nianverse.org
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>
      <main
        className={cn(
          "transition-all duration-300",
          sidebarOpen ? "ml-64" : "ml-20"
        )}
      >
        <div className="sticky top-0 z-30 h-16 bg-white border-b border-gray-200 flex items-center px-6">
          <h2 className="text-lg font-semibold text-gray-800">
            {sidebarItems.find(item => item.href === pathname)?.title || "Admin"}
          </h2>
        </div>
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  )
}
