/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // #4b99e9
        // #50afd8
        // #037EE5
        buttonColor: "#4b99e9", // Example button color
        primary: "#4b99e9",
        tertiary: "#b1efec", // Example primary color
        secondary: "#9333EA", // Example secondary color
        accent: "#F59E0B", // Example accent color
        background: "#F3F4F6", // Example background color
        textColor: "#31353f", // Example text color
        "text-secondary": "#6B7280", // Example secondary text color
        "text-accent": "#F59E0B", // Example accent text color
        "border-primary": "#D1D5DB", // Example border color
        "border-secondary": "#E5E7EB", // Example secondary border color
        "border-accent": "#F59E0B", // Example accent border color
        "button-primary": "#2563EB", // Example primary button color
        "button-secondary": "#A78BFA", // Example secondary button color
        "button-accent": "#F59E0B", // Example accent button color
        "button-text": "#FFFFFF", // Example button text color
        "button-text-secondary": "#1F2937", // Example secondary button text color
        "button-text-accent": "#111827", // Example accent button text color
        "input-background": "#FFFFFF", // Example input background color
        "input-border": "#D1D5DB", // Example input border color
        "input-text": "#111827", // Example input text color
        "input-placeholder": "#9CA3AF", // Example input placeholder color
        "input-focus-border": "#2563EB", // Example input focus border color
        "input-focus-text": "#111827", // Example input focus text color
        "input-focus-placeholder": "#6B7280", // Example input focus placeholder color
        "card-background": "#FFFFFF", // Example card background color
        "card-border": "#E5E7EB", // Example card border color
        "card-text": "#111827", // Example card text color
        "card-text-secondary": "#6B7280", // Example card secondary text color
        "card-text-accent": "#F59E0B", // Example card accent text color
        "card-shadow": "#00000029", // Example card shadow color
        "modal-background": "#FFFFFF", // Example modal background color
        "modal-overlay": "#00000080", // Example modal overlay color
        "modal-text": "#111827", // Example modal text color
        "modal-text-secondary": "#6B7280", // Example modal secondary text color
        "modal-text-accent": "#F59E0B", // Example modal accent text color
        "modal-border": "#D1D5DB", // Example modal border color
        "modal-button-primary": "#2563EB", // Example modal primary button color
        "modal-button-secondary": "#A78BFA", // Example modal secondary button color
        "modal-button-accent": "#F59E0B", // Example modal accent button color
        "modal-button-text": "#FFFFFF", // Example modal button text color
        "modal-button-text-secondary": "#1F2937", // Example modal secondary button text color
        "modal-button-text-accent": "#111827", // Example modal accent button text color
        "toast-background": "#FFFFFF", // Example toast background color
        "toast-text": "#111827", // Example toast text color
        "toast-text-secondary": "#6B7280", // Example toast secondary text color
        "toast-text-accent": "#F59E0B", // Example toast accent text color
        "toast-border": "#D1D5DB", // Example toast border color
        "toast-shadow": "#00000029", // Example toast shadow color
        "toast-success": "#10B981", // Example success toast color
        "toast-error": "#EF4444", // Example error toast color
      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
