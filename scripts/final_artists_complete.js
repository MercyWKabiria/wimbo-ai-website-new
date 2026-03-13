const fs = require('fs');

// All remaining artists with complete data
const remainingArtists = [
  {
    id: '3',
    slug: 'maya-lowi',
    name: 'Maya Lowi',
    tagline: 'Soulful contemporary worship with cinematic vocal power.',
    description: 'Maya Lowi delivers emotionally rich gospel worship performances with powerful mezzo-soprano vocals.',
    longBio: "Maya Lowi is wimbo.ai's most emotionally powerful female gospel voice — a mezzo-soprano built for climactic moments in contemporary worship that transform services into encounters. Her range moves seamlessly from intimate prayerful tones to choir-backed crescendos, carrying the emotional intensity that defines modern gospel production at its peak. Maya excels in dynamic arrangements that build, break, and rebuild — where vulnerability and power coexist in the same song. She scores a perfect 10 in emotional depth because her voice doesn't just carry notes; it carries weight. The voice that turns worship into experience.",
    image: '/images/artist-maya.png',
    category: 'praise-worship',
    tags: ['Mezzo-Soprano', 'Swahili', 'Worship'],
    stats: { tracksRecorded: 7, albumFeatures: 2, dialects: 3 },
    vocalScores: { melodyFit: 9, vocalRange: 9, emotionalDepth: 10, dialectAccuracy: 9, phrasingDynamics: 9, marketFit: 9 },
    vocalRange: { upperLimit: 'E5', headVoice: 'C5 – E5', powerZone: 'B4 – D4', sweetSpot: 'F4 – A4', midChest: 'C4 – F4', lowerLimit: 'A3' },
    rangeNote: "Maya's mezzo-soprano range allows her to move from intimate prayerful tones into strong gospel climaxes.",
    voiceProfileSummary: "Maya Lowi is wimbo.ai's most emotionally powerful female gospel voice — a mezzo-soprano engineered for climactic moments that define contemporary worship at its most transformative. Her range moves seamlessly from intimate prayerful tones to choir-backed crescendos, carrying the kind of emotional intensity that turns songs into experiences. Maya excels in dynamic arrangements that build, break, and rebuild — her voice designed to hold the weight of a song's most vulnerable and most powerful moments with equal authenticity. Her perfect 10 in emotional depth isn't arbitrary; it reflects a voice calibrated for the full spectrum of human spiritual experience. When worship needs to feel like encounter, Maya's voice creates that space.",
    voiceArchitectureSummary: "Maya's range was specifically shaped for dynamic gospel production — tracks that move from intimate verses to explosive choruses. Her F4–A4 sweet spot carries emotional weight without strain, while her upper register brightens convincingly for climactic moments. Her voice is optimized for songs that demand emotional range, carrying listeners through the full arc of worship experience from confession to celebration.",
    genreBreakdown: [
      { title: 'Contemporary Gospel Worship', description: "Maya's mezzo-soprano thrives in layered worship arrangements where emotional dynamics drive the song. Her voice carries intensity that builds naturally toward choir-backed climaxes without losing warmth or tonal clarity. She's built for songs that need to crescendo — where the build is as important as the peak." },
      { title: 'Gospel Soul', description: "Soul-inflected gospel allows Maya's voice to stretch across its full dynamic range. Her phrasing becomes more expressive, blending melismatic runs with powerful sustained notes that showcase her exceptional emotional depth. This is where her 10/10 emotional depth score becomes audible." },
      { title: 'Cinematic Worship', description: "In orchestral or cinematic arrangements, Maya's voice expands to fill the space dramatically. Her upper register carries emotional weight that suits large, atmospheric worship productions designed for immersive spiritual experiences — the kind of worship that feels like a movie score." },
      { title: 'Inspirational Gospel Pop', description: "When production shifts toward pop structure, Maya's voice anchors the melody while maintaining emotional resonance that sets gospel apart. She's effective for radio-friendly gospel songs that still carry genuine spiritual depth — accessible without being shallow." },
    ],
    vocalRangeMap: {
      upperLimit: { note: 'E5', description: 'Maya\'s ceiling — powerful and emotionally charged. Reserved for climactic peaks of worship where songs reach their most transcendent moments. Use for maximum spiritual impact.', score: 9.0 },
      headVoice: { note: 'C5', description: 'Where Maya\'s voice opens into soaring, ethereal territory. Light enough for falsetto-adjacent moments, powerful enough to carry a climax. Emotionally transcendent.', score: 9.0 },
      powerZone: { note: 'B4', description: 'Full voice, full emotional weight. This is where Maya\'s crescendos live — the natural home of choir-backed peaks and explosive worship moments that move rooms.', score: 9.5 },
      sweetSpot: { note: 'A4', description: 'The most emotionally resonant part of Maya\'s range. Verses, pre-choruses, and intimate moments land here with warmth and vulnerability. Her emotional depth is most audible here.', score: 10.0 },
      midChest: { note: 'F4', description: 'Warm and grounded. Works beautifully for storytelling verses and prayer-like passages where intimacy matters. The foundation of her emotional range.', score: 9.0 },
      lowerLimit: { note: 'A3', description: 'The foundation of Maya\'s range. Deep mezzo warmth for intimate moments and whispered prayers. Vulnerable and grounding.', score: 8.5 },
    },
    tracks: [
      { id: 1, title: 'Glory Overflow', duration: '4:45', tags: ['Maya Lowi', 'Gospel'] },
      { id: 2, title: 'Throne Room', duration: '4:12', isHot: true, tags: ['Maya Lowi', 'Worship'] },
      { id: 3, title: 'Breakthrough Praise', duration: '3:58', tags: ['Maya Lowi', 'Anthem'] },
      { id: 4, title: 'Deeper Still', duration: '4:32', tags: ['Maya Lowi', 'Soul'] },
      { id: 5, title: 'Holy Fire', duration: '4:08', tags: ['Maya Lowi', 'Worship'] },
      { id: 6, title: 'Rivers of Grace', duration: '3:45', tags: ['Maya Lowi', 'Gospel'] },
      { id: 7, title: 'Unshakeable', duration: '4:22', tags: ['Maya Lowi', 'Anthem'] },
    ],
    albums: [
      { title: 'My Devotion', image: '/images/album-devotion.jpg', trackCount: 7 },
    ],
    seoDescription: 'Maya Lowi delivers emotionally rich gospel worship performances with powerful mezzo-soprano vocals.',
    searchTags: ['female gospel', 'worship singer', 'mezzo soprano', 'choir worship', 'contemporary gospel'],
  },
  {
    id: '4',
    slug: 'janiel-mate',
    name: 'Janiel Mate',
    tagline: 'Honest contemporary worship rooted in sincerity and prayer.',
    description: 'Janiel Mate represents a new generation of gospel voices delivering intimate worship songs.',
    longBio: "Janiel Mate embodies the emerging voice of modern devotional expression — sincere, vulnerable, and deeply personal in ways that resonate with younger believers seeking authentic connection. Her light soprano prioritizes emotional authenticity over technical display, making every lyric feel like a private conversation between the singer and the Creator. Janiel is built for the new generation of worship that values honesty over performance, intimacy over spectacle, and genuine feeling over vocal gymnastics. Her voice carries the kind of sincerity that cannot be manufactured. The voice of honest faith.",
    image: '/images/artist-janiel.png',
    category: 'praise-worship',
    tags: ['Soprano', 'Swahili', 'Worship'],
    stats: { tracksRecorded: 5, albumFeatures: 1, dialects: 3 },
    vocalScores: { melodyFit: 8, vocalRange: 8, emotionalDepth: 9, dialectAccuracy: 8, phrasingDynamics: 8, marketFit: 8 },
    vocalRange: { upperLimit: 'D5', headVoice: 'B4 – D5', powerZone: 'A4 – B4', sweetSpot: 'G4 – A4', midChest: 'E4 – G4', lowerLimit: 'A3' },
    rangeNote: "Janiel's light soprano prioritizes emotional expression and lyrical clarity in contemporary worship.",
    voiceProfileSummary: "Janiel Mate embodies the emerging voice of modern devotional expression — sincere, vulnerable, and deeply personal. Her light soprano prioritizes emotional authenticity over technical display, making every lyric feel like a private conversation between the singer and the divine. Janiel is built for the new generation of worship that values honesty over performance, intimacy over spectacle. Her exceptional emotional depth comes not from power but from presence — the quality of being fully in the moment of every phrase. She resonates strongly with younger believers seeking genuine spiritual connection through music that feels real, not rehearsed. When worship calls for vulnerability, Janiel answers.",
    voiceArchitectureSummary: "Janiel's range was specifically shaped for intimate worship production — tracks built around the E4–G4 sweet spot will sit naturally in her voice with maximum sincerity. Her light soprano carries lyrics clearly without overwhelming their emotional weight. Her voice is optimized for stripped-back arrangements and acoustic worship where authenticity matters more than production.",
    genreBreakdown: [
      { title: 'Contemporary Worship', description: "Janiel's soprano excels in reflective worship songs where sincerity matters most. Her voice carries vulnerability that makes prayerful lyrics feel intimate and deeply personal, connecting with listeners on an emotional level that transcends performance. She invites rather than impresses." },
      { title: 'Gospel Ballads', description: "Slower arrangements highlight Janiel's emotional delivery and lyrical clarity. Her light upper register allows melodies to feel delicate while remaining deeply expressive — perfect for songs about faith, surrender, and quiet moments of spiritual life." },
      { title: 'Youth Worship', description: "Her vocal tone resonates powerfully with contemporary church youth music and young adult worship contexts. Her delivery remains clear and accessible across modern worship production styles, speaking the musical language of a new generation of believers." },
      { title: 'Acoustic Devotional', description: "In stripped-down arrangements, Janiel's voice becomes the emotional center of the entire production. Her sincerity shines without production support, emphasizing authentic connection over vocal technique. Every breath feels intentional." },
    ],
    vocalRangeMap: {
      upperLimit: { note: 'D5', description: 'The ceiling of Janiel\'s range — bright and delicate. Reserved for emotional peaks where vulnerability meets intensity. Use for genuine climactic moments.', score: 8.0 },
      headVoice: { note: 'B4', description: 'Where Janiel\'s voice becomes most ethereal. Light and intimate — perfect for whispered prayers and vulnerable confessions in worship.', score: 8.5 },
      powerZone: { note: 'A4', description: 'Janiel\'s most expressive register. Not about volume but about emotional presence — where sincere declarations and heartfelt worship naturally live.', score: 8.5 },
      sweetSpot: { note: 'G4', description: 'The most natural, most sincere part of Janiel\'s range. Intimate verses, personal prayers, and genuine emotional moments land here with complete authenticity.', score: 9.0 },
      midChest: { note: 'E4', description: 'Warm and grounded. Works well for storytelling and conversational worship where lyrics need to be clearly understood and deeply felt.', score: 8.5 },
      lowerLimit: { note: 'A3', description: 'The foundation of Janiel\'s range. Warm and intimate for quiet moments and spoken-word passages. Grounding and vulnerable.', score: 8.0 },
    },
    tracks: [
      { id: 1, title: 'Honest Heart', duration: '3:52', tags: ['Janiel Mate', 'Devotional'] },
      { id: 2, title: 'Here I Am', duration: '4:08', isHot: true, tags: ['Janiel Mate', 'Worship'] },
      { id: 3, title: 'Simple Faith', duration: '3:38', tags: ['Janiel Mate', 'Prayer'] },
      { id: 4, title: 'Vulnerable', duration: '4:15', tags: ['Janiel Mate', 'Acoustic'] },
      { id: 5, title: 'Young Believer', duration: '3:45', tags: ['Janiel Mate', 'Youth Worship'] },
    ],
    albums: [
      { title: 'My Devotion', image: '/images/album-devotion.jpg', trackCount: 5 },
    ],
    seoDescription: 'Janiel Mate delivers intimate worship songs filled with sincerity and modern devotional expression.',
    searchTags: ['female worship', 'gospel soprano', 'contemporary worship', 'devotional songs'],
  }
];

// Read current file and append remaining artists
const currentContent = fs.readFileSync('./lib/artists.ts', 'utf8');
const currentArtistsEnd = currentContent.lastIndexOf('}');

// Append remaining artists to the existing content
const updatedContent = currentContent.substring(0, currentArtistsEnd + 1) + 
`  ${remainingArtists.map(artist => `  {
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
console.log('Successfully updated artists.ts with Maya Lowi and Janiel Mate');
