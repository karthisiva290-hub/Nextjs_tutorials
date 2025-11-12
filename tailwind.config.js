// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
    // IMPORTANT: The content array tells Tailwind which files to scan for utility classes.
    content: [
        // Include all files in app/, pages/, and components/
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            // You will add your custom background image definition here later:
            backgroundImage: {
                // Define a custom background class name: bg-hero-pattern
                'flower': "url('https://or-temple-st.dinamalar.com/new2024/temple-white/flower.png')",
            },
        },
    },
    plugins: [],
}