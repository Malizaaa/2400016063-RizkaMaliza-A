// src/components/Schedule.jsx
export default function Schedule() {
  return (
    <section className="py-16 bg-gray-50" id="schedule">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Jadwal Kegiatan
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="text-xl font-semibold">Hari 1</h3>
            <p className="text-gray-600 mt-2">Pengenalan & Pembukaan</p>
          </div>

          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="text-xl font-semibold">Hari 2</h3>
            <p className="text-gray-600 mt-2">Materi Dasar & Praktik</p>
          </div>

          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="text-xl font-semibold">Hari 3</h3>
            <p className="text-gray-600 mt-2">Presentasi & Evaluasi</p>
          </div>
        </div>
      </div>
    </section>
  );
}
