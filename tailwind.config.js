// tailwind.config.js
module.exports = {
    mode: 'jit',
    content: ['./index.html', './**/*.{js,jsx,ts,tsx,vue}'],
    theme: {
        extend: {},
        theme: {
            screens: {
                screens: {
                    'sm': '576px',
                    'md': '768px',
                    'lg': '992px',
                    'xl': '1024px',
                },
            }
        }
    },
    plugins: [],
}
