"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    HelpCircle,
    MessageSquare,
    BookOpen,
    FileText,
    LifeBuoy,
    Search,
    ChevronRight,
    PlayCircle
} from "lucide-react"

export default function SupportPage() {
    return (
        <div className="flex flex-col gap-8">
            <div className="text-center max-w-2xl mx-auto space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">How can we help?</h1>
                <p className="text-muted-foreground text-lg">Search our help center or contact our support team.</p>
                <div className="relative max-w-md mx-auto">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="Search for help..." className="pl-10 h-12 rounded-xl" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="p-6 border-muted-foreground/10 hover:shadow-md transition-shadow cursor-pointer group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                        <BookOpen className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Knowledge Base</h3>
                    <p className="text-muted-foreground text-sm mb-4">Detailed guides and documentation for selling on Prodoxi.</p>
                    <div className="flex items-center text-primary font-bold text-sm">
                        Browse Articles <ChevronRight className="ml-1 h-4 w-4" />
                    </div>
                </Card>
                <Card className="p-6 border-muted-foreground/10 hover:shadow-md transition-shadow cursor-pointer group">
                    <div className="w-12 h-12 rounded-xl bg-blue-100/50 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <MessageSquare className="h-6 w-6 text-blue-600 group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Live Chat</h3>
                    <p className="text-muted-foreground text-sm mb-4">Chat with our support team in real-time for urgent issues.</p>
                    <div className="flex items-center text-blue-600 font-bold text-sm">
                        Start Chatting <ChevronRight className="ml-1 h-4 w-4" />
                    </div>
                </Card>
                <Card className="p-6 border-muted-foreground/10 hover:shadow-md transition-shadow cursor-pointer group">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100/50 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <FileText className="h-6 w-6 text-emerald-600 group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Submit Ticket</h3>
                    <p className="text-muted-foreground text-sm mb-4">Raise a formal request for technical or account support.</p>
                    <div className="flex items-center text-emerald-600 font-bold text-sm">
                        Create Ticket <ChevronRight className="ml-1 h-4 w-4" />
                    </div>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            "How do I set up a payout method?",
                            "What are the commission fees for digital products?",
                            "How do I protect my digital files from piracy?",
                            "Can I offer subscription-based products?",
                            "How do I handle refund requests from buyers?"
                        ].map((q, i) => (
                            <div key={i} className="p-4 border rounded-xl hover:bg-muted/50 cursor-pointer flex items-center justify-between group">
                                <span className="font-medium">{q}</span>
                                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                        ))}
                    </div>
                </div>

                <Card className="bg-gradient-primary h-fit text-white p-8 space-y-6 relative overflow-hidden">
                    <div className="absolute -right-8 -bottom-8 opacity-10">
                        <LifeBuoy className="w-48 h-48" />
                    </div>
                    <div className="relative z-10 space-y-4">
                        <h3 className="text-2xl font-bold">Seller Academy</h3>
                        <p className="text-white/80 text-sm italic leading-relaxed">
                            Learn tips and tricks from successful digital entrepreneurs on how to maximize your sales.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-sm"><PlayCircle className="h-4 w-4" /> Product Pricing Strategy</li>
                            <li className="flex items-center gap-2 text-sm"><PlayCircle className="h-4 w-4" /> Optimizing Your Store SEO</li>
                            <li className="flex items-center gap-2 text-sm"><PlayCircle className="h-4 w-4" /> Customer Support Excellence</li>
                        </ul>
                        <Button className="w-full bg-white text-primary hover:bg-white/90 font-bold">Visit Academy</Button>
                    </div>
                </Card>
            </div>
        </div>
    )
}
