'use client';

import * as React from 'react';
import {
    Download,
    Eye,
    ExternalLink,
    Search,
    LayoutGrid,
    List as ListIcon
} from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockProducts } from '@/lib/data/mock-data';


export default function LibraryPage() {
    const [searchQuery, setSearchQuery] = React.useState('');

    const libraryItems = mockProducts.slice(0, 3); // Mock library items

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold">My Library</h1>
                    <p className="text-muted-foreground mt-1">Access and download your digital assets</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon"><LayoutGrid className="h-4 w-4" /></Button>
                    <Button variant="outline" size="icon"><ListIcon className="h-4 w-4" /></Button>
                </div>
            </div>

            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="Search your library..."
                    className="pl-10 h-12 bg-card"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {libraryItems.map((item) => (
                    <Card key={item.id} className="group overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 border-muted-foreground/10">
                        <div className="relative aspect-video overflow-hidden bg-muted">
                            <Image
                                src={item.thumbnail}
                                alt={item.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                <Button size="sm" variant="secondary" className="h-9 font-bold bg-white text-black hover:bg-white/90">
                                    <Eye className="mr-2 h-4 w-4" /> Preview
                                </Button>
                            </div>
                        </div>

                        <div className="p-5 flex-1 space-y-4">
                            <div className="space-y-1 text-center sm:text-left">
                                <Badge variant="outline" className="mb-2 text-[10px] uppercase tracking-wider font-bold">
                                    {item.category}
                                </Badge>
                                <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors cursor-pointer line-clamp-2">
                                    {item.name}
                                </h3>
                            </div>

                            <div className="pt-2">
                                <Button className="w-full bg-gradient-primary h-11 font-bold">
                                    <Download className="mr-2 h-4 w-4" /> Download Files
                                </Button>
                            </div>

                            <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t">
                                <span className="flex items-center gap-1"><ExternalLink className="h-3 w-3" /> License: Standard</span>
                                <span>Purchased Oct 24, 2025</span>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {libraryItems.length === 0 && (
                <div className="py-20 text-center border-2 border-dashed rounded-3xl space-y-4">
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto">
                        <Search className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-bold">No products found</h3>
                    <p className="text-muted-foreground">You haven&apos;t purchased any digital assets yet.</p>
                    <Button onClick={() => window.location.href = '/shop'}>Go to Marketplace</Button>
                </div>
            )}
        </div>
    );
}
