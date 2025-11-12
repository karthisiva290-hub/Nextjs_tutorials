// data/menu.ts

interface MenuItem {
    label: string;
    href: string;
}

// Data for the "இறைவழிபாடு" menu
export const worshipItems: MenuItem[] = [
    { label: 'மந்திரங்கள்(ஸ்லோகாம்)', href: '#' },
    { label: 'முருகன் பாமாலை', href: '#' },
    { label: 'திருப்புகழ்', href: '#' },
    { label: 'பைரவர் வழிபாடு!', href: '#' },
    { label: 'அகிலத்திரட்டு அம்மானை!', href: '#' },
    { label: 'சீரடி சாயி பாபா வழிபாடு', href: '#' },
    { label: 'மகா காளி வழிபாடு', href: '#' },
    { label: 'நடராசர் சதகம்', href: '#' },
    { label: 'கருப்பசாமி புகழ் மாலை', href: '#' },
    { label: 'வளம் தரும் வழிபாடு', href: '#' },
    { label: 'அவ்வையார் பாடல்கள்!', href: '#' },
    { label: 'விரத பூஜா விதானம்', href: '#' },
    // ... rest of the worship links
];

// Data for the "சிவ குறிப்புகள்" menu (if you have it)
export const shivaItems: MenuItem[] = [
    { label: 'சிவ ஆகமக் குறிப்புகள்', href: '#' },
    { label: 'உத்தரகாமிக ஆகமம்', href: '#' },
    { label: '64 சிவ வடிவங்கள்', href: '#' },
    { label: '64 திருவிளையாடல்', href: '#' },
    // ...
];

export const grammers: MenuItem[] = [
    { label: 'ஐம்பெரும் காப்பியம்', href: '#' },
    { label: 'ஐஞ்சிறு காப்பியம்', href: '#' },
    { label: 'பத்துப்பாட்டு', href: '#' },
    { label: 'எட்டுத்தொகை நூல்கள்!', href: '#' },
    // ...
];

export const poets: MenuItem[] = [
    { label: '63 நாயன்மார்கள்', href: '#' },
    { label: '12 ஆழ்வார்கள்', href: '#' },
    { label: 'சித்தர்கள்', href: '#' },
    { label: 'ரிஷிகள்', href: '#' },
    { label: 'சப்தகன்னியர்', href: '#' },
    { label: 'பிரபலங்கள்', href: '#' },
    { label: 'மகான்கள்', href: '#' },
    { label: 'ஆதிசங்கரர்', href: '#' },
    { label: 'ராமானுஜர்', href: '#' },
    { label: 'காஞ்சி மடம் பீடாதிபதிகள்', href: '#' },
    { label: 'ஷிர்டி சாய்பாபா', href: '#' },
    { label: 'காந்தி - சுய சரிதை', href: '#' },
    { label: 'பாரதியார் கவிதைகள்', href: '#' },
    // ...
];

export const others: MenuItem[] = [
    { label: 'பகவத் கீதை', href: '#' },
    { label: '12 திருமுறைகள்', href: '#' },
    { label: 'புராணங்கள்', href: '#' },
    { label: 'மகாபாரதம்', href: '#' },
    { label: 'ராமாயணம்', href: '#' },
    { label: '4000 திவ்விய பிரபந்தம்', href: '#' },
    { label: 'உபநிஷதம்', href: '#' },
    { label: 'சைவ சித்தாந்தம்', href: '#' },
    { label: 'ஸ்ரீமந் நாராயணீயம்', href: '#' },
    { label: 'ஆன்மிக வகுப்பறை', href: '#' },
    { label: 'துளிகள்', href: '#' },
    { label: 'பக்தி கதைகள்', href: '#' },
    { label: 'ஹோமங்கள்', href: '#' },
    { label: 'ஆன்மிக சிந்தனைகள்', href: '#' },
    // ...
];

// data/menu.ts (Assuming this file contains your data and interfaces)

// 1. Filter/Category data (for the left column)
export interface MegaMenuItem {
    label: string;
    href: string;
}

export const templeMegaMenuItems: MegaMenuItem[] = [
    { label: 'All', href: '#' },
    { label: 'சக்தி பீடங்கள்', href: '#' },
    { label: 'ஐயப்பன் கோயில்', href: '#' },
    { label: 'நவக்கிரக கோயில்', href: '#' },
    { label: 'வழிபாடு', href: '#' },
    { label: 'திருப்பதி தரிசனம்', href: '#' },
];

// 2. Temple Card data (This represents ALL cards, with their category assigned)
export interface TempleCardData {
    src: string;
    alt: string;
    title: string;
    category: string[]; // Key to filter by
    href: string;
}

export const ALL_TEMPLE_CARDS: TempleCardData[] = [
    // These are general/highlight images (often shown for 'All')
    { src: 'https://imgtemple.dinamalar.com/kovilimages/T_500_1934.jpg', alt: '', title: 'விநாயகர் கோயில்', category: ['All', 'சக்தி பீடங்கள்', 'நவக்கிரக கோயில்', 'திருப்பதி தரிசனம்'], href: '#' },
    { src: 'https://imgtemple.dinamalar.com/kovilimages/T_500_1072.jpg', alt: '', title: 'அறுபடைவீடு', category: ['All', 'ஐயப்பன் கோயில்', 'வழிபாடு'], href: '#' },
    { src: 'https://imgtemple.dinamalar.com/kovilimages/T_500_16.jpg', alt: '', title: 'முருகன் கோயில்', category: ['All', 'சக்தி பீடங்கள்', 'நவக்கிரக கோயில்', 'திருப்பதி தரிசனம்'], href: '#' },
    { src: 'https://imgtemple.dinamalar.com/kovilimages/T_500_255.jpg', alt: '', title: 'சிவன் கோயில்', category: ['All', 'ஐயப்பன் கோயில்', 'வழிபாடு'], href: '#' },
    { src: 'https://imgtemple.dinamalar.com/kovilimages/T_500_10.jpg', alt: '', title: 'திருப்புகழ் தலங்கள்', category: ['All', 'சக்தி பீடங்கள்', 'நவக்கிரக கோயில்', 'திருப்பதி தரிசனம்'], href: '#' },
    { src: 'https://imgtemple.dinamalar.com/kovilimages/T_500_906.jpg', alt: '', title: 'ஜோதிர் லிங்கம்', category: ['All', 'ஐயப்பன் கோயில்', 'வழிபாடு'], href: '#' },
    { src: 'https://imgtemple.dinamalar.com/kovilimages/T_500_314.jpg', alt: '', title: 'தேவாரம் பாடல் பெற்ற 274-சிவாலயம்', category: ['All', 'சக்தி பீடங்கள்', 'நவக்கிரக கோயில்', 'திருப்பதி தரிசனம்'], href: '#' },
    { src: 'https://imgtemple.dinamalar.com/kovilimages/T_500_2361.jpg', alt: '', title: 'பிற சிவன் கோயில்', category: ['All', 'ஐயப்பன் கோயில்', 'வழிபாடு'], href: '#' },

    // Example of cards that belong ONLY to 'சக்தி பீடங்கள்'
    // { src: 'https://imgtemple.dinamalar.com/kovilimages/T_500_1938.jpg', alt: '', title: 'காமாட்சி அம்மன்', category: 'சக்தி பீடங்கள்', href: '#' },
    // { src: 'https://imgtemple.dinamalar.com/kovilimages/T_500_1939.jpg', alt: '', title: 'மீனாட்சி அம்மன்', category: 'சக்தி பீடங்கள்', href: '#' },
    // { src: 'https://imgtemple.dinamalar.com/kovilimages/T_500_1940.jpg', alt: '', title: 'விசாலாட்சி', category: 'சக்தி பீடங்கள்', href: '#' },
    // { src: 'https://imgtemple.dinamalar.com/kovilimages/T_500_1941.jpg', alt: '', title: 'மங்களம்பிகா', category: 'சக்தி பீடங்கள்', href: '#' },

    // Add more cards here for other categories like 'ஐயப்பன் கோயில்'
];