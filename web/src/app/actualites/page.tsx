import { sanityClient } from '@/sanity/client'
import { POSTS_QUERY } from '@/sanity/queries'

export const revalidate = 60 // ISR

export default async function ActualitesPage() {
  const posts = await sanityClient.fetch(POSTS_QUERY)

  return (
    <main>
      <h1>Actualités</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post._id}>
            <a href={`/actualites/${post.slug.current}`}>
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </main>
  )
}
