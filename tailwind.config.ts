import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.5rem", lg: "2.5rem" },
      screens: { "2xl": "1480px" },
    },
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Times New Roman', 'serif'],
        serif:   ['Fraunces', 'Times New Roman', 'serif'],
        sans:    ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary:     { DEFAULT: "hsl(var(--primary))",     foreground: "hsl(var(--primary-foreground))" },
        secondary:   { DEFAULT: "hsl(var(--secondary))",   foreground: "hsl(var(--secondary-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        muted:       { DEFAULT: "hsl(var(--muted))",       foreground: "hsl(var(--muted-foreground))" },
        accent:      { DEFAULT: "hsl(var(--accent))",      foreground: "hsl(var(--accent-foreground))" },
        popover:     { DEFAULT: "hsl(var(--popover))",     foreground: "hsl(var(--popover-foreground))" },
        card:        { DEFAULT: "hsl(var(--card))",        foreground: "hsl(var(--card-foreground))" },

        bone:       "hsl(var(--bone))",
        ivory:      "hsl(var(--ivory))",
        travertine: "hsl(var(--travertine))",
        oat:        "hsl(var(--oat))",
        linen:      "hsl(var(--linen))",
        oak:        "hsl(var(--oak))",
        clay:       "hsl(var(--clay))",
        ink:        "hsl(var(--ink))",
        char:       "hsl(var(--char))",
        brass:      "hsl(var(--brass))",
        "brass-soft": "hsl(var(--brass-soft))",
        sage:       "hsl(var(--sage))",

        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      backgroundImage: {
        "gradient-paper": "var(--gradient-paper)",
        "gradient-stone": "var(--gradient-stone)",
        "gradient-ink":   "var(--gradient-ink)",
        "gradient-brass": "var(--gradient-brass)",
      },
      boxShadow: {
        paper: "var(--shadow-paper)",
        soft:  "var(--shadow-soft)",
        deep:  "var(--shadow-deep)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 0px)",
        sm: "calc(var(--radius) - 0px)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up":   { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up":   "accordion-up 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
