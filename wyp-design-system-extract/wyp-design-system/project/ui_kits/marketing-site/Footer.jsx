// WYP — Footer
function Footer() {
  const [email, setEmail] = React.useState("");
  return (
    <footer className="wyp-footer">
      <div className="wyp-container">
        <div className="wyp-footer-grid">
          <div className="wyp-footer-col">
            <h4>Newsletter</h4>
            <p style={{ fontSize: 13, color: "var(--wyp-grey-300)", lineHeight: 1.5, margin: "0 0 18px", maxWidth: "32ch" }}>
              Annonces de collections, sorties numérotées et collaborations à venir. Pas de bruit.
            </p>
            <form className="wyp-footer-news" onSubmit={(e) => { e.preventDefault(); setEmail(""); }}>
              <input
                type="email"
                placeholder="prenom@domaine.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Souscrire →</button>
            </form>
          </div>
          <div className="wyp-footer-col">
            <h4>Boutique</h4>
            <ul>
              <li><a>Toutes les pièces</a></li>
              <li><a>WYP Core</a></li>
              <li><a>WYP Editions</a></li>
              <li><a>Master Series</a></li>
              <li><a>Collaborations</a></li>
            </ul>
          </div>
          <div className="wyp-footer-col">
            <h4>Marque</h4>
            <ul>
              <li><a>Manifeste</a></li>
              <li><a>Trajectoire</a></li>
              <li><a>Architecture</a></li>
              <li><a>Presse</a></li>
            </ul>
          </div>
          <div className="wyp-footer-col">
            <h4>Service</h4>
            <ul>
              <li><a>Livraison</a></li>
              <li><a>Retours</a></li>
              <li><a>Garantie</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="wyp-footer-bottom">
          <div className="wyp-footer-logo">
            <img src="../../assets/logos/WYP_LOCKUP3_BLANC.png" alt="WYP — Watch Your Passion" />
          </div>
          <div className="wyp-footer-meta">
            <span>[GENEVE · SUISSE]</span>
            <span>[FAO HYPERBIEN®]</span>
            <span>[© 2026]</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
