const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold">Contacto</h3>
          <p className="mt-2 text-gray-400">¿Listo para empezar tu proyecto? ¡Contáctanos!</p>
          <a href="mailto:contacto@apcode.com" className="mt-4 inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Enviar correo
          </a>
        </div>
        <div className="mt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} AP code. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;