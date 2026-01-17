'use client';

import * as React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useProductStore } from '@/lib/stores/product-store';
import { mockProducts } from '@/lib/data/mock-data';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

export function SearchBar({ className }: { className?: string }) {
    const router = useRouter();
    const { filters, setSearchQuery } = useProductStore();
    const [query, setQuery] = React.useState(filters.searchQuery);
    const [showSuggestions, setShowSuggestions] = React.useState(false);

    const suggestions = React.useMemo(() => {
        if (!query || query.length < 2) return [];
        return mockProducts
            .filter((p) =>
                p.name.toLowerCase().includes(query.toLowerCase()) ||
                p.category.toLowerCase().includes(query.toLowerCase())
            )
            .slice(0, 5);
    }, [query]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setSearchQuery(query);
        setShowSuggestions(false);
        router.push(`/shop?q=${encodeURIComponent(query)}`);
    };

    const handleSuggestionClick = (suggestion: string) => {
        setQuery(suggestion);
        setSearchQuery(suggestion);
        setShowSuggestions(false);
        router.push(`/shop?q=${encodeURIComponent(suggestion)}`);
    };

    return (
        <div className={cn("relative w-full max-w-xl", className)}>
            <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Search for digital products..."
                    className="pl-10 h-10 w-full bg-muted/50 focus-visible:ring-primary"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setShowSuggestions(true);
                    }}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                />
            </form>

            {showSuggestions && suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 z-50 mt-1 rounded-md border bg-popover p-1 shadow-md animate-in fade-in zoom-in-95">
                    {suggestions.map((s) => (
                        <button
                            key={s.id}
                            className="w-full text-left px-3 py-2 text-sm hover:bg-muted rounded-sm transition-colors"
                            onClick={() => handleSuggestionClick(s.name)}
                        >
                            <div className="font-medium">{s.name}</div>
                            <div className="text-xs text-muted-foreground">{s.category}</div>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
