/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./app.vue",
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  safelist: [
    // Warna teks, border, dan latar belakang dengan semua varian
    {
      pattern: /(text|border|bg)-(red|blue|green|yellow|black|gray|white|pink|purple|indigo|teal|cyan|lime|amber|orange|emerald|fuchsia|rose)-(100|200|300|400|500|600|700|800|900)/,
      variants: ["hover", "focus", "active", "group-hover", "disabled"],
    },
    {
      pattern: /bg-\[\#([A-Fa-f0-9]{6})\]/,
    },
    // Ukuran lebar dan tinggi
    {
      pattern: /(w|h)-(1|2|3|4|5|6|7|8|9|10|12|16|20|24|32|40|48|56|64|72|80|96|full|screen|min|max|auto)/,
    },
    // Padding dan margin
    {
      pattern: /(p|m|px|py|pt|pb|pl|pr)-(0|1|2|3|4|5|6|8|10|12|16|20|24|32|40|48|56|64)/,
    },
    // Border width dan radius
    {
      pattern: /border-(0|2|4|8)/,
    },
    {
      pattern: /rounded-(none|sm|md|lg|xl|2xl|3xl|full)/,
    },
    // Opacity dan shadow
    {
      pattern: /opacity-(0|10|20|30|40|50|60|70|80|90|100)/,
    },
    {
      pattern: /shadow(-(sm|md|lg|xl|2xl|inner))?/,
    },
    // Font size dan font weight
    {
      pattern: /text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)/,
    },
    {
      pattern: /font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)/,
    },
    // Flex dan Grid
    {
      pattern: /(flex|grid|gap|grid-cols|grid-rows|justify|items|self|content)-(auto|start|end|center|between|around|evenly|stretch)/,
    },
    // Display
    {
      pattern: /(hidden|block|inline|inline-block|flex|inline-flex|grid|inline-grid|table|table-cell|table-row|flow-root|contents|list-item)/,
    },
  ],  
  plugins: [],
};
