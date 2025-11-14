'use client';

import Image from "next/image";
import { useEffect, useState } from 'react';
// Assuming 'Image' is imported from next/image or defined elsewhere if using Next.js
// If you are not using Next.js, replace <Image ... /> with <img ... />
// For this example, I will assume you have a working 'Image' component.

// NOTE: You must include the Image import if using Next.js:
// import Image from 'next/image';

export default function TemplePage() {
    const [templeData, setTempleData] = useState<any>(null);
    const [activeTab, setActiveTab] = useState('விபரம்');
    const [loading, setLoading] = useState(true);

    // Fetch API data
    useEffect(() => {
        fetch('https://api-st-cdn.dinamalar.com/temple/kovildetail?id=314')
            .then((res) => res.json())
            .then((data) => {
                console.log('✅ API Response:', data);
                setTempleData(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('❌ API Fetch Error:', err);
                setLoading(false);
            });
    }, []);

    if (loading) return <p className="text-center mt-10">Loading...</p>;
    if (!templeData) return <p className="text-center mt-10">No data found.</p>;

    const details = templeData.newslist?.data?.[0];
    const transport = templeData.newslist?.transport;
    const map = templeData.newslist?.map;
    const gallery = templeData.newslist?.gallery || { items: [] };
    const temples = templeData.newslist?.temples;
    const nearestTemples = temples?.nearest_temples || [];

    // Safety check for main data object
    if (!details) return <p className="text-center mt-10">Details data is missing.</p>;

    return (
        <div className="w-[70%] mx-3">

            <div className="border-frame">

                {/* 🔹 Title */}
                <h1 className="text-2xl font-semibold text-black mb-2">
                    {details.newstitle}
                </h1>

                {/* NOTE: If /belowBorder.png is a local asset, you need to import Image and use Next.js configuration */}
                {/* <Image src="/belowBorder.png" alt="Border" className="mx-auto my-3" width={200} height={15} loading="lazy" /> */}
                <img src="/belowBorder.png" alt="Border" className="mx-auto my-3" width={200} height={15} loading="lazy" />


                <div className="flex justify-between items-center mb-5">
                    {/* ... Date and Social SVGs (unchanged) ... */}
                </div>

                {/* 🔹 Main Image */}
                {details?.image && (
                    <img
                        // Corrects escaped slashes in the URL
                        src={details.image.replace(/\\\//g, '/')}
                        alt={details.newstitle}
                        className="rounded-lg mb-5 w-full object-cover max-h-[350px]"
                    />
                )}

                {/* 🔹 Tabs */}
                <div className="flex space-x-6 border-b border-gray-300 mb-5 text-lg font-semibold">
                    {templeData.tablist?.map((t: any) => (
                        <button
                            key={t.tabid}
                            className={`pb-2 cursor-pointer ${activeTab === t.tabname
                                ? 'text-[#ff4500] border-b-2 border-[#ff4500]'
                                : 'text-gray-600 hover:text-[#ff4500]'
                                }`}
                            onClick={() => setActiveTab(t.tabname)}
                        >
                            {t.tabname}
                        </button>
                    ))}
                </div>

                {/* 🔹 விபரம் (Details Tab) - Unchanged */}
                {activeTab === 'விபரம்' && (
                    <div>
                        {/* ... (Details header and basic list rendering) ... */}
                        <div className="flex items-center justify-center gap-1 mb-2">
                            <svg className="mb-1 mr-1" stroke="currentColor"
                                fill="#ff4500" strokeWidth="0" viewBox="0 0 24 24"
                                height="18px" width="18px" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path
                                    d="M6.6 11h10.8l-.9-3h-9zM20 11v2H4v-2H2v11h8v-5h4v5h8V11zM15.9 6 15 3V1h-2v2h-2.03V1h-2v2.12L8.1 6z">
                                </path>
                            </svg>
                            <p className="text-black font-semibold text-lg">{details.newstitle}</p>
                        </div>

                        <Image src="/belowBorder.png" alt="Border" className="mx-auto my-3" width={200} height={15} loading="lazy" />

                        <div className="grid grid-cols-2 gap-5 mb-10">

                            {/* Basic List */}
                            {details.list?.map((item: any, i: number) => (
                                <div key={i}>
                                    <div key={i} className="flex items-center gap-2 mb-2">
                                        <div className="w-2 h-2 border border-[#ff4500] rounded-full"></div>
                                        <p key={i} className="text-black font-normal text-sm">
                                            {item.newstitle}: {item.newsdescription}
                                        </p>
                                    </div>

                                    <hr className="text-[#ddd]" />
                                </div>
                            ))}

                        </div>

                        {/* Details Sections */}
                        {details.details?.map((d: any, i: number) => (
                            <div key={i} className="mb-5">
                                <div className="flex items-center gap-2 mb-3">
                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.88688 11.125H6.11188M9.88688 11.125H12.1456C13.3181 11.125 13.12 9.9625 12.5269 9.3725C10.3906 7.25063 13.425 2.375 7.99938 2.375C2.57438 2.375 5.60876 7.25 3.47251 9.3725C2.90188 9.94 2.65876 11.125 3.85376 11.125H6.11188M9.88688 11.125C9.88688 12.3281 9.48188 13.625 7.99938 13.625C6.51751 13.625 6.11188 12.3281 6.11188 11.125" stroke="#ff4500" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <h2 className="text-base font-semibold text-black">
                                        {d.newstitle}
                                    </h2>
                                </div>
                                <p className="leading-relaxed text-[#506172] text-sm">{d.newsdescription}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* 🚌 செல்லும் வழி (Transport Tab) - FIXED */}
                {activeTab === 'செல்லும் வழி' && transport && (
                    <div>
                        <div className="flex items-center justify-center gap-1 mb-2">
                            <svg className="mb-1 mr-1" stroke="currentColor"
                                fill="#ff4500" strokeWidth="0" viewBox="0 0 24 24"
                                height="18px" width="18px" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path
                                    d="M6.6 11h10.8l-.9-3h-9zM20 11v2H4v-2H2v11h8v-5h4v5h8V11zM15.9 6 15 3V1h-2v2h-2.03V1h-2v2.12L8.1 6z">
                                </path>
                            </svg>
                            <p className="text-black font-semibold text-lg">{transport.tabname}</p>
                        </div>

                        <Image src="/belowBorder.png" alt="Border" className="mx-auto my-3" width={200} height={15} loading="lazy" />

                        <div className="space-y-3">
                            {transport?.items?.length ? (
                                transport.items.map((item: any, i: number) => (
                                    <div key={i}>
                                        <h3 className="text-base font-semibold text-black mb-1">
                                            {item.newstitle}
                                        </h3>
                                        {/* 🛠️ FIX 1: Use dangerouslySetInnerHTML to render HTML content (e.g., <br> and <span> tags) */}
                                        <div
                                            className="text-[#506172] text-sm leading-relaxed"
                                            dangerouslySetInnerHTML={{ __html: item.newsdescription }}
                                        />
                                        <hr className="text-[#ddd] mt-3" />
                                    </div>
                                ))
                            ) : (
                                <p>தகவல் இல்லை</p>
                            )}
                        </div>

                    </div>
                )}

                {/* 🗺️ மேப் (Map Tab) - FIXED */}
                {activeTab === 'மேப்' && map && (
                    map?.lat ? (
                        <div>
                            <div className="flex items-center justify-center gap-1 mb-2">
                                <svg className="mb-1 mr-1" stroke="currentColor"
                                    fill="#ff4500" strokeWidth="0" viewBox="0 0 24 24"
                                    height="18px" width="18px" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path
                                        d="M6.6 11h10.8l-.9-3h-9zM20 11v2H4v-2H2v11h8v-5h4v5h8V11zM15.9 6 15 3V1h-2v2h-2.03V1h-2v2.12L8.1 6z">
                                    </path>
                                </svg>
                                <p className="text-black font-semibold text-lg">கூகுள் {map.tabname}</p>
                            </div>

                            <Image src="/belowBorder.png" alt="Border" className="mx-auto mt-3 mb-5" width={200} height={15} loading="lazy" />

                            <iframe
                                src={`https://maps.google.com/maps?q=${map.lat},${map.lng}&z=${map.zoom || 12}&output=embed`}
                                className="w-full h-80 rounded-xl border-0"
                                allowFullScreen
                            ></iframe>
                        </div>
                    ) : (
                        <p>மேப் தகவல் இல்லை</p>
                    )
                )}

                {/* 🖼️ படங்கள் (Gallery Tab) - FIXED */}
                {activeTab === 'படங்கள்' && gallery && (
                    <div>

                        <div className="flex items-center justify-center gap-1 mb-2">
                            <svg className="mb-1 mr-1" stroke="currentColor"
                                fill="#ff4500" strokeWidth="0" viewBox="0 0 24 24"
                                height="18px" width="18px" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path
                                    d="M6.6 11h10.8l-.9-3h-9zM20 11v2H4v-2H2v11h8v-5h4v5h8V11zM15.9 6 15 3V1h-2v2h-2.03V1h-2v2.12L8.1 6z">
                                </path>
                            </svg>
                            <p className="text-black font-semibold text-lg">{gallery.tabname}</p>
                        </div>

                        <Image src="/belowBorder.png" alt="Border" className="mx-auto mt-3 mb-5" width={200} height={15} loading="lazy" />

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {gallery?.items?.length > 0 ? (
                                // 🛠️ FIX 3A: Map over the outer array
                                gallery.items.map((innerArray: any, index: number) => (
                                    // 🛠️ FIX 3A: Map over the inner array (Array of Objects)
                                    innerArray.map((item: any, innerIndex: number) => {
                                        const imageUrl = item.image;
                                        return (
                                            <div key={`${index}-${innerIndex}`} className="text-center">
                                                <img
                                                    src={imageUrl}
                                                    alt={item.newstitle || "Gallery image"}
                                                    className="rounded-xl shadow-md w-full h-48 object-cover"
                                                />
                                                <p className="text-base font-semibold mt-2">{item.newstitle}</p>
                                            </div>
                                        );
                                    })
                                ))
                            ) : (
                                <p>📷 படங்கள் இல்லை</p>
                            )}
                        </div>
                    </div>

                )}

                {/* 🧭 அருகிலுள்ள கோயில் (Temples Tab) - CORRECTED */}
                {/* NOTE: Assuming 'temples' (the object) is still available in scope. */}
                {activeTab === 'அருகில் உள்ள கோயில்' && temples && (
                    <div>
                        <div className="flex items-center justify-center gap-1 mb-2">
                            <svg className="mb-1 mr-1" stroke="currentColor"
                                fill="#ff4500" strokeWidth="0" viewBox="0 0 24 24"
                                height="18px" width="18px" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path
                                    d="M6.6 11h10.8l-.9-3h-9zM20 11v2H4v-2H2v11h8v-5h4v5h8V11zM15.9 6 15 3V1h-2v2h-2.03V1h-2v2.12L8.1 6z">
                                </path>
                            </svg>

                            <p className="text-black font-semibold text-lg">{temples.tabname || 'அருகிலுள்ள கோயில்'}</p>
                        </div>

                        <Image src="/belowBorder.png" alt="Border" className="mx-auto mt-3 mb-5" width={200} height={15} loading="lazy" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {/* The rest of the loop logic is correct for rendering */}
                            {nearestTemples?.length > 0
                                ? nearestTemples.map((t: any, i: number) => (
                                    <div
                                        key={i}
                                        className="border p-3 rounded-xl hover:shadow-lg transition"
                                    >
                                        <img
                                            src={t.image}
                                            alt={t.newstitle}
                                            className="rounded-lg w-full h-40 object-cover"
                                        />
                                        <h4 className="text-red-700 font-semibold mt-2">
                                            {t.newstitle}
                                        </h4>
                                        {t.tirupidam && <p className="text-xs text-gray-500">{t.tirupidam}</p>}
                                    </div>
                                ))
                                : <p>அருகிலுள்ள கோயில் தகவல் இல்லை</p>}
                        </div>
                    </div>
                )}

            </div>

        </div>
    );
}