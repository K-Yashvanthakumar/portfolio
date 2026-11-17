const c = (v) => `rgb(var(--${v}) / <alpha-value>)`
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: {
    colors: { bg: c('bg'), fg: c('fg'), muted: c('muted') },
    fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'], display: ['"Space Grotesk"', 'Inter', 'sans-serif'] },
    keyframes: { float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } }, blink: { '50%': { opacity: 0 } } },
    animation: { float: 'float 6s ease-in-out infinite', blink: 'blink 1s step-end infinite' },
  } },
}
