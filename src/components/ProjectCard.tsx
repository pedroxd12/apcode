import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  features: string[];
  platforms: string[];
  image: string;
  stats: {
    users: string;
    processes: string;
    efficiency: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  features,
  platforms,
  image,
  stats
}) => {
  return (
    <div className="group relative bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10 p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0">
                <Image 
                  src={image} 
                  alt={`Logo de ${title}`} 
                  width={60} 
                  height={60} 
                  className="w-12 h-12 md:w-15 md:h-15"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                {title}
              </h3>
            </div>
            
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              {description}
            </p>

            {/* Features */}
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-purple-400 mb-4 uppercase tracking-wider">
                Funcionalidades destacadas
              </h4>
              <div className="grid gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex-shrink-0"></div>
                    <span className="text-sm md:text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Platforms */}
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-emerald-400 mb-3 uppercase tracking-wider">
                Plataformas disponibles
              </h4>
              <div className="flex flex-wrap gap-2">
                {platforms.map((platform, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-slate-800/60 border border-slate-700 text-slate-300 text-sm rounded-full hover:border-purple-500/50 transition-colors duration-300"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-slate-800/40 rounded-xl border border-slate-700">
                <div className="text-xl md:text-2xl font-bold text-purple-400">{stats.users}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Usuarios</div>
              </div>
              <div className="text-center p-4 bg-slate-800/40 rounded-xl border border-slate-700">
                <div className="text-xl md:text-2xl font-bold text-pink-400">{stats.processes}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Procesos</div>
              </div>
              <div className="text-center p-4 bg-slate-800/40 rounded-xl border border-slate-700">
                <div className="text-xl md:text-2xl font-bold text-emerald-400">+{stats.efficiency}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Eficiencia</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
              
              {/* Image container */}
              <div className="relative z-10 p-8 bg-slate-800/30 rounded-2xl backdrop-blur-sm border border-slate-700 group-hover:border-purple-500/30 transition-all duration-500">
                <Image 
                  src={image} 
                  alt={`Logo de ${title}`} 
                  width={200} 
                  height={160} 
                  className="w-32 h-auto md:w-48 mx-auto group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;