import daisyui from "daisyui";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#4D918F",
        buttonMain: "#F7CA89",
        buttonHoverMain: "#DBB57D",
        textPrimary: "#9FE2D0",
        cardSecondary: "#EFEFEF",
        bgSecondary: "#E5E5E5",
        buttonHeader: "#8BD3BF",
        numberBg: "#c8dcbc",
        textNumber: "#2a5934",
      },
      boxShadow: {
        buttonMainShadow: "4px 6px 12px 0 rgba(251, 181, 80, 0.6)",
        imageJumbotronShadow: "0 0 12px 12px rgba(0, 0, 0, 0.18)",
        cardChoosingUsShadow: "-14px 12px 12px 2px rgba(0, 0, 0, 0.13)",
        cardCSImgShadow: "0 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      gridTemplateColumns: {
        gridChoosingUs: "440px minmax(0, 1fr)",
        gridChoosingUsLg: "280px minmax(0, 1fr)",
        gridTestimonials: "300px minmax(0, 1fr)",
        gridCulture: "180px minmax(0, 1fr)",
      },
    },
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [daisyui],
};
export default config;
