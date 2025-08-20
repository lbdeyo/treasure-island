import Link from "next/link";

// Base portable text components that can be used across all pages
export const basePortableTextComponents = {
    block: {
        normal: ({ children }: any) => (
            <p className="text-lg leading-relaxed mb-6">{children}</p>
        ),
        h1: ({ children }: any) => (
            <h1 className="mb-8">{children}</h1>
        ),
        h2: ({ children }: any) => (
            <h2 className="text-2xl font-bold mb-4">{children}</h2>
        ),
        h3: ({ children }: any) => (
            <h3 className="text-xl font-bold mb-4">{children}</h3>
        ),
        h4: ({ children }: any) => (
            <h4 className="text-lg font-bold mb-2">{children}</h4>
        ),
    },
    marks: {
        em: ({ children }: any) => <em>{children}</em>,
        strong: ({ children }: any) => <strong>{children}</strong>,
        link: ({ children, value }: any) => (
            <a href={value.href} className="text-blue-600 hover:underline font-medium">
                {children}
            </a>
        ),
    },
    list: {
        bullet: ({ children }: any) => (
            <ul className="text-lg leading-relaxed list-disc list-inside space-y-2 mb-6">
                {children}
            </ul>
        ),
        number: ({ children }: any) => (
            <ol className="text-lg leading-relaxed list-decimal list-inside space-y-2 mb-6">
                {children}
            </ol>
        ),
    },
    listItem: {
        bullet: ({ children }: any) => <li>{children}</li>,
        number: ({ children }: any) => <li>{children}</li>,
    },
}

// Store page specific components (larger text)
export const storePortableTextComponents = {
    ...basePortableTextComponents,
    block: {
        ...basePortableTextComponents.block,
        normal: ({ children }: any) => (
            <p className="text-xl leading-relaxed mb-4">{children}</p>
        ),
    },
}

// Home page specific components (for drop cap support)
export const homePortableTextComponents = {
    ...basePortableTextComponents,
    block: {
        ...basePortableTextComponents.block,
        normal: ({ children, value }: any) => {
            // Check if this is marked as a drop cap paragraph
            const isDropCap = value?.markDefs?.some((mark: any) => mark._type === 'dropCap') ||
                value?.style === 'dropCap';

            if (isDropCap) {
                return <p className="mb-6 drop-cap-paragraph">{children}</p>;
            }
            return <p className="mb-6">{children}</p>;
        },
        dropCap: ({ children }: any) => (
            <p className="mb-6 drop-cap-paragraph">{children}</p>
        ),
    },
    marks: {
        ...basePortableTextComponents.marks,
        // Custom drop cap mark
        dropCapLetter: ({ children }: any) => (
            <span className="float-left text-9xl mr-2 -mt-4">{children}</span>
        ),
    },
}

// Artistic team specific components (for team member styling)
export const artisticTeamPortableTextComponents = {
    ...basePortableTextComponents,
    block: {
        ...basePortableTextComponents.block,
        normal: ({ children }: any) => (
            <p className="text-lg leading-relaxed">{children}</p>
        ),
    },
    marks: {
        ...basePortableTextComponents.marks,
        link: ({ children, value }: any) => (
            <a href={value.href} className="text-blue-500 hover:text-blue-600">
                {children}
            </a>
        ),
    },
}

// Sample video specific components (for password and credits styling)
export const sampleVideoPortableTextComponents = {
    ...basePortableTextComponents,
    block: {
        ...basePortableTextComponents.block,
        normal: ({ children }: any) => (
            <p className="text-2xl text-black pt-3 pb-5">{children}</p>
        ),
        // Special style for credits
        credits: ({ children }: any) => (
            <p className="text-xl text-center text-black p-5">{children}</p>
        ),
    },
}
