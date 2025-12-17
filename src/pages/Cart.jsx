import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-24 bg-dark-900 flex items-center justify-center">
        <div className="text-center px-4">
          <div className="w-24 h-24 mx-auto mb-6 bg-dark-700 rounded-full flex items-center justify-center">
            <ShoppingBag className="w-12 h-12 text-gray-500" />
          </div>
          <h1 className="font-display text-2xl font-bold text-white mb-2">
            Your cart is empty
          </h1>
          <p className="text-gray-400 mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-gold to-accent-goldDark rounded-xl font-body font-semibold text-dark-900 hover:shadow-lg hover:shadow-accent-gold/30 transition-all duration-300"
          >
            Start Shopping
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    );
  }

  const shipping = cartTotal > 500 ? 0 : 29.99;
  const tax = cartTotal * 0.08;
  const total = cartTotal + shipping + tax;

  return (
    <div className="min-h-screen pt-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display text-3xl font-bold text-white">
            Shopping Cart ({cart.length} items)
          </h1>
          <button
            onClick={clearCart}
            className="text-gray-400 hover:text-red-400 transition-colors text-sm"
          >
            Clear cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-dark-800 rounded-2xl p-4 sm:p-6 neon-border flex flex-col sm:flex-row gap-4"
              >
                {/* Image */}
                <Link to={`/product/${item.id}`} className="flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full sm:w-32 h-32 object-cover rounded-xl"
                  />
                </Link>

                {/* Details */}
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs text-accent-gold uppercase tracking-wider">
                        {item.category}
                      </span>
                      <Link to={`/product/${item.id}`}>
                        <h3 className="font-display font-semibold text-lg text-white hover:text-accent-gold transition-colors">
                          {item.name}
                        </h3>
                      </Link>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-gray-500 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    {/* Quantity */}
                    <div className="flex items-center bg-dark-700 rounded-lg border border-dark-600">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 text-gray-400 hover:text-white transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 py-2 text-white font-semibold min-w-[3rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 text-gray-400 hover:text-white transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <span className="font-display text-xl font-bold text-white">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      {item.quantity > 1 && (
                        <span className="block text-sm text-gray-500">
                          ${item.price.toFixed(2)} each
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-dark-800 rounded-2xl p-6 neon-border sticky top-28">
              <h2 className="font-display font-semibold text-xl text-white mb-6">
                Order Summary
              </h2>

              {/* Promo Code */}
              <div className="mb-6">
                <div className="flex items-center gap-2 bg-dark-700 rounded-xl border border-dark-600 p-1">
                  <Tag className="w-5 h-5 text-gray-500 ml-3" />
                  <input
                    type="text"
                    placeholder="Promo code"
                    className="flex-1 bg-transparent py-2 text-white placeholder-gray-500 focus:outline-none"
                  />
                  <button className="px-4 py-2 bg-dark-600 rounded-lg text-accent-gold font-medium hover:bg-dark-500 transition-colors">
                    Apply
                  </button>
                </div>
              </div>

              {/* Totals */}
              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-gray-400">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? 'text-green-400' : ''}>
                    {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex items-center justify-between text-gray-400">
                  <span>Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                {shipping === 0 && (
                  <div className="py-2 px-3 bg-green-400/10 rounded-lg border border-green-400/30 text-green-400 text-xs">
                    🎉 You qualify for free shipping!
                  </div>
                )}
                <div className="h-px bg-dark-600 my-4" />
                <div className="flex items-center justify-between">
                  <span className="font-display font-semibold text-lg text-white">Total</span>
                  <span className="font-display font-bold text-2xl text-white">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="w-full mt-6 flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-gold to-accent-goldDark rounded-xl font-body font-semibold text-lg text-dark-900 hover:shadow-lg hover:shadow-accent-gold/30 transition-all duration-300">
                Proceed to Checkout
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Continue Shopping */}
              <Link
                to="/products"
                className="block mt-4 text-center text-gray-400 hover:text-accent-gold transition-colors"
              >
                Continue Shopping
              </Link>

              {/* Security */}
              <div className="mt-6 pt-6 border-t border-dark-600 flex items-center justify-center gap-2 text-xs text-gray-500">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Secure checkout powered by Stripe
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
