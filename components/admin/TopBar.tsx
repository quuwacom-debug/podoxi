"use client"

import { Bell, Search, User } from "lucide-react"

export function TopBar() {
    return (
        <header className="flex h-14 items-center gap-4 border-b bg-background px-6">
            <div className="w-full flex-1">
                <form>
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <input
                            type="search"
                            placeholder="Search..."
                            className="w-full bg-background pl-8 focus:outline-none md:w-2/3 lg:w-1/3"
                        />
                    </div>
                </form>
            </div>
            <div className="flex items-center gap-4">
                <button className="relative size-8 rounded-full bg-muted flex items-center justify-center hover:text-foreground text-muted-foreground">
                    <Bell className="h-4 w-4" />
                    <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-600 border border-background"></span>
                </button>
                <button className="relative size-8 rounded-full bg-muted flex items-center justify-center hover:text-foreground text-muted-foreground">
                    <User className="h-4 w-4" />
                </button>
            </div>
        </header>
    )
}
