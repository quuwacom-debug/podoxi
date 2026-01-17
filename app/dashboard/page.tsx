'use client';

import * as React from 'react';
import Link from 'next/link';
import {
    ShoppingBag,
    Download,
    CreditCard,
    TrendingUp,
    ArrowUpRight,
    Package,
    Clock,
    Star as StarIcon,
    Bell
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { mockProducts } from '@/lib/data/mock-data';
import { cn } from '@/lib/utils';

export default function DashboardOverview() {
    const stats = [
        { label: 'Total Purchases', value: '12', icon: ShoppingBag, color: 'text-blue-500', bg: 'bg-blue-50' },
        { label: 'Downloads', value: '45', icon: Download, icon2: TrendingUp, color: 'text-green-500', bg: 'bg-green-50' },
        { label: 'Active Subs', value: '3', icon: Clock, color: 'text-purple-500', bg: 'bg-purple-50' },
        { label: 'Credits', value: '৳2,400', icon: CreditCard, color: 'text-orange-500', bg: 'bg-orange-50' },
    ];

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div>
                <h1 className="text-3xl font-bold">Dashboard Overview</h1>
                <p className="text-muted-foreground mt-1">Welcome back! Here's what's happening with your account.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <Card key={i} className="p-6 overflow-hidden relative group hover:ring-2 ring-primary/20 transition-all border-muted-foreground/10">
                        <div className="flex justify-between items-start">
                            <div className={cn("p-3 rounded-xl", stat.bg, stat.color)}>
                                <stat.icon className="h-6 w-6" />
                            </div>
                            <Badge variant="outline" className="text-[10px] font-bold border-muted-foreground/20">
                                MONTHLY <ArrowUpRight className="ml-1 h-3 w-3" />
                            </Badge>
                        </div>
                        <div className="mt-4">
                            <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                            <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                        </div>
                        <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <stat.icon className="w-24 h-24" />
                        </div>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Downloads */}
                <Card className="lg:col-span-2 p-8 border-muted-foreground/10 space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold flex items-center gap-2">
                            <Package className="h-5 w-5 text-primary" /> Recent Downloads
                        </h3>
                        <Link href="/dashboard/library">
                            <Button variant="link" size="sm" className="text-primary font-bold">View Library</Button>
                        </Link>
                    </div>

                    <div className="space-y-4">
                        {mockProducts.slice(0, 4).map((product, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-muted-foreground/5 hover:bg-muted/30 transition-colors group">
                                <div className="w-12 h-12 rounded-lg bg-muted border overflow-hidden shrink-0">
                                    <img src={product.thumbnail} alt="" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-bold text-sm truncate group-hover:text-primary transition-colors cursor-pointer">{product.name}</h4>
                                    <p className="text-xs text-muted-foreground capitalize">{product.category} • Oct {20 - i}, 2025</p>
                                </div>
                                <Button size="icon" variant="ghost" className="h-9 w-9 rounded-full bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all">
                                    <Download className="h-4 w-4" />
                                </Button>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Support & Recommendations */}
                <div className="space-y-8">
                    <Card className="p-8 border-muted-foreground/10 bg-gradient-sidebar space-y-6 text-white text-center">
                        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto">
                            <StarIcon className="h-8 w-8 text-yellow-300 fill-yellow-300" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold">Try Marketplace Pro</h3>
                            <p className="text-xs text-white/70">Unlimited downloads and exclusive access to premium digital products.</p>
                        </div>
                        <Button className="w-full bg-white text-indigo-600 hover:bg-white/90 font-bold shadow-lg">Upgrade Now</Button>
                    </Card>

                    <Card className="p-6 border-muted-foreground/10 space-y-4">
                        <h4 className="font-bold flex items-center gap-2">
                            <Bell className="h-4 w-4 text-primary" /> Notifications
                        </h4>
                        <div className="space-y-3">
                            {[
                                'New update available for Business Pro Theme',
                                'Verify your primary email address',
                                'Welcome to PRODOXI! Get 10% off your next purchase'
                            ].map((msg, i) => (
                                <p key={i} className="text-xs text-muted-foreground leading-relaxed pl-3 border-l-2 border-primary/20">{msg}</p>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
