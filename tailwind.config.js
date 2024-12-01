// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["index.html"],
//   theme: {
//     container: {
//       center: true,
//       padding: "16px",
//     },
//     extend: {
//       colors: {
//         primary: "#e9b26e",
//         dark: "#0e1a27",
//         secondary: "#64748b",
//         background: "#e8e8e8",
//         portfolio: "#e6e1dd",
//         blog: "3e5c76",
//       },
//       fontFamily: {
//         archivoBlack: ["Archivo Black"],
//         archivoNarrow: ["Archivo Narrow"],
//       },
//       screens: {
//         "2xl": "1320px",
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class", // Mengaktifkan dark mode dengan kelas
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#e9b26e",
        dark: "#0e1a27",
        secondary: "#64748b",
        background: "#e8e8e8",
        portfolio: "#e6e1dd",
        blog: "#3e5c76",
        darkBackground: "#1a202c", // Warna background untuk dark mode
        darkPrimary: "#63b3ed", // Warna primer untuk dark mode
        darkText: "#a0aec0", // Warna teks untuk dark mode
      },
      fontFamily: {
        archivoBlack: ["Archivo Black"],
        archivoNarrow: ["Archivo Narrow"],
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
