/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a'
        },
        gray: {
          50: '#f9fafb',
          500: '#6b7280',
          900: '#111827'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      screens: {
        sm: '640px',
        md: '768px', 
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      }
    }
  },
  plugins: []
}