/**
 * Reference Theme: Old Guest / Customer Portal (the-wild-oasis-guest-old)
 * Extracted from: tailwind.config.js & app/_styles/globals.css
 */

module.exports = {
  theme: {
    colors: {
      // Primary: Slate blue / alpine pine darks
      primary: {
        50: "#E1E8EF",
        100: "#D4DEE7",
        200: "#B7C7D7",
        300: "#99B0C7",
        400: "#7C99B6",
        500: "#5E82A6",
        600: "#4C6B8A",
        700: "#3C546C",
        800: "#2C3D4F",
        900: "#1B2631",
        950: "#141C24", // main dark background
      },
      // Accent: Warm timber / amber gold
      accent: {
        50: "#FAF5F0",
        100: "#F4ECE1",
        200: "#E8D6BF",
        300: "#DDC2A2",
        400: "#D2AF84",
        500: "#C69963", // primary accent buttons & badges
        600: "#B78343", // accent hover
        700: "#926835",
        800: "#6C4D28",
        900: "#4B351B",
        950: "#382814",
      },
    },
    calendar: {
      accentColor: "#C69963",
      backgroundColor: "#B78343",
    },
  },
};
