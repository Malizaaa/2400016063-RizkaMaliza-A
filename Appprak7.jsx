import React from "react";

import Navbar from "./components/Navbar7";
import HeroSection from "./components/HeroSection7";
import Pill from "./components/Pill7";
import Schedule from "./components/Schedule7";
import ProjectShowcase from "./components/ProjectShowcase7";
import Footer from "./components/Footer7";

export default function App() {
  return (
    <div className="wrap">

      <Navbar />

      <HeroSection />

      {/* FOUR PILLARS */}
      <section className="section" id="program" aria-label="Program">
        <div className="section-center">
          <h2>
            Empat Pilar <span style={{ color: "var(--accent)" }}>Ruang Ekspresi</span>
          </h2>
          <p className="lead muted">
            Komprehensif yang dirancang untuk mengembangkan potensi kreatif
            mahasiswa melalui pendekatan holistik.
          </p>
        </div>

        <div className="pillars">
          <Pill
            title="Ideation"
            text="Mengembangkan ide-ide kreatif dan inovatif melalui brainstorming dan workshop ideation yang terarah."
          />
          <Pill
            title="Creation"
            text="Mewujudkan ide menjadi karya nyata dengan dukungan tools dan teknologi terkini."
          />
          <Pill
            title="Collaboration"
            text="Bekerja sama dalam tim multidisiplin untuk menciptakan solusi yang komprehensif."
          />
          <Pill
            title="Guidance & Support"
            text="Mendapat bimbingan dari mentor berpengalaman serta akses resource pembelajaran."
          />
        </div>
      </section>

      <Schedule />

      <ProjectShowcase />

      <Footer />
    </div>
  );
}
