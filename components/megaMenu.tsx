// components/TempleMegaMenu.tsx

'use client';
import React, { useState, useMemo } from 'react';
// Import all data
import { templeMegaMenuItems, ALL_TEMPLE_CARDS, TempleCardData } from '../data/menu';

// Component for a single image card
const TempleCard = ({ data }: { data: TempleCardData }) => (
    <a href={data.href} className="block text-center hover:transform hover:scale-105 transition duration-150">
        <img
            src={data.src}
            alt={data.title}
            className="w-full object-cover rounded-md mb-1"
        />
        <p className="text-sm font-semibold text-[#152035] mt-1">{data.title}</p>
    </a>
);

export default function TempleMegaMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // State to track the active filter (initial default is 'All')
    const [hoveredLink, setHoveredLink] = useState<string>('All');

    // Use useMemo to efficiently filter the cards whenever hoveredLink changes
    const filteredCards = useMemo(() => {
        if (hoveredLink === 'All') {
            // If 'All' is active, show ALL cards
            return ALL_TEMPLE_CARDS;
        }

        // For specific categories, check if the hoveredLink is INCLUDED in the card's category array
        return ALL_TEMPLE_CARDS.filter(card =>
            card.category.includes(hoveredLink) // <--- CRITICAL FIX: use .includes()
        );
    }, [hoveredLink]);

    return (
        <div
            className="w-fit h-full flex items-center"
            onMouseEnter={() => setIsMenuOpen(true)}
            onMouseLeave={() => { setIsMenuOpen(false); setHoveredLink('All'); }}
        >
            {/* ... Menu Title Code (கோயில்கள்) ... */}
            <a href="#" className="flex items-center gap-1 text-sm font-semibold text-[#092B4D]">
                <p>கோயில்கள்</p>
                {/* Down arrow icon */}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6L8 10L12 6" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            </a>

            {/* Mega Menu Panel */}
            <div
                className={`absolute top-full left-0 w-full bg-white shadow-2xl z-30 
          ${isMenuOpen ? 'block' : 'hidden'} border-t-2 border-black`}
            >
                <div className="flex">

                    {/* LEFT COLUMN: Filter Tabs */}
                    <div className="w-1/5 py-7 text-white bg-white border-r border-[#F4F5F9]">
                        <ul className="space-y-1">
                            {templeMegaMenuItems.map((item, index) => (
                                <li
                                    key={index}
                                    // SET THE ACTIVE FILTER ON HOVER
                                    onMouseEnter={() => setHoveredLink(item.label)}
                                    className={`py-2 px-3 text-sm font-semibold cursor-pointer 
                    ${item.label === hoveredLink ? 'bg-[#ff4500] text-white' : 'text-gray-700 hover:bg-gray-100'}`
                                    }
                                >
                                    <a href={item.href} className="block">{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* RIGHT COLUMN: Dynamic Image Grid (4x2 layout) */}
                    <div className="w-4/5 p-4 bg-white">

                        <div className="grid grid-cols-4 gap-4">
                            {/* Render the filtered array */}
                            {filteredCards.slice(0, 8).map((data, index) => (
                                <TempleCard key={index} data={data} />
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}