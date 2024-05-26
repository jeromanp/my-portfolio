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
      screens: {
        mq1350: {
          raw: "screen and (max-width: 1350px)",
        },
        mq1275: {
          raw: "screen and (max-width: 1275px)",
        },
        mq1125: {
          raw: "screen and (max-width: 1125px)",
        },
        mq1100: {
          raw: "screen and (max-width: 1100px)",
        },
        mq800: {
          raw: "screen and (max-width: 800px)",
        },
        mq750: {
          raw: "screen and (max-width: 750px)",
        },
        mq450: {
          raw: "screen and (max-width: 450px)",
        },
      },
    },
  },
  plugins: [],
};
