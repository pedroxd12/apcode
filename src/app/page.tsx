import ServiceCard from "@/components/ServiceCard";
import Image from "next/image";

export default function Home() {
  const services = [
    {
      title: "Desarrollo de Software a Medida",
      description: "Creamos aplicaciones de escritorio, web y móviles que se adaptan perfectamente a tus operaciones. Ejemplo: Un sistema de inventario para tu tienda o una app para gestionar tus citas."
    },
    {
      title: "Creación de Páginas Web",
      description: "Diseñamos sitios web modernos y optimizados para cualquier dispositivo. Desde páginas de presentación (landing pages) hasta complejas tiendas en línea con carritos de compra."
    },
    {
      title: "Invitaciones Digitales",
      description: "Celebra tus momentos especiales con invitaciones web interactivas para graduaciones, bodas y más. Incluyen confirmación de asistencia, mapas y galerías de fotos."
    },
    {
      title: "Soporte Técnico Especializado",
      description: "Ofrecemos mantenimiento preventivo y correctivo para tus equipos. Ensamblamos computadoras a medida para gaming, diseño o trabajo de oficina."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Encabezado con el logo grande y animación */}
      <header className="flex flex-col items-center justify-center text-center py-20 px-4 sm:px-6 lg:px-8 h-screen section-fade-in">
        <Image src="/apcode_animation.svg" alt="ap code Logo" width={300} height={300} className="mb-8" priority />
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          <span className="block">Transformamos tus ideas en</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            soluciones digitales
          </span>
        </h1>
        <p className="mt-6 max-w-lg mx-auto text-xl text-gray-400 sm:max-w-3xl">
          En AP code, fusionamos creatividad y tecnología para llevar tu negocio al siguiente nivel.
        </p>
        <div className="mt-10">
          <a href="#services" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10">
            Explorar Servicios
          </a>
        </div>
      </header>

      {/* Sección de Servicios */}
      <section id="services" className="py-20 bg-gray-900 section-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-12">Nuestros Servicios</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {services.map((service, index) => (
              <ServiceCard key={index} title={service.title} description={service.description} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Nueva Sección de Proyectos */}
      <section id="projects" className="py-20 section-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-12">Nuestros Proyectos</h2>
          <div className="bg-gray-800 rounded-lg p-8 shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              {/* Usando el componente Image para cargar el SVG desde /public */}
              <Image 
                src="/serviceflow-logo.svg" 
                alt="Logo de ServiceFlow" 
                width={160} 
                height={130} 
                className="h-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">ServiceFlow</h3>
              <p className="text-gray-400">
                Es nuestro sistema de gestión de flujos de trabajo diseñado para optimizar la productividad de tu negocio. ServiceFlow es una solución multiplataforma (disponible en web, Android e iOS) que te permite automatizar tareas, dar seguimiento a procesos y colaborar con tu equipo en tiempo real. Es ideal para empresas que buscan estandarizar sus operaciones y mejorar la comunicación interna.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección "Sobre Nosotros" */}
      <section id="about" className="py-20 section-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-extrabold">Sobre Nosotros</h2>
            <p className="mt-4 text-lg text-gray-400">
              Somos un equipo apasionado por el desarrollo de software y la innovación. En ap code, nos dedicamos a entender tus necesidades para ofrecerte productos de alta calidad que impulsen tu crecimiento.
            </p>
          </div>
          <div className="flex justify-center">
             <Image src="/apcode_animation.svg" alt="ap code" width={200} height={200} />
          </div>
        </div>
      </section>
    </div>
  );
}