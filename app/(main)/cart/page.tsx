'use client';

import * as React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useCartStore } from '@/lib/stores/cart-store';

export default function CartPage() {
    const router = useRouter();
    const { items, removeItem, updateQuantity, getTotalPrice, getTotalItems } = useCartStore();

    if (items.length === 0) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
                        <ShoppingBag className="h-10 w-10 text-muted-foreground" />
                    </div>
                    <h1 className="text-2xl font-bold">Your cart is empty</h1>
                    <p className="text-muted-foreground max-w-sm">
                        Looks like you haven&apos;t added any digital products to your cart yet.
                    </p>
                    <Button onClick={() => router.push('/shop')} className="bg-gradient-primary">
                        Start Shopping
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="border rounded-xl divide-y overflow-hidden">
                        {items.map((item) => (
                            <div key={item.id} className="p-6 flex gap-4 md:gap-6 items-center">
                                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border bg-muted shrink-0">
                                    <Image src={item.thumbnail} alt={item.name} fill className="object-cover" />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start gap-4">
                                        <div>
                                            <h3 className="font-bold text-lg truncate hover:text-primary cursor-pointer" onClick={() => router.push(`/product/${item.productId}`)}>
                                                {item.name}
                                            </h3>
                                            <p className="text-sm text-muted-foreground capitalize">{item.type} license</p>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="text-muted-foreground hover:text-red-500"
                                            onClick={() => removeItem(item.id)}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>

                                    <div className="flex justify-between items-center mt-4">
                                        <div className="flex items-center border rounded-md h-8">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-8 w-8 rounded-none border-r"
                                                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                            >
                                                <Minus className="h-3 w-3" />
                                            </Button>
                                            <span className="w-10 text-center text-sm font-medium">{item.quantity}</span>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-8 w-8 rounded-none border-l"
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            >
                                                <Plus className="h-3 w-3" />
                                            </Button>
                                        </div>
                                        <span className="font-bold text-lg">৳{(item.price * item.quantity).toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Button variant="ghost" onClick={() => router.push('/shop')} className="gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Continue Shopping
                    </Button>
                </div>

                {/* Order Summary */}
                <div className="space-y-6">
                    <div className="p-6 rounded-xl border bg-card shadow-sm space-y-6">
                        <h3 className="font-bold text-xl">Order Summary</h3>

                        <div className="space-y-4 text-sm">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Subtotal ({getTotalItems()} items)</span>
                                <span className="font-medium">৳{getTotalPrice().toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Tax</span>
                                <span className="font-medium">৳0</span>
                            </div>
                            <Separator />
                            <div className="flex justify-between text-lg font-bold">
                                <span>Total</span>
                                <span className="text-primary">৳{getTotalPrice().toLocaleString()}</span>
                            </div>
                        </div>

                        <Button size="lg" className="w-full bg-gradient-primary h-12" onClick={() => router.push('/checkout')}>
                            Proceed to Checkout
                        </Button>
                    </div>

                    <div className="p-6 rounded-xl border border-dashed text-center space-y-2">
                        <p className="text-sm font-medium">Have a coupon code?</p>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="PRODOXI20"
                                className="flex-1 h-9 px-3 rounded-md border bg-muted/50 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                            <Button size="sm" variant="secondary">Apply</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
