// components/Sidebar.tsx

'use client';
import React, { useState } from 'react';

// Note: You would typically get this data from an API call or props
const templeCategories = [
    { name: 'விநாயகர் கோயில்', count: 85 },
    { name: 'முருகன் கோயில்', count: 153 },
    { name: 'திருப்புகழ் தலங்கள்', count: 120 },
    { name: 'பிற சிவன் கோயில்', count: 558 },
    { name: 'சக்தி பீடங்கள்', count: 33 },
    { name: 'அம்மன் கோயில்', count: 356 },
    { name: 'பிற விஷ்ணு கோயில்', count: 312 },
    { name: 'நரசிம்மர் கோயில்', count: 38 },
    { name: 'பஞ்சபூத தலங்கள்', count: 5 },
    { name: 'நவதிருப்பதி', count: 9 },
    { name: 'நவகைலாயம்', count: 9 },
    { name: 'பஞ்சரங்க தலங்கள்', count: 5 },
    { name: 'ஐயப்பன் கோயில்', count: 29 },
    { name: 'ஆஞ்சநேயர் கோயில்', count: 35 },
    { name: 'நவகிரக கோயில்', count: 80 },
    { name: 'நட்சத்திர கோயில்', count: 27 },
    { name: 'பிற கோயில்', count: 125 },
    { name: 'தனியார் கோயில்', count: 2039 },
    { name: 'நகரத்தார் கோயில்', count: 6 },
    { name: 'தருமபுரம் ஆதீனம் கோயில்கள்', count: 18 },
    { name: 'மதுரை ஆதீனம் கோயில்கள்', count: 3 },
    { name: 'திருவாவடுதுறை ஆதீனம் கோயில்கள்', count: 10 },
];

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* 1. Sidebar Toggle Button (You'll place this on your main header) */}
            <button
                onClick={toggleSidebar}
                className="pr-2 py-2 text-gray-700 focus:outline-none cursor-pointer"
                aria-label="Open Menu"
            >
                {/* Using a simple menu icon placeholder */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>

            {/* 2. Full-screen Overlay (to close sidebar when clicking outside) */}
            <div
                className={`fixed inset-0 bg-black/25 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                onClick={toggleSidebar}
            ></div>

            {/* 3. The Sliding Sidebar Menu */}
            <div
                className={`fixed top-0 left-0 w-[350px] h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >

                {/* Sidebar Header (Close Button & Title) */}
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-2">
                        <svg stroke="currentColor"
                            fill="#ff4500" strokeWidth="0" viewBox="0 0 24 24" height="20px" width="20px"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                                d="M6.6 11h10.8l-.9-3h-9zM20 11v2H4v-2H2v11h8v-5h4v5h8V11zM15.9 6 15 3V1h-2v2h-2.03V1h-2v2.12L8.1 6z">
                            </path>
                        </svg>
                        <h2 className="text-lg font-bold text-[#ff4500]">கோயில்கள்</h2>
                    </div>

                    <button onClick={toggleSidebar} aria-label="Close Menu" className='cursor-pointer'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 13.0501L6.75001 18.3001C6.60001 18.4501 6.42501 18.5251 6.22501 18.5251C6.02501 18.5251 5.85001 18.4501 5.70001 18.3001C5.55001 18.1501 5.47501 17.9751 5.47501 17.7751C5.47501 17.5751 5.55001 17.4001 5.70001 17.2501L10.95 12.0001L5.70001 6.7501C5.55001 6.6001 5.47501 6.4251 5.47501 6.2251C5.47501 6.0251 5.55001 5.8501 5.70001 5.7001C5.85001 5.5501 6.02501 5.4751 6.22501 5.4751C6.42501 5.4751 6.60001 5.5501 6.75001 5.7001L12 10.9501L17.25 5.7001C17.4 5.5501 17.575 5.4751 17.775 5.4751C17.975 5.4751 18.15 5.5501 18.3 5.7001C18.45 5.8501 18.525 6.0251 18.525 6.2251C18.525 6.4251 18.45 6.6001 18.3 6.7501L13.05 12.0001L18.3 17.2501C18.45 17.4001 18.525 17.5751 18.525 17.7751C18.525 17.9751 18.45 18.1501 18.3 18.3001C18.15 18.4501 17.975 18.5251 17.775 18.5251C17.575 18.5251 17.4 18.4501 17.25 18.3001L12 13.0501Z" fill="black" />
                        </svg>
                    </button>
                </div>

                {/* Navigation List */}
                <nav className="p-2">
                    <ul className="space-y-1 mb-10">
                        {templeCategories.map((item, index) => (
                            <li key={index} className="px-2 py-2 rounded-md flex items-center gap-1">
                                <div className='w-2 h-2 rounded-full bg-[#ff4500]'></div>
                                <a
                                    href="#" // Replace with actual route
                                    className="flex justify-between items-center w-full text-sm font-semibold text-gray-800 hover:text-[#ff4500] px-2 py-1 rounded-md"
                                >
                                    <span className=''>{item.name}</span>
                                    <span className="text-xs text-gray-500">({item.count})</span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <a href="#">
                        <img src="https://or-temple-st.dinamalar.com/new2024/templef/images/addtemple1.png" alt="Advertisement" />
                    </a>

                </nav>
            </div>
        </>
    );
}