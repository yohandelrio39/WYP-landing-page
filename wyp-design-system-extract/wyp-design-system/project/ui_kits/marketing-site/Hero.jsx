// WYP — Hero
function Hero({ theme }) {
  return (
    <section className="wyp-hero">
      <div className="wyp-hero-media">
        <img src="../../assets/imagery/wyp_contrast.jpg" alt="" />
      </div>
      <div className="wyp-container wyp-hero-content">
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: 10,
            letterSpacing: "0.1em", color: "var(--wyp-argent)",
            textTransform: "uppercase",
          }}>
            [GENEVE · 2026]
          </span>
          <span style={{
            height: 1, flex: 1, maxWidth: 120, background: "rgba(245,245,245,0.2)",
          }} />
          <span className="wyp-hero-overline">Collection 01 · Disponible</span>
        </div>
        <h1 className="wyp-hero-title">
          Watch<br />Your <em>Passion.</em>
        </h1>
        <div className="wyp-hero-actions">
          <Button onDark variant="primary" arrow>Découvrir la collection</Button>
          <Button onDark variant="secondary">Voir le manifeste</Button>
        </div>
      </div>
      <div className="wyp-container wyp-hero-meta">
        <div className="wyp-hero-meta-col">
          <span className="wyp-hero-meta-label">01 · Position</span>
          <span className="wyp-hero-meta-value">Marque horlogère contemporaine</span>
        </div>
        <div className="wyp-hero-meta-col">
          <span className="wyp-hero-meta-label">02 · Promesse</span>
          <span className="wyp-hero-meta-value">Précision portée avec intention</span>
        </div>
        <div className="wyp-hero-meta-col">
          <span className="wyp-hero-meta-label">03 · Territoire 01</span>
          <span className="wyp-hero-meta-value">Manga × Horlogerie</span>
        </div>
        <div className="wyp-hero-meta-col" style={{ alignItems: "flex-end", textAlign: "right" }}>
          <span className="wyp-hero-meta-label">↓ Scroll</span>
          <span className="wyp-hero-meta-value">07 sections</span>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
