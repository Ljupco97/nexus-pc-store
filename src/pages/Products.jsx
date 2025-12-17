import { useState, useMemo } from 'react';
import { Filter, Grid, List, SlidersHorizontal, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Price filter
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => (a.badge === 'New' ? -1 : 1));
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, sortBy, priceRange]);

  return (
    <div className="min-h-screen pt-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-4xl font-bold text-white">All Products</h1>
          <p className="mt-2 text-gray-400">
            Showing {filteredProducts.length} products
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar - Desktop */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-28 bg-dark-800 rounded-2xl p-6 neon-border">
              <h2 className="font-display font-semibold text-lg text-white mb-6 flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5 text-accent-gold" />
                Filters
              </h2>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="font-body font-semibold text-gray-300 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === cat.id
                          ? 'bg-accent-gold/20 text-accent-gold border border-accent-gold/30'
                          : 'text-gray-400 hover:bg-dark-700'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h3 className="font-body font-semibold text-gray-300 mb-4">Price Range</h3>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-accent-gold"
                  />
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Reset */}
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setPriceRange([0, 2000]);
                }}
                className="w-full py-2 border border-dark-600 rounded-lg text-gray-400 hover:text-white hover:border-gray-500 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          </aside>

          {/* Mobile Filter Button */}
          <button
            onClick={() => setShowFilters(true)}
            className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-gold to-accent-goldDark rounded-full font-semibold text-dark-900 shadow-lg"
          >
            <Filter className="w-5 h-5" />
            Filters
          </button>

          {/* Mobile Filters Modal */}
          {showFilters && (
            <div className="lg:hidden fixed inset-0 z-50 bg-dark-900/95 backdrop-blur-xl p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-display font-semibold text-xl text-white">Filters</h2>
                <button onClick={() => setShowFilters(false)}>
                  <X className="w-6 h-6 text-gray-400" />
                </button>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="font-body font-semibold text-gray-300 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        setShowFilters(false);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        selectedCategory === cat.id
                          ? 'bg-accent-gold/20 text-accent-gold border border-accent-gold/30'
                          : 'text-gray-400 bg-dark-800'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h3 className="font-body font-semibold text-gray-300 mb-4">Price Range</h3>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-accent-gold"
                  />
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowFilters(false)}
                className="w-full py-4 bg-gradient-to-r from-accent-gold to-accent-goldDark rounded-xl font-semibold text-dark-900"
              >
                Apply Filters
              </button>
            </div>
          )}

          {/* Products Grid */}
          <main className="flex-1">
            {/* Sort Bar */}
            <div className="flex items-center justify-between mb-6 bg-dark-800 rounded-xl p-4 neon-border">
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm hidden sm:block">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent-gold/50"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-400 text-lg">No products found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange([0, 2000]);
                  }}
                  className="mt-4 text-accent-gold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
