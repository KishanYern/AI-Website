/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                mate: ['Mate', 'sans-serif'],
                signature: ['Pacifico'],
                roboto: ['Roboto'],
                projects: ['monospace'],
                lato: ['Lato'],
                satoshi: ['Satoshi', 'sans-serif'],
                cabinet: ['Cabinet Grotesk', 'sans-serif'],
                generalSans: ['General Sans', 'sans-serif'],
                trenchSlab: ['Trench Slab', 'sans-serif'],
                synonym: ['Synonym', 'sans-serif'],
                amulya: ['Amulya', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
