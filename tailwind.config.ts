import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      backgroundSize: {
        large: "22rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
