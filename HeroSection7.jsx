export default function HeroSection() {
  return (
    <section className="hero" id="home" role="region" aria-label="Hero">
      <div className="hero-left">
        <h1>
          <span className="accent">RUANG EKSPRESI</span> — Wadah kreatif &
          kompetitif mahasiswa
        </h1>

        <div className="badges" aria-hidden="true">
          <div className="badge">Ideation</div>
          <div className="badge">Creation</div>
          <div className="badge">Collaboration</div>
          <div className="badge">Guidance</div>
        </div>
      </div>

      <div className="hero-right" aria-hidden="true">
        <div className="card-hero">
          <img src="/Frame 4.png" alt="hero image" />
        </div>
      </div>
    </section>
  );
}
