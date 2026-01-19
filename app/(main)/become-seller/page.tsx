import * as React from 'react';
import Link from 'next/link';
import {
    Store,
    Zap,
    ShieldCheck,
    BarChart3,
    Globe,
    ArrowRight,
    CheckCircle2,
    Users,
    DollarSign,
    Package
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function BecomeSellerPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden bg-slate-950 text-white">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
                            <Store className="h-4 w-4" />
                            Start Your Digital Empire
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                            Scale Your <span className="text-primary italic">Digital Business</span> in Bangladesh
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
                            Join the fastest growing digital marketplace. Reach thousands of customers,
                            manage your products with ease, and get paid instantly.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link href="/auth/signup?role=merchant">
                                <Button size="lg" className="h-14 px-8 text-lg font-bold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 group">
                                    Open Your Store
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold border-slate-700 hover:bg-slate-900 text-white">
                                View Seller Guide
                            </Button>
                        </div>
                        <div className="flex items-center gap-8 pt-8 border-t border-slate-800">
                            <div>
                                <p className="text-3xl font-bold">500+</p>
                                <p className="text-sm text-slate-500">Active Sellers</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold">৳2.5M+</p>
                                <p className="text-sm text-slate-500">Monthly Payouts</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold">10k+</p>
                                <p className="text-sm text-slate-500">Happy Buyers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Prodoxi Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                        <h2 className="text-4xl font-bold italic tracking-tight">Why Sell on Prodoxi?</h2>
                        <p className="text-muted-foreground text-lg">
                            We provide the tools and traffic you need to succeed in the digital economy.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Zap,
                                title: "Instant Delivery",
                                description: "Your customers receive their digital products immediately after payment. No manual work required.",
                                color: "text-amber-500",
                                bg: "bg-amber-50"
                            },
                            {
                                icon: ShieldCheck,
                                title: "Secure Payments",
                                description: "Multiple payment gateways including BKash, Nagad, and Rocket. Low commission fees.",
                                color: "text-blue-500",
                                bg: "bg-blue-50"
                            },
                            {
                                icon: BarChart3,
                                title: "Detailed Analytics",
                                description: "Track your sales, customer behavior, and conversion rates with our powerful dashboard.",
                                color: "text-emerald-500",
                                bg: "bg-emerald-50"
                            },
                            {
                                icon: Globe,
                                title: "Regional Reach",
                                description: "The #1 digital marketplace specifically built for the Bangladeshi market and creators.",
                                color: "text-purple-500",
                                bg: "bg-purple-50"
                            },
                            {
                                icon: Users,
                                title: "Seller Community",
                                description: "Access exclusive workshops, networking events, and priority support for all sellers.",
                                color: "text-pink-500",
                                bg: "bg-pink-50"
                            },
                            {
                                icon: DollarSign,
                                title: "Automatic Payouts",
                                description: "Set your payout schedule and receive your earnings directly to your mobile wallet or bank.",
                                color: "text-orange-500",
                                bg: "bg-orange-50"
                            },
                        ].map((feature, i) => (
                            <Card key={i} className="p-8 border-muted-foreground/10 hover:shadow-xl transition-all duration-300 group">
                                <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 ring-1 ring-inset ring-black/5`}>
                                    <feature.icon className={`h-7 w-7 ${feature.color}`} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it Works */}
            <section className="py-24 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-bold italic tracking-tight leading-tight">
                                Three Simple Steps to <br />
                                <span className="text-primary">Start Earning</span>
                            </h2>
                            <div className="space-y-6">
                                {[
                                    {
                                        step: "01",
                                        title: "Register as a Seller",
                                        desc: "Sign up and complete your merchant profile within minutes."
                                    },
                                    {
                                        step: "02",
                                        title: "Upload Your Products",
                                        desc: "Add your digital assets, set pricing, and write your product descriptions."
                                    },
                                    {
                                        step: "03",
                                        title: "Start Selling",
                                        desc: "Promote your store and watch the sales come in. We handle the rest."
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 group">
                                        <div className="text-4xl font-black text-primary/20 group-hover:text-primary/100 transition-colors">
                                            {item.step}
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-xl font-bold">{item.title}</h3>
                                            <p className="text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Link href="/auth/signup?role=merchant">
                                <Button size="lg" className="bg-gradient-primary h-14 px-8 font-bold shadow-xl shadow-primary/20">
                                    Get Started Now
                                </Button>
                            </Link>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-3xl bg-slate-900 overflow-hidden shadow-2xl relative group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-4/5 h-4/5 border border-white/10 rounded-2xl bg-slate-800/50 backdrop-blur-md p-8 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-bold text-white">MK</div>
                                            <div>
                                                <p className="font-bold">Merchant Dashboard</p>
                                                <p className="text-xs text-slate-400">Monthly Revenue</p>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden">
                                                <div className="h-full w-2/3 bg-primary animate-pulse" />
                                            </div>
                                            <div className="h-4 w-4/5 bg-white/5 rounded-full overflow-hidden">
                                                <div className="h-full w-1/2 bg-primary/70 animate-pulse delay-75" />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4 mt-8">
                                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                                    <p className="text-xs text-slate-400">Today</p>
                                                    <p className="text-xl font-bold text-emerald-400">+৳12,400</p>
                                                </div>
                                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                                    <p className="text-xs text-slate-400">Total Visits</p>
                                                    <p className="text-xl font-bold text-blue-400">1,204</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-muted ring-4 ring-muted/20 animate-bounce-slow">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                                        <DollarSign className="h-5 w-5 text-emerald-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">New Sale!</p>
                                        <p className="font-bold text-emerald-600">+৳2,500.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials/Trust */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold">Loved by Top Sellers</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <Card className="p-8 border-none bg-muted/50 relative overflow-hidden">
                            <div className="relative z-10 space-y-4">
                                <div className="flex text-amber-500 gap-1">
                                    {[1, 2, 3, 4, 5].map((s) => <CheckCircle2 key={s} className="h-4 w-4 fill-current" />)}
                                </div>
                                <p className="text-lg italic text-slate-700">
                                    "Prodoxi transformed my side hustle into a full-time business. The instant delivery feature alone saved me 10+ hours a week."
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-slate-300" />
                                    <div>
                                        <p className="font-bold">Ahmed Sharif</p>
                                        <p className="text-sm text-muted-foreground">Premium WordPress Developer</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card className="p-8 border-none bg-muted/50 relative overflow-hidden">
                            <div className="relative z-10 space-y-4">
                                <div className="flex text-amber-500 gap-1">
                                    {[1, 2, 3, 4, 5].map((s) => <CheckCircle2 key={s} className="h-4 w-4 fill-current" />)}
                                </div>
                                <p className="text-lg italic text-slate-700">
                                    "Finally, a digital marketplace that works with local payment methods. My sales tripled once I switched to Prodoxi."
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-slate-300" />
                                    <div>
                                        <p className="font-bold">Nusrat Jahan</p>
                                        <p className="text-sm text-muted-foreground">Digital Illustrator</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-gradient-primary relative overflow-hidden text-white">
                <div className="absolute inset-0 bg-[url('/bg-dots.svg')] opacity-10" />
                <div className="container mx-auto px-4 text-center relative z-10 space-y-8">
                    <h2 className="text-5xl font-bold leading-tight">Ready to build your digital future?</h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        Join 2,000+ creators who are already earning on Prodoxi.
                        No setup fees, no monthly costs. We only win when you do.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/auth/signup?role=merchant">
                            <Button
                                size="lg"
                                className="bg-white hover:bg-white/95 h-16 px-12 text-xl font-bold rounded-2xl shadow-2xl border-none transition-all hover:scale-105 active:scale-95 group"
                            >
                                <span className="text-primary font-bold group-hover:scale-105 transition-transform">Sign Up as a Seller</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
