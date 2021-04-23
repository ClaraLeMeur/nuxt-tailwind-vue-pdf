module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        indigo: {
          50: '#f7fcfc', 
          100: '#eff9f9', 
          200: '#d6f1f0', 
          300: '#bde8e7', 
          400: '#8cd6d4', 
          500: '#5ac5c2', 
          600: '#51b1af', 
          700: '#449492', 
          800: '#367674', 
          900: '#2c615f'
      }
      },
      fontFamily: {
        inter: [
          'Inter',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Ubuntu',
          'Cantarell',
          'Noto Sans',
          'sans-serif',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
        ],
      },
      spacing: {
        px: '1px',
        0: '0',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        32: '8rem',
        40: '10rem',
        48: '12rem',
        56: '14rem',
        64: '16rem',
      },
    },
  },
}
