import { sanityClient } from '@/sanity/client'
import { EVENTS_QUERY } from '@/sanity/queries'

export const revalidate = 60

export default async function SortiesPage() {
  const events = await sanityClient.fetch(EVENTS_QUERY)

  return (
    <main>
      <h1>Sorties à venir</h1>

      {events.length === 0 && <p>Aucune sortie prévue.</p>}

      <ul>
        {events.map((event: any) => (
          <li key={event._id}>
            <h2>{event.title}</h2>
            <p>{new Date(event.date).toLocaleDateString()}</p>
            <p>{event.location}</p>
            {event.isOpen ? (
              <strong>Inscriptions ouvertes</strong>
            ) : (
              <em>Complet</em>
            )}
          </li>
        ))}
      </ul>
    </main>
  )
}
