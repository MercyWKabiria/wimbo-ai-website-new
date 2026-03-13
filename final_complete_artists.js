const fs = require('fs');

// Final 6 artists to complete the dataset
const finalArtists = [
  {
    id: '7',
    slug: 'jena-mpito',
    name: 'Jena Mpito',
    tagline: 'Confident Afro-pop energy built for modern streaming audiences.',
    description: 'Jena Mpito brings bold Afro-pop vocals and catchy melodies to contemporary African pop production.',
    longBio: "Jena Mpito is pure Afro-pop energy — a confident mezzo-soprano built for hooks, choruses, and radio-ready melodies that demand attention and earn replays. Her voice prioritizes clarity and rhythmic precision over emotional depth, cutting through dense production with the kind of presence that streaming algorithms and radio programmers reward. Jena is designed for artists who want their songs heard beyond East Africa, with a voice that translates across borders while maintaining authentic African character. Her market fit score is among the highest because she's optimized for reach. The voice that chases global playlists.",
    image: '/images/artist-jena.png',
    category: 'heart-vibe',
    tags: ['Mezzo-Soprano', 'Swahili', 'Afro-Pop'],
    stats: { tracksRecorded: 7, albumFeatures: 1, dialects: 2 },
    vocalScores: { melodyFit: 9, vocalRange: 8, emotionalDepth: 7, dialectAccuracy: 9, phrasingDynamics: 8, marketFit: 9 },
    vocalRange: { upperLimit: 'C5', headVoice: 'A4 – C5', powerZone: 'D4 – F4', sweetSpot: 'F4 – A4', midChest: 'D4 – E4', lowerLimit: 'G3' },
    rangeNote: "Jena's mezzo-soprano voice provides clarity and energy for contemporary Afro-pop production.",
    voiceProfileSummary: "Jena Mpito is pure Afro-pop energy — a confident mezzo-soprano built for hooks, choruses, and radio-ready melodies that demand attention. Her voice prioritizes clarity and rhythmic precision over emotional depth, cutting through dense production with the kind of presence that streaming algorithms and radio programmers reward. Jena is designed for artists who want their songs heard beyond East Africa, with a voice that translates across borders while maintaining authentic African character. Her market fit score reflects her optimization for commercial success — she's built to chart. When a song needs to be undeniable on first listen, Jena's voice delivers that immediate impact.",
    voiceArchitectureSummary: "Jena's range was specifically shaped for modern Afro-pop production — tracks built around the D4–F4 sweet spot will sit naturally in her voice with maximum clarity and presence. Her mezzo tone cuts through production without harshness. Her voice is optimized for hook-driven songs that need immediate impact and high replay value.",
    genreBreakdown: [
      { title: 'Afro-Pop', description: "Jena's voice fits naturally into Afro-pop production like it was designed for nothing else. Her mezzo tone carries melodic hooks clearly while maintaining rhythmic precision that locks into groove-driven arrangements. She makes hits sound easy." },
      { title: 'Dance Pop', description: "Up-tempo dance tracks highlight Jena's rhythmic phrasing and infectious energy. Her voice maintains clarity across energetic electronic production without losing its melodic character or getting lost in the mix." },
      { title: 'Afro-Dance', description: "In groove-driven Afro-dance tracks, Jena's voice becomes rhythmic and playful. She supports strong melodic hooks while adding energy and precision that makes bodies move and tracks go viral." },
      { title: 'Commercial Pop', description: "When production moves toward mainstream pop territory, Jena's tone adapts perfectly to polished vocal layering and structured chorus hooks that international radio formats demand. She's built for crossover." },
    ],
    vocalRangeMap: {
      upperLimit: { note: 'C5', description: 'Jena\'s ceiling — bright and energetic. Use for climactic hooks and chorus peaks that need to cut through production with maximum impact.', score: 8.0 },
      headVoice: { note: 'A4', description: 'Where Jena\'s voice becomes lighter while maintaining presence. Good for melodic variation and playful moments in uptempo tracks.', score: 8.5 },
      powerZone: { note: 'A4', description: 'Full voice, maximum presence. This is where Jena\'s hooks live — bright, clear, and impossible to ignore. Built for radio.', score: 9.0 },
      sweetSpot: { note: 'F4', description: 'The most natural, clearest part of Jena\'s range. Verses, pre-hooks, and rhythmic passages land here with clarity and energy.', score: 9.0 },
      midChest: { note: 'D4', description: 'Warm but still energetic. Works well for verse passages that set up explosive choruses and hooks.', score: 8.5 },
      lowerLimit: { note: 'G3', description: 'The foundation of Jena\'s range. Grounded but still present — use for contrast and buildup.', score: 7.5 },
    },
    tracks: [
      { id: 1, title: 'Pop Star', duration: '3:15', tags: ['Jena Mpito', 'Afro-Pop'] },
      { id: 2, title: 'Dance With Me', duration: '3:32', isHot: true, tags: ['Jena Mpito', 'Dance'] },
      { id: 3, title: 'Global Girl', duration: '3:08', tags: ['Jena Mpito', 'Pop'] },
      { id: 4, title: 'Rhythm Queen', duration: '3:28', tags: ['Jena Mpito', 'Afro-Dance'] },
      { id: 5, title: 'Hit Different', duration: '3:18', tags: ['Jena Mpito', 'Commercial Pop'] },
      { id: 6, title: 'Playlist Vibes', duration: '3:42', tags: ['Jena Mpito', 'Afro-Pop'] },
      { id: 7, title: 'Radio Ready', duration: '3:05', tags: ['Jena Mpito', 'Pop'] },
    ],
    albums: [
      { title: 'Of Love & Comebacks', image: '/images/album-love.jpg', trackCount: 7 },
    ],
    seoDescription: 'Jena Mpito brings bold Afro-pop vocals designed for radio and streaming platforms.',
    searchTags: ['afropop', 'female pop vocal', 'afro dance music', 'radio pop', 'afro groove'],
  },
  {
    id: '8',
    slug: 'jake-kyle',
    name: 'Jake Kyle',
    tagline: 'Introspective indie pop storytelling with emotional depth.',
    description: 'Jake Kyle delivers alternative pop songs centered on emotional storytelling and understated melodic performances.',
    longBio: "Jake Kyle represents the introspective edge of contemporary African pop — an indie-influenced tenor built for emotional storytelling and understated melodic performances that prioritize authenticity over mass appeal. His voice favors subtle emotional shifts over technical power, allowing vulnerable songwriting to breathe without overwhelming production. Jake is designed for artists exploring alternative sounds within the African pop landscape, where depth matters more than reach and artistic integrity trumps chart position. His lower market fit reflects niche positioning, but his emotional depth and phrasing dynamics are exceptional. The voice that whispers what others shout.",
    image: '/images/artist-jake.png',
    category: 'heart-vibe',
    tags: ['Tenor', 'English', 'Indie Pop'],
    stats: { tracksRecorded: 4, albumFeatures: 1, dialects: 2 },
    vocalScores: { melodyFit: 8, vocalRange: 7, emotionalDepth: 9, dialectAccuracy: 8, phrasingDynamics: 9, marketFit: 7 },
    vocalRange: { upperLimit: 'B4', headVoice: 'G4 – B4', powerZone: 'F4 – A4', sweetSpot: 'E4 – G4', midChest: 'C4 – E4', lowerLimit: 'F3' },
    rangeNote: "Jake's soft tenor emphasizes emotional nuance and storytelling in indie pop contexts.",
    voiceProfileSummary: "Jake Kyle represents the introspective edge of contemporary African pop — an indie-influenced tenor built for emotional storytelling and understated melodic performances. His voice favors subtle emotional shifts over technical power, allowing vulnerable songwriting to breathe without overwhelming production. Jake is designed for artists exploring alternative sounds within the African pop landscape, where authenticity matters more than mainstream appeal. His lower market fit score reflects his niche positioning, but his exceptional emotional depth and phrasing dynamics more than compensate — he connects deeply with listeners who find him. The voice that whispers what others shout.",
    voiceArchitectureSummary: "Jake's range was specifically shaped for indie-influenced production — tracks built around the C4–E4 sweet spot will sit naturally in his voice with maximum emotional resonance. His tenor favors storytelling over technical display. His voice is optimized for atmospheric arrangements where subtle dynamics carry more weight than volume.",
    genreBreakdown: [
      { title: 'Indie Pop', description: "Jake's soft tenor suits indie pop's emotional storytelling perfectly. His restrained delivery allows lyrics to feel personal and reflective, connecting with listeners who value authenticity over polish and depth over reach." },
      { title: 'Alternative Pop', description: "In alternative arrangements, Jake's voice carries subtle emotional shifts that work beautifully with atmospheric production. His phrasing creates intimacy even in fuller arrangements, making big productions feel personal." },
      { title: 'Acoustic Pop', description: "Minimal instrumentation highlights Jake's vocal nuance and exceptional phrasing control. Every breath and pause becomes intentional, creating space for emotional impact that louder voices would miss." },
      { title: 'Singer-Songwriter Ballads', description: "Jake's voice naturally supports introspective songwriting and slower emotional narratives. His tenor carries vulnerability without weakness, honesty without melodrama — the mark of genuine artistry." },
    ],
    vocalRangeMap: {
      upperLimit: { note: 'B4', description: 'Jake\'s ceiling — emotional rather than powerful. Reserved for vulnerable peaks where song reaches its most honest moments. Use with intention.', score: 7.0 },
      headVoice: { note: 'G4', description: 'Where Jake\'s voice becomes most delicate and intimate. Perfect for falsetto whispers and vulnerable confessions in stripped-back moments.', score: 8.0 },
      powerZone: { note: 'F4', description: 'Not about volume but emotional intensity. This is where Jake\'s earnest declarations and heartfelt hooks naturally live with maximum authenticity.', score: 8.5 },
      sweetSpot: { note: 'E4', description: 'The most natural, most emotionally resonant part of Jake\'s range. Storytelling verses and intimate moments land here with complete sincerity.', score: 9.0 },
      midChest: { note: 'C4', description: 'Warm and grounded. Works beautifully for reflective passages where lyrics need space to breathe and meaning matters more than melody.', score: 8.5 },
      lowerLimit: { note: 'F3', description: 'The foundation of Jake\'s range. Intimate and grounding for spoken-word moments and whispered confessions.', score: 7.5 },
    },
    tracks: [
      { id: 1, title: 'Quiet Storm', duration: '4:12', tags: ['Jake Kyle', 'Indie'] },
      { id: 2, title: 'Honest Words', duration: '3:58', isHot: true, tags: ['Jake Kyle', 'Alternative'] },
      { id: 3, title: 'Soft Revolution', duration: '4:28', tags: ['Jake Kyle', 'Acoustic'] },
      { id: 4, title: 'Whispered Truth', duration: '3:45', tags: ['Jake Kyle', 'Singer-Songwriter'] },
    ],
    albums: [
      { title: 'Of Love & Comebacks', image: '/images/album-love.jpg', trackCount: 4 },
    ],
    seoDescription: 'Jake Kyle delivers alternative pop songs centered on emotional storytelling.',
    searchTags: ['indie pop', 'alternative pop', 'male tenor vocal', 'emotional pop', 'storytelling music'],
  },
  {
    id: '9',
    slug: 'jael-monah',
    name: 'Jael Monah',
    tagline: 'Bold Afro-pop vocals with confident modern energy.',
    description: 'Jael Monah delivers confident Afro-pop performances with strong female vocal presence.',
    longBio: "Jael Monah is bold, confident, and unapologetically pop — a mezzo-soprano engineered for rhythm-driven Afro-pop production with strong female energy that commands attention without asking permission. Her voice carries the attitude and presence required for songs that demand to be heard, balancing melodic hooks with rhythmic punch and unwavering confidence. Jael represents the new wave of African female pop voices — global in ambition, local in authenticity, and built for stages as much as streaming. Her high market fit reflects her optimization for success across African and international markets. The voice of confident African pop.",
    image: '/images/artist-jael.png',
    category: 'heart-vibe',
    tags: ['Mezzo-Soprano', 'Swahili', 'Afro-Pop'],
    stats: { tracksRecorded: 6, albumFeatures: 1, dialects: 2 },
    vocalScores: { melodyFit: 9, vocalRange: 8, emotionalDepth: 8, dialectAccuracy: 9, phrasingDynamics: 8, marketFit: 9 },
    vocalRange: { upperLimit: 'D5', headVoice: 'B4 – D5', powerZone: 'A4 – B4', sweetSpot: 'G4 – A4', midChest: 'E4 – G4', lowerLimit: 'A3' },
    rangeNote: "Jael's confident mezzo-soprano voice commands attention in contemporary Afro-pop production.",
    voiceProfileSummary: "Jael Monah is bold, confident, and unapologetically pop — a mezzo-soprano engineered for rhythm-driven Afro-pop production with strong female energy that commands attention. Her voice carries the attitude and presence required for songs that demand to be heard, balancing melodic hooks with rhythmic punch and unwavering confidence. Jael represents the new wave of African female pop voices — global in ambition, local in authenticity, and built for stages as much as streaming. Her high market fit score reflects her optimization for commercial success across African and international markets. When a song needs to feel powerful and present from the first note, Jael delivers.",
    voiceArchitectureSummary: "Jael's range was specifically shaped for confident Afro-pop production — tracks built around the E4–G4 sweet spot will sit naturally in her voice with maximum presence and attitude. Her mezzo tone commands attention without strain. Her voice is optimized for hook-driven songs that need confidence and energy from the first note to the last.",
    genreBreakdown: [
      { title: 'Afro-Pop', description: "Jael's voice thrives in rhythm-driven Afro-pop production. Her mezzo register supports strong melodic hooks and confident vocal delivery that defines contemporary African pop sound. She owns every track she touches." },
      { title: 'Afro-Dance', description: "Her voice adapts perfectly to energetic dance rhythms while maintaining clear melodic phrasing. Jael brings the energy, precision, and attitude that makes Afro-dance tracks undeniable on dancefloors worldwide." },
      { title: 'Contemporary African Pop', description: "Jael's tone carries well in mainstream African pop production across different regional styles. Her confidence and clarity translate across production approaches and international collaborations." },
      { title: 'Pop-Soul', description: "When arrangements slow down, Jael's voice reveals emotional warmth beneath the confidence. Her expressive phrasing adds unexpected depth to ballad moments without losing her signature commanding presence." },
    ],
    vocalRangeMap: {
      upperLimit: { note: 'D5', description: 'Jael\'s ceiling — powerful and commanding. Use for climactic moments that need to dominate with confidence and presence.', score: 8.0 },
      headVoice: { note: 'B4', description: 'Where Jael\'s voice maintains power while opening up. Good for soaring moments that need attitude and reach.', score: 8.5 },
      powerZone: { note: 'A4', description: 'Full voice, maximum confidence. This is where Jael\'s hooks and choruses live — commanding, clear, and impossible to ignore.', score: 9.0 },
      sweetSpot: { note: 'G4', description: 'The most natural, most confident part of Jael\'s range. Strong verses and attitude-driven passages land here with authority.', score: 9.0 },
      midChest: { note: 'E4', description: 'Warm but still commanding. Works well for verse passages that maintain presence while building toward explosive choruses.', score: 8.5 },
      lowerLimit: { note: 'A3', description: 'The foundation of Jael\'s range. Grounded but confident — use for contrast and powerful verse moments.', score: 8.0 },
    },
    tracks: [
      { id: 1, title: 'Boss Lady', duration: '3:28', tags: ['Jael Monah', 'Afro-Pop'] },
      { id: 2, title: 'Confidence', duration: '3:42', isHot: true, tags: ['Jael Monah', 'Pop'] },
      { id: 3, title: 'Queen Energy', duration: '3:15', tags: ['Jael Monah', 'Afro-Dance'] },
      { id: 4, title: 'Unstoppable', duration: '3:38', tags: ['Jael Monah', 'African Pop'] },
      { id: 5, title: 'Power Move', duration: '3:22', tags: ['Jael Monah', 'Pop-Soul'] },
      { id: 6, title: 'No Permission', duration: '3:45', tags: ['Jael Monah', 'Afro-Pop'] },
    ],
    albums: [
      { title: 'Of Love & Comebacks', image: '/images/album-love.jpg', trackCount: 6 },
    ],
    seoDescription: 'Jael Monah delivers confident Afro-pop performances with contemporary African pop sound.',
    searchTags: ['afropop female', 'african pop singer', 'dance afro pop', 'female mezzo vocal'],
  },
  {
    id: '10',
    slug: 'master-gen-tone',
    name: 'Master Gen-tone',
    tagline: 'Raw Gengetone energy from the heart of Nairobi streets.',
    description: 'Master Gen-tone delivers high-energy Gengetone music with rhythmic rap delivery and urban Nairobi storytelling.',
    longBio: "Master Gen-tone is raw Nairobi energy incarnate — the definitive Gengetone voice built for street anthems, club bangers, and urban storytelling that captures the authentic pulse of Kenya's youth culture. His delivery prioritizes rhythmic cadence and lyrical flow over melodic range, with a perfect 10 in dialect accuracy reflecting Sheng authenticity that cannot be faked or learned in a studio. Master Gen-tone represents the sound of Eastlands, Kayole, and Pipeline — neighborhoods where Gengetone was born and where it still thrives. His high market fit reflects Gengetone's dominance in Kenyan youth culture and growing international curiosity. The voice of Nairobi's underground.",
    image: '/images/artist-master.png',
    category: 'heart-vibe',
    tags: ['Rap', 'Sheng', 'Gengetone'],
    stats: { tracksRecorded: 8, albumFeatures: 1, dialects: 2 },
    vocalScores: { melodyFit: 7, vocalRange: 6, emotionalDepth: 7, dialectAccuracy: 10, phrasingDynamics: 9, marketFit: 9 },
    vocalRange: { upperLimit: 'G4', headVoice: 'F4 – G4', powerZone: 'E4 – G4', sweetSpot: 'D4 – E4', midChest: 'B3 – D4', lowerLimit: 'D3' },
    rangeNote: "Master Gen-tone's rhythmic delivery and Sheng flow define authentic Kenyan Gengetone.",
    voiceProfileSummary: "Master Gen-tone is raw Nairobi energy incarnate — the definitive Gengetone voice built for street anthems, club bangers, and urban storytelling that captures the authentic pulse of Kenya's youth culture. His delivery prioritizes rhythmic cadence and lyrical flow over melodic range, with a perfect 10 in dialect accuracy reflecting his authentic Sheng delivery that cannot be faked or learned. Master Gen-tone represents the sound of Eastlands, Kayole, and Pipeline — neighborhoods where Gengetone was born and where it still rules supreme. His high market fit reflects Gengetone's dominance in Kenyan youth culture and growing international interest in authentic African urban music. When a track needs to hit the streets hard, Master Gen-tone is the voice.",
    voiceArchitectureSummary: "Master Gen-tone's range was specifically shaped for Gengetone production — his voice prioritizes rhythmic punch over melodic extension. His B3–D4 sweet spot carries maximum Sheng authenticity and lyrical clarity. His voice is optimized for beat-driven tracks where cadence and flow matter more than notes, and where street credibility is everything.",
    genreBreakdown: [
      { title: 'Gengetone', description: "Master Gen-tone's voice IS Gengetone. His cadence emphasizes rhythmic punch and street authenticity that defines the genre — raw, energetic, and unmistakably Nairobi. He doesn't perform Gengetone; he embodies it." },
      { title: 'Afro-Urban', description: "Urban Afro-beat production allows his delivery to ride groove-heavy rhythms with natural swagger. His voice carries the energy and attitude that urban East African music demands, bridging clubs and streets." },
      { title: 'Hip-Hop', description: "In hip-hop arrangements, his phrasing becomes more rhythmically precise and lyrically focused. His Sheng delivery adds cultural authenticity that resonates with Kenyan hip-hop audiences who value real over manufactured." },
      { title: 'Club Rap', description: "High-energy club production amplifies his vocal attitude and crowd-engaging delivery. Master Gen-tone's voice is designed to move rooms, start parties, and create moments that define nights out in Nairobi." },
    ],
    vocalRangeMap: {
      upperLimit: { note: 'G4', description: 'Master Gen-tone\'s ceiling — reserved for hype moments and ad-libs that punctuate verses with energy and attitude.', score: 6.0 },
      headVoice: { note: 'F4', description: 'Light and energetic — used for vocal variations and melodic hooks that break up rapid-fire verses.', score: 6.5 },
      powerZone: { note: 'E4', description: 'Where Master Gen-tone\'s cadence hits hardest. This is the natural home of his most impactful bars and hype moments.', score: 8.0 },
      sweetSpot: { note: 'D4', description: 'The most natural, most authentic part of his range. Verses, flows, and street storytelling land here with maximum Sheng credibility.', score: 9.5 },
      midChest: { note: 'B3', description: 'Deep and rhythmic. Works well for laid-back flows and storytelling verses that build toward energetic drops.', score: 8.5 },
      lowerLimit: { note: 'D3', description: 'The foundation — deep and grounded. Use for bass-heavy moments and spoken-word intros that set street atmosphere.', score: 7.0 },
    },
    tracks: [
      { id: 1, title: 'Streets Talk', duration: '3:15', tags: ['Master Gen-tone', 'Gengetone'] },
      { id: 2, title: 'Nairobi Nights', duration: '3:28', isHot: true, tags: ['Master Gen-tone', 'Club'] },
      { id: 3, title: 'Pipeline Dreams', duration: '3:42', tags: ['Master Gen-tone', 'Urban'] },
      { id: 4, title: 'Sheng King', duration: '3:08', tags: ['Master Gen-tone', 'Hip-Hop'] },
      { id: 5, title: 'Club Anthem', duration: '3:32', tags: ['Master Gen-tone', 'Gengetone'] },
      { id: 6, title: 'Real Ones', duration: '3:18', tags: ['Master Gen-tone', 'Urban'] },
      { id: 7, title: 'Eastlands Energy', duration: '3:45', tags: ['Master Gen-tone', 'Gengetone'] },
      { id: 8, title: 'No Cap', duration: '3:22', tags: ['Master Gen-tone', 'Club'] },
    ],
    albums: [
      { title: 'Of Love & Comebacks', image: '/images/album-love.jpg', trackCount: 8 },
    ],
    seoDescription: 'Master Gen-tone delivers high-energy Gengetone music with urban Nairobi storytelling.',
    searchTags: ['gengetone', 'african rap', 'sheng rap', 'urban kenya music', 'street music'],
  }
];

// Read current file and append final artists
const currentContent = fs.readFileSync('./lib/artists.ts', 'utf8');
const currentArtistsEnd = currentContent.lastIndexOf('}');

// Append final artists to the existing content
const updatedContent = currentContent.substring(0, currentArtistsEnd + 1) + 
`,
  ${finalArtists.map(artist => `  {
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
console.log('Successfully updated artists.ts with all 10 complete artists!');
