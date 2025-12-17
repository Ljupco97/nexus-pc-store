import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const discount = Math.round((1 - product.price / product.originalPrice) * 100);

  return (
    <div className="group relative bg-dark-800 rounded-2xl overflow-hidden neon-border card-hover">
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 z-10">
          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
            product.badge === 'Hot Deal' ? 'bg-red-500/90 text-white' :
            product.badge === 'New' ? 'bg-accent-gold/90 text-dark-900' :
            product.badge === 'Best Seller' ? 'bg-gradient-to-r from-accent-gold to-accent-goldDark text-dark-900' :
            'bg-dark-600 text-gray-300'
          }`}>
            {product.badge}
          </span>
        </div>
      )}

      {/* Discount Badge */}
      {discount > 0 && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-2 py-1 bg-red-500/90 text-white rounded-lg text-sm font-bold">
            -{discount}%
          </span>
        </div>
      )}

      {/* Image Container */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-dark-700 to-dark-800">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-transparent to-transparent opacity-60" />
        
        {/* Quick Actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            to={`/product/${product.id}`}
            className="p-3 bg-dark-900/90 rounded-xl border border-accent-gold/50 hover:bg-accent-gold/20 transition-colors"
          >
            <Eye className="w-5 h-5 text-accent-gold" />
          </Link>
          <button
            onClick={() => addToCart(product)}
            className="p-3 bg-dark-900/90 rounded-xl border border-accent-gold/50 hover:bg-accent-gold/20 transition-colors"
          >
            <ShoppingCart className="w-5 h-5 text-accent-gold" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <span className="text-xs font-medium text-accent-gold/80 uppercase tracking-wider">
          {product.category}
        </span>

        {/* Name */}
        <h3 className="mt-2 font-display font-semibold text-lg text-white group-hover:text-accent-gold transition-colors line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-accent-gold fill-accent-gold'
                    : 'text-gray-600'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-400">
            ({product.reviews.toLocaleString()})
          </span>
        </div>

        {/* Specs Preview */}
        <div className="mt-3 flex flex-wrap gap-2">
          {product.specs.slice(0, 2).map((spec, i) => (
            <span key={i} className="text-xs px-2 py-1 bg-dark-700 rounded-lg text-gray-400">
              {spec}
            </span>
          ))}
        </div>

        {/* Price & Action */}
        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-2xl font-display font-bold text-white">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice > product.price && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button
            onClick={() => addToCart(product)}
            className="btn-neon px-4 py-2 rounded-xl font-body font-semibold text-accent-gold"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
