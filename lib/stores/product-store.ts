import { create } from 'zustand';

export interface ProductFilters {
    searchQuery: string;
    categories: string[];
    priceRange: [number, number];
    productType: 'all' | 'one-time' | 'subscription';
    rating: number | null;
    sortBy: 'newest' | 'price-low-high' | 'price-high-low' | 'popular' | 'best-rated';
}

interface ProductState {
    filters: ProductFilters;
    viewMode: 'grid' | 'list';
    setSearchQuery: (query: string) => void;
    setCategories: (categories: string[]) => void;
    setPriceRange: (range: [number, number]) => void;
    setProductType: (type: ProductFilters['productType']) => void;
    setRating: (rating: number | null) => void;
    setSortBy: (sortBy: ProductFilters['sortBy']) => void;
    setViewMode: (mode: 'grid' | 'list') => void;
    resetFilters: () => void;
}

const initialFilters: ProductFilters = {
    searchQuery: '',
    categories: [],
    priceRange: [0, 10000],
    productType: 'all',
    rating: null,
    sortBy: 'newest',
};

export const useProductStore = create<ProductState>((set) => ({
    filters: initialFilters,
    viewMode: 'grid',
    setSearchQuery: (searchQuery) =>
        set((state) => ({ filters: { ...state.filters, searchQuery } })),
    setCategories: (categories) =>
        set((state) => ({ filters: { ...state.filters, categories } })),
    setPriceRange: (priceRange) =>
        set((state) => ({ filters: { ...state.filters, priceRange } })),
    setProductType: (productType) =>
        set((state) => ({ filters: { ...state.filters, productType } })),
    setRating: (rating) =>
        set((state) => ({ filters: { ...state.filters, rating } })),
    setSortBy: (sortBy) =>
        set((state) => ({ filters: { ...state.filters, sortBy } })),
    setViewMode: (viewMode) => set({ viewMode }),
    resetFilters: () => set({ filters: initialFilters }),
}));
