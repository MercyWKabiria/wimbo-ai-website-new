'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Play, Flame, MoreHorizontal } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { getAlbumBySlug } from '@/lib/albums'
import { getArtistBySlug } from '@/lib/artists'

export default function AlbumDetailPage() {
  const params = useParams()
  const album = getAlbumBySlug(params.slug as string)

  if (!album) {
    return <div>Album not found</div>
  }

  // Get featured artists data
  const featuredArtists = album.artists
    .map(slug => getArtistBySlug(slug))
    .filter(Boolean)

  // Split tracks into two columns
  const midpoint = Math.ceil(album.tracks.length / 2)
  const leftTracks = album.tracks.slice(0, midpoint)
  const rightTracks = album.tracks.slice(midpoint)

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-background-light pt-28 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Album Cover */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-square max-w-lg rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={album.image}
                  alt={album.title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Album Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="font-heading font-black text-[48px] lg:text-[64px] text-text-primary leading-tight mb-4">
                {album.title}
              </h1>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                {album.description}
              </p>

              {/* Stats */}
              <div className="flex gap-12">
                <div>
                  <p className="text-primary font-heading font-bold text-sm mb-1">Released</p>
                  <p className="text-text-primary font-semibold">{album.releaseYear}</p>
                </div>
                <div>
                  <p className="text-primary font-heading font-bold text-sm mb-1">Tracks</p>
                  <p className="text-text-primary font-semibold">{album.trackCount} Songs</p>
                </div>
                <div>
                  <p className="text-primary font-heading font-bold text-sm mb-1">Vocal Coaches</p>
                  <p className="text-text-primary font-semibold">{album.coachCount} Coaches</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Songs Section */}
      <section className="bg-background-light py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-black text-[32px] lg:text-[40px] text-text-primary mb-3">
              {album.trackCount} songs. One story.
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Each track tested across vocal archetypes, dialects, and emotional registers before production.
            </p>
          </motion.div>

          {/* Track List - Two Columns */}
          <div className="grid lg:grid-cols-2 gap-x-8 gap-y-0">
            {/* Left Column */}
            <div>
              {leftTracks.map((track, index) => (
                <motion.div
                  key={track.id}
                  className="flex items-center gap-4 py-4 px-4 rounded-xl hover:bg-white/50 transition-all duration-300 group border-b border-gray-100"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  {/* Play Button */}
                  <button className="w-10 h-10 rounded-full border-2 border-text-secondary/30 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-300">
                    <Play className="w-4 h-4 text-text-secondary group-hover:text-white transition-colors" fill="currentColor" />
                  </button>

                  {/* Track Number or Hot Icon */}
                  <div className="w-6 text-center">
                    {track.isHot ? (
                      <Flame className="w-5 h-5 text-primary" />
                    ) : (
                      <span className="text-text-secondary text-sm">{track.id}</span>
                    )}
                  </div>

                  {/* Track Info */}
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-text-primary truncate">{track.title}</p>
                    <div className="flex gap-2 text-xs text-text-secondary">
                      <Link href={`/artists/${track.artistSlug}`} className="text-primary hover:underline">
                        {track.artistName}
                      </Link>
                      <span>•</span>
                      <span>{album.category === 'gospel' ? 'Worship' : 'Afro-Pop'}</span>
                    </div>
                  </div>

                  {/* Duration */}
                  <span className="text-text-secondary text-sm">{track.duration}</span>

                  {/* More Options */}
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreHorizontal className="w-5 h-5 text-text-secondary" />
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Right Column */}
            <div>
              {rightTracks.map((track, index) => (
                <motion.div
                  key={track.id}
                  className="flex items-center gap-4 py-4 px-4 rounded-xl hover:bg-white/50 transition-all duration-300 group border-b border-gray-100"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  {/* Play Button */}
                  <button className="w-10 h-10 rounded-full border-2 border-text-secondary/30 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-300">
                    <Play className="w-4 h-4 text-text-secondary group-hover:text-white transition-colors" fill="currentColor" />
                  </button>

                  {/* Track Number or Hot Icon */}
                  <div className="w-6 text-center">
                    {track.isHot ? (
                      <Flame className="w-5 h-5 text-primary" />
                    ) : (
                      <span className="text-text-secondary text-sm">{track.id}</span>
                    )}
                  </div>

                  {/* Track Info */}
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-text-primary truncate">{track.title}</p>
                    <div className="flex gap-2 text-xs text-text-secondary">
                      <Link href={`/artists/${track.artistSlug}`} className="text-primary hover:underline">
                        {track.artistName}
                      </Link>
                      <span>•</span>
                      <span>{album.category === 'gospel' ? 'Worship' : 'Afro-Pop'}</span>
                    </div>
                  </div>

                  {/* Duration */}
                  <span className="text-text-secondary text-sm">{track.duration}</span>

                  {/* More Options */}
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreHorizontal className="w-5 h-5 text-text-secondary" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Voices on this Record Section */}
      <section className="bg-primary py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-black text-[32px] lg:text-[40px] text-white italic mb-4">
              The voices on<br />this record.
            </h2>
            <p className="text-white/80 max-w-md">
              {featuredArtists.length} AI vocal artists. Each selected for optimal fit with the album's sonic and emotional direction.
            </p>
          </motion.div>

          {/* Artist Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArtists.slice(0, 3).map((artist, index) => (
              <motion.div
                key={artist?.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/artists/${artist?.slug}`}>
                  <div className="bg-primary border-2 border-white/20 rounded-2xl overflow-hidden hover:border-white/50 transition-all duration-300 group">
                    <div className="aspect-[4/5] relative">
                      <Image
                        src={artist?.image || ''}
                        alt={artist?.name || ''}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading font-bold text-xl text-white mb-2">
                        {artist?.name}
                      </h3>
                      <p className="text-white/70 text-sm mb-4">
                        {artist?.tagline}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {artist?.tags.map((tag, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Show more artists if more than 3 */}
          {featuredArtists.length > 3 && (
            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-white/70">
                + {featuredArtists.length - 3} more artists on this album
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
