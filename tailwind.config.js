/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5", // Indigo-600
        "primary-foreground": "#ffffff",
        destructive: "#ef4444",
        background: "#ffffff",
        foreground: "#111111",
        secondary: "#f3f4f6",
        "secondary-foreground": "#1f2937",
        accent: "#f9fafb",
        "accent-foreground": "#111827",
        input: "#e5e7eb",
        ring: "#93c5fd",
        border: "#e5e7eb",
      },
    },
  },
  plugins: [],
};