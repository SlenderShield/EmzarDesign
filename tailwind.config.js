// tailwind.config.js
module.exports = {
    mode: 'jit',
    purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
    theme: {
        extend: {},
        theme: {
            screens: {
                'sm': '640px',
                // => @media (min-width: 640px) { ... } 

                'md': '768px',
                // => @media (min-width: 768px) { ... }
                'mlg': '960px',

                'lg': '1024px',
                // => @media (min-width: 1024px) { ... }

                'xl': '1280px',
                // => @media (min-width: 1280px) { ... }
            }
        }
    },
    plugins: [],
}
