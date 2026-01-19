'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
    LayoutDashboard,
    Library,
    History,
    Settings,
    CreditCard,
    LogOut,
    ChevronRight,
    User
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useAuthStore } from '@/lib/stores/auth-store';

const sidebarLinks = [
    { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
    { href: '/dashboard/library', label: 'My Library', icon: Library },
    { href: '/dashboard/orders', label: 'Order History', icon: History },
    { href: '/dashboard/billing', label: 'Billing', icon: CreditCard },
    { href: '/dashboard/settings', label: 'Settings', icon: Settings },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const { user, logout } = useAuthStore();

    const handleLogout = () => {
        logout();
        router.push('/');
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar */}
                <aside className="w-full md:w-64 space-y-6 shrink-0">
                    <div className="p-6 border rounded-2xl bg-card space-y-6">
                        <div className="flex flex-col items-center text-center space-y-3">
                            <Avatar className="h-20 w-20 border-2 border-primary/20">
                                <AvatarFallback className="bg-primary/5 text-primary text-xl font-bold">
                                    {user?.name?.charAt(0) || <User />}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <h2 className="font-bold text-lg">{user?.name || 'Customer'}</h2>
                                <p className="text-xs text-muted-foreground">{user?.email || 'customer@example.com'}</p>
                            </div>
                            <Badge variant="secondary" className="rounded-full px-4">Free Plan</Badge>
                        </div>

                        <nav className="space-y-1">
                            {sidebarLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={cn(
                                            "flex items-center justify-between px-4 py-3 rounded-xl transition-all group",
                                            isActive
                                                ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                        )}
                                    >
                                        <div className="flex items-center gap-3">
                                            <link.icon className={cn("h-5 w-5", isActive ? "text-white" : "group-hover:text-primary transition-colors")} />
                                            <span className="text-sm font-medium">{link.label}</span>
                                        </div>
                                        {isActive && <ChevronRight className="h-4 w-4" />}
                                    </Link>
                                );
                            })}
                        </nav>

                        <Separator />

                        <Button
                            variant="ghost"
                            className="w-full justify-start text-muted-foreground hover:text-red-500 hover:bg-red-50"
                            onClick={handleLogout}
                        >
                            <LogOut className="mr-3 h-5 w-5" />
                            Sign Out
                        </Button>
                    </div>

                    <div className="p-6 border rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 space-y-4">
                        <h4 className="font-bold text-sm">Need Help?</h4>
                        <p className="text-xs text-muted-foreground">Our support team is available 24/7 to assist you with any questions.</p>
                        <Button size="sm" variant="outline" className="w-full h-9 text-xs">Contact Support</Button>
                    </div>
                </aside>

                {/* Content */}
                <main className="flex-1 min-w-0">
                    {children}
                </main>
            </div >
        </div >
    );
}

// Internal Badge wrapper
function Badge({ children, variant, className }: { children: React.ReactNode, variant?: 'default' | 'secondary' | 'outline', className?: string }) {
    return (
        <div className={cn(
            "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
            variant === 'secondary' ? "bg-secondary text-secondary-foreground hover:bg-secondary/80" : "bg-primary text-primary-foreground hover:bg-primary/80",
            className
        )}>
            {children}
        </div>
    );
}

// Internal Separator wrapper
function Separator() {
    return <div className="h-px bg-border w-full" />;
}
