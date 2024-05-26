/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        custom: {
          oro: "#928652",
          azul: "#001844",
          blanco: "#fcfefc",
          azul_2: "#192f56",
          // oro_2: "#a29061",
          oro_2: "#442c00",
          oro_3:"#d3ceb9",
        },
      },
    },
  },
  plugins: [],
};
