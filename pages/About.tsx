
import React, { useState } from 'react';
// Add missing Link import from react-router-dom
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { CLINIC_INFO, FAQS } from '../constants';

const About: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="animate-in fade-in duration-1000">
      <SEO 
        title="Our Heritage | Al-Awan Dental Studio" 
        description="Learn about the philosophy and founders of Al-Awan Dental Clinic & Laboratory in Sohan, Islamabad."
      />
      
      {/* Cinematic Banner */}
      <section className="bg-[#8A9A5B] pt-56 pb-32 text-white relative overflow-hidden">
        <div className="container mx-auto px-10 lg:px-20 relative z-10 text-center space-y-8">
          <span className="text-white/40 font-black uppercase tracking-[0.5em] text-[10px]">The Studio Story</span>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85]">Health. <br /> Artistry. <br /> Trust.</h1>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-48 bg-[#F5F5DC]">
        <div className="container mx-auto px-10 lg:px-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-12">
              <h2 className="text-5xl md:text-6xl font-black text-[#2C2C2C] tracking-tighter leading-none">Beyond the <br /> <span className="text-[#8A9A5B]">Clinic Wall.</span></h2>
              <div className="w-24 h-[1px] bg-[#C5A059]"></div>
              <p className="text-xl md:text-2xl text-[#2C2C2C]/50 leading-relaxed font-medium italic">
                Located near Bilal Masjid in Sohan, Islamabad, we have established ourselves as a beacon of specialized care, blending the rigorous science of dentistry with the delicate touch of laboratory artistry.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-12">
              <div className="bg-white p-16 rounded-[4.5rem] border border-[#D4A5A5]/10 shadow-2xl space-y-8 group hover:-translate-y-4 transition-all duration-700">
                <div className="w-16 h-16 bg-[#8A9A5B]/10 rounded-2xl flex items-center justify-center text-[#8A9A5B] group-hover:bg-[#8A9A5B] group-hover:text-white transition-all">
                  <i className="fa-solid fa-user-doctor text-2xl"></i>
                </div>
                <h3 className="text-3xl font-black text-[#2C2C2C] tracking-tight">Clinical Stewardship</h3>
                <p className="text-base text-[#2C2C2C]/50 leading-relaxed font-medium">
                  Led by <strong>{CLINIC_INFO.doctor}</strong>, our medical ethos is centered on patient comfort and the preservation of natural vitality using evidence-based protocols.
                </p>
              </div>
              <div className="bg-[#2C2C2C] p-16 rounded-[4.5rem] shadow-4xl space-y-8 group hover:-translate-y-4 transition-all duration-700 text-white">
                <div className="w-16 h-16 bg-[#C5A059]/20 rounded-2xl flex items-center justify-center text-[#C5A059]">
                  <i className="fa-solid fa-flask-vial text-2xl"></i>
                </div>
                <h3 className="text-3xl font-black tracking-tight">Technical Mastery</h3>
                <p className="text-base text-[#F5F5DC]/40 leading-relaxed font-medium">
                  Supervised by <strong>{CLINIC_INFO.ceo}</strong>, our lab produces restorations that are not just medical devices, but custom-milled works of dental art.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimalism Trust Grid */}
      <section className="py-48 bg-white/40 border-y border-[#C5A059]/10">
        <div className="container mx-auto px-10 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
            {[
              { label: "Community Driven", icon: "fa-users-viewfinder" },
              { label: "Digital Workflow", icon: "fa-microscope" },
              { label: "Absolute Hygiene", icon: "fa-hands-bubbles" },
              { label: "Islamabad Core", icon: "fa-location-crosshairs" }
            ].map((item, idx) => (
              <div key={idx} className="text-center space-y-8 group">
                <div className="w-20 h-20 bg-[#F5F5DC] text-[#8A9A5B] rounded-[2.5rem] flex items-center justify-center mx-auto shadow-md border border-[#D4A5A5]/20 group-hover:bg-[#8A9A5B] group-hover:text-white transition-all duration-700">
                  <i className={`fa-solid ${item.icon} text-2xl`}></i>
                </div>
                <p className="font-black text-[#2C2C2C] text-[10px] uppercase tracking-[0.4em]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clean Minimalist FAQs */}
      <section className="py-48 bg-[#F5F5DC]">
        <div className="container mx-auto px-10 lg:px-20">
          <div className="max-w-4xl mx-auto space-y-24">
            <div className="text-center space-y-8">
              <span className="text-[#C5A059] font-black uppercase tracking-[0.5em] text-[10px]">Knowledge Base</span>
              <h2 className="text-5xl md:text-7xl font-black text-[#2C2C2C] tracking-tighter">Clear Answers.</h2>
            </div>

            <div className="space-y-10">
              {FAQS.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div 
                    key={faq.id} 
                    className={`transition-all duration-700 ${
                      isOpen 
                        ? 'bg-white rounded-[3.5rem] shadow-2xl p-12 border border-[#C5A059]/10' 
                        : 'bg-transparent rounded-none p-6 border-b border-[#C5A059]/10 hover:border-[#8A9A5B]/40'
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-center justify-between text-left group"
                    >
                      <span className={`text-2xl font-black tracking-tighter transition-colors duration-500 ${isOpen ? 'text-[#8A9A5B]' : 'text-[#2C2C2C]'}`}>
                        {faq.question}
                      </span>
                      <div className={`w-12 h-12 rounded-full border border-[#D4A5A5]/20 flex items-center justify-center transition-all duration-700 ${isOpen ? 'bg-[#8A9A5B] text-white rotate-180 border-transparent shadow-lg' : 'group-hover:bg-white'}`}>
                        <i className="fa-solid fa-plus text-xs"></i>
                      </div>
                    </button>
                    
                    <div className={`transition-all duration-700 ease-[cubic-bezier(0.95,0.05,0.795,0.035)] ${
                      isOpen ? 'max-h-[600px] opacity-100 mt-10' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}>
                      <p className="text-lg text-[#2C2C2C]/50 leading-relaxed font-medium italic pr-12">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Direct Interaction Card */}
            <div className="bg-[#2C2C2C] rounded-[5rem] p-20 lg:p-32 text-center relative overflow-hidden group shadow-4xl">
              <div className="relative z-10 space-y-12">
                <h3 className="text-white text-4xl md:text-6xl font-black tracking-tighter leading-none">Still curious?</h3>
                <p className="text-white/40 text-xl font-medium italic">Our specialist team provides personalized clarity for your unique clinical profile.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                  <a 
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="inline-flex items-center gap-4 bg-[#8A9A5B] text-white px-16 py-7 rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-white hover:text-[#2C2C2C] transition-all"
                  >
                    Direct Dial
                  </a>
                  <Link 
                    to="/contact"
                    className="inline-flex items-center gap-4 text-white font-black uppercase tracking-[0.3em] text-[10px] border-b-2 border-white/10 hover:border-[#8A9A5B] transition-all pb-1"
                  >
                    Inquiry Form
                  </Link>
                </div>
              </div>
              <div className="absolute top-0 right-0 p-20 opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity duration-1000">
                <i className="fa-solid fa-comment-medical text-[20rem]"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
