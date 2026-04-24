/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Accuarion palette — deep obsidian + refined spectrum accents
        obsidian: {
          900: "#0A0A0F",
          800: "#11111A",
          700: "#1A1B27",
          600: "#242638",
        },
        spectrum: {
          // Accent gradient stops
          100: "#E8F0FF",
          300: "#93B4FF",
          500: "#4F7DFF",
          700: "#2850E0",
        },
        amber: {
          accent: "#E8B04C",
        },
        ink: {
          primary: "#F5F5F7",
          secondary: "#A8A9B4",
          tertiary: "#6B6C78",
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter Tight"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'tighter': '-0.025em',
      },
      animation: {
        'aurora': 'aurora 16s ease-in-out infinite',
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'ticker': 'ticker 40s linear infinite',
      },
      keyframes: {
        aurora: {
          '0%, 100%': { transform: 'translate(0%, 0%) rotate(0deg)', opacity: '0.55' },
          '33%': { transform: 'translate(12%, -8%) rotate(8deg)', opacity: '0.7' },
          '66%': { transform: 'translate(-8%, 10%) rotate(-6deg)', opacity: '0.5' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
