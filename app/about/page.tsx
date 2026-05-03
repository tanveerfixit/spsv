import React from 'react';
import { Shield, Info, Mail, AlertTriangle, GraduationCap, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'About Us | SPSV Study Platform',
  description: 'Learn more about the SPSV Study Platform and our mission to help drivers succeed.',
};

export default function AboutPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Page Title Section */}
      <div className="relative bg-white border-2 border-[#003057] p-8 md:p-12 shadow-xl overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-full bg-[#99cc33]/10 -skew-x-12 translate-x-16" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-8 bg-[#99cc33]" />
              <span className="text-[10px] font-black text-[#99cc33] uppercase tracking-[0.3em]">Institutional Repository</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#003057] uppercase italic tracking-tighter leading-tight">
              About Our <br className="hidden md:block" />
              <span className="text-[#99cc33]">Knowledge Hub</span>
            </h1>
          </div>
          <div className="bg-[#003057] p-6 text-white border-l-4 border-[#99cc33]">
            <p className="text-[10px] font-black uppercase tracking-widest leading-relaxed opacity-80 mb-2">Version Control</p>
            <p className="text-lg font-black italic tracking-tighter uppercase">SPSV.V2.2026</p>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Mission & Disclaimer */}
        <div className="lg:col-span-2 space-y-8">
          {/* Mission Section */}
          <section className="bg-white border-2 border-[#003057] p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-slate-50 border-2 border-slate-100 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-[#003057]" />
              </div>
              <div>
                <h2 className="text-xl font-black text-[#003057] uppercase tracking-tighter italic">Educational Focus</h2>
                <div className="h-0.5 w-12 bg-[#99cc33] mt-1" />
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-sm font-medium text-slate-600 leading-relaxed">
                The SPSV Study Platform is a specialized digital environment designed to assist candidates in preparing for the Small Public Service Vehicle (SPSV) entry test. 
              </p>
              <p className="text-sm font-medium text-slate-600 leading-relaxed">
                Our repository of knowledge covers all essential chapters of the official handbook, providing a simulated testing atmosphere to build confidence and competence for aspiring professional drivers in Ireland.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                'Full Chapter Coverage',
                'Simulated Exam Environment',
                'Performance Analytics',
                'Verified Study Content'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-[#99cc33]" />
                  <span className="text-xs font-bold text-[#003057] uppercase tracking-widest">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Legal Disclaimer Section */}
          <section className="bg-[#003057] p-8 border-b-8 border-[#99cc33] shadow-xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-white/5 border-2 border-white/10 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-[#99cc33]" />
              </div>
              <h2 className="text-xl font-black text-white uppercase tracking-tighter italic">Regulatory Notice</h2>
            </div>
            <div className="space-y-6">
              <div className="p-4 bg-black/20 border-l-4 border-[#99cc33]">
                <p className="text-xs font-bold text-[#99cc33] leading-relaxed">
                  This website is for educational purposes only. We are not affiliated with any government body or transport authority.
                </p>
              </div>
              <p className="text-[11px] font-medium text-white/60 leading-relaxed">
                The use of this platform does not guarantee success in the official SPSV examination. We are not responsible for your failure or responsible for your success. All attempts and results on this site are for preparation purposes only.
              </p>
            </div>
          </section>
        </div>

        {/* Right Column: Contact & Security */}
        <div className="space-y-8">
          {/* Contact Section */}
          <section className="bg-white border-2 border-[#003057] p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-slate-50 border-2 border-slate-100 flex items-center justify-center mb-6">
              <Mail className="w-8 h-8 text-[#003057]" />
            </div>
            <h2 className="text-xl font-black text-[#003057] uppercase tracking-tighter italic mb-4">Contact Support</h2>
            <p className="text-sm font-medium text-slate-500 mb-8 leading-relaxed">
              If you have any suggestions, reviews, or technical questions, please contact us directly.
            </p>
            <a 
              href="mailto:Admin@clarelab.com" 
              className="w-full bg-[#003057] text-white py-4 px-6 text-sm font-black uppercase tracking-widest hover:bg-black transition-all border-b-4 border-black/20 text-center"
            >
              Admin@clarelab.com
            </a>
          </section>

          {/* Security Section */}
          <section className="bg-[#99cc33] p-8 border-2 border-[#003057] relative group">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Shield className="w-12 h-12 text-[#003057]" />
            </div>
            <div className="relative z-10">
              <h2 className="text-xl font-black text-[#003057] uppercase tracking-tighter italic mb-4">Secure Storage</h2>
              <p className="text-sm font-bold text-[#003057] leading-relaxed">
                Your data and progress are stored securely to provide a personalized study experience and track your performance.
              </p>
            </div>
          </section>

          {/* Additional Info Box */}
          <div className="p-6 border-2 border-dashed border-slate-200 text-center">
            <Info className="w-5 h-5 text-slate-300 mx-auto mb-2" />
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Last Updated: May 2026 <br />
              SPSV Knowledge Hub
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
