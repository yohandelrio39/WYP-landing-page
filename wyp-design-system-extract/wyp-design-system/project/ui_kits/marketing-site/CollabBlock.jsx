// WYP — Collaboration featured block (WYP × MHA)
function CollabBlock() {
  return (
    <section className="wyp-collab">
      <div className="wyp-collab-inner">
        <div className="wyp-collab-media">
          <span className="wyp-collab-tag">WYP × MHA</span>
          <img src="../../assets/imagery/midoriya_01.png" alt="WYP × MHA collaboration" />
        </div>
        <div className="wyp-collab-text">
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <span className="wyp-collab-overline">[Collaboration 01 / 2026]</span>
            <h2 className="wyp-collab-title">
              Midoriya<br/>Edition.
            </h2>
            <p className="wyp-collab-body">
              Une lecture horlogère de l'énergie d'Izuku Midoriya. Le système WYP
              accueille l'univers My Hero Academia sans s'y dissoudre — la passion
              prend forme, la marque garde sa colonne.
            </p>
          </div>
          <div>
            <div className="wyp-collab-stats">
              <div className="wyp-collab-stat">
                <span className="lbl">Tirage</span>
                <span className="val">250 pièces</span>
              </div>
              <div className="wyp-collab-stat">
                <span className="lbl">Sortie</span>
                <span className="val">12.03.2026</span>
              </div>
              <div className="wyp-collab-stat">
                <span className="lbl">Tier</span>
                <span className="val">WYP Editions</span>
              </div>
            </div>
            <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
              <Button onDark variant="primary" arrow>Pré-commander · CHF 1'490</Button>
              <Button onDark variant="secondary">Fiche technique</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.CollabBlock = CollabBlock;
