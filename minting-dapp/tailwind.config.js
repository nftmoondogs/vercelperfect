const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.tsx',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        // General
        page: {
          from_bg: colors.slate[100],
          to_bg: colors.slate[200],
        },
        titles: colors.cyan[600],
        links: {
          txt: colors.cyan[600],
          hover_txt: colors.cyan[700],
        },
        loading_spinner: colors.cyan[500],
        popups: {
          bg: colors.slate[900],
          txt: colors.stone[50],
          internal_border: colors.neutral[700],
        },
        warning: {
          txt: colors.neutral[800],
          bg: colors.cyan[400],
          border: colors.cyan[500],
        },
        error: {
          txt: colors.red[500],
          bg: colors.red[50],
          border: colors.red[200],
        },

        // Inputs
        btn: {
          txt: colors.stone[50],
          bg: colors.slate[900],
          border: colors.slate[200],
          hover_txt: colors.neutral[50],
          hover_bg: colors.slate[800],
          hover_border: colors.slate[300],
        },
        btn_primary: {
          txt: colors.stone[50],
          bg: colors.cyan[600],
          border: colors.stone[50],
          hover_txt: colors.stone[50],
          hover_bg: colors.cyan[700],
          hover_border: colors.slate[300],
        },
        btn_error: {
          txt: colors.white,
          bg: colors.red[500],
          border: colors.red[500],
          hover_txt: colors.white,
          hover_bg: colors.red[600],
          hover_border: colors.red[600],
        },
        label: colors.cyan[600],
        txt_input: {
          txt: colors.cyan[600],
          bg: colors.white,
          border: colors.slate[200],
          focus_txt: colors.cyan[600],
          focus_bg: colors.slate[50],
          focus_border: colors.slate[300],
          placeholder_txt: colors.cyan[600],
        },
        
        // Whitelist proof widget
        wl_message: {
          txt: colors.stone[50],
          bg: colors.cyan[100],
        },

        // Mint widget
        token_preview: colors.slate[800],
      },
    },
  },
  variants: {},
  plugins: [],
};
