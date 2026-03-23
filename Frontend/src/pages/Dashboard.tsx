import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary selection:text-on-primary min-h-screen">
      {/* SideNavBar */}
      <aside className="h-screen w-64 fixed left-0 top-0 border-r border-outline-variant/15 bg-background flex flex-col py-8 space-y-2 z-50">
        <div className="px-8 mb-10">
          <Link to="/" className="font-headline font-bold text-primary tracking-widest text-2xl">KINETIC</Link>
        </div>
        <nav className="flex-1 space-y-1">
          <Link className="text-white/60 hover:text-primary px-4 py-3 mx-4 flex items-center gap-3 hover:translate-x-1 transition-transform font-label text-sm tracking-wide" to="/">
            <span className="material-symbols-outlined">home</span>
            Home
          </Link>
          <Link className="bg-primary text-on-primary rounded-md font-bold mx-4 flex items-center gap-3 px-4 py-3 hover:translate-x-1 transition-transform font-label text-sm tracking-wide shadow-[0_0_20px_rgba(89,238,80,0.15)]" to="/dashboard">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>grid_view</span>
            Dashboard
          </Link>
          <a className="text-white/60 hover:text-primary px-4 py-3 mx-4 flex items-center gap-3 hover:translate-x-1 transition-transform font-label text-sm tracking-wide" href="#">
            <span className="material-symbols-outlined">fitness_center</span>
            Exercises
          </a>
          <a className="text-white/60 hover:text-primary px-4 py-3 mx-4 flex items-center gap-3 hover:translate-x-1 transition-transform font-label text-sm tracking-wide" href="#">
            <span className="material-symbols-outlined">restaurant</span>
            Nutrition
          </a>
          <a className="text-white/60 hover:text-primary px-4 py-3 mx-4 flex items-center gap-3 hover:translate-x-1 transition-transform font-label text-sm tracking-wide" href="#">
            <span className="material-symbols-outlined">event_note</span>
            Plans
          </a>
        </nav>
        <div className="mt-auto px-4 space-y-1">
          <div className="mx-4 p-4 rounded-lg bg-surface-container mb-6">
            <div className="flex items-center gap-3 mb-3">
              <img 
                className="w-10 h-10 rounded-full object-cover" 
                alt="Alex Mercer" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuBYNmD2k_ZZVxBkcXyM78k_YYvqlMzFXlScUD-AOau6Xcc83kYolqZ7Up0i-tfJ5zkY52zAn8wr4HfBJDpPUYp4b8LTSprhaDcz1jcoujYuF6UF8BNvAZOZHO0FDGwQJFWkaquiJ64MlmUe1DkgMZqejWCop7f0_AcRHWF_uEfenrJtzZoaxpYZYtJ2yxVFqqb1npg0KdstyStWLp5GbZFxkSpYFlMo0rRJAH_8gM5CKM3dbz7HrZRtxDWYtDitp8t-LdipIhvLg"
              />
              <div>
                <p className="font-label text-xs font-bold text-on-surface">Alex Mercer</p>
                <p className="text-[10px] text-primary uppercase tracking-tighter">Elite Status</p>
              </div>
            </div>
            <button className="w-full py-2 bg-primary/10 text-primary font-label text-[10px] font-bold uppercase tracking-widest rounded hover:bg-primary hover:text-on-primary transition-all">
              Start Workout
            </button>
          </div>
          <a className="text-white/60 hover:text-primary px-4 py-3 flex items-center gap-3 hover:translate-x-1 transition-transform font-label text-sm tracking-wide" href="#">
            <span className="material-symbols-outlined">settings</span>
            Settings
          </a>
          <a className="text-white/60 hover:text-primary px-4 py-3 flex items-center gap-3 hover:translate-x-1 transition-transform font-label text-sm tracking-wide" href="#">
            <span className="material-symbols-outlined">help_outline</span>
            Support
          </a>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="ml-64 min-h-screen bg-background p-8">
        {/* Header Section */}
        <header className="mb-12 flex justify-between items-end">
          <div>
            <p className="font-label text-primary uppercase tracking-[0.3em] text-xs mb-2">Performance HUD</p>
            <h1 className="font-headline text-6xl font-black uppercase tracking-tighter leading-[0.85]">System<br/>Readout</h1>
          </div>
          <div className="text-right">
            <p className="font-label text-on-surface-variant text-sm uppercase">Current Session</p>
            <p className="font-headline text-3xl font-bold text-white">Hypertrophy A</p>
          </div>
        </header>

        {/* Dashboard Grid (Bento Style) */}
        <div className="grid grid-cols-12 gap-6">
          {/* Daily Summary Hero Card */}
          <div className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-none relative overflow-hidden group">
            <div 
              className="absolute inset-0 opacity-40 group-hover:scale-105 transition-transform duration-700 bg-cover bg-center" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBz8xKvsMUclm6NCbRmoPC5ToiswINTaQDFhDZKRVGvfu8NRtoZS_pbFtI6EUxBA3ZNJiCLw3hC-R5xYoIyvxfmrEE7DDEL1c-7RXl_QaIskScorrcifMbhmfR7nYFUdW9kbit9NVa_W0bG2Kxypfldvl7-G-wGWsrZxrQ09n9C6CRT0u7rVAGDwMZP2FbdFKVoAEZPrb9yfhnpFA9ovEehU6mO6hyD9JjeuGb3fxMlCMKkutQZcEncNR1lkd-51u97y9jEbtpxoM')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent"></div>
            <div className="relative p-10 h-full flex flex-col justify-end">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-primary text-on-primary font-label font-bold text-xs px-3 py-1 rounded-full uppercase tracking-widest">In Progress</span>
                <span className="text-white/60 font-label text-xs uppercase tracking-widest">45m Elapsed</span>
              </div>
              <h2 className="font-headline text-5xl font-black text-white uppercase mb-4 leading-none">Chest &amp; Triceps<br/>Dominance</h2>
              <div className="flex gap-12 mt-4">
                <div>
                  <p className="font-label text-[10px] text-primary uppercase tracking-widest mb-1">Volume</p>
                  <p className="font-headline text-2xl font-bold">12,400 <span className="text-xs text-white/40 font-label uppercase">kg</span></p>
                </div>
                <div>
                  <p className="font-label text-[10px] text-primary uppercase tracking-widest mb-1">Heart Rate</p>
                  <p className="font-headline text-2xl font-bold">142 <span className="text-xs text-white/40 font-label uppercase">bpm</span></p>
                </div>
                <div>
                  <p className="font-label text-[10px] text-primary uppercase tracking-widest mb-1">Efficiency</p>
                  <p className="font-headline text-2xl font-bold">94 <span className="text-xs text-white/40 font-label uppercase">%</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Macro Tracker Card */}
          <div className="col-span-12 lg:col-span-4 bg-surface-container-high p-8 flex flex-col justify-between border-l-4 border-primary shadow-[0_0_20px_rgba(89,238,80,0.05)]">
            <div>
              <h3 className="font-headline text-xl font-bold text-white uppercase tracking-tighter mb-8 flex items-center justify-between">
                Fuel Intake
                <span className="material-symbols-outlined text-primary">restaurant_menu</span>
              </h3>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-label text-xs uppercase text-white/60 tracking-widest">Protein</span>
                    <span className="font-headline text-lg">168 / 200g</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-highest">
                    <div className="h-full bg-primary" style={{ width: '84%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-label text-xs uppercase text-white/60 tracking-widest">Carbohydrates</span>
                    <span className="font-headline text-lg">210 / 250g</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-highest">
                    <div className="h-full bg-secondary" style={{ width: '84%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-label text-xs uppercase text-white/60 tracking-widest">Fats</span>
                    <span className="font-headline text-lg">45 / 70g</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-highest">
                    <div className="h-full bg-white/40" style={{ width: '64%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-outline-variant/20 flex items-center justify-between">
              <div>
                <p className="font-label text-[10px] text-white/40 uppercase tracking-widest">Total Kcal</p>
                <p className="font-headline text-3xl font-black text-primary">2,450</p>
              </div>
              <div className="text-right">
                <p className="font-label text-[10px] text-white/40 uppercase tracking-widest">Remaining</p>
                <p className="font-headline text-xl font-bold">550</p>
              </div>
            </div>
          </div>

          {/* Performance Chart Card */}
          <div className="col-span-12 lg:col-span-7 bg-surface-container p-8">
            <div className="flex justify-between items-start mb-10">
              <div>
                <h3 className="font-headline text-xl font-bold text-white uppercase tracking-tighter">Strength Velocity</h3>
                <p className="text-white/40 text-xs font-label uppercase tracking-widest">Squat Peak Performance (Monthly)</p>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-surface-container-highest text-primary">Week</button>
                <button className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/40">Month</button>
              </div>
            </div>
            <div className="h-64 flex items-end justify-between gap-4 px-2">
              <div className="w-full bg-surface-container-highest h-[40%] relative group">
                <div className="absolute inset-x-0 bottom-0 bg-primary/20 h-full group-hover:bg-primary/40 transition-all"></div>
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 font-label text-[10px] text-primary">140kg</div>
              </div>
              <div className="w-full bg-surface-container-highest h-[55%] relative group">
                <div className="absolute inset-x-0 bottom-0 bg-primary/20 h-full group-hover:bg-primary/40 transition-all"></div>
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 font-label text-[10px] text-primary">145kg</div>
              </div>
              <div className="w-full bg-surface-container-highest h-[50%] relative group">
                <div className="absolute inset-x-0 bottom-0 bg-primary/20 h-full group-hover:bg-primary/40 transition-all"></div>
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 font-label text-[10px] text-primary">142kg</div>
              </div>
              <div className="w-full bg-surface-container-highest h-[75%] relative group">
                <div className="absolute inset-x-0 bottom-0 bg-primary/20 h-full group-hover:bg-primary/40 transition-all"></div>
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 font-label text-[10px] text-primary">155kg</div>
              </div>
              <div className="w-full bg-surface-container-highest h-[85%] relative group border-t-2 border-primary shadow-[0_-5px_15px_rgba(89,238,80,0.2)]">
                <div className="absolute inset-x-0 bottom-0 bg-primary h-full opacity-30"></div>
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 font-label text-[10px] text-primary font-bold">160kg</div>
              </div>
            </div>
            <div className="flex justify-between mt-4 px-2">
              <span className="text-[10px] font-label text-white/20 uppercase">M01</span>
              <span className="text-[10px] font-label text-white/20 uppercase">M02</span>
              <span className="text-[10px] font-label text-white/20 uppercase">M03</span>
              <span className="text-[10px] font-label text-white/20 uppercase">M04</span>
              <span className="text-[10px] font-label text-white/20 uppercase text-primary">Today</span>
            </div>
          </div>

          {/* Activity Calendar Card */}
          <div className="col-span-12 lg:col-span-5 bg-surface-container p-8">
            <h3 className="font-headline text-xl font-bold text-white uppercase tracking-tighter mb-8">Schedule</h3>
            <div className="space-y-4">
              <div className="p-4 bg-surface-container-low flex items-center justify-between group hover:bg-surface-container-highest transition-all">
                <div className="flex items-center gap-4">
                  <div className="text-center w-10">
                    <p className="text-[10px] font-label text-white/40 uppercase">Thu</p>
                    <p className="text-lg font-headline font-bold text-primary">24</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-tight">Active Recovery</p>
                    <p className="text-[10px] font-label text-white/40 uppercase">08:00 AM • Mobility Flow</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-white/20 group-hover:text-primary transition-colors">chevron_right</span>
              </div>
              <div className="p-4 bg-surface-container-low flex items-center justify-between group hover:bg-surface-container-highest transition-all">
                <div className="flex items-center gap-4">
                  <div className="text-center w-10">
                    <p className="text-[10px] font-label text-white/40 uppercase">Fri</p>
                    <p className="text-lg font-headline font-bold">25</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-tight">Pull Strength</p>
                    <p className="text-[10px] font-label text-white/40 uppercase">05:30 PM • 90 Mins</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-white/20 group-hover:text-primary transition-colors">chevron_right</span>
              </div>
              <div className="p-4 bg-surface-container-low flex items-center justify-between border-l-2 border-secondary group hover:bg-surface-container-highest transition-all">
                <div className="flex items-center gap-4">
                  <div className="text-center w-10">
                    <p className="text-[10px] font-label text-white/40 uppercase">Sat</p>
                    <p className="text-lg font-headline font-bold text-secondary">26</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-tight">Physique Check-in</p>
                    <p className="text-[10px] font-label text-white/40 uppercase">All Day • Measurement</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-secondary group-hover:translate-x-1 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>flag</span>
              </div>
            </div>
          </div>
        </div>

        {/* Metric Stripe */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-surface-container-low p-6 flex flex-col items-center justify-center text-center">
            <span className="material-symbols-outlined text-primary mb-2">bolt</span>
            <p className="font-headline text-2xl font-black">98%</p>
            <p className="text-[10px] font-label text-white/40 uppercase tracking-[0.2em]">Readiness</p>
          </div>
          <div className="bg-surface-container-low p-6 flex flex-col items-center justify-center text-center">
            <span className="material-symbols-outlined text-primary mb-2">monitor_heart</span>
            <p className="font-headline text-2xl font-black">58</p>
            <p className="text-[10px] font-label text-white/40 uppercase tracking-[0.2em]">Resting HR</p>
          </div>
          <div className="bg-surface-container-low p-6 flex flex-col items-center justify-center text-center">
            <span className="material-symbols-outlined text-primary mb-2">bedtime</span>
            <p className="font-headline text-2xl font-black">7.5h</p>
            <p className="text-[10px] font-label text-white/40 uppercase tracking-[0.2em]">Sleep Quality</p>
          </div>
          <div className="bg-surface-container-low p-6 flex flex-col items-center justify-center text-center">
            <span className="material-symbols-outlined text-primary mb-2">water_drop</span>
            <p className="font-headline text-2xl font-black">3.2L</p>
            <p className="text-[10px] font-label text-white/40 uppercase tracking-[0.2em]">Hydration</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="ml-64 w-auto py-12 border-t border-outline-variant/15 bg-background flex flex-col md:flex-row justify-between items-center px-12 gap-8">
        <div className="font-headline font-black text-primary tracking-tighter">KINETIC</div>
        <div className="flex gap-8">
          <a className="font-body text-xs uppercase tracking-widest text-white/40 hover:text-primary transition-colors" href="#">Instagram</a>
          <a className="font-body text-xs uppercase tracking-widest text-white/40 hover:text-primary transition-colors" href="#">YouTube</a>
          <a className="text-white/40 hover:text-[#a5fa00] transition-colors font-body text-xs uppercase tracking-widest" href="#">Contact</a>
          <a className="text-white/40 hover:text-[#a5fa00] transition-colors font-body text-xs uppercase tracking-widest" href="#">Privacy</a>
          <a className="text-white/40 hover:text-[#a5fa00] transition-colors font-body text-xs uppercase tracking-widest" href="#">Terms</a>
        </div>
        <div className="font-body text-[10px] text-white/20 uppercase tracking-widest">
          © 2024 KINETIC EDITORIAL. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
