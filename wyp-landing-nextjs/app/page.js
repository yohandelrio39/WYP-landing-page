import Nav from '@/components/Nav'
import HeroCanvas from '@/components/HeroCanvas'
import RevealObserver from '@/components/RevealObserver'

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Nav />

      {/* ───────── 01 · HERO ───────── */}
      <header className="lp-hero" id="hero">
        <div className="lp-container lp-hero-main">
          <div className="lp-hero-text">
            <span className="lp-overline reveal" data-delay="1">Watch Your Passion</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="lp-hero-logotype reveal"
              data-delay="2"
              src="/assets/logos/WYP_LOGOTYPE_BLANC.png"
              alt="WYP"
            />
            <p className="lp-hero-line reveal" data-delay="3">
              Swiss watch brand creating licensed timepieces<br />
              <span className="ar">inspired by iconic universes.</span>
            </p>
          </div>

          <div className="lp-hero-watch reveal" data-delay="2">
            <div className="moon-stage">
              <HeroCanvas />
            </div>
          </div>
        </div>

        <div className="lp-container lp-hero-bottom reveal" data-delay="4">
          <div className="lp-meta-row">
            <span className="lp-meta">CONTEMPORARY · GENEVA</span>
            <span className="lp-meta">PHASE I · 2026</span>
          </div>
          <span className="lp-hero-scroll">
            Défiler <span className="arr">↓</span>
          </span>
          <div className="lp-meta-row" style={{ justifySelf: 'end' }}>
            <span className="lp-meta">FRANÇAIS · FR</span>
          </div>
        </div>
      </header>

      {/* ───────── 02 · VISION ───────── */}
      <section className="lp-section lp-section--dark lp-vision" id="vision">
        <div className="lp-container">
          <div className="lp-section-head reveal">
            <span className="lp-snum">02 — VISION</span>
            <h2 className="lp-section-title">More than a collectible.<br />More than a watch.</h2>
          </div>

          <div className="lp-vision-body">
            <div className="lp-vision-icon reveal" data-delay="1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/logos/WYP_ICON_BLANC.png" alt="" aria-hidden="true" />
            </div>

            <div className="lp-vision-lines reveal" data-delay="2">
              <p>WYP creates licensed watches designed to become <em>lasting objects of passion.</em></p>
              <p>Built around iconic universes.<br />
              <em>Designed to live beyond trends.</em></p>
            </div>

            <div className="lp-vision-side reveal" data-delay="3">
              <span className="lp-meta">MANIFESTE · N°01</span>
              <span className="lp-vision-sign">Watch Your Passion.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── 03 · PRODUIT ───────── */}
      <section className="lp-section lp-section--light" id="produit">
        <div className="lp-container">
          <div className="lp-section-head reveal">
            <span className="lp-snum">03 — OBJET</span>
            <h2 className="lp-section-title">Designed to<br />reveal more.</h2>
          </div>

          <div className="lp-produit-intro">
            <div className="reveal">
              <span className="lp-meta">+ MATIÈRE · LUMIÈRE · DÉTAIL</span>
            </div>
            <p className="reveal" data-delay="1">
              Light changes perception.<br />
              Details emerge.<br />
              Passion evolves.
            </p>
          </div>

          <div className="lp-produit-grid reveal" data-delay="2">
            <figure className="lp-pf lp-pf--hero">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/imagery/wyp_sketch_courbes.jpg" alt="Esquisse de design — prototype WYP" />
              <figcaption className="lp-pf-caption">
                <span className="num">01 / 03</span>
                <span className="lbl">↓ Courbes</span>
              </figcaption>
            </figure>

            <figure className="lp-pf lp-pf--top lp-pf--contain lp-pf--dual">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="cadran-nuit" src="/assets/imagery/cadran_nuit.png" alt="Cadran Midoriya — version nuit" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="cadran-jour" src="/assets/imagery/cadran_jour.png" alt="Cadran Midoriya — version jour" />
              <figcaption className="lp-pf-caption">
                <span className="num">02 / 03</span>
                <span className="lbl">↓ Lumière</span>
              </figcaption>
            </figure>

            <figure className="lp-pf lp-pf--bot">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/imagery/wyp_img_05.jpg" alt="Vagues noires — rythme de matière" />
              <figcaption className="lp-pf-caption">
                <span className="num">03 / 03</span>
                <span className="lbl">↓ Matière</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ───────── 04 · COLLABORATIONS ───────── */}
      <section className="lp-section lp-section--dark" id="collab">
        <div className="lp-container">
          <div className="lp-section-head reveal">
            <span className="lp-snum">04 — COLLABORATIONS</span>
            <h2 className="lp-section-title">One structure.<br />Infinite universes.</h2>
          </div>

          <div className="lp-collab-body">
            <div className="lp-collab-art reveal" data-delay="1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/imagery/midoriya_02.png" alt="Cadran WYP × MHA — édition Midoriya" />
            </div>

            <div className="lp-collab-text reveal" data-delay="2">
              <span className="lp-collab-tag">WYP × MHA — Phase I</span>
              <h3 className="lp-collab-title">
                Chaque collection<br />est un dialogue.
              </h3>
              <p className="lp-collab-body-text">
                Le cadran WYP est une surface. Les collaborations y déposent
                une couleur, un récit, une culture. La marque, elle, reste
                stable — base graphique, précision, structure.
              </p>

              <div className="lp-collab-stats">
                <div className="lp-collab-stat">
                  <span className="lbl">Édition</span>
                  <span className="val">037 / 250</span>
                </div>
                <div className="lp-collab-stat">
                  <span className="lbl">Phase</span>
                  <span className="val">I · 2026</span>
                </div>
                <div className="lp-collab-stat">
                  <span className="lbl">Origine</span>
                  <span className="val">Genève · CH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── 05 · SUITE ───────── */}
      <section className="lp-section lp-section--dark lp-suite" id="suite">
        <div className="lp-container">
          <div className="lp-section-head reveal">
            <span className="lp-snum">05 — SUITE</span>
            <h2 className="lp-section-title">À venir.</h2>
          </div>

          <div className="lp-suite-inner">
            <h3 className="lp-suite-line reveal" data-delay="1">
              Quelque chose
              <span>approche.</span>
            </h3>

            <div className="lp-suite-meta reveal" data-delay="2">
              <span className="lp-suite-date">09 . 2026</span>
              <p className="lp-suite-note">
                Première ouverture publique. La boutique suit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── FOOTER ───────── */}
      <footer className="lp-footer">
        <div className="lp-container">
          <div className="lp-footer-inner">
            <div className="lp-footer-icon">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/logos/WYP_ICON_BLANC.png" alt="WYP" />
            </div>

            <div className="lp-footer-center">
              <a className="lp-ig" href="https://instagram.com/wyp.geneva" target="_blank" rel="noopener noreferrer">
                Instagram <span className="arrow">→</span> @wyp.geneva
              </a>
            </div>

            <div className="lp-footer-right">
              <span className="lp-meta">WYP · GENÈVE · CH</span>
              <span className="lp-meta">© 2026 · HYPERBIEN®</span>
            </div>
          </div>

          <div className="lp-footer-bottom">
            <span>Watch Your Passion ®</span>
            <span>Version N_01 · 11.02.2026</span>
          </div>
        </div>
      </footer>
    </>
  )
}
