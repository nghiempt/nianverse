"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  TrendingUp,
  Users,
  ListTodo
} from "lucide-react"

export default function AdminDashboard() {
  const stats = [
    {
      title: "Tổng Task",
      value: "24",
      change: "+12%",
      icon: ListTodo,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Đang thực hiện",
      value: "8",
      change: "+5%",
      icon: Clock,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      title: "Hoàn thành",
      value: "14",
      change: "+18%",
      icon: CheckCircle2,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Quá hạn",
      value: "2",
      change: "-25%",
      icon: AlertCircle,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
  ]

  const recentTasks = [
    {
      id: 1,
      title: "Thiết kế UI Dashboard",
      status: "completed",
      priority: "high",
      assignee: "Nguyễn Văn A",
      dueDate: "2025-12-01",
    },
    {
      id: 2,
      title: "Tích hợp API Backend",
      status: "in-progress",
      priority: "high",
      assignee: "Trần Thị B",
      dueDate: "2025-12-05",
    },
    {
      id: 3,
      title: "Viết Unit Test",
      status: "in-progress",
      priority: "medium",
      assignee: "Lê Văn C",
      dueDate: "2025-12-07",
    },
    {
      id: 4,
      title: "Review Code Pull Request",
      status: "pending",
      priority: "low",
      assignee: "Phạm Thị D",
      dueDate: "2025-12-03",
    },
  ]

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      completed: { label: "Hoàn thành", variant: "default" as const, className: "bg-green-100 text-green-800" },
      "in-progress": { label: "Đang làm", variant: "secondary" as const, className: "bg-blue-100 text-blue-800" },
      pending: { label: "Chờ xử lý", variant: "outline" as const, className: "bg-gray-100 text-gray-800" },
    }
    const config = statusConfig[status as keyof typeof statusConfig]
    return <Badge className={config.className}>{config.label}</Badge>
  }

  const getPriorityBadge = (priority: string) => {
    const priorityConfig = {
      high: { label: "Cao", className: "bg-red-100 text-red-800" },
      medium: { label: "Trung bình", className: "bg-yellow-100 text-yellow-800" },
      low: { label: "Thấp", className: "bg-gray-100 text-gray-800" },
    }
    const config = priorityConfig[priority as keyof typeof priorityConfig]
    return <Badge variant="outline" className={config.className}>{config.label}</Badge>
  }

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <div className={`${stat.bgColor} p-2 rounded-lg`}>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className={stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                    {stat.change}
                  </span>
                  {" "}so với tháng trước
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Recent Tasks */}
      <Card>
        <CardHeader>
          <CardTitle>Task gần đây</CardTitle>
          <CardDescription>Danh sách các task được cập nhật gần đây nhất</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-3">
                    <h4 className="font-medium text-gray-900">{task.title}</h4>
                    {getStatusBadge(task.status)}
                    {getPriorityBadge(task.priority)}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {task.assignee}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {task.dueDate}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Activity Chart Placeholder */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Tiến độ theo tuần</CardTitle>
            <CardDescription>Số lượng task hoàn thành 7 ngày qua</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
              <div className="text-center text-gray-400">
                <TrendingUp className="w-12 h-12 mx-auto mb-2" />
                <p className="text-sm">Biểu đồ tiến độ</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Phân bổ theo độ ưu tiên</CardTitle>
            <CardDescription>Task được phân loại theo mức độ ưu tiên</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
              <div className="text-center text-gray-400">
                <ListTodo className="w-12 h-12 mx-auto mb-2" />
                <p className="text-sm">Biểu đồ phân bổ</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
