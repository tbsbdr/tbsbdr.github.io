/* @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['ReadexPro', 'ui-sans-serif', 'system-ui', 'Helvetica', 'Arial', 'sans-serif']
    },
    extend: {
      colors:{
        baader:{
          dark: '#0a2540',
          accent: '#55CCFF',
          ondark: '#adbdcc',
          darker: '#06182c',
          text: '#425466',
          gradientmiddle: '#0e3358',
          greybg: '#f6f9fc',
          footerbg: '#0a2540',
          onfooter: '#0a2540',
        }
      }, 
       fontSize: {
        'baader-hero': '9vw',
      }, 
    },
  },
  plugins: [],
}