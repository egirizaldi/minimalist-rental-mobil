tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-tertiary-container": "#8b8a8a",
        "inverse-on-surface": "#f0f1f1",
        "on-secondary": "#ffffff",
        "on-background": "#1a1c1c",
        "on-tertiary-fixed": "#1b1b1c",
        "secondary-fixed": "#66ff8e",
        "on-primary-fixed-variant": "#7b2b3b",
        "on-error": "#ffffff",
        "on-primary-fixed": "#400012",
        "surface-dim": "#dadada",
        "surface-container-highest": "#e2e2e2",
        "primary-fixed": "#ffd9dd",
        "tertiary-container": "#232323",
        "on-surface": "#1a1c1c",
        "secondary-container": "#5dfd8a",
        "on-secondary-fixed-variant": "#005322",
        "outline": "#877274",
        "inverse-surface": "#2f3131",
        "surface-bright": "#f9f9f9",
        "on-primary-container": "#cf6d7c",
        "secondary-fixed-dim": "#3de273",
        "tertiary-fixed": "#e5e2e1",
        "outline-variant": "#dac0c2",
        "on-primary": "#ffffff",
        "background": "#f9f9f9",
        "inverse-primary": "#ffb2bb",
        "surface-container-low": "#f3f3f3",
        "surface-tint": "#994251",
        "on-tertiary": "#ffffff",
        "on-secondary-container": "#007232",
        "surface-container-lowest": "#ffffff",
        "on-surface-variant": "#544244",
        "on-secondary-fixed": "#002109",
        "surface-container-high": "#e8e8e8",
        "error": "#ba1a1a",
        "on-error-container": "#93000a",
        "on-tertiary-fixed-variant": "#474746",
        "surface-variant": "#e2e2e2",
        "primary-fixed-dim": "#ffb2bb",
        "primary": "#260008",
        "surface": "#f9f9f9",
        "tertiary-fixed-dim": "#c8c6c5",
        "error-container": "#ffdad6",
        "secondary": "#006d2f",
        "tertiary": "#0d0d0d",
        "primary-container": "#4c0519",
        "surface-container": "#eeeeee"
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      },
      spacing: {
        "margin-mobile": "16px",
        "section-gap": "80px",
        "stack-lg": "32px",
        "container-max": "1280px",
        "gutter": "24px",
        "stack-md": "16px",
        "stack-sm": "8px"
      },
      fontFamily: {
        "display-lg": ["Hanken Grotesk"],
        "label-md": ["Hanken Grotesk"],
        "headline-sm": ["Hanken Grotesk"],
        "headline-md": ["Hanken Grotesk"],
        "body-md": ["Hanken Grotesk"],
        "body-lg": ["Hanken Grotesk"]
      },
      fontSize: {
        "display-lg-mobile": ["32px", { lineHeight: "40px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "label-md": ["14px", { lineHeight: "20px", letterSpacing: "0.05em", fontWeight: "600" }],
        "headline-sm": ["20px", { lineHeight: "28px", fontWeight: "600" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }]
      }
    }
  }
}
