/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
     /* The code block `ssm:'375px', sm:'375px', md:'375px', lg:'375px'` is defining custom screen
     sizes for different breakpoints in the Tailwind CSS framework. */
      ssm:'375px',
      sm:'640px',
      md:'768px',
      lg:'1024px',
    },
    extend: {},
  },
  plugins: [],
}

