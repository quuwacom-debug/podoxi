'use client';

import * as React from 'react';
import { useProductStore, type ProductFilters } from '@/lib/stores/product-store';
import { categories } from '@/lib/data/mock-data';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

export function FilterSidebar() {
    const { filters, setCategories, setProductType, setRating, resetFilters } = useProductStore();

    const handleCategoryChange = (categoryId: string, checked: boolean) => {
        if (checked) {
            setCategories([...filters.categories, categoryId]);
        } else {
            setCategories(filters.categories.filter((id) => id !== categoryId));
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">Filters</h3>
                <Button
                    variant="link"
                    size="sm"
                    className="text-muted-foreground h-auto p-0"
                    onClick={resetFilters}
                >
                    Reset All
                </Button>
            </div>

            <Separator />

            {/* Categories */}
            <div className="space-y-4">
                <h4 className="font-medium text-sm">Categories</h4>
                <div className="space-y-2">
                    {categories.slice(0, 6).map((category) => (
                        <div key={category.id} className="flex items-center space-x-2">
                            <Checkbox
                                id={`cat-${category.id}`}
                                checked={filters.categories.includes(category.id)}
                                onCheckedChange={(checked) => handleCategoryChange(category.id, !!checked)}
                            />
                            <Label
                                htmlFor={`cat-${category.id}`}
                                className="text-sm font-normal cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                {category.name}
                            </Label>
                        </div>
                    ))}
                </div>
            </div>

            <Separator />

            {/* Product Type */}
            <div className="space-y-4">
                <h4 className="font-medium text-sm">Product Type</h4>
                <RadioGroup
                    value={filters.productType}
                    onValueChange={(val) => setProductType(val as ProductFilters['productType'])}
                >
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="all" id="t-all" />
                        <Label htmlFor="t-all" className="text-sm font-normal cursor-pointer">All Products</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="one-time" id="t-one" />
                        <Label htmlFor="t-one" className="text-sm font-normal cursor-pointer">One-time Purchase</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="subscription" id="t-sub" />
                        <Label htmlFor="t-sub" className="text-sm font-normal cursor-pointer">Subscription</Label>
                    </div>
                </RadioGroup>
            </div>

            <Separator />

            {/* Minimum Rating */}
            <div className="space-y-4">
                <h4 className="font-medium text-sm">Minimum Rating</h4>
                <RadioGroup
                    value={filters.rating?.toString() || ""}
                    onValueChange={(val) => setRating(val ? parseInt(val) : null)}
                >
                    {[4, 3, 2].map((r) => (
                        <div key={r} className="flex items-center space-x-2">
                            <RadioGroupItem value={r.toString()} id={`r-${r}`} />
                            <Label htmlFor={`r-${r}`} className="flex items-center cursor-pointer flex-1">
                                <div className="flex items-center mr-2">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-3 w-3 ${i < r ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                                        />
                                    ))}
                                </div>
                                <span className="text-sm text-muted-foreground">& Up</span>
                            </Label>
                        </div>
                    ))}
                </RadioGroup>
            </div>
        </div>
    );
}
