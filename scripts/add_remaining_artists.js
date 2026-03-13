const fs = require('fs');

// All remaining artists to add (5-10)
const remainingArtists = [
  {
    id: '5',
    slug: 'lenase-tendi',
    name: 'Lenase Tendi',
    tagline: 'Warm Afro-soul vocals bridging gospel and contemporary pop.',
    description: 'Lenase Tendi blends Afro-soul warmth with gospel and contemporary African pop.',
    longBio: "Lenase Tendi bridges the sacred and the soulful — a warm baritone that moves effortlessly between gospel grooves and contemporary Afro-soul without losing authenticity in either space. His voice emphasizes rhythmic warmth and groove over technical range, making him ideal for mid-tempo productions where feeling matters more than flash. Lenase represents the crossover space where church meets culture, where worship rhythms blend with secular soul, and where spiritual messages ride on beats that move bodies while lifting spirits. His dialect accuracy ensures authentic delivery across Swahili and Sheng. The voice that grooves while it ministers.",
    image: '/images/artist-lenase.png',
    category: 'heart-vibe',
    tags: ['Baritone', 'Swahili', 'Afro-Soul'],
    stats: { tracksRecorded: 6, albumFeatures: 1, dialects: 3 },
    vocalScores: { melodyFit: 8, vocalRange: 7, emotionalDepth: 8, dialectAccuracy: 9, phrasingDynamics: 8, marketFit: 8 },
    vocalRange: { upperLimit: 'A4', headVoice: 'F4 – A4', powerZone: 'D4 – E4', sweetSpot: 'C4 – D4', midChest: 'B3 – C4', lowerLimit: 'E2' },
    rangeNote: "Lenase's baritone provides smooth, warm delivery across gospel and Afro-soul crossover styles.",
    voiceProfileSummary: "Lenase Tendi bridges the sacred and the soulful — a warm baritone that moves effortlessly between gospel grooves and contemporary Afro-soul. His voice emphasizes rhythmic warmth and groove over range, making him ideal for mid-tempo productions where feeling matters more than flash. Lenase represents the crossover space where church meets culture, where worship rhythms blend with secular soul, and where spiritual messages can ride on beats that move bodies. His exceptional dialect accuracy ensures authentic delivery across Swahili and Sheng contexts — he sounds as natural in a Sunday service as he does on a Saturday night playlist. The voice that grooves while it ministers.",
    voiceArchitectureSummary: "Lenase's range was specifically shaped for groove-based production — tracks built around the B3–D4 sweet spot will sit naturally in his voice with maximum warmth. His baritone carries rhythm and soul without strain. His voice is optimized for mid-tempo arrangements where groove and feeling drive the song, allowing him to move between gospel and secular contexts authentically.",
    genreBreakdown: [
      { title: 'Afro-Soul', description: "Lenase's baritone shines in Afro-soul production where warmth and groove are everything. His tone blends naturally with bass-driven instrumentation, allowing relaxed melodic phrasing and rhythmic storytelling that feels effortless. He rides grooves rather than fighting them." },
      { title: 'Gospel Groove', description: "In mid-tempo gospel songs, Lenase's voice provides a stable, warm melodic center. His range supports smooth transitions between verse storytelling and rhythmic chorus hooks without losing the spiritual message or physical momentum." },
      { title: 'Afro-Pop Ballads', description: "When arrangements slow down, Lenase's tone carries emotional warmth that invites listeners in. His lower range adds depth to melodic storytelling, creating intimate moments within larger productions. The groove remains even when the tempo drops." },
      { title: 'Afro-Fusion', description: "In fusion arrangements combining soul, pop, and African rhythm, Lenase's voice provides grounding and rhythmic stability. He anchors complex productions with consistent warmth and groove, bridging different musical worlds naturally." },
    ],
    vocalRangeMap: {
      upperLimit: { note: 'A4', description: 'The ceiling of Lenase\'s range — warm and controlled. Use for melodic peaks that need soul without strain. Expressive rather than powerful.', score: 7.0 },
      headVoice: { note: 'F4', description: 'Where Lenase\'s voice lightens while maintaining warmth. Good for soulful falsetto-adjacent moments and melodic variation.', score: 7.5 },
      powerZone: { note: 'E4', description: 'Lenase\'s most expressive register. Rich and warm — where groovy hooks and soulful refrains naturally live with maximum impact.', score: 8.0 },
      sweetSpot: { note: 'D4', description: 'The most natural, warmest part of Lenase\'s range. Verses, bridges, and groove-based passages land here with effortless soul and rhythm.', score: 9.0 },
      midChest: { note: 'B3', description: 'Deep and groovy. Works beautifully for storytelling and laid-back soul passages where warmth and rhythm drive the delivery.', score: 8.5 },
      lowerLimit: { note: 'E2', description: 'The foundation of Lenase\'s range. Deep baritone warmth for bass-driven moments and rhythmic grounding. The groove lives here.', score: 8.0 },
    },
    tracks: [
      { id: 1, title: 'Groove & Grace', duration: '3:58', tags: ['Lenase Tendi', 'Afro-Soul'] },
      { id: 2, title: 'Sunday Feeling', duration: '4:12', isHot: true, tags: ['Lenase Tendi', 'Gospel Groove'] },
      { id: 3, title: 'Warm Nights', duration: '3:45', tags: ['Lenase Tendi', 'Soul'] },
      { id: 4, title: 'Church & Culture', duration: '4:28', tags: ['Lenase Tendi', 'Fusion'] },
      { id: 5, title: 'Rhythm Prayer', duration: '3:52', tags: ['Lenase Tendi', 'Gospel'] },
      { id: 6, title: 'Soulful Sunday', duration: '4:05', tags: ['Lenase Tendi', 'Afro-Soul'] },
    ],
    albums: [
      { title: 'Of Love & Comebacks', image: '/images/album-love.jpg', trackCount: 6 },
    ],
    seoDescription: 'Lenase Tendi blends Afro-soul warmth with gospel and contemporary African pop.',
    searchTags: ['afro soul', 'gospel crossover', 'baritone male vocal', 'afro pop', 'smooth vocal'],
  },
  {
    id: '6',
    slug: 'avel-niri',
    name: 'Avel Niri',
    tagline: 'Romantic Afro-soul melodies shaped by rhythm and warmth.',
    description: "Avel Niri is wimbo.ai's most versatile secular vocal archetype — built for the emotional complexity of modern East African Afropop and R&B.",
    longBio: "Avel Niri is wimbo.ai's most versatile secular vocal archetype — built for the emotional complexity of modern East African Afropop and R&B. Her voice sits in the warm middle register, carrying Sheng street cadence and Swahili lyric tradition with equal ease. She was specifically shaped for the kind of music that code-switches mid-song, carries real feeling, and still needs to work on a streaming playlist. If your song lives somewhere between the streets and the radio, Avel is the voice you test it with first. The voice of Of Love & Comebacks.",
    image: '/images/artist-avel.png',
    category: 'heart-vibe',
    tags: ['Tenor', 'Swahili', 'Afro-Soul'],
    stats: { tracksRecorded: 5, albumFeatures: 1, dialects: 3 },
    vocalScores: { melodyFit: 9, vocalRange: 8, emotionalDepth: 8, dialectAccuracy: 9, phrasingDynamics: 8, marketFit: 8 },
    vocalRange: { upperLimit: 'C5', headVoice: 'A4 – C5', powerZone: 'G4 – B4', sweetSpot: 'F4 – A4', midChest: 'D4 – G4', lowerLimit: 'G3' },
    rangeNote: "Avel's warm tenor register provides versatility across Afropop, R&B, and neo-soul styles.",
    voiceProfileSummary: "Avel Niri is wimbo.ai's most versatile secular vocal archetype — built for the emotional complexity of modern East African Afropop and R&B. His voice sits in the warm middle register, wide enough to carry an Afropop chorus, precise enough to land Sheng street cadence, and nuanced enough to hold an R&B verse without losing intimacy. Avel was specifically shaped for the kind of music that code-switches mid-song, carries real feeling, and still needs to work on a streaming playlist. His dialect accuracy ensures authentic delivery whether singing in Swahili, Sheng, or English — he moves between languages as naturally as between registers. If your song lives somewhere between the streets and the radio, Avel is the voice you test it with first.",
    voiceArchitectureSummary: "Avel's range was specifically shaped for the production styles dominant in Nairobi's Afropop scene — tracks built around the D4–F4 sweet spot will sit naturally in his voice without strain or thinning. His upper register brightens convincingly for chorus lifts, while his lower chest provides R&B depth in verses. His voice is optimized for songs that move between moods and languages fluidly.",
    genreBreakdown: [
      { title: 'R&B & Neo-Soul', description: "Best fit for Avel's voice. When production slows into his sweet spot, his tenor warmth becomes more expressive, allowing smooth melodic phrasing and emotional nuance that defines contemporary R&B. This is where his versatility becomes most audible." },
      { title: 'Afro-Soul', description: "Afro-soul grooves allow Avel's voice to glide across rhythmic arrangements with natural ease. His tone blends seamlessly with bass-driven instrumentation, creating the laid-back confidence that defines the genre at its best." },
      { title: 'Afro-Pop Ballads', description: "In slower Afro-pop songs, Avel's voice becomes more melodic and emotionally expressive. His warm register carries romantic storytelling with authenticity and vulnerability that listeners trust." },
      { title: 'Contemporary R&B', description: "His vocal control allows layered harmonies and expressive melodic lines that modern R&B production demands. Avel adapts well to contemporary production techniques while maintaining his distinctive East African character." },
    ],
    vocalRangeMap: {
      upperLimit: { note: 'C5', description: 'The ceiling of Avel\'s range. Bright and expressive — best used for melodic peaks and emotional climaxes. Clear without strain.', score: 8.0 },
      headVoice: { note: 'A4', description: 'Where Avel\'s voice opens up. Light enough for falsetto-adjacent moments in Afropop and R&B, still controlled enough to carry a lyric cleanly.', score: 8.5 },
      powerZone: { note: 'G4', description: 'Full voice, natural expression. This is where Avel is most versatile — the natural home of hooks, choruses, and emotional peaks.', score: 8.5 },
      sweetSpot: { note: 'F4', description: 'The most natural, most expressive part of Avel\'s range. Verses, pre-choruses, and conversational Sheng delivery land best here. Maximum authenticity.', score: 9.0 },
      midChest: { note: 'D4', description: 'Warm and grounded. Works well for R&B verses and introspective moments where the voice needs depth and intimacy.', score: 8.5 },
      lowerLimit: { note: 'G3', description: 'The floor of Avel\'s range. Deep warmth for spoken-word moments and neo-soul productions where intimacy matters most.', score: 8.0 },
    },
    tracks: [
      { id: 1, title: 'No more time', duration: '3:21', tags: ['Avel Niri', 'Neo-soul'] },
      { id: 2, title: 'Comeback Story', duration: '3:45', isHot: true, tags: ['Avel Niri', 'Afro-Soul'] },
      { id: 3, title: 'Streets & Stars', duration: '3:58', tags: ['Avel Niri', 'R&B'] },
      { id: 4, title: 'Love Language', duration: '4:12', tags: ['Avel Niri', 'Afro-Pop'] },
      { id: 5, title: 'Nairobi Nights', duration: '3:38', tags: ['Avel Niri', 'Neo-soul'] },
    ],
    albums: [
      { title: 'Of Love & Comebacks', image: '/images/album-love.jpg', trackCount: 5 },
    ],
    seoDescription: 'Avel Niri blends Afro-soul warmth and modern pop rhythms with expressive melodies.',
    searchTags: ['afro soul', 'afro pop', 'romantic music', 'male tenor vocal', 'african soul'],
  }
];

// Read current file and append remaining artists
const currentContent = fs.readFileSync('./lib/artists.ts', 'utf8');
const currentArtistsEnd = currentContent.lastIndexOf('}');

// Append remaining artists to the existing content
const updatedContent = currentContent.substring(0, currentArtistsEnd + 1) + 
`,
  ${remainingArtists.map(artist => `  {
    id: '${artist.id}',
    slug: '${artist.slug}',
    name: '${artist.name}',
    tagline: '${artist.tagline}',
    description: '${artist.description}',
    longBio: "${artist.longBio}",
    image: '${artist.image}',
    category: '${artist.category}',
    tags: ${JSON.stringify(artist.tags)},
    stats: ${JSON.stringify(artist.stats).replace(/"/g, '')},
    vocalScores: ${JSON.stringify(artist.vocalScores).replace(/"/g, '')},
    vocalRange: ${JSON.stringify(artist.vocalRange).replace(/"/g, '')},
    rangeNote: "${artist.rangeNote}",
    voiceProfileSummary: "${artist.voiceProfileSummary}",
    voiceArchitectureSummary: "${artist.voiceArchitectureSummary}",
    genreBreakdown: ${JSON.stringify(artist.genreBreakdown).replace(/"/g, '')},
    vocalRangeMap: ${JSON.stringify(artist.vocalRangeMap).replace(/"/g, '')},
    tracks: ${JSON.stringify(artist.tracks).replace(/"/g, '')},
    albums: ${JSON.stringify(artist.albums).replace(/"/g, '')},
    seoDescription: '${artist.seoDescription}',
    searchTags: ${JSON.stringify(artist.searchTags).replace(/"/g, '')},
  },`).join(',\n') + `
];

export function getArtistBySlug(slug: string): Artist | undefined {
  return artists.find(artist => artist.slug === slug)
}

export function getArtistsByCategory(category: string): Artist[] {
  return artists.filter(artist => artist.category === category)
}

export function getAllArtists(): Artist[] {
  return artists
}`;

fs.writeFileSync('./lib/artists.ts', updatedContent, 'utf8');
console.log('Successfully updated artists.ts with Lenase Tendi and Avel Niri');
