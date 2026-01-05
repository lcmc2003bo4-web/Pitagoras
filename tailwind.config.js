/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0f172a", // Slate 900 - Deep, Corporate, Trust
          light: "#334155",   // Slate 700
          dark: "#020617",    // Slate 950
        },
        secondary: {
          DEFAULT: "#4f46e5", // Indigo 600 - Tech-forward, Innovation
          light: "#818cf8",   // Indigo 400
          dark: "#3730a3",    // Indigo 800
        },
        accent: {
          DEFAULT: "#d97706", // Amber 600 - Prestige, Elegance (Subtle)
          light: "#fbbf24",   // Amber 400
        },
        background: {
          DEFAULT: "#ffffff",
          alt: "#f8fafc",     // Slate 50 - Very subtle cool gray
        },
        surface: {
          DEFAULT: "#ffffff",
          alt: "#f1f5f9",     // Slate 100
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-outfit)', 'sans-serif'],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
      boxShadow: {
        'soft-sm': '0 2px 8px rgba(15, 23, 42, 0.05)',
        'soft-md': '0 8px 16px rgba(15, 23, 42, 0.08)',
        'soft-lg': '0 16px 32px rgba(15, 23, 42, 0.12)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, rgba(15, 23, 42, 1) 0%, rgba(30, 41, 59, 1) 100%)',
      }
    },
  },
  plugins: [],
};
