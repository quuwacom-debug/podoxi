"use client"


import {
    BarChart,
    PieChart,
    LineChart,
    Download,
    Calendar,
    FileText
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

const reports = [
    { id: 1, title: "Monthly Sales Report", type: "Sales", date: "June 2024", status: "Ready", format: "PDF" },
    { id: 2, title: "Q2 Revenue Analysis", type: "Revenue", date: "Apr-Jun 2024", status: "Ready", format: "Excel" },
    { id: 3, title: "Merchant Performance", type: "Merchants", date: "Last 30 Days", status: "Generated", format: "CSV" },
    { id: 4, title: "Top Products Summary", type: "Products", date: "This Week", status: "Processing", format: "PDF" },
]

export default function ReportsPage() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Reports & Analytics</h1>
                    <p className="text-muted-foreground">Generate and download detailed platform insights.</p>
                </div>
                <Button>
                    <PieChart className="mr-2 h-4 w-4" /> Create Custom Report
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {/* Quick Report Cards */}
                <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Sales Overview</CardTitle>
                        <BarChart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1,245</div>
                        <p className="text-xs text-muted-foreground mb-4">Total orders this month</p>
                        <Button variant="outline" size="sm" className="w-full">View Details</Button>
                    </CardContent>
                </Card>
                <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Revenue Growth</CardTitle>
                        <LineChart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-green-600">+12.5%</div>
                        <p className="text-xs text-muted-foreground mb-4">Compared to last month</p>
                        <Button variant="outline" size="sm" className="w-full">View Details</Button>
                    </CardContent>
                </Card>
                <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Customer Acquisition</CardTitle>
                        <PieChart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">85</div>
                        <p className="text-xs text-muted-foreground mb-4">New customers this week</p>
                        <Button variant="outline" size="sm" className="w-full">View Details</Button>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
                <Card className="md:col-span-3">
                    <CardHeader>
                        <CardTitle>Generated Reports</CardTitle>
                        <CardDescription>
                            History of manually and automatically generated reports.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {reports.map((report) => (
                                <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg bg-background">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                            <FileText className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">{report.title}</h4>
                                            <p className="text-sm text-muted-foreground">{report.type} • {report.date}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Badge variant={report.status === 'Ready' || report.status === 'Generated' ? 'outline' : 'secondary'}>
                                            {report.status}
                                        </Badge>
                                        <Badge variant="secondary">{report.format}</Badge>
                                        <Button variant="ghost" size="icon">
                                            <Download className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Report Builder</CardTitle>
                        <CardDescription>Quick Generate</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-2">
                            <label className="text-sm font-medium">Metric</label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select metric" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="revenue">Gross Revenue</SelectItem>
                                    <SelectItem value="orders">Orders Count</SelectItem>
                                    <SelectItem value="customers">New Customers</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <label className="text-sm font-medium">Date Range</label>
                            <Button variant="outline" className="w-full justify-start text-left font-normal">
                                <Calendar className="mr-2 h-4 w-4" /> Pick a date
                            </Button>
                        </div>
                        <div className="grid gap-2">
                            <label className="text-sm font-medium">Breakdown By</label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="None" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="category">Category</SelectItem>
                                    <SelectItem value="merchant">Merchant</SelectItem>
                                    <SelectItem value="location">Location</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Button className="w-full mt-2">Generate Report</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
