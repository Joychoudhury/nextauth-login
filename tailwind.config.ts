import type { Config } from 'tailwindcss'
import { DEFAULT_CIPHERS } from 'tls'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        amazon_blue:{
          light: '#232F3F',
          DEFAULT: '#131921'
        }
      }
    },
  },
  plugins: [],
}
export default config
