'use client';

import * as React from 'react';
import Link from 'next/link';
import { CheckCircle2, Download, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function ThankYouPage() {
    const orderNumber = Math.floor(100000 + Math.random() * 900000);

    return (
        <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-8 animate-in zoom-in duration-500">
                <CheckCircle2 className="h-12 w-12 text-green-600" />
            </div>

            <h1 className="text-4xl font-bold mb-4 text-center">Order Confirmed!</h1>
            <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl">
                Thank you for your purchase. Your order <span className="text-primary font-bold">#PRX-{orderNumber}</span> has been processed successfully.
                The digital products are now available in your library.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mb-12">
                <Card className="p-8 space-y-6 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        <Download className="h-6 w-6" />
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold">Access Your Files</h2>
                        <p className="text-muted-foreground">
                            You can download your products immediately from your dashboard library. We've also sent the download links to your email.
                        </p>
                    </div>
                    <Link href="/dashboard/library">
                        <Button className="w-full bg-gradient-primary h-12 text-lg">
                            Go to Library
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </Card>

                <Card className="p-8 space-y-6 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center">
                        <ShoppingBag className="h-6 w-6" />
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold">Continue Shopping</h2>
                        <p className="text-muted-foreground">
                            Looking for more? Explore thousands of other high-quality digital products in our marketplace.
                        </p>
                    </div>
                    <Link href="/shop">
                        <Button variant="outline" className="w-full h-12 text-lg">
                            Visit Shop
                            <ShoppingBag className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </Card>
            </div>

            <div className="text-center p-8 border border-dashed rounded-2xl max-w-2xl">
                <h3 className="font-bold mb-4">Need help?</h3>
                <p className="text-sm text-muted-foreground mb-6">
                    If you have any questions regarding your order, please contact our support team at
                    <br />
                    <span className="text-primary font-medium">support@prodoxi.com</span> or call <span className="text-primary font-medium">+880-1700-000000</span>
                </p>
                <div className="flex justify-center gap-4">
                    <Button variant="link">Terms of Service</Button>
                    <Button variant="link">Refund Policy</Button>
                </div>
            </div>
        </div>
    );
}
