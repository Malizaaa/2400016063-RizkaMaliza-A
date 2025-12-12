export default function ProjectShowcase() {
  return (
    <section className="showcase" id="projects" aria-label="Project showcase">
      <div className="section-center">
        <h3 style={{ margin: 0, fontSize: 22 }}>
          Showcase <span style={{ color: "var(--accent)" }}>Student Projects</span>
        </h3>
        <div className="muted" style={{ marginTop: 6 }}>
          karya-karya inovatif yang telah dihasilkan oleh mahasiswa dalam
          program Ruang Ekspresi.
        </div>
      </div>

      <div className="showcase-wrap" style={{ marginTop: 18 }}>
        <div className="showcase-left">
          <span className="pill-badge">UI / UX</span>
          <h3 style={{ marginTop: 10 }}>Creative Portfolio Platform</h3>
          <p className="muted">
            Platform showcase karya mahasiswa dengan sistem rating dan feedback
            komunitas.
          </p>

          {[1, 2, 3].map((i) => (
            <div className="author" style={{ marginTop: 12 }} key={i}>
              <img src="/Frame 25.png" alt="avatar" />
              <div style={{ textAlign: "left", marginLeft: 12 }}>
                <div style={{ fontWeight: 700 }}>Budi Santoso</div>
                <div className="muted" style={{ fontSize: 13 }}>
                  Frontend Developer
                </div>
              </div>
            </div>
          ))}

          <div style={{ marginTop: 12, textAlign: "center" }}>
            <a
              className="cta"
              href="#"
              style={{
                background: "var(--accent)",
                display: "inline-block",
                padding: "9px 12px",
                borderRadius: 10,
              }}
            >
              Live Demo
            </a>
          </div>
        </div>

        <div className="showcase-right" aria-hidden="true">
          <img src="/Frame 4.png" alt="project image" />
        </div>
      </div>
    </section>
  );
}
