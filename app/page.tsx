export default function HomePage() {
  return (
    <section className="text-center max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold text-indigo-700 mb-4">
        Automatiza tus recordatorios con WhatsApp
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        FlujoPro.es ayuda a autónomos y empresas a ahorrar tiempo enviando 
        recordatorios automáticos por WhatsApp a sus clientes. 
      </p>
      <a 
        href="/niches/lawyers"
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700"
      >
        Explorar Nichos
      </a>
    </section>
  );
}
