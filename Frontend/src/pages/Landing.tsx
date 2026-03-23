import React from 'react';
import { Link } from 'react-router-dom';

const Landing: React.FC = () => {
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary selection:text-on-primary">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0e0e0e]/60 backdrop-blur-xl shadow-[0_0_20px_rgba(89,238,80,0.15)] flex justify-between items-center px-8 h-20 w-full font-['Epilogue'] font-black uppercase tracking-tighter leading-[0.9]">
        <div className="text-2xl font-black italic text-[#59ee50] tracking-widest">KINETIC</div>
        <div className="hidden md:flex gap-8 items-center">
          <Link className="text-[#59ee50] border-b-2 border-[#59ee50] pb-1" to="/">Home</Link>
          <Link className="text-white/70 hover:text-[#59ee50] transition-colors" to="/dashboard">Dashboard</Link>
          <a className="text-white/70 hover:text-[#59ee50] transition-colors" href="#">Exercises</a>
          <a className="text-white/70 hover:text-[#59ee50] transition-colors" href="#">Nutrition</a>
          <a className="text-white/70 hover:text-[#59ee50] transition-colors" href="#">Plans</a>
        </div>
        <div className="flex items-center gap-6">
          <span className="material-symbols-outlined text-white/70 hover:text-primary cursor-pointer transition-colors">notifications</span>
          <span className="material-symbols-outlined text-white/70 hover:text-primary cursor-pointer transition-colors">account_circle</span>
          <button className="md:hidden text-white">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Powerful athlete training" 
              className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000 scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMoMqrMUsEjQqlSH3bNcNNF9KP06PPCJn6zOSiPwMZxVe7Oh7DpBmPq1K3YoPxmF8GaJZqhCMHCMZEOzivQ4nfckG_MfEZMVCy0CYvEFCbM6JIK8Bi69uYkZfm2DgQQVspc0ZA2fTl6eMuIJnSFz0wa7WNjazcdKovq_79v--WfxxkRr4Vl0hUHVJH7b7Gyla7llv6X5owuN1hq0_jTIZFazI9aQAD3fKCqleM9zF6JhQ8gZqx3YOCj8n1pd78LvEweXdkTzsk1fs"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
          </div>
          <div className="container mx-auto px-8 relative z-10">
            <div className="max-w-4xl">
              <span className="inline-block font-label text-primary font-bold tracking-[0.3em] uppercase mb-4 text-glow">Performance Editorial — Vol. 01</span>
              <h1 className="font-headline text-7xl md:text-9xl font-black leading-[0.85] tracking-tighter uppercase mb-8">
                DOMINA TU <br/>
                <span className="text-transparent border-t border-b border-primary/30" style={{ WebkitTextStroke: '1.5px #59ee50' }}>POTENCIAL</span>
              </h1>
              <p className="font-body text-xl text-on-surface-variant max-w-xl mb-12 leading-relaxed">
                No es solo entrenamiento. Es ingeniería humana. Personalización de élite basada en datos, nutrición de precisión y seguimiento de rendimiento en tiempo real.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="bg-primary text-on-primary px-10 py-5 font-headline font-extrabold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-primary-container transition-all active:scale-95 group">
                  Empezar Ahora
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </button>
                <button className="bg-surface-variant text-primary px-10 py-5 font-headline font-extrabold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-surface-container-highest transition-all active:scale-95">
                  Ver Planes
                </button>
              </div>
            </div>
          </div>
          {/* Side Metric Overlay (Editorial Style) */}
          <div className="absolute bottom-20 right-8 hidden lg:block border-l-4 border-primary pl-6 py-4 bg-background/40 backdrop-blur-md">
            <div className="font-label text-4xl font-black text-white">98.4%</div>
            <div className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Efficiency Rate</div>
            <div className="mt-4 font-label text-4xl font-black text-primary">24/7</div>
            <div className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Active Tracking</div>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section className="py-32 px-8 bg-surface-container-low">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <h2 className="font-headline text-5xl font-black uppercase tracking-tighter max-w-md">
                SISTEMA DE <span className="text-primary">ALTO RENDIMIENTO</span>
              </h2>
              <p className="font-body text-on-surface-variant max-w-sm">
                Diseñado para aquellos que exigen lo mejor. Nuestra plataforma integra biometría avanzada con planes adaptativos.
              </p>
            </div>
            <div className="editorial-grid">
              {/* Large Feature Card */}
              <div className="col-span-12 md:col-span-8 bg-surface-container rounded-none p-12 relative overflow-hidden group">
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <span className="material-symbols-outlined text-primary text-5xl mb-8">fitness_center</span>
                    <h3 className="font-headline text-4xl font-extrabold uppercase mb-4">Planes Personalizados</h3>
                    <p className="text-on-surface-variant max-w-md text-lg">Algoritmos que evolucionan con cada repetición. Tu rutina nunca se estanca; se optimiza automáticamente según tu progreso.</p>
                  </div>
                  <div className="mt-12">
                    <a className="font-label text-primary font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all" href="#">
                      Explorar Metodología <span className="material-symbols-outlined">east</span>
                    </a>
                  </div>
                </div>
                <img 
                  alt="Workout detail" 
                  className="absolute top-0 right-0 w-1/2 h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl39f-RGNILlpia7ca99TCKAR-9-zLP8lopEplt0sUzulhmBWiNFRL7Wm9yTjhKJ3efcD9z4SQJb-DzzVXjlq4bRsZI1umVP2R7AHJfc2fHDvYr0oXXc7H42tg4gezAj7oa439-_IfUYHhYP-ICVqUWpzbj5PL6VTvAlANEo5jwkh9bOd_ZLQn2RQqqh4hA-vsyL4yYcTD_oCUXz_ue4AaB4ARrNjfm725BMEwDUnIzt6GF24AFfoic7v1HxD5T6ETW8qq7km2ekg"
                />
              </div>
              {/* Small Feature Card 1 */}
              <div className="col-span-12 md:col-span-4 bg-primary text-on-primary p-12 flex flex-col justify-between group">
                <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>restaurant</span>
                <div>
                  <h3 className="font-headline text-3xl font-extrabold uppercase mb-4 leading-tight">Guía Nutricional Elite</h3>
                  <p className="font-medium">Combustible de precisión. Macros calculados para tus objetivos específicos de rendimiento.</p>
                </div>
              </div>
              {/* Small Feature Card 2 */}
              <div className="col-span-12 md:col-span-4 bg-surface-container-high p-12 border-t-4 border-primary flex flex-col justify-between">
                <span className="material-symbols-outlined text-primary text-5xl">monitoring</span>
                <div>
                  <h3 className="font-headline text-3xl font-extrabold uppercase mb-4 leading-tight">Análisis Biométrico</h3>
                  <p className="text-on-surface-variant">Conecta tus dispositivos y visualiza tu recuperación, sueño y esfuerzo en un solo HUD.</p>
                </div>
              </div>
              {/* Medium Feature Card */}
              <div className="col-span-12 md:col-span-8 bg-surface-container rounded-none p-12 flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                  <h3 className="font-headline text-4xl font-extrabold uppercase mb-6">Comunidad Kinetic</h3>
                  <p className="text-on-surface-variant text-lg mb-8">Únete a una red global de atletas de alto rendimiento. Desafíos semanales y sesiones de entrenamiento en vivo con expertos.</p>
                  <div className="flex -space-x-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-2 border-background bg-surface-container-highest overflow-hidden">
                        <img 
                          alt="User" 
                          src={`https://lh3.googleusercontent.com/aida-public/AB6AXu${i === 1 ? 'DulNCBUZrorc4OmR2O7aF6Rs7KWPLr2fefev00TpQfl5g1TfYpjtg4gELL4f6dhfMPxziY5yxfjs1ODxISDcjvInd-G__anrgoX-VJKF4SxRHEYlO5EK_sEvxjPdbGRw3A_8fyqmlLkDMfpeHxfFwBBdWccQmarPDuUxtT2Zk9EtNNhxe03zFhuyZ-UwP3lSaFKdZ80GfwDHuAFeG4v9-0ygiqM5SFcMy4yKNqpws56brE5t-tTp2Auo74nGo8a_CMVwJIoRQWZUo' : i === 2 ? 'AJhPBOOHqnSIUcyN20QH1Vq_Vm1Y44FYnSpT_12uK9ezOGWI52OqXfHWb_pYpy2pcrgxkwehSiHWQXP39BRhVBx__Nm549sxctWe9MJmLybMywT6kxCEZtWJ8B5prFQLjPFicpR0MVT9mfs0kVS1oBz3FADweRLs-1peYy8Im5JIfBnXmEqLd14EPl8YENrVpMU1OndoGdShUggPHXRwEglVgO8710SxkO6FHMoDkbiVApGsSqTSj8vCBf4PxYYmjX6nIsnrlN9io' : 'Cx5h20O-P3AqJS3YA5Nzj3vXktCCb95nPJbldCU-gFev_uS23EIVe6r8ugyRt9p4RafvkBo11wxBfIICVaN4dJaS5_xWC7UVXHOpAaO8UG5t5qwwVo1IK-efjzB6ufJnroiwZAEct-SRBz2gSl2iQWQGRqMN_a8OObhbKiP8UGoJCnZWQ6__DBys83ZVnxv3UKZLSeuxQvm5Yw6L7ADiWhUEKsPrHt9Y8UhQlv09nqkrRM48kHQimCkLnPs7wjNC099z7X3O7U8o4'}`}
                        />
                      </div>
                    ))}
                    <div className="w-12 h-12 rounded-full border-2 border-background bg-surface-container-highest flex items-center justify-center font-label text-xs font-bold text-primary">
                      +2K
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/3 aspect-square bg-surface-container-highest flex items-center justify-center">
                  <span className="material-symbols-outlined text-8xl text-primary/20">groups</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-40 relative overflow-hidden">
          <div className="absolute inset-0 bg-mesh opacity-50"></div>
          <div className="container mx-auto px-8 relative z-10 text-center">
            <h2 className="font-headline text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-none">
              EL FUTURO <br/> <span className="text-primary">ES KINETIC</span>
            </h2>
            <p className="font-body text-xl text-on-surface-variant max-w-2xl mx-auto mb-12">
              Comienza tu transformación hoy. Suscríbete ahora y obtén acceso total a la plataforma de entrenamiento más avanzada del mercado.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-primary text-on-primary px-12 py-6 font-headline font-extrabold uppercase tracking-widest text-lg hover:shadow-[0_0_30px_rgba(89,238,80,0.4)] transition-all">
                Suscribirse $29/mes
              </button>
              <button className="bg-transparent border-2 border-outline-variant text-white px-12 py-6 font-headline font-extrabold uppercase tracking-widest text-lg hover:bg-white/5 transition-all">
                Prueba Gratuita
              </button>
            </div>
            <p className="mt-8 font-label text-xs text-on-surface-variant uppercase tracking-[0.2em]">Cancela en cualquier momento. Sin contratos a largo plazo.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 border-t border-[#484847]/15 bg-[#0e0e0e] flex flex-col md:flex-row justify-between items-center px-12 gap-8 font-['Manrope'] text-xs uppercase tracking-widest">
        <div className="font-['Epilogue'] font-black text-[#59ee50] text-xl tracking-tighter">KINETIC</div>
        <div className="flex gap-8">
          <a className="text-white/40 hover:text-[#a5fa00] transition-colors" href="#">Instagram</a>
          <a className="text-white/40 hover:text-[#a5fa00] transition-colors" href="#">YouTube</a>
          <a className="text-white/40 hover:text-[#a5fa00] transition-colors" href="#">Contact</a>
          <a className="text-white/40 hover:text-[#a5fa00] transition-colors" href="#">Privacy</a>
          <a className="text-white/40 hover:text-[#a5fa00] transition-colors" href="#">Terms</a>
        </div>
        <div className="text-white/40">© 2024 KINETIC EDITORIAL. ALL RIGHTS RESERVED.</div>
      </footer>
    </div>
  );
};

export default Landing;
