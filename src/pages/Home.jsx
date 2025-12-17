import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Truck, Headphones, ChevronRight, ChevronLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Home() {
  const featuredProducts = products.slice(0, 4);
  const dealsProducts = products.filter(p => p.badge === 'Hot Deal' || p.originalPrice > p.price).slice(0, 4);

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      badge: 'New Arrival',
      title: 'RTX 4090 Series',
      subtitle: 'Build Your',
      highlight: 'Dream Machine',
      description: 'Premium PC components and cutting-edge gaming hardware. Experience performance like never before.',
      image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&h=600&fit=crop',
      cta: { text: 'Shop Now', link: '/products' },
      secondaryCta: { text: 'View Deals', link: '/deals' },
    },
    {
      badge: 'Hot Deal',
      title: 'Up to 40% Off',
      subtitle: 'Massive Savings on',
      highlight: 'Gaming GPUs',
      description: 'Don\'t miss our biggest sale of the year. Premium graphics cards at unbeatable prices.',
      image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&h=600&fit=crop',
      cta: { text: 'Shop Deals', link: '/deals' },
      secondaryCta: { text: 'All Products', link: '/products' },
    },
    {
      badge: 'Best Seller',
      title: 'Ryzen 9 7950X',
      subtitle: 'Unleash the Power of',
      highlight: 'AMD Processors',
      description: 'Dominate any workload with the world\'s most advanced desktop processors for creators and gamers.',
      image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=800&h=600&fit=crop',
      cta: { text: 'Shop CPUs', link: '/products' },
      secondaryCta: { text: 'Learn More', link: '/about' },
    },
    {
      badge: 'Premium',
      title: 'Build Complete PCs',
      subtitle: 'Create Your',
      highlight: 'Perfect Setup',
      description: 'From motherboards to cases, we have everything you need to build your ultimate gaming rig.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      cta: { text: 'Start Building', link: '/products' },
      secondaryCta: { text: 'View Guide', link: '/about' },
    },
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const features = [
    { icon: Truck, title: 'Free Shipping', desc: 'On orders over $500' },
    { icon: Shield, title: '2-Year Warranty', desc: 'Full coverage protection' },
    { icon: Zap, title: 'Fast Delivery', desc: '2-3 business days' },
    { icon: Headphones, title: '24/7 Support', desc: 'Expert assistance' },
  ];

  const categories = [
    { name: 'Graphics Cards', image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop', count: 45 },
    { name: 'Processors', image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=400&h=300&fit=crop', count: 32 },
    { name: 'Memory', image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&h=300&fit=crop', count: 28 },
    { name: 'Storage', image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop', count: 56 },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Slides */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/90 to-dark-900/60" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-dark-900/50" />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 grid-bg opacity-30" />

            {/* Animated Glow Effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-accent-goldDark/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              {heroSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    index === currentSlide 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8 absolute'
                  }`}
                >
                  {index === currentSlide && (
                    <>
                      {/* Badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-700/50 rounded-full border border-accent-gold/30 mb-6">
                        <span className="w-2 h-2 bg-accent-gold rounded-full animate-pulse" />
                        <span className="text-sm text-gray-300">{slide.badge} - {slide.title}</span>
                      </div>

                      {/* Heading */}
                      <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        {slide.subtitle}
                        <span className="block gradient-text neon-text">{slide.highlight}</span>
                      </h1>

                      {/* Description */}
                      <p className="text-lg text-gray-400 max-w-lg mb-8">
                        {slide.description}
                      </p>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row items-start gap-4">
                        <Link
                          to={slide.cta.link}
                          className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-gold to-accent-goldDark rounded-xl font-body font-semibold text-lg text-dark-900 hover:shadow-lg hover:shadow-accent-gold/30 transition-all duration-300"
                        >
                          {slide.cta.text}
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                          to={slide.secondaryCta.link}
                          className="btn-neon px-8 py-4 rounded-xl font-body font-semibold text-lg text-accent-gold"
                        >
                          {slide.secondaryCta.text}
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              ))}

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                {[
                  { value: '50K+', label: 'Products' },
                  { value: '100K+', label: 'Customers' },
                  { value: '4.9', label: 'Rating' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Product Showcase */}
            <div className="hidden lg:block relative">
              {heroSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    index === currentSlide 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-95 absolute inset-0'
                  }`}
                >
                  {index === currentSlide && (
                    <div className="relative">
                      <div className="relative w-full aspect-square rounded-3xl overflow-hidden neon-border animate-float">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent" />
                      </div>
                      {/* Decorative Elements */}
                      <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-accent-gold to-accent-goldDark rounded-3xl blur-2xl opacity-30" />
                      <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent-gold/20 rounded-full blur-xl" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Navigation */}
        <div className="absolute bottom-8 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Navigation Arrows */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevSlide}
                  className="p-3 bg-dark-800/80 backdrop-blur-sm rounded-xl border border-accent-gold/30 hover:bg-accent-gold/20 hover:border-accent-gold/50 transition-all group"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-accent-gold" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-3 bg-dark-800/80 backdrop-blur-sm rounded-xl border border-accent-gold/30 hover:bg-accent-gold/20 hover:border-accent-gold/50 transition-all group"
                >
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-accent-gold" />
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="flex items-center gap-3">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-all duration-300 ${
                      index === currentSlide
                        ? 'w-12 h-2 bg-gradient-to-r from-accent-gold to-accent-goldDark rounded-full'
                        : 'w-2 h-2 bg-gray-600 hover:bg-gray-500 rounded-full'
                    }`}
                  />
                ))}
              </div>

              {/* Slide Counter */}
              <div className="hidden sm:flex items-center gap-2 text-sm">
                <span className="font-display text-2xl font-bold text-accent-gold">
                  {String(currentSlide + 1).padStart(2, '0')}
                </span>
                <span className="text-gray-500">/</span>
                <span className="text-gray-500">{String(heroSlides.length).padStart(2, '0')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-dark-700">
          <div
            className="h-full bg-gradient-to-r from-accent-gold to-accent-goldDark transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / heroSlides.length) * 100}%` }}
          />
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-dark-800 border-y border-dark-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-gold/20 to-accent-goldDark/20 rounded-xl flex items-center justify-center border border-accent-gold/30">
                  <feature.icon className="w-6 h-6 text-accent-gold" />
                </div>
                <div>
                  <h3 className="font-body font-semibold text-white">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
                Shop by Category
              </h2>
              <p className="mt-2 text-gray-400">Find exactly what you need</p>
            </div>
            <Link
              to="/products"
              className="hidden sm:flex items-center gap-2 text-accent-gold hover:text-white transition-colors"
            >
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to={`/products?category=${cat.name}`}
                className="group relative h-64 rounded-2xl overflow-hidden neon-border"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display font-semibold text-xl text-white group-hover:text-accent-gold transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-gray-400">{cat.count} Products</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-dark-800 grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
                Featured Products
              </h2>
              <p className="mt-2 text-gray-400">Top picks from our collection</p>
            </div>
            <Link
              to="/products"
              className="hidden sm:flex items-center gap-2 text-accent-gold hover:text-white transition-colors"
            >
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-20 bg-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-gold/10 to-accent-goldDark/10" />
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-accent-gold/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark-800 rounded-3xl p-8 sm:p-12 neon-border flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-accent-gold font-semibold uppercase tracking-wider">Limited Time Offer</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2">
                Up to 40% Off Gaming GPUs
              </h2>
              <p className="text-gray-400 mt-4 max-w-lg">
                Upgrade your gaming experience with our exclusive deals on the latest graphics cards. 
                Don't miss out on these incredible savings!
              </p>
            </div>
            <Link
              to="/deals"
              className="flex-shrink-0 px-8 py-4 bg-gradient-to-r from-accent-gold to-accent-goldDark rounded-xl font-body font-semibold text-lg text-dark-900 hover:shadow-lg hover:shadow-accent-gold/30 transition-all duration-300"
            >
              Shop Deals
            </Link>
          </div>
        </div>
      </section>

      {/* Hot Deals */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
                🔥 Hot Deals
              </h2>
              <p className="mt-2 text-gray-400">Limited time offers you don't want to miss</p>
            </div>
            <Link
              to="/deals"
              className="hidden sm:flex items-center gap-2 text-accent-gold hover:text-white transition-colors"
            >
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dealsProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Stay Updated
          </h2>
          <p className="mt-4 text-gray-400">
            Subscribe to our newsletter for exclusive deals, new product launches, and tech tips.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-dark-700 border border-dark-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-accent-gold/50 transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-accent-gold to-accent-goldDark rounded-xl font-body font-semibold text-dark-900 hover:shadow-lg hover:shadow-accent-gold/30 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
