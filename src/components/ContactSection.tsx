function ContactSection() {
  return (
    <section id="contact" className="py-12 bg-lightGray">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-forestGreen mb-4">Contato</h2>
        <p className="text-gray-700 text-lg mb-6">
          Entre em contato conosco para saber mais sobre nossos projetos e como
          você pode ajudar.
        </p>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Seu Nome"
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Seu Email"
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Sua Mensagem"
              className="w-full p-3 border border-gray-300 rounded"
              rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-forestGreen hover:bg-green-600 text-white font-bold py-3 px-6 rounded"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;