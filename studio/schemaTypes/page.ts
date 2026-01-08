import { defineField, defineType } from 'sanity'

export const page = defineType({
    name: 'page',
    title: 'Page',
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
                source: 'title'
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'body',
            title: 'Contenu',
            type: 'blockContent'
        }),
    ]
})