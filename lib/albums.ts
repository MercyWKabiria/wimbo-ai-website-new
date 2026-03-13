export type Album = {
  id: string
  slug: string
  title: string
  tagline: string
  description: string
  image: string
  releaseYear: number
  trackCount: number
  coachCount: number
  dialects: string[]
  category: 'gospel' | 'pop'
  tracks: {
    id: number
    title: string
    artistSlug: string
    artistName: string
    duration: string
    isHot?: boolean
  }[]
  artists: string[] // artist slugs featured on this album
}

export const albums: Album[] = [
  {
    id: '1',
    slug: 'my-devotion',
    title: 'My Devotion',
    tagline: 'Songs of surrender, faith, and victory shaped by the sound of contemporary Afro-worship.',
    description: 'My Devotion is a contemporary East African gospel album that blends Afro-worship rhythms with modern congregational worship. The project brings together distinct gospel voices delivering songs of surrender, spiritual resilience, and praise. Across the album, listeners move through moments of intimate prayer, reflective devotion, and powerful declarations of faith. From choir-driven worship to rhythm-infused praise anthems, My Devotion captures the emotional and spiritual depth of modern African gospel music while remaining accessible to global audiences.',
    image: '/images/album-devotion.jpg',
    releaseYear: 2026,
    trackCount: 12,
    coachCount: 4,
    dialects: ['English', 'Swahili', 'English–Swahili blend'],
    category: 'gospel',
    tracks: [
      { id: 1, title: '1,000 Reasons', artistSlug: 'kito-kaya', artistName: 'Kito Kaya', duration: '4:12' },
      { id: 2, title: 'Hosanna', artistSlug: 'kito-kaya', artistName: 'Kito Kaya', duration: '3:45', isHot: true },
      { id: 3, title: 'Unbound', artistSlug: 'jiroh-malaka', artistName: 'Jiroh Malaka', duration: '4:08' },
      { id: 4, title: 'Iwe', artistSlug: 'jiroh-malaka', artistName: 'Jiroh Malaka', duration: '3:52' },
      { id: 5, title: 'Nipe Macho', artistSlug: 'jiroh-malaka', artistName: 'Jiroh Malaka', duration: '4:22' },
      { id: 6, title: 'My Song of Surrender', artistSlug: 'jiroh-malaka', artistName: 'Jiroh Malaka', duration: '4:35', isHot: true },
      { id: 7, title: 'My Feet Are Planted', artistSlug: 'kito-kaya', artistName: 'Kito Kaya', duration: '3:58' },
      { id: 8, title: 'Kwa Ujasiri', artistSlug: 'kito-kaya', artistName: 'Kito Kaya', duration: '4:15' },
      { id: 9, title: 'Sijui Nikutafute Wapi', artistSlug: 'kito-kaya', artistName: 'Kito Kaya', duration: '4:42' },
      { id: 10, title: 'Ninawachilia', artistSlug: 'maya-lowi', artistName: 'Maya Lowi', duration: '4:28' },
      { id: 11, title: 'My God Will Supply', artistSlug: 'maya-lowi', artistName: 'Maya Lowi', duration: '3:55', isHot: true },
      { id: 12, title: 'Broken Before You', artistSlug: 'janiel-mate', artistName: 'Janiel Mate', duration: '4:18' },
    ],
    artists: ['kito-kaya', 'jiroh-malaka', 'maya-lowi', 'janiel-mate'],
  },
  {
    id: '2',
    slug: 'of-love-and-comebacks',
    title: 'Of Love & Comebacks',
    tagline: 'Stories of love, heartbreak, resilience, and courage to start again.',
    description: 'Of Love and Comebacks is a contemporary East African pop album exploring the emotional spectrum of modern relationships — from infatuation and romance to heartbreak, reflection, and personal reinvention. Blending Afro-pop, Afro-soul, alternative pop, and urban street rhythms, the album brings together diverse voices that capture the energy and vulnerability of today\'s African music landscape. Some songs celebrate connection and joy, while others confront disappointment and growth, ultimately arriving at a place of resilience.',
    image: '/images/album-love.jpg',
    releaseYear: 2026,
    trackCount: 13,
    coachCount: 4,
    dialects: ['English', 'Swahili', 'Sheng', 'English–Swahili blend'],
    category: 'pop',
    tracks: [
      { id: 1, title: 'Boomerang', artistSlug: 'jena-mpito', artistName: 'Jena Mpito', duration: '3:15', isHot: true },
      { id: 2, title: 'Blind To Me', artistSlug: 'jake-kyle', artistName: 'Jake Kyle', duration: '3:58' },
      { id: 3, title: 'Hopeless Romantic', artistSlug: 'avel-niri', artistName: 'Avel Niri', duration: '3:42' },
      { id: 4, title: 'Taki Ya Kupenda', artistSlug: 'lenase-tendi', artistName: 'Lenase Tendi', duration: '4:05' },
      { id: 5, title: 'Staki Mambo Mingi', artistSlug: 'lenase-tendi', artistName: 'Lenase Tendi', duration: '3:38', isHot: true },
      { id: 6, title: 'Don\'t Cry For Me', artistSlug: 'avel-niri', artistName: 'Avel Niri', duration: '4:12' },
      { id: 7, title: 'Mafix Na Wewe', artistSlug: 'jael-monah', artistName: 'Jael Monah', duration: '3:28' },
      { id: 8, title: 'Udunde', artistSlug: 'jael-monah', artistName: 'Jael Monah', duration: '3:45' },
      { id: 9, title: 'Hatia', artistSlug: 'jael-monah', artistName: 'Jael Monah', duration: '3:52', isHot: true },
      { id: 10, title: 'Najipa Tu', artistSlug: 'lenase-tendi', artistName: 'Lenase Tendi', duration: '4:08' },
      { id: 11, title: 'Nitangoja', artistSlug: 'lenase-tendi', artistName: 'Lenase Tendi', duration: '4:22' },
      { id: 12, title: 'Sema Ukweli', artistSlug: 'master-gen-tone', artistName: 'Master Gen-tone', duration: '3:18' },
      { id: 13, title: 'Don\'t Make Me Go Crazy', artistSlug: 'jena-mpito', artistName: 'Jena Mpito', duration: '3:32' },
    ],
    artists: ['jena-mpito', 'jake-kyle', 'avel-niri', 'lenase-tendi', 'jael-monah', 'master-gen-tone'],
  },
]

export const getAlbumBySlug = (slug: string): Album | undefined => {
  return albums.find(album => album.slug === slug)
}

export const getAlbumsByCategory = (category: 'gospel' | 'pop'): Album[] => {
  return albums.filter(album => album.category === category)
}
