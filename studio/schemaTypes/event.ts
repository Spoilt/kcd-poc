import { defineField, defineType } from 'sanity'

export const event = defineType({
    name: 'event',
    title: 'Sortie',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Nom de la sortie',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'datetime',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'location',
            title: 'Lieu',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 4
        }),
        defineField({
            name: 'isOpen',
            title: 'Inscriptions ouvertes',
            type: 'boolean',
            initialValue: true
        })
    ]
})