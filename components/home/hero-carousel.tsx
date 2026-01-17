'use client';

import * as React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeroSlide {
    id: string;
    title: string;
    description: string;
    image: string;
    cta: string;
    ctaLink: string;
}

const heroSlides: HeroSlide[] = [
    {
        id: '1',
        title: 'Discover Premium Digital Products',
        description: 'Access thousands of high-quality digital products from verified sellers across Bangladesh',
        image: '/hero-1.jpg',
        cta: 'Explore Now',
        ctaLink: '/shop',
    },
    {
        id: '2',
        title: 'Sell Your Digital Products',
        description: 'Join our marketplace and reach thousands of customers looking for quality digital content',
        image: '/hero-2.jpg',
        cta: 'Become a Seller',
        ctaLink: '/become-seller',
    },
    {
        id: '3',
        title: 'Secure & Instant Access',
        description: 'Purchase once, access forever. All transactions are secure with instant product delivery',
        image: '/hero-3.jpg',
        cta: 'Start Shopping',
        ctaLink: '/shop',
    },
];

export function HeroCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 5000, stopOnInteraction: false }),
    ]);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const scrollPrev = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = React.useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    React.useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        return () => {
            emblaApi.off('select', onSelect);
        };
    }, [emblaApi, onSelect]);

    return (
        <div className="relative w-full">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {heroSlides.map((slide) => (
                        <div key={slide.id} className="flex-[0_0_100%] min-w-0">
                            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] bg-gradient-primary">
                                <div className="absolute inset-0 bg-black/40" />
                                <div className="relative h-full container mx-auto px-4 flex items-center">
                                    <div className="max-w-2xl text-white space-y-6 animate-fade-in">
                                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                            {slide.title}
                                        </h1>
                                        <p className="text-lg md:text-xl text-white/90">
                                            {slide.description}
                                        </p>
                                        <Button
                                            size="lg"
                                            className="bg-white hover:bg-white/95 font-semibold transition-all hover:scale-105 active:scale-95 shadow-xl"
                                            asChild
                                        >
                                            <a href={slide.ctaLink}>
                                                <span className="text-primary !text-primary">{slide.cta}</span>
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
                onClick={scrollPrev}
            >
                <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
                onClick={scrollNext}
            >
                <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {heroSlides.map((_, index) => (
                    <button
                        key={index}
                        className={cn(
                            'h-2 rounded-full transition-all',
                            index === selectedIndex
                                ? 'w-8 bg-white'
                                : 'w-2 bg-white/50 hover:bg-white/75'
                        )}
                        onClick={() => emblaApi?.scrollTo(index)}
                    />
                ))}
            </div>
        </div>
    );
}
