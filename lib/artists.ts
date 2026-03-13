export type Artist = {
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
  voiceProfileSummary: string
  voiceArchitectureSummary: string
  genreBreakdown: {
    title: string
    description: string
  }[]
  vocalRangeMap: {
    upperLimit: { note: string; description: string; score: number }
    headVoice: { note: string; description: string; score: number }
    powerZone: { note: string; description: string; score: number }
    sweetSpot: { note: string; description: string; score: number }
    midChest: { note: string; description: string; score: number }
    lowerLimit: { note: string; description: string; score: number }
  }
  tracks: {
    id: number
    title: string
    duration: string
    isHot?: boolean
    tags: string[]
  }[]
  albums: {
    title: string
    image: string
    trackCount: number
  }[]
  seoDescription: string
  searchTags: string[]
}

export const artists: Artist[] = [
  // ==========================================
  // ARTIST 1: KITO KAYA
  // ==========================================
  {
    id: '1',
    slug: 'kito-kaya',
    name: 'Kito Kaya',
    tagline: 'Bold Afro-worship praise built for powerful congregational moments.',
    description: 'Kito Kaya delivers bold East African gospel anthems blending Afro rhythms and contemporary worship.',
    longBio: "Kito Kaya is wimbo.ai's boldest gospel voice — engineered for the high-energy praise moments that define East African worship culture. His tenor carries the weight of congregational anthems, projecting clearly above full band arrangements while maintaining the melodic precision required for Swahili and English worship lyrics. Built for praise leaders and worship teams who need a voice that commands attention without losing spiritual authenticity. Kito thrives in moments where the room needs to rise — where declarations of faith require both power and precision. The voice of My Devotion.",
    image: '/images/artist-kito.png',
    category: 'praise-worship',
    tags: ['Tenor', 'Swahili', 'Worship'],
    stats: { tracksRecorded: 8, albumFeatures: 2, dialects: 4 },
    vocalScores: { melodyFit: 9, vocalRange: 8, emotionalDepth: 8, dialectAccuracy: 9, phrasingDynamics: 8, marketFit: 9 },
    voiceProfileSummary: "Kito Kaya is wimbo.ai's most commanding gospel tenor — engineered for the high-energy praise moments that define East African worship culture. His voice carries the projection and clarity needed to lead congregational worship, cutting through full band arrangements while maintaining the melodic precision required for both Swahili and English lyrics. His mid-to-upper register is optimized for declarative worship phrases and anthemic choruses that lift entire rooms. Kito's voice was shaped specifically for the kind of worship that moves from intimate verse to explosive chorus — where the build matters as much as the peak. When a song needs to command a congregation's attention and carry them into praise, Kito's voice is built to lead that charge. If your worship track needs to feel like a movement, Kito is the voice you test it with first.",
    voiceArchitectureSummary: "Kito's range was specifically shaped for the sonic demands of East African worship — tracks built around the D4–G4 power zone will sit naturally in his voice with maximum projection. His upper register brightens convincingly for climactic chorus moments, while his chest voice provides the grounding needed for verse declarations. His voice is optimized for songs that build dynamically, carrying energy from intimate beginnings to anthemic peaks without strain or thinning.",
    genreBreakdown: [
      { title: 'Contemporary Gospel Worship', description: "Kito's tenor thrives in full-band worship arrangements where projection and clarity are essential. His voice carries above choir and instrumentation, allowing strong congregational leadership while maintaining melodic clarity during call-and-response praise sections. He's built for the declarative, uplifting nature of modern worship — songs that proclaim rather than whisper." },
      { title: 'Afro-Worship', description: "Afro-worship rhythms allow Kito's voice to ride groove-based praise patterns naturally. His mid-tenor power zone cuts through percussion-heavy arrangements, sustaining energetic refrains and repeatable worship choruses that congregations can follow and join. The rhythmic foundation gives his declarations momentum and movement." },
      { title: 'Praise Anthem Gospel', description: "Large declarative melodies suit Kito's vocal weight perfectly. When songs build dynamically toward climactic moments, his voice retains clarity in the upper mid-range, making him effective for anthem-style gospel choruses that demand both power and precision. These are the songs that define a worship service's peak moments." },
      { title: 'Inspirational Gospel Pop', description: "In pop-leaning gospel production, Kito's tone becomes brighter and more melodic without losing authority. His voice adapts easily to structured hooks while still carrying the weight of a worship lead, bridging traditional gospel energy with contemporary production techniques that reach younger audiences." },
    ],
    vocalRangeMap: {
      upperLimit: { note: 'C5', description: "The ceiling of Kito's range. Bright and powerful — reserved for the climactic moments in worship where the song reaches its peak. Use strategically for maximum impact when the congregation needs to soar.", score: 8.0 },
      headVoice: { note: 'A4', description: "Where Kito's voice opens into its most projecting register. Clear enough for worship declarations, controlled enough to sustain phrases that lead congregations into praise. This is where anthems live.", score: 8.5 },
      powerZone: { note: 'G4', description: "Full voice, maximum projection. This is where Kito is loudest and most commanding — the natural home of anthemic worship choruses and declarative praise hooks that move entire rooms.", score: 9.0 },
      sweetSpot: { note: 'E4', description: "The most balanced part of Kito's range. Verses, bridges, and call-and-response sections land here with clarity and warmth. His tone is richest and most natural in this register.", score: 9.0 },
      midChest: { note: 'C4', description: "Grounded chest voice with natural authority. Works well for intimate worship moments and verse storytelling before songs build toward their explosive choruses.", score: 8.5 },
      lowerLimit: { note: 'G2', description: "The foundation of Kito's range. Deep chest resonance for spoken-word moments and low declarations. Use for contrast and grounding between powerful peaks.", score: 7.5 },
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

  // ==========================================
  // ARTIST 2: JIROH MALAKA
  // ==========================================
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
    voiceProfileSummary: "Jiroh Malaka represents the contemplative heart of East African gospel — a voice shaped for moments of surrender, prayer, and spiritual reflection. His mid-tenor range emphasizes emotional nuance and lyrical clarity over raw vocal power, allowing intimate worship moments to feel genuine and unforced. Jiroh excels in devotional songwriting where the message matters more than the melody, and where vulnerability is a strength rather than weakness. His exceptional phrasing dynamics allow him to navigate complex emotional terrain — moving from whispered confession to earnest declaration — without ever losing the listener's trust. When worship calls for honesty over performance, intimacy over spectacle, Jiroh's voice carries that truth with grace.",
    voiceArchitectureSummary: "Jiroh's range was specifically shaped for reflective worship production — tracks built around the C4–E4 sweet spot will sit naturally in his voice with maximum emotional resonance. His mid-tenor warmth carries lyrics clearly without overwhelming their meaning. His voice is optimized for songs that prioritize lyrical clarity and emotional connection over vocal pyrotechnics, allowing intimate worship to breathe and resonate deeply.",
    genreBreakdown: [
      { title: 'Contemporary Worship', description: "Jiroh's voice sits naturally in reflective worship arrangements where sincerity matters most. His mid-range control allows intimate phrasing that carries emotional nuance, making prayer-centered songs feel conversational rather than performative. He excels in worship that invites listeners into encounter rather than commanding them to respond." },
      { title: 'Devotional Gospel Ballads', description: "Slower tempos highlight Jiroh's exceptional phrasing control and emotional depth. His tenor sits comfortably in melodic storytelling, allowing quiet emotional builds that work especially well in reflective worship moments where subtlety matters more than volume. Every phrase feels intentional and earned." },
      { title: 'Afro-Worship Ballads', description: "Afro-worship instrumentation gives Jiroh rhythmic grounding while maintaining emotional depth and vulnerability. His voice moves gently between prayerful lines and melodic refrains, carrying the listener through spiritual narratives with grace, authenticity, and unhurried confidence." },
      { title: 'Acoustic Worship', description: "With minimal instrumentation, Jiroh's vocal sincerity becomes fully pronounced. His tone carries subtle emotional shifts that resonate deeply in stripped-back arrangements where every vocal choice is exposed. There's nowhere to hide, and Jiroh doesn't need to — his authenticity shines brightest when production steps back." },
    ],
    vocalRangeMap: {
      upperLimit: { note: 'B4', description: "The ceiling of Jiroh's range. Reserved for moments of emotional climax in worship — use sparingly for maximum impact when songs reach their most vulnerable, honest peaks.", score: 7.0 },
      headVoice: { note: 'G4', description: "Where Jiroh's voice becomes lighter and more intimate. Perfect for reflective passages and moments of spiritual vulnerability that require delicate, careful delivery.", score: 8.0 },
      powerZone: { note: 'F4', description: "Jiroh's most expressive register. Not about volume but emotional intensity — where heartfelt declarations and earnest prayer live naturally without force or strain.", score: 9.0 },
      sweetSpot: { note: 'E4', description: "The most natural, most emotionally resonant part of Jiroh's range. Verses, devotional passages, and intimate worship moments land here with authenticity and warmth that listeners trust.", score: 9.5 },
      midChest: { note: 'C4', description: "Grounded and warm. Works well for storytelling verses and introspective moments where the voice needs to feel anchored, trustworthy, and completely present.", score: 8.5 },
      lowerLimit: { note: 'F3', description: "The foundation of Jiroh's range. Deep and resonant for spoken-word moments and whispered prayers. Intimate, grounding, and full of quiet strength.", score: 7.5 },
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
  },

  // ==========================================
  // ARTIST 3: MAYA LOWI
  // ==========================================
  {
    id: '3',
    slug: 'maya-lowi',
    name: 'Maya Lowi',
    tagline: 'Soulful contemporary worship with cinematic vocal power.',
    description: 'Maya Lowi delivers emotionally rich gospel worship performances with powerful mezzo-soprano vocals.',
    longBio: "Maya Lowi is wimbo.ai's most emotionally powerful female gospel voice — a mezzo-soprano built for the climactic moments in contemporary worship that transform services into encounters. Her range moves seamlessly from intimate prayerful tones to choir-backed crescendos, carrying the emotional intensity that defines modern gospel production at its peak. Maya excels in dynamic arrangements that build, break, and rebuild — where vulnerability and power coexist in the same song. She scores a perfect 10 in emotional depth because her voice doesn't just carry notes; it carries weight. The voice that turns worship into experience.",
    image: '/images/artist-maya.png',
    category: 'praise-worship',
    tags: ['Mezzo-Soprano', 'Swahili', 'Worship'],
    stats: { tracksRecorded: 7, albumFeatures: 2, dialects: 3 },
    vocalScores: { melodyFit: 9, vocalRange: 9, emotionalDepth: 10, dialectAccuracy: 9, phrasingDynamics: 9, marketFit: 9 },
    voiceProfileSummary: "Maya Lowi is wimbo.ai's most emotionally powerful female gospel voice — a mezzo-soprano engineered for the climactic moments that define contemporary worship at its most transformative. Her range moves seamlessly from intimate prayerful tones to choir-backed crescendos, carrying the kind of emotional intensity that turns songs into experiences and services into encounters. Maya excels in dynamic arrangements that build, break, and rebuild — her voice designed to hold the weight of a song's most vulnerable and most powerful moments with equal authenticity. Her perfect 10 in emotional depth isn't arbitrary; it reflects a voice calibrated for the full spectrum of human spiritual experience. When worship needs to feel like encounter, Maya's voice creates that sacred space.",
    voiceArchitectureSummary: "Maya's range was specifically shaped for dynamic gospel production — tracks that move from intimate verses to explosive choruses. Her F4–A4 sweet spot carries emotional weight without strain, while her upper register brightens convincingly for climactic moments that lift entire congregations. Her voice is optimized for songs that demand emotional range, carrying listeners through the full arc of worship experience from quiet confession to triumphant celebration.",
    genreBreakdown: [
      { title: 'Contemporary Gospel Worship', description: "Maya's mezzo-soprano thrives in layered worship arrangements where emotional dynamics drive the song. Her voice carries intensity that builds naturally toward choir-backed climaxes without losing warmth or tonal clarity. She's built for songs that need to crescendo — where the build is as important as the peak and every moment serves the whole." },
      { title: 'Gospel Soul', description: "Soul-inflected gospel allows Maya's voice to stretch across its full dynamic range with freedom and power. Her phrasing becomes more expressive, blending melismatic runs with powerful sustained notes that showcase her exceptional emotional depth. This is where her 10/10 emotional depth score becomes fully audible." },
      { title: 'Cinematic Worship', description: "In orchestral or cinematic arrangements, Maya's voice expands to fill every corner of the space dramatically. Her upper register carries emotional weight that suits large, atmospheric worship productions designed for immersive spiritual experiences — the kind of worship that feels like a film score for the soul." },
      { title: 'Inspirational Gospel Pop', description: "When production shifts toward pop structure, Maya's voice anchors the melody while maintaining the emotional resonance that sets gospel apart from secular pop. She's effective for radio-friendly gospel songs that still carry genuine spiritual depth — accessible without being shallow, commercial without compromise." },
    ],
    vocalRangeMap: {
      upperLimit: { note: 'E5', description: "Maya's ceiling — powerful and emotionally charged. Reserved for the climactic peaks of worship where songs reach their most transcendent moments. Use for maximum spiritual and emotional impact.", score: 9.0 },
      headVoice: { note: 'C5', description: "Where Maya's voice opens into soaring, ethereal territory. Light enough for falsetto-adjacent moments of intimacy, powerful enough to carry a climax. Emotionally transcendent and spiritually lifting.", score: 9.0 },
      powerZone: { note: 'B4', description: "Full voice, full emotional weight. This is where Maya's crescendos live — the natural home of choir-backed peaks and explosive worship moments that move entire rooms to their feet.", score: 9.5 },
      sweetSpot: { note: 'A4', description: "The most emotionally resonant part of Maya's range. Verses, pre-choruses, and intimate moments land here with warmth and vulnerability that draws listeners in. Her emotional depth is most audible and accessible here.", score: 10.0 },
      midChest: { note: 'F4', description: "Warm and grounded. Works beautifully for storytelling verses and prayer-like passages where intimacy matters most. The foundation of her emotional range and the launching pad for her builds.", score: 9.0 },
      lowerLimit: { note: 'A3', description: "The foundation of Maya's range. Deep mezzo warmth for intimate moments and whispered prayers. Vulnerable and grounding — where songs begin before they soar.", score: 8.5 },
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

  // ==========================================
  // ARTIST 4: JANIEL MATE
  // ==========================================
  {
    id: '4',
    slug: 'janiel-mate',
    name: 'Janiel Mate',
    tagline: 'Honest contemporary worship rooted in sincerity and prayer.',
    description: 'Janiel Mate represents a new generation of gospel voices delivering intimate worship songs.',
    longBio: "Janiel Mate embodies the emerging voice of modern devotional expression — sincere, vulnerable, and deeply personal in ways that resonate with younger believers seeking authentic connection. Her light soprano prioritizes emotional authenticity over technical display, making every lyric feel like a private conversation between singer and Creator. Janiel is built for the new generation of worship that values honesty over performance, intimacy over spectacle, and genuine feeling over vocal gymnastics. Her voice carries the kind of sincerity that cannot be manufactured. The voice of honest faith.",
    image: '/images/artist-janiel.png',
    category: 'praise-worship',
    tags: ['Soprano', 'Swahili', 'Worship'],
    stats: { tracksRecorded: 5, albumFeatures: 1, dialects: 3 },
    vocalScores: { melodyFit: 8, vocalRange: 8, emotionalDepth: 9, dialectAccuracy: 8, phrasingDynamics: 8, marketFit: 8 },
    voiceProfileSummary: "Janiel Mate embodies the emerging voice of modern devotional expression — sincere, vulnerable, and deeply personal in ways that resonate powerfully with younger believers. Her light soprano prioritizes emotional authenticity over technical display, making every lyric feel like a private conversation between the singer and the divine. Janiel is built for the new generation of worship that values honesty over performance, intimacy over spectacle, and genuine presence over vocal gymnastics. Her exceptional emotional depth comes not from power but from presence — the quality of being fully in the moment of every phrase, every breath. She resonates strongly with listeners seeking genuine spiritual connection through music that feels real, not rehearsed. When worship calls for vulnerability, Janiel answers with her whole heart.",
    voiceArchitectureSummary: "Janiel's range was specifically shaped for intimate worship production — tracks built around the E4–G4 sweet spot will sit naturally in her voice with maximum sincerity and emotional presence. Her light soprano carries lyrics clearly without overwhelming their emotional weight. Her voice is optimized for stripped-back arrangements and acoustic worship where authenticity matters more than production, and where every vocal choice carries meaning.",
    genreBreakdown: [
      { title: 'Contemporary Worship', description: "Janiel's soprano excels in reflective worship songs where sincerity matters most. Her voice carries vulnerability that makes prayerful lyrics feel intimate and deeply personal, connecting with listeners on an emotional level that transcends performance. She invites rather than impresses, drawing listeners into genuine encounter." },
      { title: 'Gospel Ballads', description: "Slower arrangements highlight Janiel's emotional delivery and lyrical clarity. Her light upper register allows melodies to feel delicate while remaining deeply expressive — perfect for songs about faith, surrender, and the quiet, honest moments of spiritual life that happen away from crowds." },
      { title: 'Youth Worship', description: "Her vocal tone resonates powerfully with contemporary church youth music and young adult worship contexts. Her delivery remains clear and accessible across modern worship production styles, speaking the musical language of a new generation of believers who crave authenticity." },
      { title: 'Acoustic Devotional', description: "In stripped-down arrangements, Janiel's voice becomes the emotional center of the entire production. Her sincerity shines without production support, emphasizing authentic connection over vocal technique. Every breath feels intentional, every phrase earned through presence rather than performance." },
    ],
    vocalRangeMap: {
      upperLimit: { note: 'D5', description: "The ceiling of Janiel's range — bright and delicate rather than powerful. Reserved for emotional peaks where vulnerability meets intensity. Use for genuine climactic moments that feel earned.", score: 8.0 },
      headVoice: { note: 'B4', description: "Where Janiel's voice becomes most ethereal and intimate. Light and vulnerable — perfect for whispered prayers and tender confessions in worship that feel like secrets shared.", score: 8.5 },
      powerZone: { note: 'A4', description: "Janiel's most expressive register. Not about volume but about emotional presence — where sincere declarations and heartfelt worship naturally live with authenticity and grace.", score: 8.5 },
      sweetSpot: { note: 'G4', description: "The most natural, most sincere part of Janiel's range. Intimate verses, personal prayers, and genuine emotional moments land here with complete authenticity and warmth.", score: 9.0 },
      midChest: { note: 'E4', description: "Warm and grounded. Works well for storytelling and conversational worship where lyrics need to be clearly understood and deeply felt by every listener.", score: 8.5 },
      lowerLimit: { note: 'A3', description: "The foundation of Janiel's range. Warm and intimate for quiet moments and spoken-word passages. Grounding and vulnerable — where honesty lives.", score: 8.0 },
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
  },

  // ==========================================
  // ARTIST 5: LENASE TENDI
  // ==========================================
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
    voiceProfileSummary: "Lenase Tendi bridges the sacred and the soulful — a warm baritone that moves effortlessly between gospel grooves and contemporary Afro-soul without losing authenticity in either world. His voice emphasizes rhythmic warmth and groove over range, making him ideal for mid-tempo productions where feeling matters more than flash. Lenase represents the crossover space where church meets culture, where worship rhythms blend with secular soul, and where spiritual messages can ride on beats that move bodies while lifting spirits. His exceptional dialect accuracy ensures authentic delivery across Swahili and Sheng contexts — he sounds as natural in a Sunday service as he does on a Saturday night playlist. When a song needs soul with substance, groove with grace, Lenase delivers both.",
    voiceArchitectureSummary: "Lenase's range was specifically shaped for groove-based production — tracks built around the B3–D4 sweet spot will sit naturally in his voice with maximum warmth and rhythmic feel. His baritone carries rhythm and soul without strain or artifice. His voice is optimized for mid-tempo arrangements where groove and feeling drive the song, allowing him to move between gospel and secular contexts authentically and seamlessly.",
    genreBreakdown: [
      { title: 'Afro-Soul', description: "Lenase's baritone shines in Afro-soul production where warmth and groove are everything. His tone blends naturally with bass-driven instrumentation, allowing relaxed melodic phrasing and rhythmic storytelling that feels effortless and authentic. He rides grooves rather than fighting them, finding the pocket and staying there." },
      { title: 'Gospel Groove', description: "In mid-tempo gospel songs, Lenase's voice provides a stable, warm melodic center that grounds the production. His range supports smooth transitions between verse storytelling and rhythmic chorus hooks without losing the spiritual message or the physical momentum that makes bodies move." },
      { title: 'Afro-Pop Ballads', description: "When arrangements slow down, Lenase's tone carries emotional warmth that invites listeners in and holds them close. His lower range adds depth to melodic storytelling, creating intimate moments within larger productions. The groove remains even when the tempo drops." },
      { title: 'Afro-Fusion', description: "In fusion arrangements combining soul, pop, and African rhythm, Lenase's voice provides grounding and rhythmic stability that ties diverse elements together. He anchors complex productions with consistent warmth and groove, bridging different musical worlds as naturally as breathing." },
    ],
    vocalRangeMap: {
      upperLimit: { note: 'A4', description: "The ceiling of Lenase's range — warm and controlled rather than powerful. Use for melodic peaks that need soul without strain. Expressive and smooth rather than explosive.", score: 7.0 },
      headVoice: { note: 'F4', description: "Where Lenase's voice lightens while maintaining its characteristic warmth. Good for soulful falsetto-adjacent moments and melodic variation that adds color to arrangements.", score: 7.5 },
      powerZone: { note: 'E4', description: "Lenase's most expressive register. Rich and warm — where groovy hooks and soulful refrains naturally live with maximum impact and the deepest pocket.", score: 8.0 },
      sweetSpot: { note: 'D4', description: "The most natural, warmest part of Lenase's range. Verses, bridges, and groove-based passages land here with effortless soul and rhythm that feels like home.", score: 9.0 },
      midChest: { note: 'B3', description: "Deep and groovy. Works beautifully for storytelling and laid-back soul passages where warmth and rhythm drive the delivery and listeners can relax into the sound.", score: 8.5 },
      lowerLimit: { note: 'E2', description: "The foundation of Lenase's range. Deep baritone warmth for bass-driven moments and rhythmic grounding. The groove lives here, solid and unshakeable.", score: 8.0 },
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

  // ==========================================
  // ARTIST 6: AVEL NIRI
  // ==========================================
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
    voiceProfileSummary: "Avel Niri is wimbo.ai's most versatile secular vocal archetype — built for the emotional complexity of modern East African Afropop and R&B. His voice sits in the warm middle register, wide enough to carry an Afropop chorus, precise enough to land Sheng street cadence, and nuanced enough to hold an R&B verse without losing intimacy. Avel was specifically shaped for the kind of music that code-switches mid-song, carries real feeling, and still needs to work on a streaming playlist. His dialect accuracy ensures authentic delivery whether singing in Swahili, Sheng, or English — he moves between languages as naturally as between registers. If your song lives somewhere between the streets and the radio, Avel is the voice you test it with first.",
    voiceArchitectureSummary: "Avel's range was specifically shaped for the production styles dominant in Nairobi's Afropop scene — tracks built around the D4–F4 sweet spot will sit naturally in his voice without strain or thinning. His upper register brightens convincingly for chorus lifts, while his lower chest provides R&B depth in verses. His voice is optimized for songs that move between moods and languages fluidly, never losing authenticity regardless of where the song takes him.",
    genreBreakdown: [
      { title: 'R&B & Neo-Soul', description: "Best fit for Avel's voice. When production slows into his sweet spot, his tenor warmth becomes more expressive, allowing smooth melodic phrasing and emotional nuance that defines contemporary R&B at its finest. This is where his versatility becomes most audible and his emotional range shines brightest." },
      { title: 'Afro-Soul', description: "Afro-soul grooves allow Avel's voice to glide across rhythmic arrangements with natural ease and confidence. His tone blends seamlessly with bass-driven instrumentation, creating the laid-back confidence that defines the genre at its best — effortless and authentic." },
      { title: 'Afro-Pop Ballads', description: "In slower Afro-pop songs, Avel's voice becomes more melodic and emotionally expressive without losing its edge. His warm register carries romantic storytelling with authenticity and vulnerability that listeners trust and connect with deeply." },
      { title: 'Contemporary R&B', description: "His vocal control allows layered harmonies and expressive melodic lines that modern R&B production demands. Avel adapts well to contemporary production techniques while maintaining his distinctive East African character — global sound, local soul." },
    ],
    vocalRangeMap: {
      upperLimit: { note: 'C5', description: "The ceiling of Avel's range. Bright and expressive — best used for melodic peaks and emotional climaxes. Clear without strain, powerful without force.", score: 8.0 },
      headVoice: { note: 'A4', description: "Where Avel's voice opens up into lighter territory. Light enough for falsetto-adjacent moments in Afropop and R&B, still controlled enough to carry a lyric cleanly and with intention.", score: 8.5 },
      powerZone: { note: 'G4', description: "Full voice, natural expression. This is where Avel is most versatile — the natural home of hooks, choruses, and emotional peaks that define songs.", score: 8.5 },
      sweetSpot: { note: 'F4', description: "The most natural, most expressive part of Avel's range. Verses, pre-choruses, and conversational Sheng delivery land best here. Maximum authenticity and emotional resonance.", score: 9.0 },
      midChest: { note: 'D4', description: "Warm and grounded. Works well for R&B verses and introspective moments where the voice needs depth and intimacy that draws listeners close.", score: 8.5 },
      lowerLimit: { note: 'G3', description: "The floor of Avel's range. Deep warmth for spoken-word moments and neo-soul productions where intimacy matters most and vulnerability is strength.", score: 8.0 },
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
  },

  // ==========================================
  // ARTIST 7: JENA MPITO
  // ==========================================
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
    voiceProfileSummary: "Jena Mpito is pure Afro-pop energy — a confident mezzo-soprano built for hooks, choruses, and radio-ready melodies that demand attention on first listen. Her voice prioritizes clarity and rhythmic precision over emotional depth, cutting through dense production with the kind of presence that streaming algorithms and radio programmers reward. Jena is designed for artists who want their songs heard beyond East Africa, with a voice that translates across borders while maintaining authentic African character and identity. Her high market fit score reflects her optimization for commercial success — she's built to chart, stream, and dominate playlists. When a song needs to be undeniable on first listen, Jena's voice delivers that immediate, unforgettable impact.",
    voiceArchitectureSummary: "Jena's range was specifically shaped for modern Afro-pop production — tracks built around the D4–F4 sweet spot will sit naturally in her voice with maximum clarity and presence. Her mezzo tone cuts through production without harshness or strain. Her voice is optimized for hook-driven songs that need immediate impact and high replay value — the sound of songs that get stuck in your head.",
    genreBreakdown: [
      { title: 'Afro-Pop', description: "Jena's voice fits naturally into Afro-pop production like it was designed for nothing else — because it was. Her mezzo tone carries melodic hooks clearly while maintaining rhythmic precision that locks into groove-driven arrangements. She makes hits sound effortless." },
      { title: 'Dance Pop', description: "Up-tempo dance tracks highlight Jena's rhythmic phrasing and infectious energy. Her voice maintains clarity across energetic electronic production without losing its melodic character or getting buried in the mix." },
      { title: 'Afro-Dance', description: "In groove-driven Afro-dance tracks, Jena's voice becomes rhythmic and playful while remaining precise. She supports strong melodic hooks while adding the energy and attack that makes bodies move and tracks go viral." },
      { title: 'Commercial Pop', description: "When production moves toward mainstream pop territory, Jena's tone adapts perfectly to polished vocal layering and structured chorus hooks that international radio formats demand. She's built for crossover success without compromise." },
    ],
    vocalRangeMap: {
      upperLimit: { note: 'C5', description: "Jena's ceiling — bright and energetic. Use for climactic hooks and chorus peaks that need to cut through production with maximum impact and presence.", score: 8.0 },
      headVoice: { note: 'A4', description: "Where Jena's voice becomes lighter while maintaining its signature presence. Good for melodic variation and playful moments in uptempo tracks that need texture.", score: 8.5 },
      powerZone: { note: 'A4', description: "Full voice, maximum presence. This is where Jena's hooks live — bright, clear, and impossible to ignore. Built for radio, designed to chart.", score: 9.0 },
      sweetSpot: { note: 'F4', description: "The most natural, clearest part of Jena's range. Verses, pre-hooks, and rhythmic passages land here with clarity and energy that set up explosive choruses.", score: 9.0 },
      midChest: { note: 'D4', description: "Warm but still energetic and forward. Works well for verse passages that set up explosive choruses and hooks without losing momentum.", score: 8.5 },
      lowerLimit: { note: 'G3', description: "The foundation of Jena's range. Grounded but still present — use for contrast and buildup before the energy explodes.", score: 7.5 },
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

  // ==========================================
  // ARTIST 8: JAKE KYLE
  // ==========================================
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
    voiceProfileSummary: "Jake Kyle represents the introspective edge of contemporary African pop — an indie-influenced tenor built for emotional storytelling and understated melodic performances that value authenticity over mass appeal. His voice favors subtle emotional shifts over technical power, allowing vulnerable songwriting to breathe without overwhelming production or artificial polish. Jake is designed for artists exploring alternative sounds within the African pop landscape, where depth matters more than reach and artistic integrity defines success. His lower market fit score reflects his niche positioning, but his exceptional emotional depth and phrasing dynamics more than compensate — he connects deeply with listeners who find him. The voice that whispers what others shout, and is heard more clearly for it.",
    voiceArchitectureSummary: "Jake's range was specifically shaped for indie-influenced production — tracks built around the C4–E4 sweet spot will sit naturally in his voice with maximum emotional resonance and authenticity. His tenor favors storytelling over technical display, emotion over exhibition. His voice is optimized for atmospheric arrangements where subtle dynamics carry more weight than volume, and where silence is as expressive as sound.",
    genreBreakdown: [
      { title: 'Indie Pop', description: "Jake's soft tenor suits indie pop's emotional storytelling perfectly. His restrained delivery allows lyrics to feel personal and reflective, connecting with listeners who value authenticity over polish and depth over reach. He whispers truths that louder voices miss." },
      { title: 'Alternative Pop', description: "In alternative arrangements, Jake's voice carries subtle emotional shifts that work beautifully with atmospheric production. His phrasing creates intimacy even in fuller arrangements, making big productions feel like private conversations." },
      { title: 'Acoustic Pop', description: "Minimal instrumentation highlights Jake's vocal nuance and exceptional phrasing control. Every breath and pause becomes intentional, creating space for emotional impact that louder, busier voices would fill and lose." },
      { title: 'Singer-Songwriter Ballads', description: "Jake's voice naturally supports introspective songwriting and slower emotional narratives. His tenor carries vulnerability without weakness, honesty without melodrama — the mark of genuine artistry that stands the test of time." },
    ],
    vocalRangeMap: {
      upperLimit: { note: 'B4', description: "Jake's ceiling — emotional rather than powerful. Reserved for vulnerable peaks where the song reaches its most honest, exposed moments. Use with intention and restraint.", score: 7.0 },
      headVoice: { note: 'G4', description: "Where Jake's voice becomes most delicate and intimate. Perfect for falsetto whispers and vulnerable confessions in stripped-back moments that require complete trust.", score: 8.0 },
      powerZone: { note: 'F4', description: "Not about volume but emotional intensity. This is where Jake's earnest declarations and heartfelt hooks naturally live with maximum authenticity and connection.", score: 8.5 },
      sweetSpot: { note: 'E4', description: "The most natural, most emotionally resonant part of Jake's range. Storytelling verses and intimate moments land here with complete sincerity that listeners feel in their chest.", score: 9.0 },
      midChest: { note: 'C4', description: "Warm and grounded. Works beautifully for reflective passages where lyrics need space to breathe and meaning matters more than melody.", score: 8.5 },
      lowerLimit: { note: 'F3', description: "The foundation of Jake's range. Intimate and grounding for spoken-word moments and whispered confessions that feel like secrets shared.", score: 7.5 },
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

  // ==========================================
  // ARTIST 9: JAEL MONAH
  // ==========================================
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
    voiceProfileSummary: "Jael Monah is bold, confident, and unapologetically pop — a mezzo-soprano engineered for rhythm-driven Afro-pop production with strong female energy that commands attention without hesitation. Her voice carries the attitude and presence required for songs that demand to be heard, balancing melodic hooks with rhythmic punch and unwavering self-assurance. Jael represents the new wave of African female pop voices — global in ambition, local in authenticity, and built for stages as much as streaming playlists. Her high market fit score reflects her optimization for commercial success across African and international markets alike. When a song needs to feel powerful and present from the first note to the last, Jael delivers with conviction.",
    voiceArchitectureSummary: "Jael's range was specifically shaped for confident Afro-pop production — tracks built around the E4–G4 sweet spot will sit naturally in her voice with maximum presence and attitude. Her mezzo tone commands attention without strain or force. Her voice is optimized for hook-driven songs that need confidence and energy from the first note to the last breath.",
    genreBreakdown: [
      { title: 'Afro-Pop', description: "Jael's voice thrives in rhythm-driven Afro-pop production like she was born for it. Her mezzo register supports strong melodic hooks and confident vocal delivery that defines contemporary African pop sound. She owns every track she touches, every stage she commands." },
      { title: 'Afro-Dance', description: "Her voice adapts perfectly to energetic dance rhythms while maintaining clear melodic phrasing. Jael brings the energy, precision, and attitude that makes Afro-dance tracks undeniable on dancefloors worldwide." },
      { title: 'Contemporary African Pop', description: "Jael's tone carries well in mainstream African pop production across different regional styles and production approaches. Her confidence and clarity translate across borders and international collaborations." },
      { title: 'Pop-Soul', description: "When arrangements slow down, Jael's voice reveals emotional warmth beneath the confidence. Her expressive phrasing adds unexpected depth to ballad moments without losing her signature commanding presence." },
    ],
    vocalRangeMap: {
      upperLimit: { note: 'D5', description: "Jael's ceiling — powerful and commanding. Use for climactic moments that need to dominate with confidence and presence that fills every corner of the room.", score: 8.0 },
      headVoice: { note: 'B4', description: "Where Jael's voice maintains power while opening up into brightness. Good for soaring moments that need attitude and reach beyond ordinary limits.", score: 8.5 },
      powerZone: { note: 'A4', description: "Full voice, maximum confidence. This is where Jael's hooks and choruses live — commanding, clear, and impossible to ignore or forget.", score: 9.0 },
      sweetSpot: { note: 'G4', description: "The most natural, most confident part of Jael's range. Strong verses and attitude-driven passages land here with authority that listeners feel.", score: 9.0 },
      midChest: { note: 'E4', description: "Warm but still commanding. Works well for verse passages that maintain presence while building toward explosive choruses.", score: 8.5 },
      lowerLimit: { note: 'A3', description: "The foundation of Jael's range. Grounded but confident — use for contrast and powerful verse moments that set up the explosion.", score: 8.0 },
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

  // ==========================================
  // ARTIST 10: MASTER GEN-TONE
  // ==========================================
  {
    id: '10',
    slug: 'master-gen-tone',
    name: 'Master Gen-tone',
    tagline: 'Raw Gengetone energy from the heart of Nairobi streets.',
    description: 'Master Gen-tone delivers high-energy Gengetone music with rhythmic rap delivery and urban Nairobi storytelling.',
    longBio: "Master Gen-tone is raw Nairobi energy incarnate — the definitive Gengetone voice built for street anthems, club bangers, and urban storytelling that captures the authentic pulse of Kenya's youth culture. His delivery prioritizes rhythmic cadence and lyrical flow over melodic range, with a perfect 10 in dialect accuracy reflecting Sheng authenticity that cannot be faked or learned in a studio. Master Gen-tone represents the sound of Eastlands, Kayole, and Pipeline — neighborhoods where Gengetone was born and still thrives. His high market fit reflects the genre's dominance in Kenyan youth culture and growing international curiosity. The voice of Nairobi's underground.",
    image: '/images/artist-master.png',
    category: 'heart-vibe',
    tags: ['Rap', 'Sheng', 'Gengetone'],
    stats: { tracksRecorded: 8, albumFeatures: 1, dialects: 2 },
    vocalScores: { melodyFit: 7, vocalRange: 6, emotionalDepth: 7, dialectAccuracy: 10, phrasingDynamics: 9, marketFit: 9 },
    voiceProfileSummary: "Master Gen-tone is raw Nairobi energy incarnate — the definitive Gengetone voice built for street anthems, club bangers, and urban storytelling that captures the authentic pulse of Kenya's youth culture. His delivery prioritizes rhythmic cadence and lyrical flow over melodic range, with a perfect 10 in dialect accuracy reflecting his authentic Sheng delivery that cannot be faked, learned, or imitated convincingly. Master Gen-tone represents the sound of Eastlands, Kayole, and Pipeline — the neighborhoods where Gengetone was born, where it thrives, and where it still belongs to the people who created it. His high market fit reflects Gengetone's dominance in Kenyan youth culture and growing international interest in authentic African urban music. When a track needs to hit the streets hard and stay there, Master Gen-tone is the only voice.",
    voiceArchitectureSummary: "Master Gen-tone's range was specifically shaped for Gengetone production — his voice prioritizes rhythmic punch over melodic extension. His B3–D4 sweet spot carries maximum Sheng authenticity and lyrical clarity. His voice is optimized for beat-driven tracks where cadence and flow matter more than notes, and where street credibility is everything that matters.",
    genreBreakdown: [
      { title: 'Gengetone', description: "Master Gen-tone's voice IS Gengetone. His cadence emphasizes rhythmic punch and street authenticity that defines the genre — raw, energetic, and unmistakably Nairobi from the first syllable. He doesn't perform Gengetone; he embodies it completely." },
      { title: 'Afro-Urban', description: "Urban Afro-beat production allows his delivery to ride groove-heavy rhythms with natural swagger and confidence. His voice carries the energy and attitude that urban East African music demands, bridging clubs and streets seamlessly." },
      { title: 'Hip-Hop', description: "In hip-hop arrangements, his phrasing becomes more rhythmically precise and lyrically focused. His Sheng delivery adds cultural authenticity that resonates with Kenyan hip-hop audiences who value real over manufactured, streets over studios." },
      { title: 'Club Rap', description: "High-energy club production amplifies his vocal attitude and crowd-engaging delivery to maximum effect. Master Gen-tone's voice is designed to move rooms, start parties, and create the moments that define legendary nights in Nairobi." },
    ],
    vocalRangeMap: {
      upperLimit: { note: 'G4', description: "Master Gen-tone's ceiling — reserved for hype moments and ad-libs that punctuate verses with energy and attitude that lifts crowds.", score: 6.0 },
      headVoice: { note: 'F4', description: "Light and energetic — used for vocal variations and melodic hooks that break up rapid-fire verses and add texture to tracks.", score: 6.5 },
      powerZone: { note: 'E4', description: "Where Master Gen-tone's cadence hits hardest. This is the natural home of his most impactful bars and hype moments that define songs.", score: 8.0 },
      sweetSpot: { note: 'D4', description: "The most natural, most authentic part of his range. Verses, flows, and street storytelling land here with maximum Sheng credibility and impact.", score: 9.5 },
      midChest: { note: 'B3', description: "Deep and rhythmic. Works well for laid-back flows and storytelling verses that build toward energetic drops and explosive moments.", score: 8.5 },
      lowerLimit: { note: 'D3', description: "The foundation — deep and grounded. Use for bass-heavy moments and spoken-word intros that set street atmosphere before the beat drops.", score: 7.0 },
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
  },
]

export const getArtistBySlug = (slug: string): Artist | undefined => {
  return artists.find(artist => artist.slug === slug)
}

export const getArtistsByCategory = (category: 'praise-worship' | 'heart-vibe'): Artist[] => {
  return artists.filter(artist => artist.category === category)
}
