
import React, { useState } from 'react';
import SEO from '../components/SEO';
import { CLINIC_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'General Dentistry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Our team will call you back shortly on ${formData.phone}.`);
    setFormData({ name: '', phone: '', service: 'General Dentistry', message: '' });
  };

  return (
    <div className="animate-in fade-in duration-1000">
      <SEO 
        title="Concierge | Al-Awan Dental" 
        description="Book your bespoke dental appointment at Al-Awan Dental Studio. Located centrally in Sohan, Islamabad."
      />

      <section className="bg-[#8A9A5B] pt-56 pb-32 text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-10 lg:px-20 relative z-10 space-y-8">
          <span className="text-white/40 font-black uppercase tracking-[0.5em] text-[10px]">Consultation</span>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85]">Reach Out.</h1>
        </div>
      </section>

      <section className="py-48 bg-[#F5F5DC]">
        <div className="container mx-auto px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-start">
            
            {/* Minimal Info Column */}
            <div className="lg:col-span-5 space-y-24">
              <div className="space-y-10">
                <h2 className="text-5xl font-black text-[#2C2C2C] tracking-tighter leading-none">The <br /> <span className="text-[#8A9A5B]">Studio</span> Location.</h2>
                <p className="text-xl text-[#2C2C2C]/40 font-medium italic leading-relaxed">
                  Centrally situated near the Islamabad Highway, our studio is designed to be a calm, accessible retreat for your healthcare needs.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-16">
                {[
                  { title: "Sohan Base", text: CLINIC_INFO.address, icon: "fa-map-pin", accent: "#D4A5A5" },
                  { title: "Direct Line", text: CLINIC_INFO.phone, icon: "fa-phone-volume", accent: "#8A9A5B" },
                  { title: "Operation Hours", text: "Mon - Sat: 09:00 - 21:00", icon: "fa-clock", accent: "#C5A059" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-10 group cursor-default">
                    <div className="w-16 h-16 bg-white rounded-[2rem] flex items-center justify-center flex-shrink-0 border border-[#C5A059]/10 group-hover:bg-[#2C2C2C] group-hover:text-white transition-all duration-700 shadow-xl">
                      <i className={`fa-solid ${item.icon} text-xl`} style={{ color: item.accent }}></i>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-black text-[#2C2C2C] text-xl tracking-tight">{item.title}</h3>
                      <p className="text-sm text-[#2C2C2C]/50 font-bold uppercase tracking-widest">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Minimal Map Placeholder Card */}
              <div className="bg-white p-12 rounded-[4rem] border border-[#D4A5A5]/10 shadow-3xl relative overflow-hidden group">
                <div className="relative z-10 space-y-8">
                  <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#D4A5A5]">Digital Map</span>
                  <h4 className="text-3xl font-black text-[#2C2C2C] tracking-tighter">Locate Us in Sohan</h4>
                  <p className="text-sm text-[#2C2C2C]/50 font-medium leading-relaxed italic">Directly opposite Malik Sohaib Car Parking, Hakim Dad Road.</p>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${CLINIC_INFO.location.lat},${CLINIC_INFO.location.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 text-[#8A9A5B] font-black text-[10px] uppercase tracking-[0.3em] group/btn"
                  >
                    Start Navigation <span className="w-8 h-[1px] bg-[#C5A059] group-hover/btn:w-16 transition-all"></span>
                  </a>
                </div>
              </div>
            </div>

            {/* Minimal Boutique Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white p-12 lg:p-24 rounded-[5rem] border border-[#C5A059]/5 shadow-4xl relative">
                <div className="relative z-10">
                  <div className="mb-20 space-y-6">
                    <h3 className="text-5xl font-black text-[#2C2C2C] tracking-tighter">Inquiry Suite.</h3>
                    <p className="text-[#2C2C2C]/40 font-medium italic">Our concierge team will reach out to confirm your session.</p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                      <div className="space-y-4">
                        <label className="text-[10px] font-black text-[#2C2C2C]/30 uppercase tracking-[0.4em] ml-2">Preferred Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="John Doe"
                          className="w-full px-8 py-6 rounded-[2.5rem] bg-[#F5F5DC]/30 border-none focus:outline-none focus:ring-2 focus:ring-[#8A9A5B]/20 transition-all text-base font-bold text-[#2C2C2C]"
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-black text-[#2C2C2C]/30 uppercase tracking-[0.4em] ml-2">Mobile Number</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="0300 0000000"
                          className="w-full px-8 py-6 rounded-[2.5rem] bg-[#F5F5DC]/30 border-none focus:outline-none focus:ring-2 focus:ring-[#8A9A5B]/20 transition-all text-base font-bold text-[#2C2C2C]"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] font-black text-[#2C2C2C]/30 uppercase tracking-[0.4em] ml-2">Area of Interest</label>
                      <div className="relative group">
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({...formData, service: e.target.value})}
                          className="w-full px-8 py-6 rounded-[2.5rem] bg-[#F5F5DC]/30 border-none focus:outline-none focus:ring-2 focus:ring-[#8A9A5B]/20 transition-all text-base font-bold text-[#2C2C2C] appearance-none cursor-pointer"
                        >
                          <option>General Care</option>
                          <option>Dental Implants</option>
                          <option>Orthodontic Suite</option>
                          <option>Artisanal Veneers</option>
                          <option>Laboratory Services</option>
                        </select>
                        <i className="fa-solid fa-chevron-down absolute right-8 top-1/2 -translate-y-1/2 text-[#2C2C2C]/20 text-xs pointer-events-none group-hover:text-[#8A9A5B] transition-colors"></i>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] font-black text-[#2C2C2C]/30 uppercase tracking-[0.4em] ml-2">Notes for Clinician</label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell us your goals..."
                        className="w-full px-8 py-8 rounded-[3rem] bg-[#F5F5DC]/30 border-none focus:outline-none focus:ring-2 focus:ring-[#8A9A5B]/20 transition-all text-base font-bold text-[#2C2C2C] resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#8A9A5B] text-white py-8 rounded-full font-black uppercase tracking-[0.4em] text-[10px] hover:bg-[#2C2C2C] shadow-4xl shadow-[#8A9A5B]/20 hover:shadow-black/20 transition-all active:scale-[0.98]"
                    >
                      Transmit Request
                    </button>
                  </form>
                </div>
                {/* Visual Accent */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#D4A5A5]/5 rounded-full blur-[120px] pointer-events-none -z-0 opacity-50"></div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
