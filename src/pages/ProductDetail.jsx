import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Share2, ChevronRight, Check, Truck, Shield, RotateCcw } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = products.find(p => p.id === parseInt(id));
  const relatedProducts = products.filter(p => p.category === product?.category && p.id !== product?.id).slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen pt-24 bg-dark-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl text-white mb-4">Product not found</h1>
          <Link to="/products" className="text-accent-gold hover:underline">
            Back to products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const discount = Math.round((1 - product.price / product.originalPrice) * 100);

  return (
    <div className="min-h-screen pt-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link to="/" className="hover:text-accent-gold transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/products" className="hover:text-accent-gold transition-colors">Products</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-300">{product.name}</span>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-dark-800 neon-border">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.badge && (
              <span className={`absolute top-6 left-6 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider ${
                product.badge === 'Hot Deal' ? 'bg-red-500/90 text-white' :
                product.badge === 'New' ? 'bg-accent-gold/90 text-dark-900' :
                product.badge === 'Best Seller' ? 'bg-gradient-to-r from-accent-gold to-accent-goldDark text-dark-900' :
                'bg-dark-600 text-gray-300'
              }`}>
                {product.badge}
              </span>
            )}
          </div>

          {/* Details */}
          <div>
            <span className="text-accent-gold font-medium uppercase tracking-wider">
              {product.category}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-accent-gold fill-accent-gold'
                        : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-400">
                {product.rating} ({product.reviews.toLocaleString()} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mt-6 flex items-baseline gap-4">
              <span className="font-display text-4xl font-bold text-white">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice > product.price && (
                <>
                  <span className="text-xl text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-bold">
                    Save {discount}%
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="mt-6 text-gray-400 leading-relaxed">
              {product.description}
            </p>

            {/* Specs */}
            <div className="mt-6">
              <h3 className="font-body font-semibold text-white mb-3">Key Specifications</h3>
              <div className="flex flex-wrap gap-3">
                {product.specs.map((spec, i) => (
                  <span key={i} className="px-4 py-2 bg-dark-700 rounded-lg text-gray-300 border border-dark-600">
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Qty:</span>
                <div className="flex items-center bg-dark-700 rounded-lg border border-dark-600">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-white font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={addedToCart}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-body font-semibold text-lg transition-all duration-300 ${
                  addedToCart
                    ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                    : 'bg-gradient-to-r from-accent-gold to-accent-goldDark text-dark-900 hover:shadow-lg hover:shadow-accent-gold/30'
                }`}
              >
                {addedToCart ? (
                  <>
                    <Check className="w-5 h-5" />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </>
                )}
              </button>

              <button className="p-4 bg-dark-700 rounded-xl border border-dark-600 hover:border-red-500/50 hover:text-red-400 transition-all text-gray-400">
                <Heart className="w-6 h-6" />
              </button>
            </div>

            {/* Features */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: Shield, label: '2-Year Warranty' },
                { icon: RotateCcw, label: '30-Day Returns' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center text-center p-4 bg-dark-800 rounded-xl border border-dark-600">
                  <Icon className="w-6 h-6 text-accent-gold mb-2" />
                  <span className="text-sm text-gray-400">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="font-display text-2xl font-bold text-white mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
