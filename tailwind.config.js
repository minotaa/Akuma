module.exports = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      fontFamily: {
        'body': ['"Open Sans"']
      },
      extend: {},
    },
    plugins: [
      require('@tailwindcss/typography')
    ],
  }