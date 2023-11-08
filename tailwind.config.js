import { nextui } from "@nextui-org/react"
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        spin: 'spin 350ms linear 1'
      }
    },
  },
  plugins: [nextui({
    defaultExtendTheme: 'light',
    themes: {
      light: {
        colors: {
          foreground: '#111827',
          background: '#ffffff',
          default: {
            DEFAULT: '#4b5563',
            foreground: '#ffffff'
          },
          primary: {
            DEFAULT: '#211CFD',
            foreground: '#ffffff',
          },
        },
      },
    },
  })],
}
