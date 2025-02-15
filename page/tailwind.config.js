/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        lato: ['var(--font-family-lato)', 'sans-serif'],
      },
      fontSize: {
        xxxs: 'var(--font-size-xxxs)',
        xxs: 'var(--font-size-xxs)',
        xs: 'var(--font-size-xs)',
        sm: 'var(--font-size-sm)',
        md: 'var(--font-size-md)',
        lg: 'var(--font-size-lg)',
        xlg: 'var(--font-size-xlg)'
      },
      fontWeight: {
        extrabold: 'var(--font-weight-extrabold)',
        bold: 'var(--font-weight-bold)',
        medium: 'var(--font-weight-medium)',
        regular: 'var(--font-weight-regular)',
      },
      lineHeight: {
        default: 'var(--line-height-default)',
        sm: 'var(--line-height-sm)',
        md: 'var(--line-height-md)',
        lg: 'var(--line-height-lg)',
      },
      borderRadius: {
        none: 'var(--border-radius-none)',
        md: 'var(--border-radius-md)',
        xd: 'var(--border-radius-xd)',
        circular: 'var(--border-radius-circular)',
      },
      borderWidth: {
        none: 'var(--border-width-none)',
        thin: 'var(--border-width-thin)',
      },
      opacity: {
        medium: 'var(--opacity-level-medium)',
      },
      boxShadow: {
        level1: 'var(--shadow-level-1)',
      },
      spacing: {
        quarck: 'var(--spacing-quarck)',
        nano: 'var(--spacing-nano)',
        xxxs: 'var(--spacing-xxxs)',
        xs: 'var(--spacing-xs)',
        sm: 'var(--spacing-sm)',
      },
      colors: {
        brand: {
          primary: {
            main: 'var(--brand-color-primary-main)',
            light: 'var(--brand-color-primary-light)',
            medium: 'var(--brand-color-primary-medium)',
            dark: 'var(--brand-color-primary-dark)',
          },
          secondary: {
            main: 'var(--brand-color-secundary-main)',
            lightest: 'var(--brand-color-secundary-lightest)',
            light: 'var(--brand-color-secundary-light)',
            medium: 'var(--brand-color-secundary-medium)',
            dark: 'var(--brand-color-secundary-dark)',
          },
        },
        feedback: {
          success: {
            main: 'var(--feedback-color-success-main)',
            light: 'var(--feedback-color-success-light)',
            medium: 'var(--feedback-color-success-medium)',
            dark: 'var(--feedback-color-success-dark)',
          },
          info: {
            main: 'var(--feedback-color-info-main)',
            light: 'var(--feedback-color-info-light)',
            medium: 'var(--feedback-color-info-medium)',
            dark: 'var(--feedback-color-info-dark)',
          },
          alert: {
            main: 'var(--feedback-color-alert-main)',
            lightest: 'var(--feedback-color-alert-lightest)',
            light: 'var(--feedback-color-alert-light)',
            medium: 'var(--feedback-color-alert-medium)',
            dark: 'var(--feedback-color-alert-dark)',
          },
          error: {
            main: 'var(--feedback-color-error-main)',
            lightest: 'var(--feedback-color-error-lightest)',
            light: 'var(--feedback-color-error-light)',
            medium: 'var(--feedback-color-error-medium)',
            dark: 'var(--feedback-color-error-dark)',
          },
        },
        accessibility: {
          main: 'var(--accessibility-color-main)',
        },
      },
    },
  },
  plugins: [],
}

