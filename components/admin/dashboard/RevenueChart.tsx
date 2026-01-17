"use client"

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
    { name: "Jan", revenue: 4000, commission: 2400 },
    { name: "Feb", revenue: 3000, commission: 1398 },
    { name: "Mar", revenue: 2000, commission: 9800 },
    { name: "Apr", revenue: 2780, commission: 3908 },
    { name: "May", revenue: 1890, commission: 4800 },
    { name: "Jun", revenue: 2390, commission: 3800 },
    { name: "Jul", revenue: 3490, commission: 4300 },
]

import { useState, useEffect } from "react"

export function RevenueChart() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        // eslint-disable-next-line 
        setMounted(true)
    }, [])

    return (
        <Card className="col-span-4">
            <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
                <CardDescription>
                    Monthly revenue breakdown for the platform.
                </CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
                <div className="h-[350px] w-full">
                    {mounted && (
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                                <XAxis
                                    dataKey="name"
                                    stroke="#888888"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <YAxis
                                    stroke="#888888"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                    tickFormatter={(value) => `$${value}`}
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: "var(--background)",
                                        borderColor: "var(--border)",
                                        borderRadius: "var(--radius)",
                                    }}
                                />
                                <Legend />
                                <Line
                                    type="monotone"
                                    dataKey="revenue"
                                    stroke="var(--color-primary)"
                                    strokeWidth={2}
                                    activeDot={{ r: 8 }}
                                    name="Total Revenue"
                                />
                                <Line
                                    type="monotone"
                                    dataKey="commission"
                                    stroke="var(--color-chart-2)"
                                    strokeWidth={2}
                                    name="Commission"
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}
