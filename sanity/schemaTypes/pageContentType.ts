import { defineField, defineType } from 'sanity'

export const pageContentType = defineType({
    name: 'pageContent',
    title: 'Page Content',
    type: 'document',
    fields: [
        defineField({
            name: 'pageId',
            title: 'Page ID',
            type: 'string',
            description: 'Unique identifier for the page (e.g., "about", "contact", "tour-dates")',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'backgroundImage',
            title: 'Background Image',
            type: 'image',
            description: 'Background image for the page',
        }),
        defineField({
            name: 'sections',
            title: 'Content Sections',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'textSection',
                    title: 'Text Section',
                    fields: [
                        defineField({
                            name: 'content',
                            title: 'Content',
                            type: 'array',
                            of: [{ type: 'block' }],
                        }),
                        defineField({
                            name: 'image',
                            title: 'Section Image',
                            type: 'image',
                            options: {
                                hotspot: true,
                            },
                            fields: [
                                {
                                    name: 'alt',
                                    title: 'Alt Text',
                                    type: 'string',
                                },
                                {
                                    name: 'position',
                                    title: 'Image Position',
                                    type: 'string',
                                    options: {
                                        list: [
                                            { title: 'Left', value: 'left' },
                                            { title: 'Right', value: 'right' },
                                            { title: 'Center', value: 'center' },
                                        ],
                                    },
                                    initialValue: 'right',
                                },
                                {
                                    name: 'width',
                                    title: 'Image Width',
                                    type: 'number',
                                    initialValue: 400,
                                },
                                {
                                    name: 'height',
                                    title: 'Image Height',
                                    type: 'number',
                                    initialValue: 500,
                                },
                            ],
                        }),
                    ],
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            pageId: 'pageId',
        },
        prepare(selection) {
            const { title, pageId } = selection
            return {
                title: title,
                subtitle: `Page: ${pageId}`,
            }
        },
    },
})
