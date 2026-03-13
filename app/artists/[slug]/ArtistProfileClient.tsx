'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Play, MoreHorizontal, Flame, Cloud } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Artist } from '@/lib/artists'
import { Album } from '@/lib/albums'

interface ArtistProfileClientProps {
  artist: Artist
  albums: Album[]
}

export default function ArtistProfileClient({ artist, albums }: ArtistProfileClientProps) {
  const [activeTab, setActiveTab] = useState('voice-profile')
  
  const songsRef = useRef(null)
  const albumsRef = useRef(null)
  const profileRef = useRef(null)
  
  const songsInView = useInView(songsRef, { once: true, amount: 0.2 })
  const albumsInView = useInView(albumsRef, { once: true, amount: 0.2 })
  const profileInView = useInView(profileRef, { once: true, amount: 0.2 })

  const firstName = artist.name.split(' ')[0]

  const tracks = artist.tracks || [
    { id: 1, title: 'No more time', duration: '3:21', tags: [artist.name, 'Neo-soul'] },
    { id: 2, title: 'No more time', duration: '3:21', isHot: true, tags: [artist.name, 'Neo-soul'] },
    { id: 3, title: 'No more time', duration: '3:21', tags: [artist.name, 'Neo-soul'] },
    { id: 4, title: 'No more time', duration: '3:21', tags: [artist.name, 'Neo-soul'] },
    { id: 5, title: 'No more time', duration: '3:21', tags: [artist.name, 'Neo-soul'] },
    { id: 6, title: 'No more time', duration: '3:21', tags: [artist.name, 'Neo-soul'] },
    { id: 7, title: 'No more time', duration: '3:21', tags: [artist.name, 'Neo-soul'] },
    { id: 8, title: 'No more time', duration: '3:21', tags: [artist.name, 'Neo-soul'] },
    { id: 9, title: 'No more time', duration: '3:21', tags: [artist.name, 'Neo-soul'] },
    { id: 10, title: 'No more time', duration: '3:21', tags: [artist.name, 'Neo-soul'] },
  ]

  const leftTracks = tracks.slice(0, 5)
  const rightTracks = tracks.slice(5, 10)

  const defaultGenreBreakdown = [
    { title: 'Afropop & Bongo Flava', description: `${firstName}'s primary register. Their Swahili delivery has the melodic lilt specific to Bongo Flava and East African Afropop — not borrowed from West African styles, but built from this region's own tradition.` },
    { title: 'R&B & Neo-Soul', description: `When the production slows down, ${firstName}'s warm lower-middle register becomes the emotional anchor. Their R&B delivery bridges American influences with distinctly Nairobi storytelling.` },
    { title: 'Sheng Street Voice', description: `${firstName}'s Sheng delivery is tuned for urban Nairobi — rhythmically precise, culturally authentic. Optimal for Hip-Hop adjacent productions and mixed-language compositions.` },
    { title: 'Hook & Chorus Architecture', description: `Where ${firstName} excels most — building and holding a chorus. Tested across all tracks, their hook delivery scored above 9.3 on memorability in every session.` },
  ]

  const defaultVocalRangeMap = {
    upperLimit: { note: 'E5', description: `The ceiling. Bright and airy — best used for held final notes or a dramatic chorus lift. Use sparingly; this is the moment, not the method.`, score: 9.6 },
    headVoice: { note: 'C5', description: `Where the voice opens up. Light enough for falsetto-adjacent moments in Afropop and R&B, still controlled enough to carry a lyric cleanly.`, score: 9.6 },
    powerZone: { note: 'A4', description: `Full voice, full strength. This is where ${firstName} is loudest without effort — the natural home of a big chorus or an anthemic hook. If your song has a peak moment, put it here.`, score: 9.6 },
    sweetSpot: { note: 'E4', description: `The most natural, most relaxed part of ${firstName}'s range. Verses, pre-choruses, and conversational Sheng delivery land best here. The register where their tone is warmest and their dialect accuracy is sharpest.`, score: 9.6 },
    midChest: { note: 'C4', description: `The transition zone — chest voice starting to carry more weight. Works well for slower R&B verses and introspective moments where the voice needs to feel grounded rather than lifted.`, score: 9.6 },
    lowerLimit: { note: 'A3', description: `The floor. Deep chest resonance with a natural huskiness. Best for spoken-word adjacent moments, low-key intros, or neo-soul productions where warmth matters more than projection.`, score: 9.6 },
  }

  return (
    <main className="min-h-screen" style={{ background: '#FBF7F2' }}>
      <Header />
      
      {/* ==================== HERO SECTION ==================== */}
      <section className="pt-28 pb-20" style={{ background: '#FBF7F2' }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Artist Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={artist.image} 
                alt={artist.name}
                className="rounded-3xl w-full max-w-lg"
              />
            </motion.div>

            {/* Artist Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="font-heading font-black text-[48px] lg:text-[64px] text-text-primary leading-tight mb-6">
                {artist.name}
              </h1>
              
              <p className="text-text-secondary text-lg leading-relaxed mb-10">
                {artist.longBio || artist.description}
              </p>

              {/* Stats */}
              <div className="flex gap-16">
                <div>
                  <span className="font-heading font-black text-5xl text-primary">{artist.stats.tracksRecorded}</span>
                  <p className="text-text-secondary text-sm mt-1">Tracks Recorded</p>
                </div>
                <div>
                  <span className="font-heading font-black text-5xl text-primary">{artist.stats.albumFeatures}</span>
                  <p className="text-text-secondary text-sm mt-1">Album Feature</p>
                </div>
                <div>
                  <span className="font-heading font-black text-5xl text-primary">{artist.stats.dialects}</span>
                  <p className="text-text-secondary text-sm mt-1">Dialects</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ==================== SONGS SECTION ==================== */}
      <section ref={songsRef} className="py-20" style={{ background: '#FFF0EC' }}>
        <div className="container mx-auto px-6">
          
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={songsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading font-black text-[32px] lg:text-[40px] text-text-primary mb-4">
              15 songs. One story.
            </h2>
            <p className="text-text-secondary text-base max-w-xl mx-auto">
              Each track tested across vocal archetypes, dialects, and emotional registers before production.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-x-12"
            initial={{ opacity: 0, y: 30 }}
            animate={songsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-1">
              {leftTracks.map((track, index) => (
                <div 
                  key={`left-${track.id}`}
                  className="flex items-center py-4 border-b border-gray-200 hover:bg-white/50 transition-colors rounded-lg px-2 group cursor-pointer"
                >
                  <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center mr-4 group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                    <Play className="w-4 h-4 text-gray-500 group-hover:text-primary" />
                  </button>
                  
                  <div className="w-8 flex items-center">
                    {track.isHot ? (
                      <Flame className="w-5 h-5 text-primary" />
                    ) : (
                      <span className="text-text-secondary text-sm">{index + 1}</span>
                    )}
                  </div>
                  
                  <div className="flex-1 ml-2">
                    <p className="font-medium text-text-primary">{track.title}</p>
                    <div className="flex gap-2 mt-1">
                      {track.tags.map((tag, i) => (
                        <span key={i} className="text-xs text-text-secondary">• {tag}</span>
                      ))}
                    </div>
                  </div>
                  
                  <span className="text-text-secondary text-sm mr-4">{track.duration}</span>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreHorizontal className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
              ))}
            </div>

            <div className="space-y-1">
              {rightTracks.map((track, index) => (
                <div 
                  key={`right-${track.id}`}
                  className="flex items-center py-4 border-b border-gray-200 hover:bg-white/50 transition-colors rounded-lg px-2 group cursor-pointer"
                >
                  <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center mr-4 group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                    <Play className="w-4 h-4 text-gray-500 group-hover:text-primary" />
                  </button>
                  
                  <div className="w-8 flex items-center">
                    <span className="text-text-secondary text-sm">{index + 6}</span>
                  </div>
                  
                  <div className="flex-1 ml-2">
                    <p className="font-medium text-text-primary">{track.title}</p>
                    <div className="flex gap-2 mt-1">
                      {track.tags.map((tag, i) => (
                        <span key={i} className="text-xs text-text-secondary">• {tag}</span>
                      ))}
                    </div>
                  </div>
                  
                  <span className="text-text-secondary text-sm mr-4">{track.duration}</span>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreHorizontal className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ==================== ALBUMS SECTION ==================== */}
      <section ref={albumsRef} className="py-20" style={{ background: '#FFF0EC' }}>
        <div className="container mx-auto px-6">
          
          <motion.h2 
            className="font-heading font-black text-[32px] lg:text-[40px] text-text-primary text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={albumsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Albums {artist.name} appears on.
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={albumsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              {/* Get albums that feature this artist */}
              {albums.filter(album => album.artists.includes(artist.slug)).map((album, index) => (
                <div key={album.id} className="rounded-2xl overflow-hidden mb-4">
                  <Link href={`/albums/${album.slug}`}>
                    <img 
                      src={album.image}
                      alt={album.title}
                      className="w-full h-48 object-cover"
                    />
                  </Link>
                  <h3 className="font-heading font-bold text-xl text-text-primary mb-1">
                    <Link href={`/albums/${album.slug}`} className="hover:text-primary transition-colors">
                      {album.title}
                    </Link>
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">
                    {album.trackCount} {artist.name} Tracks
                  </p>
                  <button className="px-6 py-2 border-2 border-text-primary text-text-primary rounded-full font-semibold text-sm hover:bg-text-primary hover:text-white transition-colors">
                    <Link href={`/albums/${album.slug}`} className="text-white">
                      Listen to Album
                    </Link>
                  </button>
                </div>
              ))}

            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <Cloud className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="font-heading font-bold text-primary text-lg mb-1">
                Submit Your Song
              </h3>
              <p className="text-text-secondary text-sm mb-1">
                Test with {artist.name}
              </p>
              <h4 className="font-heading font-bold text-xl text-text-primary mb-4">
                Your track could<br />be next
              </h4>
              <button className="px-6 py-2 border-2 border-text-primary text-text-primary rounded-full font-semibold text-sm hover:bg-text-primary hover:text-white transition-colors">
                Get Early Access
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== VOICE PROFILE SECTION ==================== */}
      <section ref={profileRef} className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={profileInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading font-black text-[28px] lg:text-[40px] text-white leading-tight mb-8">
              What {firstName.toLowerCase()} can do, where {firstName.toLowerCase()} does it best,<br />
              and why it matters for your song.
            </h2>
            
            <div className="inline-flex bg-white rounded-full p-1">
              <button
                onClick={() => setActiveTab('voice-profile')}
                className={`px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeTab === 'voice-profile'
                    ? 'bg-primary text-white'
                    : 'bg-transparent text-text-primary hover:bg-gray-100'
                }`}
              >
                Voice Profile
              </button>
              <button
                onClick={() => setActiveTab('vocal-architecture')}
                className={`px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeTab === 'vocal-architecture'
                    ? 'bg-primary text-white'
                    : 'bg-transparent text-text-primary hover:bg-gray-100'
                }`}
              >
                Voice Architecture
              </button>
            </div>
          </motion.div>

          {/* Voice Profile Tab */}
          {activeTab === 'voice-profile' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-12">
                <h3 className="font-heading font-bold text-2xl lg:text-3xl text-white whitespace-nowrap">
                  Voice Profile Summary
                </h3>
                <p className="text-white/85 text-base leading-relaxed">
                  {artist.voiceProfileSummary || `${firstName} is wimbo.ai's most versatile vocal archetype. Their mezzo register sits in the warm middle — wide enough to carry an Afropop chorus, precise enough to land Sheng cadence, and nuanced enough to hold an R&B verse without losing intimacy. They were specifically shaped for the emotional complexity of modern East African pop: the kind of music that code-switches mid-song, carries real feeling, and still needs to work on a streaming playlist. If your song lives somewhere between the streets and the radio, ${firstName} is the voice you test it with first.`}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                <div className="bg-[#FFF0EC] rounded-3xl p-8">
                  <h4 className="font-heading font-bold text-xl text-text-primary text-center mb-8">
                    Vocal Capability Scores
                  </h4>
                  
                  <div className="relative w-64 h-64 mx-auto mb-8">
                    <svg viewBox="0 0 280 220" className="w-full h-full">
                      <motion.polygon 
                        points="140,40 210,75 210,145 140,180 70,145 70,75" 
                        fill="none" 
                        stroke="rgba(0,0,0,0.1)" 
                        strokeWidth="1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      />
                      <motion.polygon 
                        points="140,55 195,82 195,138 140,165 85,138 85,82" 
                        fill="none" 
                        stroke="rgba(0,0,0,0.1)" 
                        strokeWidth="1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      />
                      <motion.polygon 
                        points="140,70 180,90 180,130 140,150 100,130 100,90" 
                        fill="none" 
                        stroke="rgba(0,0,0,0.1)" 
                        strokeWidth="1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      />
                      <motion.polygon 
                        points="140,85 165,98 165,122 140,135 115,122 115,98" 
                        fill="none" 
                        stroke="rgba(0,0,0,0.1)" 
                        strokeWidth="1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      />
                      
                      <motion.polygon 
                        points="140,45 205,78 202,142 140,175 78,142 75,78" 
                        fill="rgba(255,92,53,0.4)" 
                        stroke="#FF5C35" 
                        strokeWidth="2"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
                        style={{ transformOrigin: 'center' }}
                      />
                      
                      <motion.circle
                        cx="100"
                        cy="90"
                        r="4"
                        fill="#FF5C35"
                        initial={{ scale: 0 }}
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      />
                      
                      <motion.text x="140" y="15" textAnchor="middle" fill="#1A1A1A" fontSize="12" fontWeight="600"
                        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.8 }}
                      >Melody</motion.text>
                      <motion.text x="260" y="75" textAnchor="end" fill="#1A1A1A" fontSize="12" fontWeight="600"
                        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.9 }}
                      >Range</motion.text>
                      <motion.text x="260" y="155" textAnchor="end" fill="#1A1A1A" fontSize="12" fontWeight="600"
                        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 1.0 }}
                      >Emotion</motion.text>
                      <motion.text x="140" y="210" textAnchor="middle" fill="#1A1A1A" fontSize="12" fontWeight="600"
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 1.1 }}
                      >Dialect</motion.text>
                      <motion.text x="20" y="155" textAnchor="start" fill="#1A1A1A" fontSize="12" fontWeight="600"
                        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 1.2 }}
                      >Delivery</motion.text>
                      <motion.text x="20" y="75" textAnchor="start" fill="#1A1A1A" fontSize="12" fontWeight="600"
                        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 1.3 }}
                      >Dynamics</motion.text>
                    </svg>
                  </div>

                  <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                    {[
                      { label: 'Melody Fit', value: artist.vocalScores?.melodyFit || 9.6 },
                      { label: 'Dialect Accuracy', value: artist.vocalScores?.dialectAccuracy || 9.6 },
                      { label: 'Vocal Range', value: artist.vocalScores?.vocalRange || 9.6 },
                      { label: 'Phrasing Dynamics', value: artist.vocalScores?.phrasingDynamics || 9.6 },
                      { label: 'Emotional Depth', value: artist.vocalScores?.emotionalDepth || 9.6 },
                      { label: 'Market Fit', value: artist.vocalScores?.marketFit || 9.6 },
                    ].map((score, index) => (
                      <motion.div 
                        key={score.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                      >
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-text-secondary">{score.label}</span>
                          <motion.span 
                            className="text-text-primary font-semibold"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 1.6 + index * 0.1 }}
                          >
                            {score.value}
                          </motion.span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full rounded-full"
                            style={{ background: 'linear-gradient(90deg, #FF5C35 0%, #FFB347 100%)' }}
                            initial={{ width: 0 }}
                            animate={{ width: `${(score.value / 10) * 100}%` }}
                            transition={{ duration: 0.8, delay: 1.5 + index * 0.1, ease: "easeOut" }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                   {(artist.genreBreakdown || defaultGenreBreakdown).map((genre, index) => (
                    <motion.div 
                      key={index} 
                      className="relative pl-4 border-l-2 border-white/30 hover:border-primary transition-colors duration-300"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.15 }}
                      whileHover={{ x: 5 }}
                    >
                      <h4 className="font-heading font-bold text-xl text-primary mb-2">
                        {genre.title}
                      </h4>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {genre.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

              </div>
            </motion.div>
          )}

          {/* Voice Architecture Tab */}
          {activeTab === 'vocal-architecture' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-12">
                <h3 className="font-heading font-bold text-2xl lg:text-3xl text-primary whitespace-nowrap">
                  Voice Architecture Summary
                </h3>
                <p className="text-white/85 text-base leading-relaxed">
                  {artist.voiceArchitectureSummary || `${firstName}'s range was specifically shaped for the production styles dominant in Nairobi's Afropop scene — tracks built around the E4–A4 sweet spot will sit naturally in their voice without strain or thinning. Their upper register brightens convincingly for chorus lifts, while their lower chest provides R&B depth in verses.`}
                </p>
              </div>

              <div className="bg-[#FFF8F5] rounded-3xl p-8 lg:p-12">
                <h4 className="font-heading font-bold text-xl text-text-primary mb-8">
                  Vocal Range Map
                </h4>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
                  {[
                    { key: 'upperLimit', label: 'Upper Limit', data: artist.vocalRangeMap?.upperLimit || defaultVocalRangeMap.upperLimit },
                    { key: 'sweetSpot', label: 'Sweet Spot ★', data: artist.vocalRangeMap?.sweetSpot || defaultVocalRangeMap.sweetSpot },
                    { key: 'headVoice', label: 'Head Voice', data: artist.vocalRangeMap?.headVoice || defaultVocalRangeMap.headVoice },
                    { key: 'midChest', label: 'Mid Chest', data: artist.vocalRangeMap?.midChest || defaultVocalRangeMap.midChest },
                    { key: 'powerZone', label: 'Power Zone', data: artist.vocalRangeMap?.powerZone || defaultVocalRangeMap.powerZone },
                    { key: 'lowerLimit', label: 'Lower Limit', data: artist.vocalRangeMap?.lowerLimit || defaultVocalRangeMap.lowerLimit },
                  ].map((range, index) => (
                    <motion.div
                      key={range.key}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    >
                      <h5 className="font-heading font-bold text-lg text-primary mb-2">
                        {range.data.note} — {range.label}
                      </h5>
                      <p className="text-text-secondary text-sm leading-relaxed mb-3">
                        {range.data.description}
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full rounded-full"
                            style={{ background: 'linear-gradient(90deg, #FF5C35 0%, #FFB347 100%)' }}
                            initial={{ width: 0 }}
                            animate={{ width: `${(range.data.score / 10) * 100}%` }}
                            transition={{ duration: 0.8, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                          />
                        </div>
                        <motion.span 
                          className="text-text-secondary text-sm font-medium"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                        >
                          {range.data.score}
                        </motion.span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

        </div>
      </section>

      <Footer />
    </main>
  )
}
