/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"], // adjust paths as needed
    theme: {
        extend: {
            keyframes: {
                typing: {
                    'from': { width: '0ch' },
                    'to': { width: '30ch' }, // Adjust based on visible chars
                },
                blink: {
                    '0%, 100%': { borderColor: 'transparent' },
                    '50%': { borderColor: 'white' },
                },
                slide: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
            animation: {
                typing: 'typing 3s steps(30, end) forwards, blink 0.75s step-end infinite',
                'slide-horizontal': 'slide 20s linear infinite',
            },
        }

    },
    plugins: [],
}
