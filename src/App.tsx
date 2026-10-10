import React from 'react';
import { BackgroundIce } from './components/common/BackgroundIce';
import { Navbar } from './components/navigation/Navbar';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Skills } from './components/skills/Skills';
import { Projects } from './components/projects/Projects';
import { Experience } from './components/experience/Experience';
import { Education } from './components/education/Education';
import { Achievements } from './components/achievements/Achievements';
import { GithubActivity } from './components/github-activity/GithubActivity';
import { CodingProfiles } from './components/coding-profiles/CodingProfiles';
import { Resume } from './components/resume/Resume';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import { CustomCursor } from './components/common/CustomCursor';

export const App: React.FC = () => {
  React.useEffect(() => {
    document.title = 'k_likhith';
  }, []);

  return (
    <div className="relative min-h-screen bg-[#020408] text-slate-100 selection:bg-cyan-500/25 selection:text-cyan-200">
      {/* Custom Stylish Cursor (Fine pointers only) */}
      <CustomCursor />
      {/* Accessible Skip Link */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-sky-500 focus:text-slate-950 focus:font-semibold focus:rounded-lg focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Atmospheric Crystalline Background */}
      <BackgroundIce />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <GithubActivity />
        <CodingProfiles />
        <Resume />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
