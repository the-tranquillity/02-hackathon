/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {}
    },
    plugins: [require("daisyui")],
    daisyui: {
        styled: true,
        themes: ["corporate", "business"],
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        darkTheme: "business"
    }
};
/*
     const plugin = require("tailwindcss/plugin");
        plugin(function ({ addVariant }) {
            addVariant("hactive", "&:active");
        })
*/
