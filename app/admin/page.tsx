"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import {
  CheckCircle2,
  Clock,
  AlertCircle,
  ListTodo,
  Plus,
  Trash2
} from "lucide-react"

interface TodoItem {
  id: string
  text: string
  badge: string
  completed: boolean
}

interface CategoryTodos {
  [key: string]: TodoItem[]
}

export default function SelfPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [newTodoText, setNewTodoText] = useState("")
  const [selectedBadge, setSelectedBadge] = useState("default")
  const [todos, setTodos] = useState<CategoryTodos>({})

  const badgeOptions = [
    { value: "default", label: "Mặc định", variant: "default" as const },
    { value: "secondary", label: "Phụ", variant: "secondary" as const },
    { value: "destructive", label: "Quan trọng", variant: "destructive" as const },
    { value: "outline", label: "Thường", variant: "outline" as const },
  ]

  const addTodo = () => {
    if (!newTodoText.trim() || !selectedCategory) return

    const newTodo: TodoItem = {
      id: Date.now().toString(),
      text: newTodoText,
      badge: selectedBadge,
      completed: false,
    }

    setTodos(prev => ({
      ...prev,
      [selectedCategory]: [...(prev[selectedCategory] || []), newTodo]
    }))

    setNewTodoText("")
    setSelectedBadge("default")
  }

  const deleteTodo = (todoId: string) => {
    if (!selectedCategory) return
    setTodos(prev => ({
      ...prev,
      [selectedCategory]: prev[selectedCategory].filter(todo => todo.id !== todoId)
    }))
  }

  const toggleTodo = (todoId: string) => {
    if (!selectedCategory) return
    setTodos(prev => ({
      ...prev,
      [selectedCategory]: prev[selectedCategory].map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    }))
  }

  const stats = [
    {
      title: "Mindset & Tư duy",
      icon: ListTodo,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Cảm xúc",
      icon: Clock,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      title: "Mục tiêu cá nhân",
      icon: CheckCircle2,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Self-Reflection / Nhật ký",
      icon: AlertCircle,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      title: "Niềm tin – Giá trị sống",
      icon: AlertCircle,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      title: "Thói quen cá nhân (Habit)",
      icon: AlertCircle,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      title: "Giấc ngủ – Stress – Năng lượng",
      icon: AlertCircle,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      title: "Sức khỏe tinh thần",
      icon: AlertCircle,
      color: "text-red-600",
      bgColor: "bg-red-50",
    }
  ]

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          const categoryTodos = todos[stat.title] || []
          return (
            <Card
              key={index}
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setSelectedCategory(stat.title)}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <div className="space-y-2 flex-1">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </CardTitle>
                  {categoryTodos.length > 0 && (
                    <div className="text-xs text-gray-500">
                      {categoryTodos.filter(t => t.completed).length} / {categoryTodos.length} hoàn thành
                    </div>
                  )}
                </div>
                <div className={`${stat.bgColor} p-2 rounded-lg`}>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
            </Card>
          )
        })}
      </div>

      <Dialog open={selectedCategory !== null} onOpenChange={(open) => !open && setSelectedCategory(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selectedCategory}</DialogTitle>
            <DialogDescription>
              Quản lý các công việc của bạn
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            {/* Add Todo Form */}
            <div className="space-y-3 border-b pb-4">
              <Input
                placeholder="Nhập công việc mới..."
                value={newTodoText}
                onChange={(e) => setNewTodoText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTodo()}
              />

              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm text-gray-600">Badge:</span>
                {badgeOptions.map((option) => (
                  <Badge
                    key={option.value}
                    variant={option.variant}
                    className={`cursor-pointer ${selectedBadge === option.value ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
                    onClick={() => setSelectedBadge(option.value)}
                  >
                    {option.label}
                  </Badge>
                ))}
              </div>

              <Button onClick={addTodo} className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Thêm công việc
              </Button>
            </div>

            {/* Todo List */}
            <div className="space-y-2">
              {selectedCategory && todos[selectedCategory]?.length > 0 ? (
                todos[selectedCategory].map((todo) => {
                  const badgeVariant = badgeOptions.find(b => b.value === todo.badge)?.variant || "default"
                  return (
                    <div
                      key={todo.id}
                      className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50"
                    >
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                        className="h-4 w-4 rounded"
                      />
                      <span className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : ''}`}>
                        {todo.text}
                      </span>
                      <Badge variant={badgeVariant}>
                        {badgeOptions.find(b => b.value === todo.badge)?.label}
                      </Badge>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => deleteTodo(todo.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  )
                })
              ) : (
                <div className="text-center text-gray-500 py-8">
                  Chưa có công việc nào
                </div>
              )}
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setSelectedCategory(null)}>
              Đóng
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
