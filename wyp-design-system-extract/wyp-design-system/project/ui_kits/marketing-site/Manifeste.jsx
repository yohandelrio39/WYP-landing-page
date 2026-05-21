// WYP — Manifeste editorial block
function Manifeste() {
  return (
    <section className="wyp-manifeste">
      <div className="wyp-container wyp-manifeste-inner">
        <div className="wyp-manifeste-meta">
          <span className="num">15 / 15</span>
          <span className="lbl">Manifeste</span>
        </div>
        <div className="wyp-manifeste-body">
          <p>Nous ne portons pas le temps.</p>
          <p>Nous portons ce qui nous anime.</p>
          <p><em>La passion ne se collectionne pas.</em></p>
          <p><em>Elle s'assume.</em></p>
          <p>WYP transforme cette énergie en précision.</p>
          <div className="wyp-manifeste-sign">— Watch Your Passion.</div>
        </div>
        <div className="wyp-manifeste-icon">
          <img src="../../assets/logos/WYP_ICON_BLANC.png" alt="WYP" />
        </div>
      </div>
    </section>
  );
}

window.Manifeste = Manifeste;
