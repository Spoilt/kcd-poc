import { groq } from 'next-sanity'

/* ========= POSTS ========= */

export const POSTS_QUERY = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt
  }
`

export const POST_BY_SLUG_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    title,
    publishedAt,
    body
  }
`

/* ========= PAGES ========= */

export const PAGE_BY_SLUG_QUERY = groq`
  *[_type == "page" && slug.current == $slug][0] {
    title,
    body
  }
`

/* ========= EVENTS ========= */

export const EVENTS_QUERY = groq`
  *[_type == "event" && date >= now()] | order(date asc) {
    _id,
    title,
    date,
    location,
    description,
    isOpen
  }
`
