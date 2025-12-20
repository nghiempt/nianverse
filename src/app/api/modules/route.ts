import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "modules.json");

// Helper function to read data
function readData() {
    const fileContent = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(fileContent);
}

// Helper function to write data
function writeData(data: any) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
}

// GET: Get all modules or specific module/category
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const module = searchParams.get("module");
        const category = searchParams.get("category");

        const data = readData();

        if (module && category) {
            return NextResponse.json(data[module]?.[category] || []);
        }

        if (module) {
            return NextResponse.json(data[module] || {});
        }

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to read data" },
            { status: 500 }
        );
    }
}

// POST: Add new item
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { module, category, item } = body;

        if (!module || !category || !item) {
            return NextResponse.json(
                { error: "Missing required fields: module, category, item" },
                { status: 400 }
            );
        }

        const data = readData();

        if (!data[module]) {
            data[module] = {};
        }

        if (!data[module][category]) {
            data[module][category] = [];
        }

        // Generate unique ID
        const timestamp = Date.now();
        const newItem = {
            id: `${module}_${category}_${timestamp}`,
            title: item.title,
            status: item.status || false,
            image: item.image || "/icons/default.svg",
        };

        data[module][category].push(newItem);
        writeData(data);

        return NextResponse.json(newItem, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to create item" },
            { status: 500 }
        );
    }
}

// PUT: Update item
export async function PUT(request: NextRequest) {
    try {
        const body = await request.json();
        const { module, category, itemId, updates } = body;

        if (!module || !category || !itemId) {
            return NextResponse.json(
                { error: "Missing required fields: module, category, itemId" },
                { status: 400 }
            );
        }

        const data = readData();

        if (!data[module]?.[category]) {
            return NextResponse.json(
                { error: "Module or category not found" },
                { status: 404 }
            );
        }

        const itemIndex = data[module][category].findIndex(
            (item: any) => item.id === itemId
        );

        if (itemIndex === -1) {
            return NextResponse.json({ error: "Item not found" }, { status: 404 });
        }

        data[module][category][itemIndex] = {
            ...data[module][category][itemIndex],
            ...updates,
        };

        writeData(data);

        return NextResponse.json(data[module][category][itemIndex]);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to update item" },
            { status: 500 }
        );
    }
}

// DELETE: Delete item
export async function DELETE(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const module = searchParams.get("module");
        const category = searchParams.get("category");
        const itemId = searchParams.get("itemId");

        if (!module || !category || !itemId) {
            return NextResponse.json(
                { error: "Missing required parameters: module, category, itemId" },
                { status: 400 }
            );
        }

        const data = readData();

        if (!data[module]?.[category]) {
            return NextResponse.json(
                { error: "Module or category not found" },
                { status: 404 }
            );
        }

        const itemIndex = data[module][category].findIndex(
            (item: any) => item.id === itemId
        );

        if (itemIndex === -1) {
            return NextResponse.json({ error: "Item not found" }, { status: 404 });
        }

        const deletedItem = data[module][category].splice(itemIndex, 1)[0];
        writeData(data);

        return NextResponse.json(deletedItem);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to delete item" },
            { status: 500 }
        );
    }
}
