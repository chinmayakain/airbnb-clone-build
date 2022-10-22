/** @type {import('tailwindcss').Config} */
/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
    content: [
        "./components/**/*.{js,jsx,ts,tsx}",
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './public/**/*.html',
    ],
    theme: {
        extend: {
            fontFamily: {
                "airbnb-cereal": ["AirbnbCereal"],
            },
        },
    },
    plugins: [
        require('tailwind-scrollbar-hide')
    ],
}
