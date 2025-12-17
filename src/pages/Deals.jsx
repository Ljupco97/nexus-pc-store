import { Clock, Zap, Percent } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Deals() {
  const dealsProducts = products.filter(p => p.originalPrice > p.price);
  
  // Countdown timer display (static for now)
  const countdown = { hours: 23, minutes: 45, seconds: 30 };

  return (
    <div className="min-h-screen pt-24 bg-dark-900">
      {/* Hero Banner */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-gold/20 via-accent-goldDark/20 to-accent-gold/20" />
        <div className="absolute inset-0 grid-bg opacity-50" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-gold/20 rounded-full border border-accent-gold/30 mb-6">
            <Zap className="w-4 h-4 text-accent-gold" />
            <span className="text-accent-gold font-semibold">Flash Sale</span>
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Mega Deals &
            <span className="gradient-text"> Discounts</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Don't miss out on incredible savings. Limited time offers on premium PC components!
          </p>

          {/* Countdown Timer */}
          <div className="inline-flex items-center gap-4 bg-dark-800 rounded-2xl p-6 neon-border">
            <Clock className="w-6 h-6 text-accent-gold" />
            <span className="text-gray-400">Sale ends in:</span>
            <div className="flex items-center gap-2">
              {Object.entries(countdown).map(([unit, value], i) => (
                <div key={unit} className="flex items-center gap-2">
                  <div className="bg-dark-700 rounded-lg px-4 py-2 min-w-[4rem] text-center">
                    <span className="font-display text-2xl font-bold text-white">
                      {String(value).padStart(2, '0')}
                    </span>
                    <span className="block text-xs text-gray-500 uppercase">{unit}</span>
                  </div>
                  {i < 2 && <span className="text-gray-500 text-2xl">:</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deals Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {[
              { icon: Percent, value: 'Up to 40%', label: 'Savings' },
              { icon: Zap, value: dealsProducts.length + '+', label: 'Products' },
              { icon: Clock, value: '24H', label: 'Left' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="bg-dark-800 rounded-xl p-4 neon-border text-center">
                <Icon className="w-6 h-6 text-accent-gold mx-auto mb-2" />
                <div className="font-display text-2xl font-bold text-white">{value}</div>
                <div className="text-sm text-gray-500">{label}</div>
              </div>
            ))}
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {dealsProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
