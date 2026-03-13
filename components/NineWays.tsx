export default function NineWays() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-text-primary">
              Hear your song sung 9 different ways.
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              Before you commit to a direction, hear how your composition sounds across 9 AI vocal archetypes — soprano to baritone, gospel to secular, contemporary to traditional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Get Early Access
              </button>
              <button className="btn-secondary">
                See how it works
              </button>
            </div>
          </div>

          {/* Right Content - DAW Interface */}
          <div className="relative">
            <div className="bg-neutral-900 rounded-xl p-6 shadow-card-hover">
              {/* DAW Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-neutral-400 text-sm font-mono">wimbo_daw.exe</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-1 text-neutral-400 hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                    </svg>
                  </button>
                  <button className="p-1 text-neutral-400 hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Waveform Display */}
              <div className="space-y-4">
                {/* Track 1 */}
                <div className="bg-neutral-800 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-coral-400 text-sm font-medium">Vocal - Soprano</span>
                    <span className="text-neutral-400 text-xs">3:24</span>
                  </div>
                  <div className="h-12 bg-neutral-900 rounded flex items-center px-2">
                    <div className="flex items-center space-x-0.5 h-full">
                      {[...Array(50)].map((_, i) => (
                        <div 
                          key={i}
                          className="w-0.5 bg-coral-400 rounded-full"
                          style={{ height: `${Math.random() * 100}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Track 2 */}
                <div className="bg-neutral-800 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-teal-400 text-sm font-medium">Vocal - Alto</span>
                    <span className="text-neutral-400 text-xs">3:24</span>
                  </div>
                  <div className="h-12 bg-neutral-900 rounded flex items-center px-2">
                    <div className="flex items-center space-x-0.5 h-full">
                      {[...Array(50)].map((_, i) => (
                        <div 
                          key={i}
                          className="w-0.5 bg-teal-400 rounded-full"
                          style={{ height: `${Math.random() * 100}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Track 3 */}
                <div className="bg-neutral-800 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-purple-400 text-sm font-medium">Vocal - Baritone</span>
                    <span className="text-neutral-400 text-xs">3:24</span>
                  </div>
                  <div className="h-12 bg-neutral-900 rounded flex items-center px-2">
                    <div className="flex items-center space-x-0.5 h-full">
                      {[...Array(50)].map((_, i) => (
                        <div 
                          key={i}
                          className="w-0.5 bg-purple-400 rounded-full"
                          style={{ height: `${Math.random() * 100}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Playback Controls */}
              <div className="flex items-center justify-center space-x-4 mt-6">
                <button className="p-2 text-neutral-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.445 14.832A1 1 0 0010 14v-8a1 1 0 00-1.555-.832L3 9.168V6a1 1 0 00-2 0v8a1 1 0 002 0v-3.168l5.445 4z"/>
                  </svg>
                </button>
                <button className="p-3 bg-coral-600 text-white rounded-full hover:bg-coral-700 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
                  </svg>
                </button>
                <button className="p-2 text-neutral-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 10.832V14a1 1 0 002 0V6a1 1 0 00-2 0v3.168L4.555 5.168z"/>
                  </svg>
                </button>
              </div>

              {/* Timeline */}
              <div className="mt-4">
                <div className="h-1 bg-neutral-700 rounded-full">
                  <div className="h-1 bg-coral-600 rounded-full w-1/3"></div>
                </div>
                <div className="flex justify-between text-xs text-neutral-400 mt-1">
                  <span>1:08</span>
                  <span>3:24</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
