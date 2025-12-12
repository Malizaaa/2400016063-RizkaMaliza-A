export default function Footer() {
  return (
    <footer>
      <div className="fgrid">
        <div>
          <img
            src="/Frame 3 (1).png"
            alt="logo"
            style={{ height: 40, filter: "brightness(10) invert(1)" }}
          />
          <p style={{ marginTop: 10, color: "rgba(242, 244, 248, 0.9)" }}>
            Wadah kreatif untuk mahasiswa yang ingin mengembangkan potensi
            melalui ideation, creation, collaboration, dan guidance.
          </p>
        </div>

        <div>
          <h4 style={{ marginBottom: 10 }}>Quick Links</h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              color: "rgba(231,238,252,0.95)",
            }}
          >
            <li><a href="#home">Home</a></li>
            <li><a href="#program">Program</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 style={{ marginBottom: 10 }}>Programs</h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              color: "rgba(231,238,252,0.95)",
            }}
          >
            <li>Career Talks</li>
            <li>Extra Classes</li>
            <li>Project Work</li>
            <li>Mentoring</li>
          </ul>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: 18, color: "rgba(231,238,252,0.85)" }}>
        © 2025 Ruang Ekspresi | All Rights Reserved
      </div>
    </footer>
  );
}
