import { defineType, defineArrayMember } from 'sanity'

export const blockContent = defineType({
  name: 'blockContent',
  title: 'Contenu riche',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Titre', value: 'h2' },
        { title: 'Sous-titre', value: 'h3' }
      ],
      lists: [{ title: 'Liste', value: 'bullet' }],
      marks: {
        decorators: [
          { title: 'Gras', value: 'strong' },
          { title: 'Italique', value: 'em' }
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Lien',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL'
              }
            ]
          }
        ]
      }
    }),
    defineArrayMember({
      type: 'image',
      options: { hotspot: true }
    })
  ]
})
