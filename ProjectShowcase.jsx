// src/components/ProjectShowcase.jsx
export default function ProjectShowcase() {
  return (
    <section className="py-16" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Project Showcase
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow rounded-xl">
            <div className="h-40 bg-gray-200 rounded mb-4"></div>
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p className="text-gray-600 mt-2">Deskripsi singkat project.</p>
          </div>

          <div className="p-6 bg-white shadow rounded-xl">
            <div className="h-40 bg-gray-200 rounded mb-4"></div>
            <h3 className="text-xl font-semibold">Project 2</h3>
            <p className="text-gray-600 mt-2">Deskripsi singkat project.</p>
          </div>

          <div className="p-6 bg-white shadow rounded-xl">
            <div className="h-40 bg-gray-200 rounded mb-4"></div>
            <h3 className="text-xl font-semibold">Project 3</h3>
            <p className="text-gray-600 mt-2">Deskripsi singkat project.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
