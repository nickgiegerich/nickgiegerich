module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: (theme) => ({
      red: "hsl(345, 95%, 68%)",
    }),
    fontFamily: {
      CalcFont: ['"Space Mono"', "monospace"],
    },
    colors: {
      transparent: "#ffffff00",
      homePageBg: "#222222",
      strongCyan: "hsl(172, 67%, 45%)",
      veryDarkCyan: "hsl(183, 100%, 15%)",
      darkGrayishCyan: "hsl(184, 14%, 56%)",
      lightGrayishCyan: "hsl(185, 41%, 84%)",
      lightGrayCyan: "hsl(189, 41%, 97%)",
      white: "hsl(0, 0%, 100%)",
      black: "#000",
      error: "#cc6600",
      homeBg: "#082032",
      homePrimary: "#FF4C29",
      homeSecondary: "#2C394B",
      grayishBlue: "hsl(237, 18%, 59%)",
      softRed: "hsl(345, 95%, 68%)",
      darkerSoftRed: "hsl(345, 51%, 54%)",
      desatBlue: "hsl(236, 21%, 26%)",
      veryDarkBlue: "hsl(235, 16%, 14%)",
      almostBlackBlue: "hsl(234, 17%, 12%)",
    },
    extend: {
      backgroundImage: (theme) => ({
        "star-pattern": "url('/timer/bg-stars.svg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ["hover"],
    },
  },
  plugins: [],
};
