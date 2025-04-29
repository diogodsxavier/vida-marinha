function ServicesSection() {
  return (
    <section id="services" className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-forestGreen mb-4">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded shadow-md">
            <h3 className="text-xl font-bold text-oceanBlue mb-2">Educação Ambiental</h3>
            <p>
              Oferecemos workshops e palestras para conscientizar sobre a
              preservação da vida marinha.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow-md">
            <h3 className="text-xl font-bold text-oceanBlue mb-2">Consultoria</h3>
            <p>
              Ajudamos empresas a implementarem práticas sustentáveis que
              beneficiam os oceanos.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow-md">
            <h3 className="text-xl font-bold text-oceanBlue mb-2">Projetos de Conservação</h3>
            <p>
              Trabalhamos em iniciativas para proteger habitats marinhos e
              espécies ameaçadas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;