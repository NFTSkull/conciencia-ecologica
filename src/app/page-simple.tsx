export default function SimpleHomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Conciencia Ecológica
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Investigación para un futuro urbano sostenible
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
              Ver investigación
            </button>
            <button className="border-2 border-emerald-600 text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
              Explorar cursos
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Dra. Dainiz Noray Montoya García
          </h2>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto text-center">
            Doctora en Ciencias Ambientales especializada en termodinámica urbana y metabolismo social. 
            Mi investigación se centra en la sustentabilidad urbana y el desarrollo de estrategias 
            para ciudades más sostenibles.
          </p>
        </div>
      </section>
    </div>
  );
}
