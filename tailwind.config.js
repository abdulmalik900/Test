/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

    // Flowbite file 
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        
        // Website Name : MR ShiftingMovers
        // Build your palette here  
        // 1- Congress Blue
        // 2- deep coffee
        // 3- black  
        'first': 'rgb(3, 181, 233)', 
        'second': 'rgb(114, 61, 70)',
        'third': 'rgb(0, 16, 11)',    
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

