"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  Search,
  Filter,
  MoreVertical,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Edit,
  Trash2,
  Eye
} from "lucide-react"

export default function TasksPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const tasks = [
    {
      id: 1,
      title: "Thiết kế UI Dashboard Admin",
      description: "Tạo giao diện dashboard với các thống kê và biểu đồ",
      status: "completed",
      priority: "high",
      assignee: "Nguyễn Văn A",
      dueDate: "2025-12-01",
      tags: ["UI/UX", "Design"],
    },
    {
      id: 2,
      title: "Tích hợp API Backend cho module User",
      description: "Kết nối frontend với các API endpoint của user management",
      status: "in-progress",
      priority: "high",
      assignee: "Trần Thị B",
      dueDate: "2025-12-05",
      tags: ["Backend", "API"],
    },
    {
      id: 3,
      title: "Viết Unit Test cho components",
      description: "Viết test cases cho các React components chính",
      status: "in-progress",
      priority: "medium",
      assignee: "Lê Văn C",
      dueDate: "2025-12-07",
      tags: ["Testing", "Quality"],
    },
    {
      id: 4,
      title: "Review Code Pull Request #123",
      description: "Review và comment code cho PR về authentication",
      status: "pending",
      priority: "low",
      assignee: "Phạm Thị D",
      dueDate: "2025-12-03",
      tags: ["Code Review"],
    },
    {
      id: 5,
      title: "Optimize Database Queries",
      description: "Cải thiện performance của các query chậm",
      status: "pending",
      priority: "high",
      assignee: "Hoàng Văn E",
      dueDate: "2025-12-06",
      tags: ["Database", "Performance"],
    },
    {
      id: 6,
      title: "Setup CI/CD Pipeline",
      description: "Cấu hình GitHub Actions cho auto deployment",
      status: "completed",
      priority: "medium",
      assignee: "Ngô Thị F",
      dueDate: "2025-11-28",
      tags: ["DevOps", "CI/CD"],
    },
  ]

  const getStatusConfig = (status: string) => {
    const configs = {
      completed: { 
        label: "Hoàn thành", 
        icon: CheckCircle2,
        className: "bg-green-100 text-green-800",
        iconColor: "text-green-600"
      },
      "in-progress": { 
        label: "Đang làm", 
        icon: Clock,
        className: "bg-blue-100 text-blue-800",
        iconColor: "text-blue-600"
      },
      pending: { 
        label: "Chờ xử lý", 
        icon: AlertCircle,
        className: "bg-gray-100 text-gray-800",
        iconColor: "text-gray-600"
      },
      cancelled: { 
        label: "Đã hủy", 
        icon: XCircle,
        className: "bg-red-100 text-red-800",
        iconColor: "text-red-600"
      },
    }
    return configs[status as keyof typeof configs]
  }

  const getPriorityBadge = (priority: string) => {
    const configs = {
      high: { label: "Cao", className: "bg-red-100 text-red-800 border-red-200" },
      medium: { label: "Trung bình", className: "bg-yellow-100 text-yellow-800 border-yellow-200" },
      low: { label: "Thấp", className: "bg-gray-100 text-gray-800 border-gray-200" },
    }
    const config = configs[priority as keyof typeof configs]
    return <Badge variant="outline" className={config.className}>{config.label}</Badge>
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Quản lý Task</h1>
          <p className="text-gray-500 mt-1">Tổng cộng {tasks.length} task</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Search className="w-4 h-4 mr-2" />
          Tạo Task Mới
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Tìm kiếm task theo tên, mô tả..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Lọc
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tasks List */}
      <div className="grid gap-4">
        {tasks.map((task) => {
          const statusConfig = getStatusConfig(task.status)
          const StatusIcon = statusConfig.icon

          return (
            <Card key={task.id} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  {/* Status Icon */}
                  <div className={`p-2 rounded-lg ${statusConfig.className.split(' ')[0]}`}>
                    <StatusIcon className={`w-5 h-5 ${statusConfig.iconColor}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {task.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          {task.description}
                        </p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {task.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Meta Info */}
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {task.dueDate}
                          </span>
                          <span>👤 {task.assignee}</span>
                          <Badge className={statusConfig.className}>
                            {statusConfig.label}
                          </Badge>
                          {getPriorityBadge(task.priority)}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
