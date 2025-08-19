import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/lib/sanity'
import { PageContent } from '@/lib/sanityQueries'

interface SanityContentProps {
    content: PageContent
}

// Custom components for rendering rich text
const portableTextComponents = {
    block: {
        normal: ({ children }: any) => (
            <p className="text-lg leading-relaxed mb-6">{children}</p>
        ),
        h1: ({ children }: any) => (
            <h1 className="mb-8 pt-8">{children}</h1>
        ),
        h2: ({ children }: any) => (
            <h2 className="text-2xl font-bold mb-6">{children}</h2>
        ),
        h3: ({ children }: any) => (
            <h3 className="text-xl font-semibold mb-4">{children}</h3>
        ),
    },
    marks: {
        em: ({ children }: any) => <em>{children}</em>,
        strong: ({ children }: any) => <strong>{children}</strong>,
        link: ({ children, value }: any) => (
            <a href={value.href} className="text-blue-600 hover:underline">
                {children}
            </a>
        ),
    },
}

export default function SanityContent({ content }: SanityContentProps) {
    // Get background image URL if it exists
    const backgroundImageUrl = content.backgroundImage?.asset
        ? urlFor(content.backgroundImage.asset).url()
        : '/img/art/janey.jpg' // fallback to existing image

    return (
        <div
            className="bg-cover bg-top"
            style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="space-y-8">
                    {/* Page Header */}
                    <div className="relative max-w-3xl p-8 bg-[url('/img/art/paper-light.jpg')] bg-cover border-3 border-black">
                        <div className="relative z-20">
                            <h1 className="mb-8 pt-8">{content.title}</h1>

                            {/* Content Sections */}
                            <div className="flex flex-col lg:flex-row lg:gap-12 lg:items-start">
                                <div className="max-w-3xl flex-1">
                                    {content.sections?.map((section, index) => (
                                        <div key={index} className="relative">
                                            {/* Section Image */}
                                            {section.image && (
                                                <div
                                                    className={`
                            ${section.image.position === 'left' ? 'float-left mr-6 mb-6' : ''}
                            ${section.image.position === 'right' ? 'float-right ml-6 mb-6' : ''}
                            ${section.image.position === 'center' ? 'mx-auto mb-6' : ''}
                          `}
                                                >
                                                    <Image
                                                        src={urlFor(section.image.asset).url()}
                                                        alt={section.image.alt || 'Section image'}
                                                        width={section.image.width || 400}
                                                        height={section.image.height || 500}
                                                        className="object-contain"
                                                    />
                                                </div>
                                            )}

                                            {/* Section Content */}
                                            {section.content && (
                                                <PortableText
                                                    value={section.content}
                                                    components={portableTextComponents}
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
