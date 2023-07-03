// tailwind.config.js
module.exports = {
    mode: 'jit',
    content: ['./index.html', './**/*.{js,jsx,ts,tsx,vue}'],
    theme: {
        extend: {
            screens: {
                'sm': '576px',
                'md': '768px',
                'lg': '992px',
                'xl': '1024px',
            },
            colors: {
                // Custom colors
                'primary_color': '#0F6083',
                'secondary_color': '#418689',
                'accent_color': '#2ca1b1',
                'background_color': '#f8f8f9',
                'sec_bg_color': '#b0e4eb'
            },
        },
    },
    plugins: [],
};
