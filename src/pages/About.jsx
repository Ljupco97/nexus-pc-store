import { Users, Award, Truck, HeartHandshake } from 'lucide-react';

export default function About() {
  const stats = [
    { value: '50K+', label: 'Products Sold' },
    { value: '100K+', label: 'Happy Customers' },
    { value: '15+', label: 'Years Experience' },
    { value: '24/7', label: 'Support' },
  ];

  const values = [
    {
      icon: Users,
      title: 'Customer First',
      description: 'We prioritize your needs and satisfaction above everything else. Our team is dedicated to providing the best shopping experience.',
    },
    {
      icon: Award,
      title: 'Quality Products',
      description: 'We only stock genuine, high-quality products from trusted brands. Every item goes through rigorous quality checks.',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Get your components delivered quickly and safely. We partner with reliable shipping providers for timely delivery.',
    },
    {
      icon: HeartHandshake,
      title: 'Expert Support',
      description: 'Our knowledgeable team is always ready to help you make the right choices for your build.',
    },
  ];

  const team = [
    { name: 'Alex Chen', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop' },
    { name: 'Sarah Williams', role: 'Head of Operations', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop' },
    { name: 'Mike Johnson', role: 'Tech Lead', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop' },
    { name: 'Emily Davis', role: 'Customer Success', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop' },
  ];

  return (
    <div className="min-h-screen pt-24 bg-dark-900">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-gold/10 to-transparent" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            About <span className="gradient-text">NEXUS</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're passionate about helping gamers and creators build their dream machines. 
            Since 2009, we've been the trusted source for premium PC components.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-4xl font-bold gradient-text">{stat.value}</div>
                <div className="text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  NEXUS PC Store was born from a simple idea: make high-quality PC components accessible 
                  to everyone. What started in a small garage has grown into one of the most trusted 
                  names in the PC hardware industry.
                </p>
                <p>
                  Our founder, Alex Chen, was frustrated with the lack of reliable sources for PC parts. 
                  He decided to create a store that prioritizes quality, authenticity, and customer service 
                  above all else.
                </p>
                <p>
                  Today, we serve over 100,000 customers worldwide, helping them build everything from 
                  entry-level gaming PCs to high-end workstations. Our commitment to excellence remains 
                  unchanged.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden neon-border">
                <img
                  src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&h=450&fit=crop"
                  alt="Our store"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-accent-gold to-accent-goldDark rounded-2xl blur-2xl opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-white">Our Values</h2>
            <p className="text-gray-400 mt-2">What drives us every day</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-dark-700 rounded-2xl p-6 neon-border card-hover text-center"
              >
                <div className="w-14 h-14 mx-auto bg-gradient-to-br from-accent-gold/20 to-accent-goldDark/20 rounded-xl flex items-center justify-center border border-accent-gold/30 mb-4">
                  <value.icon className="w-7 h-7 text-accent-gold" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-white">Meet the Team</h2>
            <p className="text-gray-400 mt-2">The people behind NEXUS</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden neon-border mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-display font-semibold text-white">{member.name}</h3>
                <p className="text-accent-gold text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
