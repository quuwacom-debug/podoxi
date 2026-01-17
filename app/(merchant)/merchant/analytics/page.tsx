"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    BarChart3,
    TrendingUp,
    Users,
    MousePointer2,
    Download,
    Calendar,
    ArrowUpRight,
    ArrowDownRight
} from "lucide-react"
import { RevenueChart } from "@/components/admin/dashboard/RevenueChart"

export default function AnalyticsPage() {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Analytics & Insights</h1>
                    <p className="text-muted-foreground">Deep dive into your store's performance metrics.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline"><Calendar className="mr-2 h-4 w-4" /> Last 30 Days</Button>
                    <Button variant="outline"><Download className="mr-2 h-4 w-4" /> Export</Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { label: "Conversion Rate", value: "3.2%", trend: "+0.4%", icon: MousePointer2, color: "text-blue-500" },
                    { label: "Avg. Order Value", value: "৳1,850", trend: "+৳120", icon: TrendingUp, color: "text-emerald-500" },
                    { label: "Total Views", value: "12,450", trend: "+15%", icon: Users, color: "text-purple-500" },
                    { label: "Net Earnings", value: "৳42,200", trend: "+8%", icon: BarChart3, color: "text-orange-500" },
                ].map((stat, i) => (
                    <Card key={i} className="border-muted-foreground/10">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                                <stat.icon className={`h-4 w-4 ${stat.color}`} />
                            </div>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <p className="text-xs text-emerald-500 font-bold flex items-center mt-1">
                                <ArrowUpRight className="h-3 w-3 mr-1" /> {stat.trend} <span className="text-muted-foreground font-normal ml-1">vs last period</span>
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <RevenueChart />
                <Card className="border-muted-foreground/10">
                    <CardHeader>
                        <CardTitle>Discovery Methods</CardTitle>
                        <CardDescription>How customers find your products</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {[
                            { source: "Organic Search", percentage: 45, color: "bg-blue-500" },
                            { source: "Direct Traffic", percentage: 25, color: "bg-emerald-500" },
                            { source: "Social Media", percentage: 18, color: "bg-purple-500" },
                            { source: "Referrals", percentage: 12, color: "bg-orange-500" },
                        ].map((item, i) => (
                            <div key={i} className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="font-medium">{item.source}</span>
                                    <span className="text-muted-foreground">{item.percentage}%</span>
                                </div>
                                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                    <div className={`h-full ${item.color}`} style={{ width: `${item.percentage}%` }} />
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-1 border-muted-foreground/10">
                    <CardHeader>
                        <CardTitle>Top Categories</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="aspect-square rounded-full border-8 border-primary/20 flex items-center justify-center relative">
                            <div className="text-center">
                                <p className="text-2xl font-bold">78%</p>
                                <p className="text-xs text-muted-foreground">UI Kits</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary" /> UI Kits</div>
                            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary/40" /> Templates</div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="lg:col-span-2 border-muted-foreground/10">
                    <CardHeader>
                        <CardTitle>Customer Demographics</CardTitle>
                        <CardDescription>Based on recent successful orders</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[200px] flex items-end gap-4">
                            {[60, 45, 80, 55, 90, 30, 40].map((h, i) => (
                                <div key={i} className="flex-1 bg-primary/10 hover:bg-primary transition-colors rounded-t-lg relative group">
                                    <div style={{ height: `${h}%` }} className="w-full bg-primary h-full rounded-t-lg scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom" />
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-4 text-xs text-muted-foreground uppercase tracking-widest px-2">
                            <span>Dhaka</span>
                            <span>CTG</span>
                            <span>Sylhet</span>
                            <span>Raj</span>
                            <span>Khulna</span>
                            <span>Barisal</span>
                            <span>Rang</span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
