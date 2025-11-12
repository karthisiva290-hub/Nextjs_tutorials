// components/DropdownMenu.tsx

'use client';
import React, { useState } from 'react';

interface MenuItem {
    label: string;
    href: string;
    subItems?: MenuItem[];
}

interface DropdownProps {
    title: string;
    items: MenuItem[];
}

export default function DropdownMenu({ title, items }: DropdownProps) {
    const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div
            className="relative h-full flex items-center"
            onMouseEnter={() => setIsMenuOpen(true)}
            onMouseLeave={() => { setIsMenuOpen(false); setActiveSubMenu(null); }}
        >
            {/* Menu Title (The main hoverable link) */}
            <a href="#" className="flex items-center gap-1 text-sm font-semibold text-[#092B4D]">
                {title}
                {/* Down arrow icon */}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6L8 10L12 6" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            </a>

            {/* Dropdown Panel */}
            <div
                className={`absolute top-10 -left-5 py-3 bg-white shadow-xl min-w-[250px] border-t-2 border-black z-30 transition-opacity duration-500
          ${isMenuOpen ? 'block' : 'hidden'}`}
            >
                {items.map((item) => (
                    <div
                        key={item.label}
                        className="relative"
                        onMouseEnter={() => item.subItems && setActiveSubMenu(item.label)}
                        onMouseLeave={() => setActiveSubMenu(null)}
                    >
                        {/* Link for the item shown in your image */}
                        <a
                            href={item.href}
                            className="block px-3 py-2 text-sm font-semibold text-[#092B4D] hover:text-[#ff4500] flex justify-between items-center"
                        >
                            <span className='flex items-center gap-2'>
                                {/* Right Arrow Icon (as seen in the image) */}
                                <svg className="w-3 h-3 text-[#ff4500]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
                                {item.label}
                            </span>

                            {/* Conditional arrow for sub-menu */}
                            {item.subItems && <span className="ml-2 text-xs"> &gt; </span>}
                        </a>

                        {/* Sub-menu (If needed, although not shown in your current image) */}
                        {item.subItems && activeSubMenu === item.label && (
                            <div className="absolute top-0 left-full ml-1 bg-white shadow-xl min-w-[200px] z-40 border border-gray-100">
                                {item.subItems.map((subSubItem) => ( // Using subSubItem to avoid conflict
                                    <a
                                        key={subSubItem.label}
                                        href={subSubItem.href}
                                        className="block p-3 text-sm text-gray-700 hover:bg-gray-50"
                                    >
                                        {subSubItem.label}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}