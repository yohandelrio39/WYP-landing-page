// WYP — Primitives
// Small atoms reused throughout the kit.

const Overline = ({ children, mono = false, style }) => (
  <span
    className={mono ? "wyp-mono" : ""}
    style={{
      fontSize: 11,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      fontWeight: 600,
      color: "var(--fg-3)",
      fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)",
      ...style,
    }}
  >
    {children}
  </span>
);

const Tag = ({ children, pill = false, dark = false, mono = true, style }) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)",
      fontSize: 10,
      fontWeight: mono ? 500 : 600,
      letterSpacing: pill ? "0.18em" : "0.1em",
      textTransform: "uppercase",
      padding: pill ? "6px 12px" : "5px 8px",
      borderRadius: pill ? 999 : 0,
      border: `1px solid ${dark ? "var(--wyp-blanc)" : "var(--fg)"}`,
      color: dark ? "var(--wyp-blanc)" : "var(--fg)",
      ...style,
    }}
  >
    {children}
  </span>
);

const Button = ({ variant = "primary", onDark = false, children, onClick, arrow = false }) => {
  const cls = [
    "wyp-btn",
    `wyp-btn-${variant}`,
    onDark ? "wyp-btn-on-dark" : "",
  ].filter(Boolean).join(" ");
  return (
    <button className={cls} onClick={onClick}>
      {children}
      {arrow && <span className="wyp-btn-arrow">→</span>}
    </button>
  );
};

const Rule = ({ dark = false, style }) => (
  <hr
    style={{
      border: 0,
      borderTop: `1px solid ${dark ? "rgba(245,245,245,0.18)" : "var(--line)"}`,
      margin: 0,
      ...style,
    }}
  />
);

const SectionHead = ({ num, title, link }) => (
  <div className="wyp-section-head">
    <div className="wyp-section-num">{num}</div>
    <h2 className="wyp-section-title">{title}</h2>
    {link && <a className="wyp-section-link">{link} →</a>}
  </div>
);

Object.assign(window, { Overline, Tag, Button, Rule, SectionHead });
