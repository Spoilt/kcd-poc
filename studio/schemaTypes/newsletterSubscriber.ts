import { defineField, defineType } from 'sanity'

export const newsletterSubscriber = defineType({
  name: 'newsletterSubscriber',
  title: 'Inscription newsletter',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule =>
        Rule.required().email()
    }),
    defineField({
      name: 'createdAt',
      title: 'Date d’inscription',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    })
  ]
})
