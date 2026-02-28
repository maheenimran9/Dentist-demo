
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="animate-in fade-in duration-1000">
      <SEO 
        title="Clinical Portfolio | Al-Awan Dental" 
        description="A specialized portfolio of clinical treatments and handcrafted dental restorations. Explore our services in Sohan, Islamabad."
      />

      {/* Minimalist Hero Banner */}
      <section className="pt-56 pb-32 bg-[#2C2C2C] text-white relative overflow-hidden">
        <div className="container mx-auto px-10 lg:px-20 relative z-10 text-center space-y-10">
          <span className="text-[#8A9A5B] font-black uppercase tracking-[0.5em] text-[10px]">Technical Excellence</span>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85]">Clinical <br /> Artistry.</h1>
          <p className="text-[#F5F5DC]/40 max-w-2xl mx-auto text-xl font-medium italic">High-precision treatments engineered for clinical longevity and aesthetic perfection.</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
      </section>

      {/* Spacious Portfolio Grid */}
      <section className="py-48 bg-[#F5F5DC]">
        <div className="container mx-auto px-10 lg:px-20">
          <div className="grid grid-cols-1 gap-24 max-w-6xl mx-auto">
            {SERVICES.map((service, idx) => {
              const isExpanded = expandedId === service.id;
              return (
                <div 
                  key={service.id} 
                  className={`group bg-white rounded-[4.5rem] border transition-all duration-1000 overflow-hidden ${
                    isExpanded ? 'border-[#C5A059]/40 shadow-4xl scale-[1.03]' : 'border-[#D4A5A5]/10 hover:border-[#8A9A5B]/40 hover:shadow-2xl'
                  }`}
                >
                  <div className="flex flex-col lg:flex-row">
                    <div className={`relative lg:w-[48%] min-h-[500px] overflow-hidden transition-all duration-1000 ${isExpanded ? 'lg:w-[38%]' : ''}`}>
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-[#2C2C2C]/15"></div>
                      <div className="absolute top-12 left-12">
                        <span className="bg-[#F5F5DC]/95 backdrop-blur-md text-[#2C2C2C] text-[9px] font-black uppercase tracking-[0.4em] px-10 py-4 rounded-full shadow-2xl border border-[#C5A059]/20">
                          {service.id === 'lab' ? 'Master Lab' : `Dept. 0${idx + 1}`}
                        </span>
                      </div>
                    </div>

                    <div className="p-14 lg:p-24 flex-grow flex flex-col justify-center space-y-12">
                      <div className="space-y-8">
                        <h3 className="text-4xl md:text-6xl font-black text-[#2C2C2C] tracking-tighter leading-none">
                          {service.title}
                        </h3>
                        <p className="text-xl text-[#2C2C2C]/50 leading-relaxed font-medium italic">
                          {service.description}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-10 items-center pt-6">
                        <div className="inline-flex items-center gap-5 text-[10px] font-black uppercase tracking-[0.3em] text-[#8A9A5B]">
                          <i className="fa-solid fa-clock-rotate-left text-lg"></i>
                          Approx. {service.duration}
                        </div>
                        <button 
                          onClick={() => toggleExpand(service.id)}
                          className="px-12 py-5 bg-[#F5F5DC] rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-white transition-all border border-[#D4A5A5]/20 shadow-sm"
                        >
                          {isExpanded ? 'Minimize' : 'View Specifics'}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Sophisticated Expandable Specs */}
                  <div className={`transition-all duration-1000 ease-[cubic-bezier(0.95,0.05,0.795,0.035)] ${
                    isExpanded ? 'max-h-[2500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}>
                    <div className="px-14 lg:px-28 pb-28 pt-12 border-t border-[#F5F5DC]/80 bg-[#F5F5DC]/40">
                      <div className="grid grid-cols-1 xl:grid-cols-2 gap-24">
                        
                        <div className="space-y-16">
                          <h4 className="text-3xl font-black text-[#2C2C2C] tracking-tighter flex items-center gap-8">
                            <span className="w-16 h-[2px] bg-[#8A9A5B]"></span>
                            Key Indicators
                          </h4>
                          <ul className="space-y-10">
                            {service.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-start gap-10 group/li">
                                <span className="text-[#C5A059] font-black text-lg italic">0{i+1}</span>
                                <p className="text-base text-[#2C2C2C]/60 font-medium leading-relaxed group-hover/li:text-[#2C2C2C] transition-colors duration-500">{benefit}</p>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-16">
                          <h4 className="text-3xl font-black text-[#2C2C2C] tracking-tighter flex items-center gap-8">
                            <span className="w-16 h-[2px] bg-[#D4A5A5]"></span>
                            Care Lifecycle
                          </h4>
                          <div className="space-y-10">
                            <div className="bg-white/80 p-12 rounded-[3.5rem] border border-[#D4A5A5]/20 shadow-xl backdrop-blur-md">
                              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#D4A5A5] block mb-8">Pre-Procedure</span>
                              <p className="text-base text-[#2C2C2C]/50 italic font-medium leading-relaxed">"{service.precare}"</p>
                            </div>
                            <div className="bg-[#2C2C2C] p-12 rounded-[3.5rem] text-white shadow-3xl">
                              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#8A9A5B] block mb-8">Post-Procedure</span>
                              <p className="text-base text-[#F5F5DC]/60 italic font-medium leading-relaxed">"{service.aftercare}"</p>
                            </div>
                          </div>
                          <Link 
                            to="/contact" 
                            className="flex items-center justify-center gap-6 w-full bg-[#8A9A5B] text-white py-8 rounded-full font-black uppercase tracking-[0.3em] text-xs hover:bg-[#2C2C2C] transition-all shadow-3xl shadow-[#8A9A5B]/30"
                          >
                            <i className="fa-solid fa-calendar-check text-xl"></i>
                            Request Consultant call
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lab Integration Accent */}
      <section className="py-48 bg-[#2C2C2C] text-white overflow-hidden">
        <div className="container mx-auto px-10 lg:px-20 text-center space-y-16">
          <div className="w-32 h-[1px] bg-[#C5A059] mx-auto opacity-30"></div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">The Studio <br /> Experience.</h2>
          <p className="text-[#F5F5DC]/40 max-w-2xl mx-auto font-medium text-xl italic">Bridging the gap between surgery and craftsmanship. Our on-site laboratory ensures that what we plan is exactly what we deliver.</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 pt-16">
             {['Zirconia Pro', 'Flexible Poly', 'CAD/CAM Milled', 'Bespoke Resin'].map((item, i) => (
               <div key={item} className="p-12 bg-white/5 rounded-[4rem] border border-white/5 hover:bg-[#8A9A5B]/20 transition-all cursor-default group">
                 <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#C5A059] group-hover:text-white transition-colors">Item.0{i+1}</span>
                 <p className="mt-4 text-white font-bold tracking-tight">{item}</p>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
