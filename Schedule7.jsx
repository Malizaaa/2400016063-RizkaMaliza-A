export default function Schedule() {
  return (
    <section className="schedule" id="schedule" aria-label="Schedule">
      <div className="schedule-header">
        <h3>Jadwal & Program Kegiatan</h3>
        <div className="muted">
          Program terstruktur yang dirancang untuk mengoptimalkan pembelajaran
          dan pengembangan skill Setiap Sabtu.
        </div>
      </div>

      <div className="schedule-grid">
        <div className="sched-card">
          <h4 style={{ margin: "0 0 6px 0" }}>Sesi Pagi</h4>
          <div className="muted">09.00 - 12.00 WIB</div>
          <p style={{ marginTop: 8 }}>
            Workshop, Career Talks, dan Extra Classes intensif.
          </p>
        </div>

        <div className="sched-card">
          <h4 style={{ margin: "0 0 6px 0" }}>Sesi Sore</h4>
          <div className="muted">16.00 - 19.00 WIB</div>
          <p style={{ marginTop: 8 }}>
            Project work, mentoring dan Collaboration Session.
          </p>
        </div>
      </div>

      <div className="schedule-features">
        <div className="features-grid">
          {[
            {
              title: "Career Talks",
              desc: "Sesi sharing dari praktisi industri dan alumni sukses.",
            },
            {
              title: "Extra Classes",
              desc: "Kelas tambahan skill development dan workshop teknis.",
            },
            {
              title: "Project Work",
              desc: "Mengerjakan project nyata dengan bimbingan mentor.",
            },
            {
              title: "Mentoring",
              desc: "Sesi konsultasi personal dengan mentor berpengalaman.",
            },
          ].map((i) => (
            <div className="feature-card" key={i.title}>
              <div className="title">{i.title}</div>
              <div className="desc">{i.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
