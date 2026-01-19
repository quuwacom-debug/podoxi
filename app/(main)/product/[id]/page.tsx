'use client';

import * as React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import {
    Star,
    ShoppingCart,
    Zap,
    CheckCircle2,
    ShieldCheck,
    FileText,
    ThumbsUp,
    Share2,
    Heart,
    ChevronLeft,
    ChevronRight,
    Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { mockProducts } from '@/lib/data/mock-data';
import { useCartStore } from '@/lib/stores/cart-store';
import { RelatedProducts } from '@/components/products/related-products';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

export default function ProductDetailPage() {
    const { id } = useParams();
    const router = useRouter();
    const { addItem } = useCartStore();
    const [selectedImage, setSelectedImage] = React.useState(0);

    const product = mockProducts.find(p => p.id === id);

    if (!product) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-2xl font-bold mb-4">Product not found</h1>
                <Button onClick={() => router.push('/shop')}>Back to Shop</Button>
            </div>
        );
    }

    const images = [product.thumbnail, product.thumbnail, product.thumbnail]; // Mock gallery

    const handleAddToCart = () => {
        addItem({
            id: product.id,
            productId: product.id,
            name: product.name,
            price: product.price,
            thumbnail: product.thumbnail,
            type: product.type,
        });
        toast.success('Added to cart!');
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Breadcrumbs (Simplified) */}
            <nav className="flex items-center text-sm text-muted-foreground mb-8">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <ChevronRight className="h-4 w-4 mx-2" />
                <Link href="/shop" className="hover:text-primary transition-colors">Shop</Link>
                <ChevronRight className="h-4 w-4 mx-2" />
                <span className="text-foreground truncate">{product.name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {/* Product Media */}
                <div className="space-y-4">
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-muted border">
                        <Image
                            src={images[selectedImage]}
                            alt={product.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex gap-4">
                        {images.map((img, i) => (
                            <button
                                key={i}
                                onClick={() => setSelectedImage(i)}
                                className={cn(
                                    "relative w-24 aspect-square rounded-md overflow-hidden border-2 transition-all",
                                    selectedImage === i ? "border-primary" : "border-transparent opacity-70 hover:opacity-100"
                                )}
                            >
                                <Image src={img} alt={`Preview ${i}`} fill className="object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Information */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="rounded-full">{product.category}</Badge>
                        {product.type === 'subscription' && <Badge className="rounded-full bg-accent">Subscription</Badge>}
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold leading-tight">{product.name}</h1>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                            <span className="font-bold">{product.rating}</span>
                            <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
                        </div>
                        <Separator orientation="vertical" className="h-4" />
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">by</span>
                            <span className="font-medium hover:text-primary cursor-pointer transition-colors flex items-center gap-1">
                                {product.seller}
                                <CheckCircle2 className="h-4 w-4 text-blue-500 fill-blue-500/10" />
                            </span>
                        </div>
                    </div>

                    <p className="text-lg text-muted-foreground">{product.description}</p>

                    <div className="p-6 rounded-2xl bg-muted/30 border space-y-6">
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold text-primary">৳{product.price.toLocaleString()}</span>
                            {product.type === 'subscription' && <span className="text-muted-foreground">/month</span>}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <Button size="lg" className="h-12 bg-gradient-primary" onClick={handleAddToCart}>
                                <ShoppingCart className="mr-2 h-5 w-5" />
                                Add to Cart
                            </Button>
                            <Button size="lg" variant="outline" className="h-12" onClick={() => { handleAddToCart(); router.push('/checkout'); }}>
                                <Zap className="mr-2 h-5 w-5" />
                                Buy Now
                            </Button>
                        </div>

                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <ShieldCheck className="h-4 w-4 text-green-500" />
                                Secure transaction & Instant delivery
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                                Verified & Tested by PRODOXI team
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center gap-4 pt-2">
                        <Button variant="ghost" size="sm" className="gap-2">
                            <Heart className="h-4 w-4" /> Save
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-2">
                            <Share2 className="h-4 w-4" /> Share
                        </Button>
                    </div>
                </div>
            </div>

            {/* Tabs Section */}
            <Tabs defaultValue="overview" className="space-y-8">
                <TabsList className="w-full justify-start h-12 bg-transparent border-b rounded-none p-0">
                    <TabsTrigger
                        value="overview"
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent h-full px-8"
                    >
                        Overview
                    </TabsTrigger>
                    <TabsTrigger
                        value="reviews"
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent h-full px-8"
                    >
                        Reviews ({product.reviewCount})
                    </TabsTrigger>
                    <TabsTrigger
                        value="qa"
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent h-full px-8"
                    >
                        Q&A
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-6">
                            <div>
                                <h3 className="text-xl font-bold mb-4">Detailed Description</h3>
                                <div className="prose max-w-none text-muted-foreground">
                                    <p>
                                        Experience the next level of digital quality with {product.name}. Carefully crafted to meet the highest industry standards, this product offers unparalleled value for professionals and hobbyists alike.
                                    </p>
                                    <p className="mt-4">
                                        Whether you are starting a new project or scaling an existing one, the features included in this package will streamline your workflow and help you achieve results faster.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-4">What&apos;s Included</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {['Full Source Files', 'Documentation PDF', 'Lifetime Updates', 'Premium Support', 'Commercial License', 'Multiple Formats'].map((item) => (
                                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <CheckCircle2 className="h-4 w-4 text-primary" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="p-6 rounded-xl border bg-card">
                                <h3 className="font-bold mb-4 flex items-center gap-2">
                                    <FileText className="h-4 w-4" /> Product Details
                                </h3>
                                <dl className="space-y-3 text-sm">
                                    <div className="flex justify-between">
                                        <dt className="text-muted-foreground">File Format</dt>
                                        <dd className="font-medium">ZIP, PDF, JSON</dd>
                                    </div>
                                    <div className="flex justify-between">
                                        <dt className="text-muted-foreground">File Size</dt>
                                        <dd className="font-medium">124 MB</dd>
                                    </div>
                                    <div className="flex justify-between">
                                        <dt className="text-muted-foreground">Released</dt>
                                        <dd className="font-medium">Oct 12, 2025</dd>
                                    </div>
                                    <div className="flex justify-between">
                                        <dt className="text-muted-foreground">Last Update</dt>
                                        <dd className="font-medium">Jan 02, 2026</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="reviews" className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="w-full md:w-64 space-y-6 shrink-0">
                            <div className="text-center md:text-left">
                                <div className="text-5xl font-bold mb-2">{product.rating}</div>
                                <div className="flex justify-center md:justify-start gap-1 mb-2">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-sm text-muted-foreground">Based on {product.reviewCount} verified reviews</p>
                            </div>
                            <div className="space-y-2">
                                {[5, 4, 3, 2, 1].map((r) => (
                                    <div key={r} className="flex items-center gap-3">
                                        <span className="text-xs font-medium w-4">{r}★</span>
                                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                                            <div className="bg-yellow-400 h-full" style={{ width: `${r === 5 ? 85 : r === 4 ? 12 : 2}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Button className="w-full">Write a Review</Button>
                        </div>

                        <Separator orientation="vertical" className="hidden md:block h-auto" />

                        <div className="flex-1 space-y-8">
                            {Array.from({ length: 3 }).map((_, i) => (
                                <div key={i} className="space-y-4">
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-3">
                                            <Avatar>
                                                <AvatarFallback>U{i + 1}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <div className="font-bold flex items-center gap-2">
                                                    User {i + 1}
                                                    <Badge variant="secondary" className="h-5 text-[10px] uppercase font-bold">Verified</Badge>
                                                </div>
                                                <div className="flex gap-1 mt-1">
                                                    {Array.from({ length: 5 }).map((_, j) => (
                                                        <Star key={j} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <span className="text-xs text-muted-foreground">2 weeks ago</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Absolutely fantastic product! The quality exceeded my expectations and the support team was very helpful with my initial questions. Highly recommend this to anyone in the field.
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <Button variant="ghost" size="sm" className="h-auto p-0 text-xs gap-1 hover:bg-transparent hover:text-primary">
                                            <ThumbsUp className="h-3 w-3" /> Helpful (12)
                                        </Button>
                                        <Button variant="ghost" size="sm" className="h-auto p-0 text-xs hover:bg-transparent hover:text-red-500">
                                            Report
                                        </Button>
                                    </div>
                                    {i < 2 && <Separator />}
                                </div>
                            ))}
                            <Button variant="outline" className="w-full">View All Reviews</Button>
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="qa" className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="space-y-8 max-w-3xl">
                        <div className="flex items-center justify-between gap-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input placeholder="Search questions..." className="pl-10 h-11" />
                            </div>
                            <Button className="shrink-0">Ask a Question</Button>
                        </div>

                        <div className="space-y-8">
                            {Array.from({ length: 2 }).map((_, i) => (
                                <div key={i} className="space-y-4">
                                    <div className="flex gap-4">
                                        <div className="flex flex-col items-center gap-1 shrink-0">
                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                <ChevronLeft className="h-4 w-4 rotate-90" />
                                            </Button>
                                            <span className="text-sm font-bold">{i === 0 ? 15 : 4}</span>
                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                <ChevronLeft className="h-4 w-4 -rotate-90" />
                                            </Button>
                                        </div>
                                        <div className="space-y-4">
                                            <h4 className="font-bold text-lg">Does this product include lifetime updates?</h4>
                                            <div className="p-5 rounded-xl bg-primary/5 border border-primary/10 space-y-3">
                                                <div className="flex items-center gap-2">
                                                    <Avatar className="h-6 w-6">
                                                        <AvatarFallback>S</AvatarFallback>
                                                    </Avatar>
                                                    <span className="text-sm font-bold text-primary">Seller Response</span>
                                                    <span className="text-[10px] text-muted-foreground">• 3 days ago</span>
                                                </div>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Yes, all our customers receive lifetime updates for this product automatically. You can always download the latest version from your library.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </TabsContent>
            </Tabs>

            <RelatedProducts currentProductId={product.id} category={product.category} />
        </div>
    );
}

// Internal Link wrapper since I'm using next/link
function Link({ href, children, className, onClick }: { href: string, children: React.ReactNode, className?: string, onClick?: () => void }) {
    return (
        <a href={href} className={className} onClick={(e) => { e.preventDefault(); if (onClick) onClick(); window.history.pushState({}, '', href); window.dispatchEvent(new PopStateEvent('popstate')); }}>
            {children}
        </a>
    );
}
