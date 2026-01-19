'use client';

import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import { SearchBar } from '@/components/search/search-bar';
import { FilterSidebar } from '@/components/search/filter-sidebar';
import { ProductCard } from '@/components/products/product-card';
import { mockProducts, categories } from '@/lib/data/mock-data';
import { cn } from '@/lib/utils';
import { useProductStore } from '@/lib/stores/product-store';
import { Button } from '@/components/ui/button';
import { Grid, List, SlidersHorizontal } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

function ShopContent() {
    const searchParams = useSearchParams();
    const { filters, viewMode, setViewMode, setSortBy, setSearchQuery } = useProductStore();

    // Initialize search query from URL
    React.useEffect(() => {
        const query = searchParams.get('q');
        if (query) {
            setSearchQuery(query);
        }
    }, [searchParams, setSearchQuery]);

    // Filter products based on store state
    const filteredProducts = React.useMemo(() => {
        return mockProducts.filter((p) => {
            // Search Query
            if (filters.searchQuery && !p.name.toLowerCase().includes(filters.searchQuery.toLowerCase())) {
                return false;
            }
            // Category check
            if (filters.categories.length > 0) {
                const selectedCategoryNames = categories
                    .filter(c => filters.categories.includes(c.id))
                    .map(c => c.name);
                if (!selectedCategoryNames.includes(p.category)) return false;
            }

            // Product Type
            if (filters.productType !== 'all' && p.type !== filters.productType) {
                return false;
            }
            // Rating
            if (filters.rating && p.rating < filters.rating) {
                return false;
            }
            return true;
        }).sort((a, b) => {
            if (filters.sortBy === 'price-low-high') return a.price - b.price;
            if (filters.sortBy === 'price-high-low') return b.price - a.price;
            if (filters.sortBy === 'best-rated') return b.rating - a.rating;
            return 0; // Default (newest - in mock just original order)
        });
    }, [filters]);

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Search Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Shop Digital Products</h1>
                    <p className="text-muted-foreground">
                        {filteredProducts.length} results found
                    </p>
                </div>
                <SearchBar className="max-w-md" />
            </div>

            <div className="flex gap-8">
                {/* Desktop Sidebar */}
                <aside className="hidden lg:block w-64 shrink-0">
                    <FilterSidebar />
                </aside>

                {/* Main Content */}
                <main className="flex-1">
                    {/* Controls */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b">
                        <div className="flex items-center gap-2">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="outline" size="sm" className="lg:hidden">
                                        <SlidersHorizontal className="h-4 w-4 mr-2" />
                                        Filters
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                                    <SheetTitle className="sr-only">Product Filters</SheetTitle>
                                    <div className="py-6">
                                        <FilterSidebar />
                                    </div>
                                </SheetContent>
                            </Sheet>

                            <div className="hidden sm:flex items-center bg-muted p-1 rounded-md">
                                <Button
                                    variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
                                    size="icon"
                                    className="h-8 w-8"
                                    onClick={() => setViewMode('grid')}
                                >
                                    <Grid className="h-4 w-4" />
                                </Button>
                                <Button
                                    variant={viewMode === 'list' ? 'secondary' : 'ghost'}
                                    size="icon"
                                    className="h-8 w-8"
                                    onClick={() => setViewMode('list')}
                                >
                                    <List className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground hidden sm:inline">Sort by:</span>
                            <Select value={filters.sortBy} onValueChange={(val) => setSortBy(val as 'newest' | 'price-low-high' | 'price-high-low' | 'best-rated' | 'popular')}>
                                <SelectTrigger className="w-[180px] h-9">
                                    <SelectValue placeholder="Sort by" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="newest">Newest First</SelectItem>
                                    <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                                    <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                                    <SelectItem value="best-rated">Best Rated</SelectItem>
                                    <SelectItem value="popular">Most Popular</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Product Listing */}
                    {filteredProducts.length > 0 ? (
                        <div className={cn(
                            "grid gap-6",
                            viewMode === 'grid'
                                ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                                : "grid-cols-1"
                        )}>
                            {filteredProducts.map((product) => (
                                <div key={product.id} className={cn(
                                    viewMode === 'list' && "flex flex-col md:flex-row gap-6 border rounded-lg p-4"
                                )}>
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="py-20 text-center">
                            <h3 className="text-xl font-semibold mb-2">No products found</h3>
                            <p className="text-muted-foreground mb-6">Try adjusting your filters or search query</p>
                            <Button onClick={() => window.location.reload()}>Clear all filters</Button>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}

export default function ShopPage() {
    return (
        <React.Suspense fallback={<div className="container mx-auto px-4 py-8">Loading products...</div>}>
            <ShopContent />
        </React.Suspense>
    );
}
