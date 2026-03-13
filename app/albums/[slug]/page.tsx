import { notFound } from 'next/navigation'
import { getAlbumBySlug, albums } from '@/lib/albums'
import { getArtistBySlug } from '@/lib/artists'
import AlbumDetailClient from './AlbumDetailClient'

export function generateStaticParams() {
  return albums.map((album) => ({
    slug: album.slug,
  }))
}

export default function AlbumDetailPage({ params }: { params: { slug: string } }) {
  const album = getAlbumBySlug(params.slug)

  if (!album) {
    notFound()
  }

  // Get featured artists data
  const featuredArtists = album.artists
    .map(slug => getArtistBySlug(slug))
    .filter(Boolean)

  return <AlbumDetailClient album={album} featuredArtists={featuredArtists} />
}
