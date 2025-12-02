import React, { useState } from 'react';
import { Menu, X, ChevronRight, Phone, Mail, MapPin, Award, Users, TrendingUp, CheckCircle } from 'lucide-react';
import logo from "../assets/logo.png";
import hero from "../assets/hero.png";

const FlashFitnessRedesign = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const services = [
    { 
      title: 'Facility Design', 
      desc: 'Custom-designed fitness spaces tailored to your corporate environment with precision planning and architectural excellence.',
      icon: '01'
    },
    { 
      title: 'Gym Equipment', 
      desc: 'Premium commercial-grade equipment sourced from leading global manufacturers for professional facilities.',
      icon: '02'
    },
    { 
      title: 'Facility Management', 
      desc: 'Comprehensive operational support, staff training, and ongoing maintenance services for seamless performance.',
      icon: '03'
    },
    { 
      title: 'Executive Services', 
      desc: 'Exclusive wellness solutions designed specifically for C-suite and leadership team requirements.',
      icon: '04'
    }
  ];

  const offerings = [
    { 
      title: 'Healthcare Services', 
      desc: 'Comprehensive wellness programs including health screenings, nutrition counseling, and preventative care initiatives.',
      icon: '01'
    },
    { 
      title: 'Pharmaceutical Services', 
      desc: 'Professional supplement guidance, sports nutrition protocols, and pharmaceutical-grade product recommendations.',
      icon: '02'
    },
    { 
      title: 'Health & Fitness Technologies', 
      desc: 'Cutting-edge digital wellness platforms, wearable integration, and data-driven performance tracking systems.',
      icon: '03'
    }
  ];

  const metrics = [
    { value: '1,200+', label: 'Employees Trained', icon: Users },
    { value: '50+', label: 'Corporate Facilities', icon: Award },
    { value: '95%', label: 'Client Satisfaction', icon: TrendingUp },
    { value: '15yrs', label: 'Industry Experience', icon: CheckCircle }
  ];

  const partners = [
    'CORPORATE A',
    'CORPORATE B',
    'CORPORATE C',
    'CORPORATE D',
    'CORPORATE E',
    'CORPORATE F'
  ];

  const programs = [
    {
      title: 'Corporate Wellness',
      features: ['On-site fitness facilities', 'Group training sessions', 'Health assessments', 'Wellness workshops']
    },
    {
      title: 'Executive Health',
      features: ['Private training suites', 'Personalized programs', 'Nutritional planning', 'Recovery protocols']
    },
    {
      title: 'Facility Solutions',
      features: ['Turn-key installations', '24/7 maintenance', 'Equipment upgrades', 'Digital integration']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm z-50 border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <img src={logo} alt="" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              <a href="#services" className="text-gray-300 text-sm font-medium hover:text-white transition-colors uppercase tracking-wide">Services</a>
              <a href="#offerings" className="text-gray-300 text-sm font-medium hover:text-white transition-colors uppercase tracking-wide">Solutions</a>
              <a href="#why" className="text-gray-300 text-sm font-medium hover:text-white transition-colors uppercase tracking-wide">Why Flash</a>
              <a href="#programs" className="text-gray-300 text-sm font-medium hover:text-white transition-colors uppercase tracking-wide">Programs</a>
              <a href="#contact" className="text-gray-300 text-sm font-medium hover:text-white transition-colors uppercase tracking-wide">Contact</a>
              <button className="bg-[#AB1E29] text-white px-7 py-3 text-sm font-semibold hover:bg-[#8B1821] transition-all uppercase tracking-wide">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-6 border-t border-gray-800 mt-2">
              <div className="flex flex-col gap-4 pt-6">
                <a href="#services" className="text-gray-300 text-sm font-medium uppercase tracking-wide">Services</a>
                <a href="#offerings" className="text-gray-300 text-sm font-medium uppercase tracking-wide">Solutions</a>
                <a href="#why" className="text-gray-300 text-sm font-medium uppercase tracking-wide">Why Flash</a>
                <a href="#programs" className="text-gray-300 text-sm font-medium uppercase tracking-wide">Programs</a>
                <a href="#contact" className="text-gray-300 text-sm font-medium uppercase tracking-wide">Contact</a>
                <button className="bg-[#AB1E29] text-white px-6 py-3 text-sm font-semibold w-full uppercase tracking-wide">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Enhanced */}
      <section className="relative h-screen bg-black flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/50 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600')] bg-cover bg-center opacity-30"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="">
                <img src={hero} alt="" />
            </div>
            <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-none">
              ENERGIZING
              <br />
              YOUR SPACE
            </h1>
            <p className="text-gray-300 text-xl md:text-2xl mb-12 max-w-2xl leading-relaxed">
              Professional wellness infrastructure and fitness solutions designed for South Africa's leading corporate environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#AB1E29] text-white px-10 py-5 text-base font-semibold hover:bg-[#8B1821] transition-all inline-flex items-center justify-center gap-3 uppercase tracking-wide">
                Schedule Consultation <ChevronRight size={20} />
              </button>
              <button className="bg-transparent text-white border-2 border-white px-10 py-5 text-base font-semibold hover:bg-white hover:text-black transition-all uppercase tracking-wide">
                View Portfolio
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-6 h-10 border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50"></div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-black mb-4">
                    <Icon size={24} className="text-[#AB1E29]" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-black mb-2">{metric.value}</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">{metric.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced */}
      <section id="services" className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <div className="inline-block mb-6">
              <span className="text-[#AB1E29] text-xs font-bold uppercase tracking-widest">Our Services</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Comprehensive Fitness Solutions
            </h2>
            <div className="w-20 h-1 bg-[#AB1E29] mb-6"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              End-to-end wellness infrastructure designed and managed by industry experts with over 15 years of experience in the South African corporate fitness sector.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white border-2 border-gray-200 p-8 hover:border-[#AB1E29] transition-all group">
                <div className="flex items-center justify-center w-16 h-16 bg-black mb-8 group-hover:bg-[#AB1E29] transition-colors">
                  <span className="text-white font-bold text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-4 uppercase tracking-wide">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Offering - Enhanced */}
      <section id="offerings" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-[#AB1E29] text-xs font-bold uppercase tracking-widest">Integrated Solutions</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">Flash's Integrated Offering</h2>
            <div className="w-20 h-1 bg-[#AB1E29] mx-auto mb-8"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              A holistic approach to corporate wellness combining healthcare, pharmaceutical guidance, and advanced fitness technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offerings.map((offer, idx) => (
              <div key={idx} className="bg-gray-50 border-t-4 border-[#AB1E29] p-10 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-20 h-20 bg-black mb-8">
                  <span className="text-[#AB1E29] font-bold text-3xl">{offer.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4 uppercase tracking-wide">{offer.title}</h3>
                <p className="text-gray-600 leading-relaxed">{offer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-100 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-500 uppercase tracking-widest">Trusted by Leading Organizations</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {partners.map((partner, idx) => (
              <div key={idx} className="flex items-center justify-center">
                <div className="w-32 h-16 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 text-xs font-bold">{partner}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service & Maintenance CTA - Enhanced */}
      <section id="maintenance" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#AB1E29] via-black to-black"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1600')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block mb-6">
            <span className="text-white/80 text-xs font-bold uppercase tracking-widest border border-white/30 px-4 py-2">
              Premium Support Services
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
            SERVICE & MAINTENANCE
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-white/90 leading-relaxed">
            For a premium, high-end professional approach to facility management and ongoing equipment maintenance.
          </p>
          <button className="bg-white text-black px-10 py-5 text-base font-semibold hover:bg-gray-100 transition-all uppercase tracking-wide">
            Contact Our Team
          </button>
        </div>
      </section>

      {/* Why Flash Section - Enhanced */}
      <section id="why" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-6">
                <span className="text-[#AB1E29] text-xs font-bold uppercase tracking-widest">Our Advantage</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 leading-tight">
                WHY FLASH FITNESS
              </h2>
              <div className="w-20 h-1 bg-[#AB1E29] mb-10"></div>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#AB1E29] flex items-center justify-center">
                    <CheckCircle size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Industry Expertise</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Extensive in-depth knowledge and experience in the South African health and fitness industry spanning decades.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#AB1E29] flex items-center justify-center">
                    <CheckCircle size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Technology Integration</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Latest technology and digitization for a turn-key journey covering every element of your wellness needs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#AB1E29] flex items-center justify-center">
                    <CheckCircle size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Turnkey Solutions</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Outsource your solution completely and enjoy the benefits of your offering running like clockwork.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 aspect-square"></div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-[#AB1E29] text-xs font-bold uppercase tracking-widest">Wellness Programs</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">Tailored Program Offerings</h2>
            <div className="w-20 h-1 bg-[#AB1E29] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, idx) => (
              <div key={idx} className="bg-white p-10 border-2 border-gray-200 hover:border-black transition-colors">
                <h3 className="text-2xl font-bold text-black mb-8 uppercase tracking-wide">{program.title}</h3>
                <ul className="space-y-4">
                  {program.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-[#AB1E29] mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Custom Design - Enhanced */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-200 aspect-video border border-gray-300"></div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block mb-6">
                <span className="text-[#AB1E29] text-xs font-bold uppercase tracking-widest">Design Services</span>
              </div>
              <h2 className="text-5xl font-bold text-black mb-6 leading-tight">3D Custom Design</h2>
              <div className="w-20 h-1 bg-[#AB1E29] mb-8"></div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Visualize your complete fitness space before construction begins. Our advanced 3D modeling technology ensures every detail aligns perfectly with your corporate vision and spatial requirements.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-[#AB1E29] mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Photorealistic 3D renderings</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-[#AB1E29] mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Virtual walkthroughs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-[#AB1E29] mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Space optimization analysis</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Enhanced */}
      <section id="contact" className="py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-[#AB1E29] text-xs font-bold uppercase tracking-widest">Get In Touch</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">Contact Us</h2>
            <div className="w-20 h-1 bg-[#AB1E29] mx-auto mb-8"></div>
            <p className="text-gray-600 text-lg">We'd love to hear from you. Send us a message and we'll respond promptly.</p>
          </div>

          <div className="bg-white border-2 border-gray-200 p-10">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-3 uppercase tracking-wide">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border-2 border-gray-300 px-4 py-4 focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-3 uppercase tracking-wide">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border-2 border-gray-300 px-4 py-4 focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-3 uppercase tracking-wide">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border-2 border-gray-300 px-4 py-4 focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-3 uppercase tracking-wide">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full border-2 border-gray-300 px-4 py-4 focus:outline-none focus:border-black transition-colors resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-[#AB1E29] text-white py-5 font-semibold hover:bg-[#8B1821] transition-colors uppercase tracking-wide"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Enhanced */}
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-[#AB1E29] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">FF</span>
                </div>
                <span className="font-bold text-xl tracking-wider">FLASHFIT</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                South Africa's premier provider of corporate fitness solutions. Energizing corporate spaces with professional wellness infrastructure and comprehensive facility management services.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gray-800 hover:bg-[#AB1E29] transition-colors cursor-pointer"></div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-[#AB1E29] transition-colors cursor-pointer"></div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-[#AB1E29] transition-colors cursor-pointer"></div>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-sm uppercase tracking-widest">Quick Links</h3>
              <div className="space-y-3 text-sm">
                <a href="#services" className="block text-gray-400 hover:text-white transition-colors">Services</a>
                <a href="#offerings" className="block text-gray-400 hover:text-white transition-colors">Solutions</a>
                <a href="#why" className="block text-gray-400 hover:text-white transition-colors">Why Flash</a>
                <a href="#programs" className="block text-gray-400 hover:text-white transition-colors">Programs</a>
                <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-sm uppercase tracking-widest">Contact</h3>
              <div className="space-y-4 text-sm text-gray-400">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-1 flex-shrink-0 text-[#AB1E29]" />
                  <span>Axminister Drive<br />Johannesburg, South Africa 2055</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-[#AB1E29]" />
                  <span>011 568 3782</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[#AB1E29]" />
                  <a href="mailto:info@flash-fitness.co.za" className="hover:text-white transition-colors">
                    info@flash-fitness.co.za
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
              <p>© 2024 FlashFit. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Legal</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FlashFitnessRedesign;