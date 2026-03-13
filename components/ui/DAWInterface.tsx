'use client'

import { useState } from 'react'
import { Play, Pause, SkipBack, SkipForward, Settings, Eye } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Track {
  id: string
  name: string
  color: string
  duration: number
  currentTime: number
  isMuted: boolean
}

interface DAWInterfaceProps {
  className?: string
}

export default function DAWInterface({ className }: DAWInterfaceProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(83) // 1:23 in seconds
  const [duration] = useState(225) // 3:45 in seconds
  
  const [tracks, setTracks] = useState<Track[]>([
    { id: '1', name: 'Vocal - Soprano', color: 'bg-coral-400', duration: 225, currentTime: 83, isMuted: false },
    { id: '2', name: 'Vocal - Alto', color: 'bg-teal-400', duration: 225, currentTime: 83, isMuted: false },
    { id: '3', name: 'Vocal - Baritone', color: 'bg-purple-400', duration: 225, currentTime: 83, isMuted: false }
  ])

  const progress = (currentTime / duration) * 100

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const generateWaveform = (track: Track) => {
    return Array.from({ length: 50 }, (_, i) => (
      <div 
        key={i}
        className={cn(
          "w-0.5 rounded-full transition-all duration-300",
          track.color
        )}
        style={{ 
          height: `${Math.random() * 100}%`,
          opacity: track.isMuted ? 0.3 : 1
        }}
      ></div>
    ))
  }

  const toggleMute = (trackId: string) => {
    setTracks(tracks.map(track => 
      track.id === trackId ? { ...track, isMuted: !track.isMuted } : track
    ))
  }

  return (
    <div className={cn(
      "bg-neutral-900 rounded-xl p-6 shadow-card-hover",
      className
    )}>
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
            <Settings className="w-4 h-4" />
          </button>
          <button className="p-1 text-neutral-400 hover:text-white transition-colors">
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Tracks */}
      <div className="space-y-4 mb-6">
        {tracks.map((track) => (
          <div key={track.id} className="bg-neutral-800 rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <span className={cn(
                "text-sm font-medium",
                track.isMuted ? "text-neutral-500" : "text-white"
              )}>
                {track.name}
              </span>
              <div className="flex items-center space-x-2">
                <span className="text-neutral-400 text-xs">{formatTime(track.duration)}</span>
                <button 
                  onClick={() => toggleMute(track.id)}
                  className={cn(
                    "text-xs px-2 py-1 rounded transition-colors",
                    track.isMuted 
                      ? "bg-red-500/20 text-red-400 hover:bg-red-500/30" 
                      : "bg-neutral-700 text-neutral-300 hover:bg-neutral-600"
                  )}
                >
                  {track.isMuted ? 'MUTED' : 'ACTIVE'}
                </button>
              </div>
            </div>
            <div className="h-12 bg-neutral-900 rounded flex items-center px-2">
              <div className="flex items-center space-x-0.5 h-full">
                {generateWaveform(track)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Playback Controls */}
      <div className="flex items-center justify-center space-x-4 mb-4">
        <button className="p-2 text-neutral-400 hover:text-white transition-colors">
          <SkipBack className="w-5 h-5" />
        </button>
        <button 
          className="p-3 bg-coral-600 text-white rounded-full hover:bg-coral-700 transition-colors"
          onClick={handlePlayPause}
        >
          {isPlaying ? (
            <Pause className="w-6 h-6" fill="currentColor" />
          ) : (
            <Play className="w-6 h-6" fill="currentColor" />
          )}
        </button>
        <button className="p-2 text-neutral-400 hover:text-white transition-colors">
          <SkipForward className="w-5 h-5" />
        </button>
      </div>

      {/* Timeline */}
      <div>
        <div className="h-1 bg-neutral-700 rounded-full overflow-hidden">
          <div 
            className="h-1 bg-coral-600 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-neutral-400 mt-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  )
}
