import { HeroCarousel } from '@/components/home/hero-carousel';
import { ProductCard } from '@/components/products/product-card';
import { mockProducts, categories } from '@/lib/data/mock-data';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const topSellingProducts = mockProducts.slice(0, 4);
  const allProducts = mockProducts;

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Top Selling Products */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Top Selling Products</h2>
              <p className="text-muted-foreground">
                Most popular digital products this month
              </p>
            </div>
            <Link href="/shop">
              <Button variant="outline" className="hidden md:flex">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topSellingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link href="/shop">
              <Button variant="outline">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Top Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Browse by Category</h2>
            <p className="text-muted-foreground">
              Explore our wide range of digital product categories
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link key={category.id} href={`/shop?category=${category.id}`}>
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <div className={`text-5xl mb-3 bg-gradient-to-br ${category.color} bg-clip-text text-transparent`}>
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {category.count.toLocaleString()} products
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Products Feed */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Explore All Products</h2>
            <p className="text-muted-foreground">
              Discover thousands of digital products from verified sellers
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" variant="outline">
              Load More Products
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Selling?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of sellers on PRODOXI and reach customers across Bangladesh
          </p>
          <Link href="/become-seller">
            <Button size="lg" className="bg-white hover:bg-white/95 font-semibold transition-all hover:scale-105 active:scale-95 shadow-xl">
              <span className="text-primary !text-primary">Become a Seller Today</span>
              <ArrowRight className="ml-2 h-5 w-5 text-primary" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

