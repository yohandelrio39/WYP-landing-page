// WYP — Top navigation
function Nav({ active = "boutique", onNavigate, cart = 2, theme, onToggleTheme }) {
  const links = [
    { id: "boutique", label: "Boutique" },
    { id: "collabs", label: "Collaborations" },
    { id: "master", label: "Master Series" },
    { id: "manifeste", label: "Manifeste" },
  ];
  const logo = theme === "nuit"
    ? "../../assets/logos/WYP_LOGOTYPE_BLANC.png"
    : "../../assets/logos/WYP_LOGOTYPE_NOIR.png";

  return (
    <nav className="wyp-nav">
      <div className="wyp-container wyp-nav-inner">
        <div className="wyp-nav-left">
          {links.map((l) => (
            <button
              key={l.id}
              className={"wyp-nav-link" + (active === l.id ? " is-active" : "")}
              onClick={() => onNavigate && onNavigate(l.id)}
            >
              {l.label}
            </button>
          ))}
        </div>
        <a className="wyp-nav-logo" onClick={() => onNavigate && onNavigate("home")} style={{ cursor: "pointer", display: "block" }}>
          <img className="wyp-nav-logo" src={logo} alt="WYP" />
        </a>
        <div className="wyp-nav-right">
          <button className="wyp-theme-toggle" onClick={onToggleTheme}>
            <span className="glyph">{theme === "nuit" ? "☾" : "☀"}</span>
            {theme === "nuit" ? "Nuit" : "Jour"}
          </button>
          <button className="wyp-nav-link">FR / EN</button>
          <button className="wyp-nav-link">Compte</button>
          <button className="wyp-nav-link">
            Panier <span className="wyp-cart-count">{String(cart).padStart(2, "0")}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

window.Nav = Nav;
