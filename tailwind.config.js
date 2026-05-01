/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#080808",
                foreground: "#ffffff",
                accent: {
                    gold: "#d4af37",
                    silver: "#c0c0c0",
                    slate: "#1a1a1a",
                }
            },
            fontFamily: {
                heading: ["Inter", "sans-serif"],
                body: ["Outfit", "sans-serif"],
            },
            animation: {
                'reveal': 'reveal 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards',
                'fade-in': 'fadeIn 0.8s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                reveal: {
                    '0%': { transform: 'translateY(100%)' },
                    '100%': { transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
}
