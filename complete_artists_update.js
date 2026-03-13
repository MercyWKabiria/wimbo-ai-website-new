const fs = require('fs');

// Complete artist data matching Avel Niri's detail level
const completeArtists = [
  {
    id: '1',
    slug: 'kito-kaya',
    name: 'Kito Kaya',
    tagline: 'Bold Afro-worship praise built for powerful congregational moments.',
    description: 'Kito Kaya delivers bold East African gospel anthems blending Afro rhythms and contemporary worship.',
    longBio: "Kito Kaya is wimbo.ai's boldest gospel voice — engineered for high-energy praise moments that define East African worship culture. His tenor carries the weight of congregational anthems, projecting clearly above full band arrangements while maintaining melodic precision required for Swahili and English worship lyrics. Built for praise leaders and worship teams who need a voice that commands attention without losing spiritual authenticity. Kito thrives in moments where the room needs to rise — where declarations of faith require both power and precision. The voice of My Devotion.",
    image: '/images/artist-kito.png',
    category: 'praise-worship',
    tags: ['Tenor', 'Swahili', 'Worship'],
    stats: { tracksRecorded: 8, albumFeatures: 2, dialects: 4 },
    vocalScores: { melodyFit: 9, vocalRange: 8, emotionalDepth: 8, dialectAccuracy: 9, phrasingDynamics: 8, marketFit: 9 },
    vocalRange: { upperLimit: 'C5', headVoice: 'A4 – C5', powerZone: 'E4 – G4', sweetSpot: 'D4 – F4', midChest: 'B3 – D4', lowerLimit: 'G2' },
    rangeNote: "Kito's tenor voice favors strong chest resonance and mid–upper melodic projection, ideal for leading congregational worship.",
    voiceProfileSummary: "Kito Kaya is wimbo.ai's most commanding gospel tenor — engineered for high-energy praise moments that define East African worship culture. His voice carries projection and clarity needed to lead congregational worship, cutting through full band arrangements while maintaining melodic precision required for both Swahili and English lyrics. His mid-to-upper register is optimized for declarative worship phrases and anthemic choruses that lift entire rooms. Kito's voice was shaped specifically for the kind of worship that moves from intimate verse to explosive chorus — where the build matters as much as the peak. When a song needs to command a congregation's attention and carry them into praise, Kito's voice is built to lead that charge.",
    voiceArchitectureSummary: "Kito's range was specifically shaped for the sonic demands of East African worship — tracks built around the D4–G4 power zone will sit naturally in his voice with maximum projection. His upper register brightens convincingly for climactic chorus moments, while his chest voice provides the grounding needed for verse declarations. His voice is optimized for songs that build dynamically, carrying energy from intimate beginnings to anthemic peaks.",
    genreBreakdown: [
      { title: 'Contemporary Gospel Worship', description: "Kito's tenor thrives in full-band worship arrangements where projection and clarity are essential. His voice carries above choir and instrumentation, allowing strong congregational leadership while maintaining melodic clarity during call-and-response praise sections. He's built for the declarative, uplifting nature of modern worship — songs that proclaim rather than whisper." },
      { title: 'Afro-Worship', description: "Afro-worship rhythms allow Kito's voice to ride groove-based praise patterns naturally. His mid-tenor power zone cuts through percussion-heavy arrangements, sustaining energetic refrains and repeatable worship choruses that congregations can follow and join. The rhythmic foundation gives his declarations momentum." },
      { title: 'Praise Anthem Gospel', description: "Large declarative melodies suit Kito's vocal weight perfectly. When songs build dynamically toward climactic moments, his voice retains clarity in the upper mid-range, making him effective for anthem-style gospel choruses that demand both power and precision. These are the songs that define a worship service's peak moments." },
      { title: 'Inspirational Gospel Pop', description: "In pop-leaning gospel production, Kito's tone becomes brighter and more melodic without losing authority. His voice adapts easily to structured hooks while still carrying the weight of a worship lead, bridging traditional gospel energy with contemporary production techniques that reach younger audiences." },
    ],
    vocalRangeMap: {
      upperLimit: { note: 'C5', description: 'The ceiling of Kito\'s range. Bright and powerful — reserved for climactic moments in worship where the song reaches its peak. Use strategically for maximum impact.', score: 8.0 },
      headVoice: { note: 'A4', description: 'Where Kito\'s voice opens into its most projecting register. Clear enough for worship declarations, controlled enough to sustain phrases that lead congregations into praise.', score: 8.5 },
      powerZone: { note: 'G4', description: 'Full voice, maximum projection. This is where Kito is loudest and most commanding — the natural home of big gospel choruses and declarative praise hooks.', score: 9.0 },
      sweetSpot: { note: 'E4', description: 'The most balanced part of Kito\'s range. Verses, bridges, and call-and-response sections land here with clarity and warmth. His tone is richest in this register.', score: 9.0 },
      midChest: { note: 'C4', description: 'Grounded chest voice with natural authority. Works well for intimate worship moments and verse storytelling before songs build toward their choruses.', score: 8.5 },
      lowerLimit: { note: 'G2', description: 'The foundation of Kito\'s range. Deep chest resonance for spoken-word moments and low declarations. Use for contrast and grounding.', score: 7.5 },
    },
    tracks: [
      { id: 1, title: 'Arise and Shine', duration: '4:12', tags: ['Kito Kaya', 'Worship'] },
      { id: 2, title: 'Holy Ground', duration: '3:45', isHot: true, tags: ['Kito Kaya', 'Praise'] },
      { id: 3, title: 'We Declare', duration: '3:58', tags: ['Kito Kaya', 'Anthem'] },
      { id: 4, title: 'Lift Your Voice', duration: '4:22', tags: ['Kito Kaya', 'Worship'] },
      { id: 5, title: 'Glory Rising', duration: '3:33', tags: ['Kito Kaya', 'Praise'] },
      { id: 6, title: 'Heaven\'s Door', duration: '4:05', tags: ['Kito Kaya', 'Worship'] },
      { id: 7, title: 'Praise Unlimited', duration: '3:48', tags: ['Kito Kaya', 'Anthem'] },
      { id: 8, title: 'Breakthrough', duration: '4:15', tags: ['Kito Kaya', 'Worship'] },
    ],
    albums: [
      { title: 'My Devotion', image: '/images/album-devotion.jpg', trackCount: 8 },
    ],
    seoDescription: 'Kito Kaya delivers bold East African gospel anthems blending Afro rhythms and contemporary worship.',
    searchTags: ['gospel', 'afro-worship', 'praise leader', 'male tenor', 'congregational worship'],
  },
  {
    id: '2',
    slug: 'jiroh-malaka',
    name: 'Jiroh Malaka',
    tagline: 'Reflective worship storytelling shaped by surrender and prayer.',
    description: 'Jiroh Malaka creates reflective contemporary gospel songs centered on surrender, prayer, and spiritual clarity.',
    longBio: "Jiroh Malaka represents the contemplative heart of East African gospel — a voice shaped for moments of surrender, prayer, and deep spiritual reflection. His mid-tenor range emphasizes emotional nuance and lyrical clarity over raw vocal power, allowing intimate worship moments to feel genuine and unforced. Jiroh excels in devotional songwriting where the message matters more than the melody, where vulnerability becomes strength, and where listeners feel invited rather than commanded into worship. His voice carries prayer from the studio to the sanctuary. The voice that speaks to the soul.",
    image: '/images/artist-jiroh.png',
    category: 'praise-worship',
    tags: ['Tenor', 'Swahili', 'Worship'],
    stats: { tracksRecorded: 6, albumFeatures: 1, dialects: 3 },
    vocalScores: { melodyFit: 9, vocalRange: 7, emotionalDepth: 9, dialectAccuracy: 8, phrasingDynamics: 9, marketFit: 8 },
    vocalRange: { upperLimit: 'B4', headVoice: 'G4 – B4', powerZone: 'F4 – A4', sweetSpot: 'E4 – G4', midChest: 'C4 – E4', lowerLimit: 'F3' },
    rangeNote: "Jiroh's mid-tenor range emphasizes emotional nuance and lyrical clarity, ideal for devotional worship.",
    voiceProfileSummary: "Jiroh Malaka represents the contemplative heart of East African gospel — a voice shaped for moments of surrender, prayer, and spiritual reflection. His mid-tenor range emphasizes emotional nuance and lyrical clarity over raw vocal power, allowing intimate worship moments to feel genuine and unforced. Jiroh excels in devotional songwriting where the message matters more than the melody, and where vulnerability is a strength rather than weakness. His exceptional phrasing dynamics allow him to navigate complex emotional terrain — moving from whispered confession to earnest declaration — without ever losing the listener's trust. When worship calls for honesty over performance, Jiroh's voice carries that truth.",
    voiceArchitectureSummary: "Jiroh's range was specifically shaped for reflective worship production — tracks built around the C4–E4 sweet spot will sit naturally in his voice with maximum emotional resonance. His mid-tenor warmth carries lyrics clearly without overwhelming their meaning. His voice is optimized for songs that prioritize lyrical clarity and emotional connection over vocal pyrotechnics, allowing intimate worship to breathe.",
    genreBreakdown: [
      { title: 'Contemporary Worship', description: "Jiroh's voice sits naturally in reflective worship arrangements where sincerity matters most. His mid-range control allows intimate phrasing that carries emotional nuance, making prayer-centered songs feel conversational rather than performative. He excels in worship that invites listeners into encounter rather than commanding them to respond." },
      { title: 'Devotional Gospel Ballads', description: "Slower tempos highlight Jiroh's exceptional phrasing control and emotional depth. His tenor sits comfortably in melodic storytelling, allowing quiet emotional builds that work especially well in reflective worship moments where subtlety matters more than volume. Every phrase feels intentional." },
      { title: 'Afro-Worship Ballads', description: "Afro-worship instrumentation gives Jiroh rhythmic grounding while maintaining emotional depth and vulnerability. His voice moves gently between prayerful lines and melodic refrains, carrying the listener through spiritual narratives with grace and authenticity." },
      { title: 'Acoustic Worship', description: "With minimal instrumentation, Jiroh's vocal sincerity becomes fully pronounced. His tone carries subtle emotional shifts that resonate deeply in stripped-back arrangements where every vocal choice is exposed. There's nowhere to hide, and Jiroh doesn't need to." },
    ],
    vocalRangeMap: {
      upperLimit: { note: 'B4', description: 'The ceiling of Jiroh\'s range. Reserved for moments of emotional climax in worship — use sparingly for maximum impact when songs reach their most vulnerable peaks.', score: 7.0 },
      headVoice: { note: 'G4', description: 'Where Jiroh\'s voice becomes lighter and more intimate. Perfect for reflective passages and moments of spiritual vulnerability that require delicate delivery.', score: 8.0 },
      powerZone: { note: 'F4', description: 'Jiroh\'s most expressive register. Not about volume but emotional intensity — where heartfelt declarations and earnest prayer live naturally.', score: 9.0 },
      sweetSpot: { note: 'E4', description: 'The most natural, most emotionally resonant part of Jiroh\'s range. Verses, devotional passages, and intimate worship moments land here with authenticity and warmth.', score: 9.5 },
      midChest: { note: 'C4', description: 'Grounded and warm. Works well for storytelling verses and introspective moments where the voice needs to feel anchored and trustworthy.', score: 8.5 },
      lowerLimit: { note: 'F3', description: 'The foundation of Jiroh\'s range. Deep and resonant for spoken-word moments and whispered prayers. Intimate and grounding.', score: 7.5 },
    },
    tracks: [
      { id: 1, title: 'Surrender', duration: '4:32', tags: ['Jiroh Malaka', 'Devotional'] },
      { id: 2, title: 'Still Waters', duration: '3:58', isHot: true, tags: ['Jiroh Malaka', 'Prayer'] },
      { id: 3, title: 'In Your Presence', duration: '4:15', tags: ['Jiroh Malaka', 'Worship'] },
      { id: 4, title: 'Heart\'s Cry', duration: '3:45', tags: ['Jiroh Malaka', 'Devotional'] },
      { id: 5, title: 'Be Still', duration: '4:08', tags: ['Jiroh Malaka', 'Prayer'] },
      { id: 6, title: 'Whispered Faith', duration: '3:52', tags: ['Jiroh Malaka', 'Worship'] },
    ],
    albums: [
      { title: 'My Devotion', image: '/images/album-devotion.jpg', trackCount: 6 },
    ],
    seoDescription: 'Jiroh Malaka creates reflective contemporary gospel songs centered on surrender and prayer.',
    searchTags: ['worship', 'gospel', 'reflective worship', 'male tenor', 'devotional songs'],
  }
];

// Generate the complete file content
const fileContent = `export interface Genre {
  title: string
  description: string
}

export interface VocalRangeMap {
  upperLimit: { note: string; description: string; score: number }
  headVoice: { note: string; description: string; score: number }
  powerZone: { note: string; description: string; score: number }
  sweetSpot: { note: string; description: string; score: number }
  midChest: { note: string; description: string; score: number }
  lowerLimit: { note: string; description: string; score: number }
}

export interface Track {
  id: number
  title: string
  duration: string
  isHot?: boolean
  tags: string[]
}

export interface Album {
  title: string
  image: string
  trackCount: number
}

export interface Artist {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  longBio: string
  image: string
  category: 'praise-worship' | 'heart-vibe'
  tags: string[]
  stats: {
    tracksRecorded: number
    albumFeatures: number
    dialects: number
  }
  vocalScores: {
    melodyFit: number
    vocalRange: number
    emotionalDepth: number
    dialectAccuracy: number
    phrasingDynamics: number
    marketFit: number
  }
  vocalRange: {
    upperLimit: string
    headVoice: string
    powerZone: string
    sweetSpot: string
    midChest: string
    lowerLimit: string
  }
  rangeNote: string
  voiceProfileSummary: string
  voiceArchitectureSummary: string
  genreBreakdown: Genre[]
  vocalRangeMap: VocalRangeMap
  tracks: Track[]
  albums: Album[]
  seoDescription: string
  searchTags: string[]
}

export const artists: Artist[] = [${JSON.stringify(completeArtists, null, 2)}];

export function getArtistBySlug(slug: string): Artist | undefined {
  return artists.find(artist => artist.slug === slug)
}

export function getArtistsByCategory(category: string): Artist[] {
  return artists.filter(artist => artist.category === category)
}

export function getAllArtists(): Artist[] {
  return artists
}`;

fs.writeFileSync('./lib/artists.ts', fileContent, 'utf8');
console.log('Updated artists.ts with complete entries for Kito Kaya and Jiroh Malaka');
