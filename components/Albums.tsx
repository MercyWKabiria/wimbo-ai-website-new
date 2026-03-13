export default function Albums() {
  const albums = [
    {
      title: "My Devotion",
      description: "A praise and worship album rooted in surrender. Songs built for the moments when words run out and all you have left is a lifted hand.",
      backgroundImage: "linear-gradient(135deg, #6B46C1 0%, #9333EA 100%)",
      buttonText: "Listen to the Album",
      buttonStyle: "btn-secondary-white"
    },
    {
      title: "Of Love & Comebacks",
      description: "A record about the push and pull of relationships — falling in, falling apart, and finding your way back. Raw, honest, and deeply human.",
      backgroundImage: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
      buttonText: "Listen to the Album", 
      buttonStyle: "btn-secondary"
    }
  ]

  return (
    <section id="albums" className="section-padding bg-white w-full overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8">
          {albums.map((album, index) => (
            <div 
              key={index}
              className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden group"
            >
              {/* Background */}
              <div 
                className="absolute inset-0"
                style={{ background: album.backgroundImage }}
              >
                {/* Overlay Pattern */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8 lg:p-12 text-white">
                  <div className="space-y-6">
                    <h3 className="font-serif text-3xl lg:text-4xl font-bold">
                      {album.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed max-w-lg">
                      {album.description}
                    </p>
                    <button className={album.buttonStyle}>
                      {album.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
