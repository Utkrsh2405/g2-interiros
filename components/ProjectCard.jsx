

export default function ProjectCard({ 
  image, 
  title, 
  location, 
  category, 
  year, 
  description,
  size = 'medium' 
}) {
  return (
    <div 
      className={`relative overflow-hidden rounded-lg group cursor-pointer ${
        size === 'large' ? 'col-span-full h-[650px]' : 'h-[732px]'
      }`}
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%), url('${image}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-0.5 bg-white"></div>
          <span className="text-white/90 uppercase tracking-widest text-base">{year}</span>
          <div className="w-1 h-1 rounded-full bg-white/60"></div>
          <span className="text-white/70 text-sm tracking-wide">{category}</span>
        </div>
        
        <h3 className="text-[32px] font-medium leading-tight mb-2">{title}</h3>
        <p className="text-white/80 text-base mb-3">{location}</p>
        <p className="text-white/90 text-[15px] leading-relaxed max-w-lg">{description}</p>
      </div>
    </div>
  );
}
