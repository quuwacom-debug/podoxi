"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
    LayoutDashboard,
    ShoppingCart,
    Package,
    Layers,
    Star,
    Users,
    Settings,
    CreditCard,
    BarChart,
    Home,
    Monitor
} from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    {
        name: 'Order Management', href: '/admin/orders', icon: ShoppingCart, children: [
            { name: 'All Orders', href: '/admin/orders' },
            { name: 'Pending Orders', href: '/admin/orders?status=pending' },
            { name: 'Cancelled Orders', href: '/admin/orders?status=cancelled' },
        ]
    },
    {
        name: 'Product Management', href: '/admin/products', icon: Package, children: [
            { name: 'All Products', href: '/admin/products' },
            { name: 'Add Product', href: '/admin/products/new' },
            { name: 'Pending Requests', href: '/admin/products/pending' },
        ]
    },
    { name: 'Category Management', href: '/admin/categories', icon: Layers },
    { name: 'Review Management', href: '/admin/reviews', icon: Star },
    { name: 'User Management', href: '/admin/users', icon: Users },
    { name: 'Homepage Settings', href: '/admin/homepage', icon: Home },
    { name: 'General Settings', href: '/admin/settings', icon: Settings },
    { name: 'Payments', href: '/admin/payments', icon: CreditCard },
    { name: 'Reports', href: '/admin/reports', icon: BarChart },
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <div className="flex h-full w-64 flex-col border-r bg-card text-card-foreground">
            <div className="flex h-14 items-center border-b px-6">
                <Link href="/admin" className="flex items-center gap-2 font-bold text-xl">
                    <Image
                        src="/prodoximain.png"
                        alt="PRODOXI"
                        width={130}
                        height={32}
                        className="h-8 w-auto"
                    />
                </Link>
            </div>
            <div className="flex-1 overflow-y-auto py-4">
                <nav className="space-y-1 px-4">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href || (item.children && item.children.some(child => pathname === child.href))
                        const Icon = item.icon

                        return (
                            <div key={item.name}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors mb-1",
                                        isActive
                                            ? "bg-primary text-primary-foreground"
                                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                    )}
                                >
                                    <Icon className={cn("mr-3 h-4 w-4 flex-shrink-0")} />
                                    {item.name}
                                </Link>
                                {item.children && isActive && (
                                    <div className="ml-9 space-y-1">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.name}
                                                href={child.href}
                                                className={cn(
                                                    "block rounded-md px-3 py-2 text-sm transition-colors",
                                                    pathname === child.href
                                                        ? "bg-muted font-medium text-foreground"
                                                        : "text-muted-foreground hover:text-foreground"
                                                )}
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </nav>
            </div>
        </div>
    )
}
