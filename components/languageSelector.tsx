// 1. Import useState at the top of your file
'use client';

import React, { useState } from 'react';

export default function LanguageSelector() {
    // 2. Define the state to track if the dropdown is open (default is false)
    const [isOpen, setIsOpen] = useState(false);

    // 3. Define the click handler function
    const toggleDropdown = () => {
        setIsOpen(!isOpen); // Toggles the state (true -> false, false -> true)
    };

    return (
        <div>

            <div className="relative">

                <div
                    className="flex items-center gap-1 cursor-pointer w-fit"
                    onClick={toggleDropdown} // <-- Handles the click event
                >
                    <p className="text-xs font-medium text-[#ff4500]">தமிழ்</p>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6L8 10L12 6" stroke="#ff4500" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </div>

                <div
                    className={`
            px-3 py-2 shadow-lg w-fit space-y-2 rounded-md bg-white 
            absolute mt-2 z-10 
            ${isOpen ? 'block' : 'hidden'} 
          `}
                >
                    <p className="text-xs font-medium text-[#333]">தமிழ்</p>
                    <p className="text-xs font-medium text-[#333]">English</p>
                </div>
            </div>
        </div>
    );
}