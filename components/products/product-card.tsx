'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Star, ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCartStore } from '@/lib/stores/cart-store';
import { toast } from 'sonner';

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    thumbnail: string;
    rating: number;
    reviewCount: number;
    seller: string;
    type: 'one-time' | 'subscription';
    category: string;
    videoUrl?: string;
}

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const { addItem } = useCartStore();

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
        <Card className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <Link href={`/product/${product.id}`}>
                <CardHeader className="p-0">
                    <div className="relative w-full aspect-video overflow-hidden bg-muted">
                        <Image
                            src={product.thumbnail}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {product.type === 'subscription' && (
                            <Badge className="absolute top-2 right-2 bg-accent/90 backdrop-blur-sm">
                                Subscription
                            </Badge>
                        )}
                    </div>
                </CardHeader>
            </Link>
            <CardContent className="p-4 space-y-2">
                <Link href={`/product/${product.id}`}>
                    <h3 className="font-semibold text-lg line-clamp-2 hover:text-primary transition-colors">
                        {product.name}
                    </h3>
                </Link>
                <p className="text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                </p>
                <div className="flex items-center gap-1">
                    <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                                key={i}
                                className={`h-4 w-4 ${i < Math.floor(product.rating)
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'text-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                        ({product.reviewCount})
                    </span>
                </div>
                <p className="text-xs text-muted-foreground">by {product.seller}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex items-center justify-between">
                <div className="flex flex-col">
                    <span className="text-2xl font-bold text-primary">
                        ৳{product.price.toLocaleString()}
                    </span>
                    {product.type === 'subscription' && (
                        <span className="text-xs text-muted-foreground">/month</span>
                    )}
                </div>
                <Button
                    size="sm"
                    onClick={handleAddToCart}
                    className="bg-gradient-primary"
                >
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    Add
                </Button>
            </CardFooter>
        </Card>
    );
}
