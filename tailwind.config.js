/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        current: `currentColor`,
        transparent: `transparent`,
        black: `#1F1F1F`,
        white: `#F5F5F5`,
        red: {
          100: `#FF3333`,
          200: `#EA2424`,
          300: `#823333`,
        },
        gold: `#FFA72A`,
      },
      fontSize: {
        "2xs": [`11px`, `14.3px`],
        "xs": [`12px`, `24px`],
        "sm": [`14px`, `22.4px`],
        "base": [`16px`, `25.6px`],
        "lg": [`18px`, `28.8px`],
        "xl": [`20px`, `35px`],
        "2xl": [`24px`, `36px`],
        "3xl": [`32px`, `39px`],
        "4xl": [`36px`, `43.2px`],
        "5xl": [`48px`, `57.6px`],
        "6xl": [`60px`, `57px`],
        "7xl": [`72px`, `68.4px`],
        "8xl": [`96px`, `91.2px`],
        "9xl": [`108px`, `102.6px`],
        "10xl": [`160px`, `152px`],
      },
      fontWeight: {
        xthin: 100,
        thin: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semi: 600,
        bold: 700,
        xbold: 800,
        black: 900,
      },
      fontFamily: {
        sans: [`var(--sans)`],
        display: [`var(--display)`],
      },
    },
  },
}
