"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    LayoutDashboard,
    Package,
    ShoppingCart,
    BarChart3,
    Settings,
    HelpCircle,
    LogOut,
    ChevronLeft,
    ChevronRight,
    CircleDollarSign
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const menuItems = [
    { label: "Dashboard", icon: LayoutDashboard, href: "/merchant" },
    { label: "My Products", icon: Package, href: "/merchant/products" },
    { label: "Orders", icon: ShoppingCart, href: "/merchant/orders" },
    { label: "Earnings", icon: CircleDollarSign, href: "/merchant/earnings" },
    { label: "Analytics", icon: BarChart3, href: "/merchant/analytics" },
]

const bottomItems = [
    { label: "Support", icon: HelpCircle, href: "/merchant/support" },
    { label: "Settings", icon: Settings, href: "/merchant/settings" },
]

export function MerchantSidebar() {
    const pathname = usePathname()
    const [isCollapsed, setIsCollapsed] = useState(false)

    return (
        <aside className={cn(
            "relative flex flex-col border-r bg-card transition-all duration-300",
            isCollapsed ? "w-20" : "w-64"
        )}>
            <div className="flex h-16 items-center px-6 border-b">
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white font-bold">P</div>
                    {!isCollapsed && <span className="text-xl font-bold tracking-tight">PRODOXI</span>}
                </Link>
            </div>

            <div className="flex-1 overflow-y-auto py-6 flex flex-col gap-6">
                <div>
                    {!isCollapsed && <p className="px-6 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Main Menu</p>}
                    <nav className="px-3 space-y-1">
                        {menuItems.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group",
                                        isActive
                                            ? "bg-primary text-primary-foreground shadow-sm"
                                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                    )}
                                >
                                    <item.icon className={cn("h-5 w-5 shrink-0", isActive ? "text-primary-foreground" : "group-hover:text-primary")} />
                                    {!isCollapsed && <span className="font-medium">{item.label}</span>}
                                </Link>
                            )
                        })}
                    </nav>
                </div>

                <div className="mt-auto">
                    {!isCollapsed && <p className="px-6 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Help & Preferences</p>}
                    <nav className="px-3 space-y-1">
                        {bottomItems.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group",
                                        isActive
                                            ? "bg-primary text-primary-foreground shadow-sm"
                                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                    )}
                                >
                                    <item.icon className={cn("h-5 w-5 shrink-0", isActive ? "text-primary-foreground" : "group-hover:text-primary")} />
                                    {!isCollapsed && <span className="font-medium">{item.label}</span>}
                                </Link>
                            )
                        })}
                        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-red-50 hover:text-red-600 transition-all">
                            <LogOut className="h-5 w-5 shrink-0" />
                            {!isCollapsed && <span className="font-medium">Logout</span>}
                        </button>
                    </nav>
                </div>
            </div>

            {/* Collapse Toggle */}
            <Button
                variant="ghost"
                size="icon"
                className="absolute -right-4 top-20 h-8 w-8 rounded-full border bg-background shadow-md md:flex hidden"
                onClick={() => setIsCollapsed(!isCollapsed)}
            >
                {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
            </Button>
        </aside>
    )
}
