import React from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, Volume2, SkipBack, SkipForward } from 'lucide-react'

/**
 * MusicPlayer component for the floating music player UI
 * 
 * @param {Object} props
 * @param {string} props.artist - Artist name
 * @param {string} props.title - Song title
 * @param {string} props.albumArt - Album art URL
 * @param {boolean} props.isPlaying - Play state
 * @param {number} props.progress - Playback progress (0-100)
 * @param {number} props.duration - Song duration in seconds
 * @param {number} props.currentTime - Current time in seconds
 * @param {function} props.onPlayPause - Play/pause handler
 * @param {function} props.onPrevious - Previous track handler
 * @param {function} props.onNext - Next track handler
 * @param {function} props.onSeek - Seek handler
 * @param {string} props.className - Additional CSS classes
 */
const MusicPlayer = ({
  artist = 'Narben',
  title = 'Afrobeat',
  albumArt = '/api/placeholder/60/60',
  isPlaying = false,
  progress = 30,
  duration = 180,
  currentTime = 54,
  onPlayPause,
  onPrevious,
  onNext,
  onSeek,
  className = '',
  ...props
}) => {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    if (onSeek) onSeek(percentage)
  }

  return (
    <motion.div
      className={`
        bg-white rounded-card shadow-2xl p-4 w-80
        ${className}
      `}
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      {...props}
    >
      {/* Album art and info */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
          <img 
            src={albumArt} 
            alt={`${title} by ${artist}`}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <h4 className="font-heading font-black text-text-primary text-sm truncate">
            {title}
          </h4>
          <p className="text-text-secondary text-xs truncate">
            {artist}
          </p>
        </div>
        
        <button className="text-text-secondary hover:text-primary transition-colors">
          <Volume2 size={18} />
        </button>
      </div>

      {/* Progress bar */}
      <div className="mb-4">
        <div 
          className="relative h-1 bg-background-light rounded-full cursor-pointer group"
          onClick={handleSeek}
        >
          <div 
            className="absolute h-full bg-primary rounded-full transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
          <div 
            className="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ left: `${progress}%`, transform: 'translate(-50%, -50%)' }}
          />
        </div>
        
        <div className="flex justify-between mt-1">
          <span className="text-xs text-text-secondary">
            {formatTime(currentTime)}
          </span>
          <span className="text-xs text-text-secondary">
            {formatTime(duration)}
          </span>
        </div>
      </div>

      {/* Playback controls */}
      <div className="flex items-center justify-center gap-4">
        <button 
          className="text-text-secondary hover:text-text-primary transition-colors"
          onClick={onPrevious}
        >
          <SkipBack size={20} />
        </button>
        
        <motion.button
          className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors"
          onClick={onPlayPause}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
        </motion.button>
        
        <button 
          className="text-text-secondary hover:text-text-primary transition-colors"
          onClick={onNext}
        >
          <SkipForward size={20} />
        </button>
      </div>
    </motion.div>
  )
}

export default MusicPlayer
