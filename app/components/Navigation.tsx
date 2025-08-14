import Link from 'next/link';

export default function Navigation() {
    const navItems = [
        { href: '/', label: 'HOME' },
        { href: '/about', label: 'ABOUT' },
        { href: '/artistic-team', label: 'ARTISTIC TEAM' },
        { href: '/contact', label: 'CONTACT' },
        { href: '/info-for-venues', label: 'INFO FOR VENUES' },
        { href: '/educational-materials', label: 'EDUCATIONAL MATERIALS' },
        { href: '/tour-dates', label: 'TOUR DATES' },
        { href: '/store', label: 'STORE' },
        { href: '/marketing-manual', label: 'MARKETING MANUAL' },
    ];

    return (
        <nav className="w-full bg-white shadow-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo placeholder */}
                    <Link href="/" className="flex items-center">
                        <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                            <span className="text-xs font-bold">LOGO</span>
                        </div>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button placeholder */}
                    <div className="md:hidden">
                        <button className="text-gray-700 hover:text-gray-900">
                            <span className="sr-only">Open main menu</span>
                            <div className="w-6 h-6 flex flex-col justify-center">
                                <span className="block w-full h-0.5 bg-current mb-1"></span>
                                <span className="block w-full h-0.5 bg-current mb-1"></span>
                                <span className="block w-full h-0.5 bg-current"></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
