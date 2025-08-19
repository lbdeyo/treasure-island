import { defineField, defineType } from 'sanity'

export const pageTextType = defineType({
    name: 'pageText',
    title: 'Page Text Content',
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
            name: 'paragraphs',
            title: 'Text Paragraphs',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'paragraph',
                    title: 'Paragraph',
                    fields: [
                        defineField({
                            name: 'content',
                            title: 'Paragraph Content',
                            type: 'array',
                            of: [{ type: 'block' }],
                            description: 'Rich text content for this paragraph'
                        }),
                        defineField({
                            name: 'order',
                            title: 'Display Order',
                            type: 'number',
                            description: 'Order in which this paragraph should appear (1, 2, 3, etc.)',
                            validation: (rule) => rule.required().min(1)
                        })
                    ],
                    preview: {
                        select: {
                            content: 'content',
                            order: 'order'
                        },
                        prepare(selection) {
                            const { content, order } = selection
                            const text = content?.[0]?.children?.[0]?.text || 'Empty paragraph'
                            return {
                                title: `${order}. ${text.substring(0, 50)}${text.length > 50 ? '...' : ''}`,
                            }
                        }
                    }
                }
            ],
            description: 'Add paragraphs of text content that will be displayed in order'
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
