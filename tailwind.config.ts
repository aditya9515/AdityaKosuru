import type { Config } from "tailwindcss"
import tailwindAnimate from "tailwind-animate"

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [tailwindAnimate],
}

export default config
