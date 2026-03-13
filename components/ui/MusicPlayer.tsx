'use client'

import { useState } from 'react'
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react'
import Button from './Button'
import { cn } from '@/lib/utils'

interface MusicPlayerProps {
  artist: string
  title: string
  genre: string
  className?: string
  isPlaying?: boolean
  onPlayPause?: () => void
}

export default function MusicPlayer({ 
  artist, 
  title, 
  genre, 
  className,
  isPlaying: externalIsPlaying = false,
  onPlayPause
}: MusicPlayerProps) {
  const [internalIsPlaying, setInternalIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(83) // 1:23 in seconds
  const [duration] = useState(225) // 3:45 in seconds
  
  const isPlaying = externalIsPlaying || internalIsPlaying
  const progress = (currentTime / duration) * 100

  const handlePlayPause = () => {
    if (onPlayPause) {
      onPlayPause()
    } else {
      setInternalIsPlaying(!internalIsPlaying)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className={cn(
      "bg-white rounded-xl shadow-card-hover p-4 float-animation",
      className
    )}>
      {/* Header */}
      <div className="flex items-center space-x-3 mb-3">
        <div className="w-12 h-12 bg-coral-100 rounded-lg flex items-center justify-center">
          {isPlaying ? (
            <Pause className="w-6 h-6 text-coral-600" />
          ) : (
            <Play className="w-6 h-6 text-coral-600" />
          )}
        </div>
        <div className="flex-1">
          <p className="font-medium text-sm">{artist}</p>
          <p className="text-xs text-text-secondary">{genre}</p>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="mb-3">
        <div className="h-1 bg-neutral-200 rounded-full overflow-hidden">
          <div 
            className="h-1 bg-coral-600 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-text-secondary mt-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center space-x-4">
        <button 
          className="p-1 text-text-secondary hover:text-coral-600 transition-colors"
          onClick={() => setCurrentTime(Math.max(0, currentTime - 10))}
        >
          <SkipBack className="w-4 h-4" />
        </button>
        
        <button 
          className="p-2 bg-coral-600 text-white rounded-full hover:bg-coral-700 transition-colors"
          onClick={handlePlayPause}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4" fill="currentColor" />
          ) : (
            <Play className="w-4 h-4" fill="currentColor" />
          )}
        </button>
        
        <button 
          className="p-1 text-text-secondary hover:text-coral-600 transition-colors"
          onClick={() => setCurrentTime(Math.min(duration, currentTime + 10))}
        >
          <SkipForward className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
