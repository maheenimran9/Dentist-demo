
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { SERVICES, CLINIC_INFO, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      <SEO 
        title="Boutique Dental Clinic | Islamabad" 
        description="Premium dental care at Al-Awan Dental Clinic & Laboratory. Specialized clinical treatments and on-site lab work in Sohan, Islamabad."
      />
      
      {/* Spacious Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-32 pb-20 lg:py-0 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-12 z-10 order-2 lg:order-1">
            <div className="inline-block translate-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="bg-[#D4A5A5]/10 text-[#2C2C2C] px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border border-[#D4A5A5]/20 shadow-sm">
                Excellence Redefined
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-9xl font-black text-[#2C2C2C] leading-[0.9] tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              A Mastery <br />
              <span className="text-[#8A9A5B] italic font-serif font-normal">of</span> Smiles.
            </h1>
            
            <p className="text-xl md:text-2xl text-[#2C2C2C]/50 leading-relaxed max-w-xl font-medium animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              Experience the intersection of high-precision dentistry and artisanal craftsmanship in a sanctuary designed for your comfort.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto bg-[#8A9A5B] text-white px-16 py-7 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:bg-[#2C2C2C] transition-all shadow-2xl shadow-[#8A9A5B]/40 active:scale-95 text-center"
              >
                Secure Appointment
              </Link>
              <Link 
                to="/services" 
                className="w-full sm:w-auto bg-white/40 text-[#2C2C2C] px-16 py-7 rounded-full text-xs font-black uppercase tracking-[0.2em] border border-[#C5A059]/20 hover:border-[#8A9A5B] transition-all backdrop-blur-md text-center"
              >
                Our Portfolio
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative order-1 lg:order-2 animate-in fade-in slide-in-from-right-12 duration-1000">
            <div className="relative z-10">
              <div className="absolute -inset-6 border border-[#C5A059]/15 rounded-[4.5rem] pointer-events-none"></div>
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200" 
                alt="Elite Clinic Environment" 
                className="rounded-[4rem] shadow-2xl w-full aspect-[4/5] object-cover border-[12px] border-white/80"
              />
              
              {/* Decorative Stats Overlay */}
              <div className="absolute -bottom-10 -left-6 lg:-left-12 bg-white/95 backdrop-blur-md p-10 rounded-[3rem] shadow-2xl border border-[#D4A5A5]/20 animate-float hidden sm:flex flex-col gap-2">
                <span className="text-4xl font-black text-[#2C2C2C] tracking-tighter">9.9/10</span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C5A059]">Patient Satisfaction</span>
              </div>
            </div>
            
            {/* Background Light Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[#8A9A5B]/5 rounded-full blur-[120px] pointer-events-none -z-0"></div>
          </div>
        </div>
      </section>

      {/* Minimalism Features Section */}
      <section className="py-48 bg-white/30 border-y border-[#C5A059]/5">
        <div className="container mx-auto px-10 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            {[
              { title: "Sterile Purity", desc: "Rigorous sterilization workflows surpassing hospital-grade standards.", icon: "fa-shield-heart" },
              { title: "Bespoke Lab", desc: "Custom prosthetics handcrafted by specialized technicians on-site.", icon: "fa-gem" },
              { title: "Digital Precision", desc: "Advanced AI-assisted imaging for predictable and rapid results.", icon: "fa-microchip" }
            ].map((item, idx) => (
              <div key={idx} className="space-y-10 group cursor-default">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#8A9A5B] shadow-lg border border-[#C5A059]/10 group-hover:bg-[#8A9A5B] group-hover:text-white transition-all duration-700">
                  <i className={`fa-solid ${item.icon} text-2xl`}></i>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-[#2C2C2C] tracking-tighter">{item.title}</h3>
                  <p className="text-base text-[#2C2C2C]/50 font-medium leading-relaxed">{item.desc}</p>
                </div>
                <div className="w-16 h-[2px] bg-[#C5A059]/30 group-hover:w-full transition-all duration-1000"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Services Carousel-Style Grid */}
      <section className="py-48 bg-[#F5F5DC]">
        <div className="container mx-auto px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-12">
            <div className="max-w-2xl space-y-8">
              <span className="text-[#C5A059] font-black uppercase tracking-[0.4em] text-[10px]">What we do best</span>
              <h2 className="text-5xl md:text-7xl font-black text-[#2C2C2C] tracking-tighter leading-none">Artisanal Clinical <span className="text-[#D4A5A5]">Care</span></h2>
              <p className="text-xl text-[#2C2C2C]/40 font-medium italic">Transforming smiles with medical accuracy and an artist's touch.</p>
            </div>
            <Link to="/services" className="px-12 py-5 bg-[#2C2C2C] text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#8A9A5B] transition-all shadow-xl">
              Explore All Services
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {SERVICES.slice(0, 3).map((service) => (
              <div key={service.id} className="group relative bg-white rounded-[3.5rem] overflow-hidden border border-[#D4A5A5]/5 hover:shadow-2xl transition-all duration-1000 hover:-translate-y-6">
                <div className="h-96 overflow-hidden relative">
                   <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[40%] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-[#2C2C2C]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
                <div className="p-14 space-y-8">
                  <h3 className="text-3xl font-black text-[#2C2C2C] tracking-tight">{service.title}</h3>
                  <p className="text-sm text-[#2C2C2C]/50 font-medium leading-relaxed line-clamp-2">{service.description}</p>
                  <Link to="/services" className="inline-flex items-center gap-5 text-[#8A9A5B] font-black text-[10px] uppercase tracking-[0.3em] group/link">
                    Detailed Case
                    <span className="w-8 h-[1px] bg-[#C5A059] group-hover/link:w-16 transition-all duration-700"></span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Contrast Professional Identity */}
      <section className="py-48 bg-[#2C2C2C] text-white rounded-[6rem] lg:rounded-[12rem] mx-6 lg:mx-12 overflow-hidden shadow-2xl relative">
        <div className="container mx-auto px-10 lg:px-24 flex flex-col lg:flex-row items-center gap-24 relative z-10">
          <div className="lg:w-1/2 space-y-12">
            <span className="text-[#8A9A5B] font-black uppercase tracking-[0.4em] text-[10px]">Our Founder</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">The Science of <br /> <span className="italic font-serif font-normal text-[#F5F5DC]">Gentle</span> Care.</h2>
            <p className="text-2xl text-[#F5F5DC]/40 font-medium leading-relaxed italic">
              "We don't just treat teeth; we restore the confidence that comes with a healthy, vibrant life."
            </p>
            <div className="pt-10 border-t border-white/5 flex flex-col gap-2">
              <span className="text-3xl font-black">{CLINIC_INFO.doctor}</span>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#C5A059]">Senior Dental Surgeon</span>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="absolute -inset-8 border border-white/10 rounded-[5rem] rotate-3 pointer-events-none"></div>
             <img 
               src="https://images.pexels.com/photos/5867737/pexels-photo-5867737.jpeg" 
               alt="Dr. Nazir Ahmad Malik" 
               className="rounded-[4rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 aspect-[4/5] object-cover"
             />
          </div>
        </div>
        <div className="absolute top-0 right-0 p-24 opacity-[0.03] pointer-events-none">
          <i className="fa-solid fa-tooth text-[35rem] rotate-12"></i>
        </div>
      </section>

      {/* Boutique Testimonials */}
      <section className="py-48 bg-[#F5F5DC]">
        <div className="container mx-auto px-10 lg:px-20 text-center space-y-32">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-[#2C2C2C]">Patient <span className="text-[#8A9A5B]">Journeys</span></h2>
            <p className="text-xs font-black uppercase tracking-[0.5em] text-[#C5A059]">Clinical Stories</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="space-y-12 text-left group">
                <div className="text-[#D4A5A5]/20 group-hover:text-[#8A9A5B]/40 transition-colors duration-700">
                  <i className="fa-solid fa-quote-left text-5xl"></i>
                </div>
                <p className="text-2xl font-medium leading-snug text-[#2C2C2C]/80 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-6 pt-10 border-t border-[#C5A059]/10">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#8A9A5B] grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-black text-xl text-[#2C2C2C]">{testimonial.name}</h4>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C5A059] mt-1.5">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ultra-Clean Final CTA */}
      <section className="py-48 bg-[#F5F5DC]">
        <div className="container mx-auto px-10 lg:px-20">
          <div className="bg-white rounded-[5rem] p-20 lg:p-40 text-center border border-[#D4A5A5]/10 shadow-3xl relative overflow-hidden group">
            <div className="relative z-10 space-y-16">
              <h2 className="text-5xl md:text-8xl font-black text-[#2C2C2C] tracking-tighter leading-[0.85]">Join our circle of <br /> wellness today.</h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                <Link to="/contact" className="bg-[#8A9A5B] text-white px-20 py-7 rounded-full font-black uppercase tracking-[0.3em] text-xs hover:bg-[#2C2C2C] transition-all shadow-3xl shadow-[#8A9A5B]/20">
                  Book Slot
                </Link>
                <a href={`tel:${CLINIC_INFO.phone}`} className="text-[#2C2C2C] font-black uppercase tracking-[0.3em] text-xs hover:text-[#8A9A5B] transition-colors border-b-2 border-transparent hover:border-[#8A9A5B] pb-1">
                  Connect Directly
                </a>
              </div>
            </div>
            {/* Background Minimal Glow */}
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#D4A5A5]/5 rounded-full blur-[120px] group-hover:bg-[#8A9A5B]/10 transition-all duration-1000"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
