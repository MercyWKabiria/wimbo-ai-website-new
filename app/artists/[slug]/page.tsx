import { notFound } from 'next/navigation'
import { getArtistBySlug, artists } from '@/lib/artists'
import { albums } from '@/lib/albums'
import ArtistProfileClient from './ArtistProfileClient'

export function generateStaticParams() {
  return artists.map((artist) => ({
    slug: artist.slug,
  }))
}

export default function ArtistProfilePage({ params }: { params: { slug: string } }) {
  const artist = getArtistBySlug(params.slug)

  if (!artist) {
    notFound()
  }

  return <ArtistProfileClient artist={artist} albums={albums} />
}
