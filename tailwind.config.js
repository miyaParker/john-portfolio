/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        calibre: ['Calibre'],
        mono: ['SFMono'],
      },
      colors: {
        lemon: '#64FFDA',
        gray: '#8892B0',
        'blue-50': '#CCD6F6',
        'blue-100': '#0A192F',
        'blue-200': '#112240',
      },
      screens: {
        sm: '540px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
        '2xl': '1728px',
        'max-xl': '1926px',
      },
    },
  },
  plugins: [],
};
