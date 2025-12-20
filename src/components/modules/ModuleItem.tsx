"use client";

import Image from "next/image";
import { useState } from "react";
import { Ban, CheckCheck, Pencil, Settings2, Trash2 } from "lucide-react";

interface ModuleItem {
    id: string;
    title: string;
    status: boolean;
    image: string;
}

interface ModuleItemProps {
    item: ModuleItem;
    module: string;
    category: string;
    onUpdate: () => void;
}

export default function ModuleItem({
    item,
    module,
    category,
    onUpdate,
}: ModuleItemProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(item.title);

    const handleToggleStatus = async () => {
        try {
            const response = await fetch("/api/modules", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    module,
                    category,
                    itemId: item.id,
                    updates: { status: !item.status },
                }),
            });

            if (response.ok) {
                onUpdate();
            }
        } catch (error) {
            console.error("Failed to toggle status:", error);
        }
    };

    const handleEdit = async () => {
        if (!editTitle.trim()) return;

        try {
            const response = await fetch("/api/modules", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    module,
                    category,
                    itemId: item.id,
                    updates: { title: editTitle },
                }),
            });

            if (response.ok) {
                setIsEditing(false);
                onUpdate();
            }
        } catch (error) {
            console.error("Failed to update item:", error);
        }
    };

    const handleDelete = async () => {
        try {
            const response = await fetch(
                `/api/modules?module=${module}&category=${category}&itemId=${item.id}`,
                {
                    method: "DELETE",
                }
            );

            if (response.ok) {
                onUpdate();
            }
        } catch (error) {
            console.error("Failed to delete item:", error);
        }
    };

    if (isEditing) {
        return (
            <div className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white p-3">
                <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="flex-1 rounded border border-gray-300 px-2 h-10 text-sm focus:border-blue-500 focus:outline-none"
                    autoFocus
                    onKeyDown={(e) => {
                        if (e.key === "Enter") handleEdit();
                        if (e.key === "Escape") setIsEditing(false);
                    }}
                />
                <button
                    onClick={handleEdit}
                    className="rounded bg-blue-500 px-3 h-10 text-sm text-white hover:bg-blue-600"
                >
                    <CheckCheck size={18} />
                </button>
                <button
                    onClick={() => setIsEditing(false)}
                    className="rounded bg-gray-200 px-3 h-10 text-sm text-gray-700 hover:bg-gray-300"
                >
                    <Ban size={18} />
                </button>
            </div>
        );
    }

    return (
        <div
            className={`group relative flex items-center gap-3 rounded-lg border p-3 transition-all duration-200 ${item.status
                ? "border-red-500 bg-red-50"
                : "border-gray-200 bg-white hover:border-gray-500"
                }`}
        >
            {/* Leading Icon */}
            <div className="flex-shrink-0">
                <div className="relative h-6 w-6">
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain"
                        onError={(e) => {
                            // Fallback to default icon if image fails to load
                            (e.target as HTMLImageElement).src = "/icons/default.svg";
                        }}
                    />
                </div>
            </div>

            {/* Title - Clickable to toggle status */}
            <div
                onClick={handleToggleStatus}
                className="flex-1 cursor-pointer select-none text-sm text-gray-800"
            >
                {item.title}
            </div>

            {/* Action Buttons - Show on hover */}
            <div className="flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                <button
                    onClick={() => setIsEditing(true)}
                    className="rounded p-1.5 text-gray-600 hover:bg-gray-100"
                    title="Edit"
                >
                    <Settings2 size={16} />
                </button>
                <button
                    onClick={handleDelete}
                    className="rounded p-1.5 text-gray-600 hover:bg-gray-100"
                    title="Delete"
                >
                    <Trash2 size={16} />
                </button>
            </div>
        </div>
    );
}
