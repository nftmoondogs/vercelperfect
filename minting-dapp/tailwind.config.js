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
          from_bg: colors.neutral[100],
          to_bg: colors.neutral[200],
        },
        titles: colors.yellow[600],
        links: {
          txt: colors.yellow[600],
          hover_txt: colors.yellow[700],
        },
        loading_spinner: colors.yellow[500],
        popups: {
          bg: colors.stone[800],
          txt: colors.stone[50],
          internal_border: colors.neutral[700],
        },
        warning: {
          txt: colors.neutral[800],
          bg: colors.yellow[400],
          border: colors.yellow[500],
        },
        error: {
          txt: colors.red[500],
          bg: colors.red[50],
          border: colors.red[200],
        },

        // Inputs
        btn: {
          txt: colors.neutral[50],
          bg: colors.neutral[800],
          border: colors.neutral[200],
          hover_txt: colors.neutral[50],
          hover_bg: colors.neutral[900],
          hover_border: colors.neutral[200],
        },
        btn_primary: {
          txt: colors.neutral[800],
          bg: colors.yellow[500],
          border: colors.yellow[500],
          hover_txt: colors.neutral[800],
          hover_bg: colors.yellow[600],
          hover_border: colors.yellow[600],
        },
        btn_error: {
          txt: colors.white,
          bg: colors.red[500],
          border: colors.red[500],
          hover_txt: colors.white,
          hover_bg: colors.red[600],
          hover_border: colors.red[600],
        },
        label: colors.yellow[600],
        txt_input: {
          txt: colors.yellow[600],
          bg: colors.white,
          border: colors.neutral[200],
          focus_txt: colors.yellow[600],
          focus_bg: colors.neutral[50],
          focus_border: colors.yellow[300],
          placeholder_txt: colors.yellow[600],
        },
        
        // Whitelist proof widget
        wl_message: {
          txt: colors.neutral[800],
          bg: colors.yellow[100],
        },

        // Mint widget
        token_preview: colors.yellow[200],
      },
    },
  },
  variants: {},
  plugins: [],
};
