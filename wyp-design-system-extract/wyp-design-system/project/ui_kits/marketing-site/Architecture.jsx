// WYP — Brand architecture strip (Core / Editions / Master)
function Architecture() {
  const tiers = [
    {
      num: "01 / TIER",
      name: "WYP Core",
      desc: "Collections accessibles. Base de la marque. Première porte des collaborations.",
    },
    {
      num: "02 / TIER",
      name: "WYP Editions",
      desc: "Séries limitées ou numérotées. Approche plus affirmée et exclusive.",
    },
    {
      num: "03 / TIER",
      name: "Master Series",
      desc: "Pièces à plus forte valeur. Matériaux, finitions et conception horlogère.",
    },
  ];
  return (
    <section className="wyp-section">
      <div className="wyp-container">
        <SectionHead num="10 / Architecture" title="Trois niveaux." link="Voir l'architecture" />
        <div className="wyp-arch">
          {tiers.map((t) => (
            <div key={t.name} className="wyp-arch-item">
              <div className="wyp-arch-num">{t.num}</div>
              <div className="wyp-arch-desc">{t.desc}</div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "auto" }}>
                <div className="wyp-arch-name">{t.name}</div>
                <span className="wyp-arch-arrow">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Architecture = Architecture;
