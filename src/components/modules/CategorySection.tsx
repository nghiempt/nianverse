"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import ComponentCard from "@/components/common/ComponentCard";
import ModuleItem from "./ModuleItem";

interface ModuleItem {
    id: string;
    title: string;
    status: boolean;
    image: string;
}

interface CategorySectionProps {
    title: string;
    items: ModuleItem[];
    module: string;
    category: string;
    onUpdate: () => void;
}

export default function CategorySection({
    title,
    items,
    module,
    category,
    onUpdate,
}: CategorySectionProps) {
    const [isAdding, setIsAdding] = useState(false);
    const [newItemTitle, setNewItemTitle] = useState("");

    const handleAddItem = async () => {
        if (!newItemTitle.trim()) return;

        try {
            const response = await fetch("/api/modules", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    module,
                    category,
                    item: {
                        title: newItemTitle,
                        status: false,
                        image: "/icons/default.svg",
                    },
                }),
            });

            if (response.ok) {
                setNewItemTitle("");
                setIsAdding(false);
                onUpdate();
            }
        } catch (error) {
            console.error("Failed to add item:", error);
        }
    };

    return (
        <ComponentCard title={title}>
            <div className="space-y-3 flex flex-col">
                {/* Items Grid */}
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    {items.map((item) => (
                        <ModuleItem
                            key={item.id}
                            item={item}
                            module={module}
                            category={category}
                            onUpdate={onUpdate}
                        />
                    ))}
                </div>

                {/* Add New Item */}
                {isAdding ? (
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            value={newItemTitle}
                            onChange={(e) => setNewItemTitle(e.target.value)}
                            placeholder="Enter item title..."
                            className="flex-1 rounded border border-gray-300 px-3 py-2 text-sm focus:border-gray-500 focus:outline-none"
                            autoFocus
                            onKeyDown={(e) => {
                                if (e.key === "Enter") handleAddItem();
                                if (e.key === "Escape") {
                                    setIsAdding(false);
                                    setNewItemTitle("");
                                }
                            }}
                        />
                        <button
                            onClick={handleAddItem}
                            className="rounded bg-gray-700 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
                        >
                            Add
                        </button>
                        <button
                            onClick={() => {
                                setIsAdding(false);
                                setNewItemTitle("");
                            }}
                            className="rounded bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
                        >
                            Cancel
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={() => setIsAdding(true)}
                        className="flex w-12 h-12 items-center justify-center gap-2 rounded-lg border-1 border-dashed border-gray-300 p-3 text-sm font-medium text-gray-600 transition-colors hover:border-gray-500 hover:text-gray-600"
                    >
                        <Plus size={18} />
                    </button>
                )}
            </div>
        </ComponentCard>
    );
}
