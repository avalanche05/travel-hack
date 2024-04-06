/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{js,jsx,ts,tsx}', // JavaScript and JSX files
        './public/index.html', // HTML files
    ],
    theme: {
        extend: {
            colors: {
                'natural-8': '#fff',
                'natural-1': '#1d1d1d',
                'transparent-white-15': 'rgba(255, 255, 255, 0.15)',
                gray: {
                    100: '#767676',
                    200: '#202124',
                    300: '#46001e',
                    400: 'rgba(29, 29, 29, 0.01)',
                    500: 'rgba(255, 255, 255, 0.01)',
                },
                'transparent-white-50': 'rgba(255, 255, 255, 0.5)',
                'natural-5': '#d9d9d9',
                'natural-4': '#a6a6a6',
                'natural-6': '#ebebeb',
                'cyber-yellow-1': '#ffcf08',
                'natural-7': '#f5f5f5',
                'transparent-white-30': 'rgba(255, 255, 255, 0.3)',
                'transparent-black-15': 'rgba(29, 29, 29, 0.15)',
                'antique-white-1': '#faefdc',
                'system-success-1': '#007470',
                'transparent-black-50': 'rgba(29, 29, 29, 0.5)',
                'transparent-black-30': 'rgba(29, 29, 29, 0.3)',
                'cyber-yellow-3': '#cca500',
                'cyber-yellow-2': '#e6b900',
                'system-warning-1': '#e81c00',
                'system-link': '#0370c7',
                dimgray: '#747474',
                whitesmoke: '#f1f3f4',
                silver: '#b6b6b6',
            },
            spacing: {},
            fontFamily: {
                'body-p3': 'Roboto',
                'heading-h4': "'Proto Grotesk'",
            },
            borderRadius: {
                '281xl': '300px',
                '3xs': '10px',
                xl: '20px',
                '7xs-6': '5.6px',
                sm: '14px',
            },
        },
        fontSize: {
            xs: '12px',
            base: '16px',
            sm: '14px',
            xl: '20px',
            '5xl': '24px',
            lgi: '19px',
            lg: '18px',
            '13xl': '32px',
            inherit: 'inherit',
        },
        screens: {
            lg: {
                max: '1200px',
            },
            mq1050: {
                raw: 'screen and (max-width: 1050px)',
            },
            mq750: {
                raw: 'screen and (max-width: 750px)',
            },
            mq450: {
                raw: 'screen and (max-width: 450px)',
            },
        },
    },
    plugins: [],
};
