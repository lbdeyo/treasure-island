'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);

    const navItems = [
        { href: '/', label: 'HOME' },
        {
            href: '/about',
            label: 'ABOUT',
            submenu: [
                { href: '/about', label: 'About the play' },
                { href: '/artistic-team', label: 'Artistic Team' }
            ]
        },
        { href: '/tour-dates', label: 'TOUR DATES', comingSoon: true },
        { href: '/store', label: 'STORE', comingSoon: true },
        { href: '/contact', label: 'CONTACT' },
        {
            href: '/info-for-venues',
            label: 'INFO FOR VENUES',
            submenu: [
                { href: '/info-for-venues', label: 'Tech Specs' },
                { href: '/educational-materials', label: 'Educational Materials' },
                { href: '/marketing-manual', label: 'Marketing Manual', comingSoon: true },
                { href: '/sample-video', label: 'Sample Video' }
            ]
        }
    ];

    const handleMouseEnter = (label: string) => {
        setOpenDropdown(label);
    };

    const handleMouseLeave = () => {
        setOpenDropdown(null);
    };

    return (
        <nav className="w-full bg-white shadow-sm border-b border-gray-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                            <div
                                key={item.href}
                                className="relative"
                                onMouseEnter={() => item.submenu && handleMouseEnter(item.label)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {item.submenu ? (
                                    // Parent items with submenus - not clickable, just show dropdown
                                    <button
                                        className={`text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-bold flex items-center cursor-default ${item.comingSoon ? 'opacity-60' : ''
                                            }`}
                                    >
                                        {item.label}
                                        <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                ) : (
                                    // Regular menu items - clickable links
                                    <Link
                                        href={item.href}
                                        className={`text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-bold flex items-center ${item.comingSoon ? 'opacity-60' : ''
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                )}

                                {/* Dropdown Menu */}
                                {item.submenu && openDropdown === item.label && (
                                    <div className="absolute left-0 mt-0 w-64 bg-white shadow-lg border border-gray-200 rounded-md z-50">
                                        <div className="py-2">
                                            {item.submenu.map((subItem) => (
                                                <Link
                                                    key={subItem.href}
                                                    href={subItem.href}
                                                    className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${subItem.comingSoon ? 'opacity-60' : ''
                                                        }`}
                                                >
                                                    {subItem.label}
                                                    {subItem.comingSoon && <span className="text-xs text-gray-500 ml-2">(coming soon)</span>}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-gray-700 hover:text-gray-900"
                        >
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

            {/* Mobile menu panel */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-gray-200">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navItems.map((item) => (
                            <div key={item.href}>
                                {item.submenu ? (
                                    <div>
                                        <button
                                            onClick={() => setMobileSubmenuOpen(
                                                mobileSubmenuOpen === item.label ? null : item.label
                                            )}
                                            className={`w-full text-left px-3 py-2 text-base font-bold text-gray-700 hover:text-gray-900 hover:bg-gray-50 flex items-center justify-between ${item.comingSoon ? 'opacity-60' : ''
                                                }`}
                                        >
                                            {item.label}
                                            <svg
                                                className={`h-5 w-5 transform transition-transform ${mobileSubmenuOpen === item.label ? 'rotate-180' : ''
                                                    }`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        {mobileSubmenuOpen === item.label && (
                                            <div className="pl-4">
                                                {item.submenu.map((subItem) => (
                                                    <Link
                                                        key={subItem.href}
                                                        href={subItem.href}
                                                        onClick={() => setMobileMenuOpen(false)}
                                                        className={`block px-3 py-2 text-base text-gray-600 hover:text-gray-900 hover:bg-gray-50 ${subItem.comingSoon ? 'opacity-60' : ''
                                                            }`}
                                                    >
                                                        {subItem.label}
                                                        {subItem.comingSoon && <span className="text-xs text-gray-500 ml-2">(coming soon)</span>}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`block px-3 py-2 text-base font-bold text-gray-700 hover:text-gray-900 hover:bg-gray-50 ${item.comingSoon ? 'opacity-60' : ''
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
