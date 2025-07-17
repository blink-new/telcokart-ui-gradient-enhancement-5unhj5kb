import { useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { 
  Menu, 
  X, 
  Smartphone, 
  Wifi, 
  Shield, 
  Zap, 
  Star, 
  Check,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from 'lucide-react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const plans = [
    {
      name: "Basic Plan",
      price: "₹299",
      period: "/month",
      features: ["2GB Daily Data", "Unlimited Calls", "100 SMS/day", "28 Days Validity"],
      popular: false,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Premium Plan", 
      price: "₹599",
      period: "/month",
      features: ["4GB Daily Data", "Unlimited Calls", "Unlimited SMS", "84 Days Validity", "Netflix Subscription"],
      popular: true,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Ultimate Plan",
      price: "₹999", 
      period: "/month",
      features: ["Unlimited Data", "Unlimited Calls", "Unlimited SMS", "365 Days Validity", "All OTT Apps", "Priority Support"],
      popular: false,
      gradient: "from-orange-500 to-red-500"
    }
  ]

  const devices = [
    {
      name: "iPhone 15 Pro",
      price: "₹1,34,900",
      originalPrice: "₹1,49,900",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
      features: ["A17 Pro Chip", "48MP Camera", "5G Ready"]
    },
    {
      name: "Samsung Galaxy S24",
      price: "₹79,999",
      originalPrice: "₹89,999", 
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop",
      features: ["Snapdragon 8 Gen 3", "50MP Camera", "AI Features"]
    },
    {
      name: "OnePlus 12",
      price: "₹64,999",
      originalPrice: "₹69,999",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop", 
      features: ["Snapdragon 8 Gen 3", "50MP Hasselblad", "Fast Charging"]
    }
  ]

  const services = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Plans",
      description: "Unlimited data and calling plans for every need"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Broadband",
      description: "High-speed fiber internet for home and office"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security",
      description: "Advanced cybersecurity solutions for businesses"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "5G Network",
      description: "Experience lightning-fast 5G connectivity"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="gradient-text text-2xl font-bold">TelcoKart</div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
                <a href="#plans" className="text-gray-700 hover:text-purple-600 transition-colors">Plans</a>
                <a href="#devices" className="text-gray-700 hover:text-purple-600 transition-colors">Devices</a>
                <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">Services</a>
                <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
              </div>
            </div>

            <div className="hidden md:block">
              <Button className="gradient-primary text-white hover:opacity-90 transition-opacity">
                Get Started
              </Button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-purple-600"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Home</a>
              <a href="#plans" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Plans</a>
              <a href="#devices" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Devices</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Services</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Contact</a>
              <div className="px-3 py-2">
                <Button className="w-full gradient-primary text-white">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero animate-gradient opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="gradient-secondary text-white px-4 py-2">
                  🚀 Now with 5G Network
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="gradient-text">Connect</span> to the
                  <br />
                  Future of <span className="gradient-text">Telecom</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Experience lightning-fast connectivity with our premium mobile plans, 
                  latest devices, and cutting-edge telecom solutions.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gradient-primary text-white hover:opacity-90 transition-opacity">
                  Explore Plans
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-purple-200 hover:bg-purple-50">
                  View Devices
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">50M+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">99.9%</div>
                  <div className="text-sm text-gray-600">Network Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 gradient-secondary rounded-3xl blur-3xl opacity-30 animate-gradient-fast"></div>
              <div className="absolute -inset-4 gradient-primary rounded-3xl blur-2xl opacity-20 animate-gradient"></div>
              <img 
                src="https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&h=600&fit=crop" 
                alt="5G Network"
                className="relative z-10 w-full h-auto rounded-3xl shadow-2xl gradient-shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="gradient-accent text-white mb-4">Mobile Plans</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Choose Your Perfect <span className="gradient-text">Plan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From basic connectivity to unlimited everything - find the plan that fits your lifestyle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative overflow-hidden gradient-hover glass-card ${plan.popular ? 'ring-2 ring-purple-500 gradient-shadow' : 'hover:shadow-xl'}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 gradient-primary text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader className={plan.popular ? 'pt-12' : ''}>
                  <div className="text-center">
                    <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full mt-6 bg-gradient-to-r ${plan.gradient} text-white hover:opacity-90 transition-opacity`}>
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Devices Section */}
      <section id="devices" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="gradient-secondary text-white mb-4">Latest Devices</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Premium <span className="gradient-text">Smartphones</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get the latest flagship devices with exclusive offers and flexible payment options
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {devices.map((device, index) => (
              <Card key={index} className="group overflow-hidden gradient-hover glass-card gradient-border">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={device.image} 
                    alt={device.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{device.name}</CardTitle>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold gradient-text">{device.price}</span>
                    <span className="text-gray-500 line-through">{device.originalPrice}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {device.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <Star className="w-4 h-4 text-yellow-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full gradient-accent text-white hover:opacity-90 transition-opacity">
                    Buy Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="gradient-dark text-white mb-4">Our Services</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Complete <span className="gradient-text">Telecom Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From mobile connectivity to enterprise solutions - we've got you covered
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center group gradient-hover glass-card">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary animate-gradient"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-pink-900/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join millions of satisfied customers and upgrade to our premium telecom services today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 transition-colors">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 transition-colors">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative bg-gray-900 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 gradient-dark opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="gradient-text text-2xl font-bold">TelcoKart</div>
              <p className="text-gray-400">
                Your trusted partner for all telecom needs. Connecting you to the future.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Youtube className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#plans" className="hover:text-white transition-colors">Mobile Plans</a></li>
                <li><a href="#devices" className="hover:text-white transition-colors">Devices</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">5G Network</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Broadband</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
                <li><a href="#" className="hover:text-white transition-colors">IoT Solutions</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>1800-123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>support@telcokart.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>Mumbai, India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TelcoKart. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App