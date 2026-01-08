import {defineField, defineType} from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Actualité',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'publishedAt',
      title: 'Date de publication',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    }),
    defineField({
      name: 'excerpt',
      title: 'Résumé',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'body',
      title: 'Contenu',
      type: 'blockContent'
    })
  ]
})