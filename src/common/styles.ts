export const Styles = {
    ":root": {
        "-ColorPrimary": "#458588",
        "-ColorDanger": "#BF616A",
        "-ColorSuccess": "#A3BE8C",
        "-ColorWarning": "#EBCB8B",
        "-ColorWhite": "#ebdbb2",
        "-ColorDark": "#928374",
        "fontSize": "16px",
        "fontFamily": "'Inter Regular'"
    },
    "@media (prefers-color-scheme: dark)": {
        ":root": {
            "-ColorBg": "#2E3440",
            "-ColorBg1": "#3B4252",
            "-ColorBg2": "#434C5E",
            "-ColorBg3": "#4C566A",
            "-ColorBg4": "#677590",
            "-ColorFg": "#ECEFF4",
            "-ColorFg1": "#E5E9F0",
            "-ColorFg2": "#D8DEE9"
        }
    },
    "@media (prefers-color-scheme: light)": {
        ":root": {
            "-ColorBg": "#fbf1c7",
            "-ColorBg1": "#ebdbb2",
            "-ColorBg2": "#d5c4a1",
            "-Color-Bg3": "#bdae93",
            "-ColorBg4": "#a89984",
            "-ColorFg": "#3c3836",
            "-ColorFg1": "#504945",
            "-ColorFg2": "#665c54"
        }
    },
    "body,\nhtml": {
        "background": "var(--color-bg)",
        "color": "var(--color-fg)",
        "margin": "0",
        "padding": "0"
    },
    "main": {
        "marginLeft": "14rem",
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "justifyItems": "center",
        "height": "100%",
        "padding": "1rem"
    },
    ".sidebar": {
        "position": "fixed",
        "background": "var(--color-bg1)",
        "padding": "1rem",
        "overflow": "hidden",
        "height": "100vh",
        "width": "12rem"
    },
    ".sidebar-list": {
        "listStyle": "none",
        "padding": "0",
        "margin": "0",
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "height": "100vh"
    },
    ".sidebar-item": {
        "width": "100%"
    },
    ".sidebar-item:last-child": {
        "marginTop": "auto",
        "marginBottom": "2rem"
    },
    ".sidebar-link": {
        "display": "flex",
        "alignItems": "center",
        "height": "2rem",
        "padding": "1rem",
        "color": "var(--color-fg)",
        "textDecoration": "none",
        "borderRadius": "1rem",
        "filter": "grayscale(100%) opacity(0.7)",
        "transition": "filter 300ms ease"
    },
    ".sidebar-link:hover": {
        "background": "rgba(235, 219, 178, 0.1)",
        "filter": "grayscale(0%) opacity(1)"
    },
    ".sidebar-link-active": {
        "display": "flex",
        "alignItems": "center",
        "height": "2rem",
        "padding": "1rem",
        "color": "var(--color-fg)",
        "textDecoration": "none",
        "borderRadius": "1rem",
        "background": "var(--color-bg2)",
        "filter": "grayscale(0%) opacity(1)",
        "transition": "filter 300ms ease"
    },
    ".sidebar-logo": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "flex-start",
        "margin": "1rem"
    },
    ".sidebar-logo .logo-text": {
        "margin": "auto",
        "fontSize": "2rem"
    },
    ".sidebar-logo #logo-badge": {
        "margin": "0",
        "alignSelf": "flex-start"
    },
    ".link-text": {
        "marginRight": "auto",
        "marginLeft": "1rem"
    },
    ".sidebar-link svg": {
        "width": "2rem"
    },
    ".sidebar-link-active svg": {
        "width": "2rem"
    },
    ".link-logo": {
        "fill": "var(--color-fg)"
    },
    ".page-introduction": {
        "display": "flex",
        "flexDirection": "column",
        "justifyItems": "center",
        "textAlign": "left",
        "marginBottom": "2rem",
        "width": "75%"
    },
    ".page-introduction .page-title": {
        "fontSize": "2.75rem"
    },
    ".page-introduction .page-subtitle": {
        "fontSize": "1rem"
    },
    ".card": {
        "display": "flex",
        "flexDirection": "row",
        "justifyContent": "center",
        "alignItems": "center",
        "background": "var(--color-bg1)",
        "padding": "1rem",
        "borderRadius": "1rem",
        "textAlign": "center",
        "marginBottom": "1rem",
        "width": "75%"
    },
    ".card .card-info": {
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "position": "relative"
    },
    ".card .card-input": {
        "marginLeft": "auto",
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "position": "relative"
    },
    ".card .card-logo": {
        "width": "1.8rem",
        "fill": "var(--color-fg)"
    },
    ".badge": {
        "color": "white",
        "backgroundColor": "rgb(90, 104, 255)",
        "borderRadius": "2.5rem",
        "marginLeft": "4px",
        "fontSize": "15px",
        "paddingRight": "6px",
        "paddingLeft": "6px",
        "fontFamily": "var(--font-display)",
        "fontWeight": "500",
        "textTransform": "uppercase",
        "whiteSpace": "nowrap",
        "textOverflow": "ellipsis",
        "overflow": "hidden"
    },
    ".card-desc": {
        "display": "flex",
        "flexDirection": "column",
        "marginLeft": "1rem",
        "textAlign": "left"
    },
    ".card-desc .card-title": {
        "fontSize": "1.4rem"
    },
    ".card-desc .card-subtitle": {
        "fontSize": "0.8rem",
        "color": "var(--color-fg1)"
    },
    ".card .card-dropdown": {
        "marginLeft": "auto",
        "fontSize": "1rem",
        "padding": "0rem 1rem",
        "background": "var(--color-bg2)",
        "color": "var(--color-fg)",
        "border": "none",
        "borderRadius": "0.8rem",
        "maxHeight": "3rem"
    },
    ".card .card-toggle": {
        "marginLeft": "auto",
        "-InactiveBg": "var(--color-bg2)",
        "-ActiveBg": "var(--color-fg2)",
        "-Size": "1.6rem",
        "appearance": "none",
        "width": "calc(var(--size) * 2.2)",
        "height": "var(--size)",
        "borderRadius": "calc(var(--size) / 2)",
        "cursor": "pointer",
        "backgroundColor": "var(--inactive-bg)",
        "backgroundImage": "radial-gradient(circle calc(var(--size) / 2.625),\n            var(--color-bg4) 100%,\n            #0000 0)",
        "backgroundPosition": "calc(var(--size) / -1.75) 0",
        "transition": "background 0.2s ease-out",
        "textRendering": "optimizeLegibility"
    },
    ".card .card-toggle:checked": {
        "backgroundColor": "var(--active-bg)",
        "backgroundPosition": "calc(var(--size) / 1.75) 0",
        "backgroundImage": "radial-gradient(circle calc(var(--size) / 2.625),\n            var(--color-fg) 100%,\n            #0000 0)",
        "textRendering": "optimizeLegibility"
    },
    ".card .card-button": {
        "marginLeft": "auto",
        "width": "auto",
        "height": "2rem",
        "paddingRight": "1px",
        "paddingLeft": "1px",
        "background": "var(--color-bg2)",
        "color": "var(--color-fg)",
        "border": "none",
        "borderRadius": "0.8rem"
    },
    ".card .card-button:hover": {
        "background": "var(--color-bg3)"
    },
    ".card .card-button:active": {
        "background": "var(--color-bg4)"
    },
    ".card .dropdown-icon": {
        "marginLeft": "1rem",
        "width": "1.5rem",
        "fill": "var(--color-fg)"
    },
    "@font-face": {
        "fontFamily": "'Inter Regular'",
        "src": "url('Inter-Regular.otf') format('opentype')",
        "fontWeight": "normal",
        "fontStyle": "normal"
    }
};
