"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  Save,
  X,
  Calendar,
  User,
  Tag,
  AlertCircle,
  CheckCircle2
} from "lucide-react"

export default function CreateTaskPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "medium",
    status: "pending",
    assignee: "",
    dueDate: "",
    tags: [] as string[],
  })

  const [currentTag, setCurrentTag] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate task creation
    console.log("Creating task:", formData)
    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
      // Reset form
      setFormData({
        title: "",
        description: "",
        priority: "medium",
        status: "pending",
        assignee: "",
        dueDate: "",
        tags: [],
      })
    }, 2000)
  }

  const addTag = () => {
    if (currentTag.trim() && !formData.tags.includes(currentTag.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, currentTag.trim()]
      })
      setCurrentTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(tag => tag !== tagToRemove)
    })
  }

  return (
    <div className="max-w-3xl space-y-6">
      {/* Success Message */}
      {showSuccess && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-green-600" />
          <div>
            <p className="font-medium text-green-900">Task đã được tạo thành công!</p>
            <p className="text-sm text-green-700">Task mới đã được thêm vào danh sách quản lý.</p>
          </div>
        </div>
      )}

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Tạo Task Mới</h1>
        <p className="text-gray-500 mt-1">Điền thông tin để tạo task mới cho dự án</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Thông tin Task</CardTitle>
            <CardDescription>
              Các trường đánh dấu * là bắt buộc
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Title */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Tiêu đề Task <span className="text-red-500">*</span>
              </label>
              <Input
                placeholder="Nhập tiêu đề task..."
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Mô tả <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Mô tả chi tiết về task..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
                rows={4}
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            {/* Priority & Status */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  Độ ưu tiên
                </label>
                <select
                  value={formData.priority}
                  onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="low">Thấp</option>
                  <option value="medium">Trung bình</option>
                  <option value="high">Cao</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Trạng thái
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="pending">Chờ xử lý</option>
                  <option value="in-progress">Đang làm</option>
                  <option value="completed">Hoàn thành</option>
                  <option value="cancelled">Đã hủy</option>
                </select>
              </div>
            </div>

            {/* Assignee & Due Date */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Người thực hiện
                </label>
                <Input
                  placeholder="Nhập tên người thực hiện..."
                  value={formData.assignee}
                  onChange={(e) => setFormData({ ...formData, assignee: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Ngày hết hạn
                </label>
                <Input
                  type="date"
                  value={formData.dueDate}
                  onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                />
              </div>
            </div>

            {/* Tags */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Tag className="w-4 h-4" />
                Tags
              </label>
              <div className="flex gap-2">
                <Input
                  placeholder="Thêm tag..."
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault()
                      addTag()
                    }
                  }}
                />
                <Button type="button" onClick={addTag} variant="outline">
                  Thêm
                </Button>
              </div>
              
              {/* Display Tags */}
              {formData.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {formData.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="pl-3 pr-1 py-1">
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="ml-2 hover:bg-gray-200 rounded-full p-0.5"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-4 border-t">
              <Button type="button" variant="outline">
                <X className="w-4 h-4 mr-2" />
                Hủy
              </Button>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                <Save className="w-4 h-4 mr-2" />
                Tạo Task
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>

      {/* Tips Card */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="flex gap-3">
            <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-medium text-blue-900">Gợi ý tạo task hiệu quả</p>
              <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
                <li>Tiêu đề nên ngắn gọn, súc tích và rõ ràng</li>
                <li>Mô tả chi tiết về yêu cầu và kết quả mong đợi</li>
                <li>Đặt độ ưu tiên phù hợp để sắp xếp công việc</li>
                <li>Sử dụng tags để phân loại và tìm kiếm dễ dàng</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
