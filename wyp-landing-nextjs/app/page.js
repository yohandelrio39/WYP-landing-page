import Nav from '@/components/Nav'
import HeroCanvas from '@/components/HeroCanvas'
import RevealObserver from '@/components/RevealObserver'
import DialThemeToggle from '@/components/DialThemeToggle'

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Nav />

      {/* ───────── 01 · HERO ───────── */}
      <header className="lp-hero" id="hero">
        <div className="lp-container lp-hero-main">
          <div className="lp-hero-text">
            <h1 className="lp-overline reveal" data-delay="1">
              <span className="show-desktop">Watch Your Passion</span>
              <span className="show-mobile">WYP</span>
            </h1>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="lp-hero-logotype reveal"
              data-delay="2"
              src="/assets/logos/WYP_LOGOTYPE_BLANC.png"
              alt="WYP"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="lp-hero-logotype-mobile reveal"
              data-delay="2"
              src="/assets/logos/WYP_LOGO_LOCK-UP2_BLANC.png"
              alt="WYP — Watch Your Passion"
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
            <span className="lp-meta">PHASE I · 2026</span>
          </div>
          <span className="lp-hero-scroll">
            Scroll <span className="arr">↓</span>
          </span>
          <div className="lp-meta-row" style={{ justifySelf: 'end' }}>
            <span className="lp-meta">ENGLISH · EN</span>
          </div>
        </div>
      </header>

      {/* ───────── 02 · VISION ───────── */}
      <section className="lp-section lp-section--dark lp-vision" id="vision">
        <div className="lp-container">
          <div className="lp-horizon lp-horizon--strong reveal" aria-hidden="true" />
          <div className="lp-section-head reveal">
            <span className="lp-snum">02 — VISION</span>
            <h2 className="lp-section-title">More<br />than a<br />collectible.<br />More<br />than a<br />watch.</h2>
          </div>

          <div className="lp-vision-body">
            <div className="lp-vision-lines reveal" data-delay="1">
              <p>WYP creates licensed watches designed to become<br />
              <em>lasting objects of passion.</em></p>
              <p>Built around iconic universes.<br />
              <em>Designed to live beyond trends.</em></p>
            </div>

            <div className="lp-vision-side reveal" data-delay="2">
              <span className="lp-vision-sign">Watch Your Passion.</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="lp-vision-icon" src="/assets/logos/WYP_ICON_BLANC.png" alt="" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* ───────── 03 · PRODUIT ───────── */}
      <section className="lp-section lp-section--light" id="produit">
        <div className="lp-container">
          <div className="lp-horizon lp-horizon--light reveal" aria-hidden="true" />
          <div className="lp-section-head reveal">
            <span className="lp-snum">03 — OBJECT</span>
            <h2 className="lp-section-title">Designed to<br />reveal more.</h2>
          </div>

          <div className="lp-produit-intro">
            <div className="reveal">
              <span className="lp-meta">+ MATERIAL · LIGHT · DETAIL</span>
            </div>
            <p className="reveal" data-delay="1">
              Light changes perception.<br />
              Details emerge.<br />
              Passion evolves.
            </p>
          </div>

          <div className="lp-produit-grid">
            <figure className="lp-pf lp-pf--hero reveal" data-delay="3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/imagery/wyp_watch_full.png" alt="WYP Swiss collector watch — limited edition manga collaboration" loading="lazy" />
              <figcaption className="lp-pf-caption">
                <span className="num">03 / 03</span>
                <span className="lbl">↓ Design</span>
              </figcaption>
            </figure>

            <figure className="lp-pf lp-pf--top reveal" data-delay="1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/imagery/wyp_contrast.jpg" alt="Light and shadow study" loading="lazy" />
              <figcaption className="lp-pf-caption">
                <span className="num">01 / 03</span>
                <span className="lbl">↓ Light</span>
              </figcaption>
            </figure>

            <figure className="lp-pf lp-pf--bot reveal" data-delay="2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/imagery/wyp_material_new.jpg" alt="Material texture — brushed lines" loading="lazy" />
              <figcaption className="lp-pf-caption">
                <span className="num">02 / 03</span>
                <span className="lbl">↓ Longevity</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ───────── 04 · COLLABORATIONS ───────── */}
      <section className="lp-section lp-section--dark" id="collab">
        <div className="lp-container">
          <div className="lp-horizon lp-horizon--strong reveal" aria-hidden="true" />
          <div className="lp-section-head reveal">
            <span className="lp-snum">04 — COLLABORATIONS</span>
            <h2 className="lp-section-title">One structure.<br />Infinite universes.</h2>
          </div>

          <div className="lp-collab-body">
            <div className="lp-collab-art lp-collab-art--dual reveal" data-delay="1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="cadran-nuit" src="/assets/imagery/cadran_nuit.png" alt="WYP × MHA dial — My Hero Academia night lume edition" loading="lazy" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="cadran-jour" src="/assets/imagery/cadran_jour.png" alt="WYP × MHA dial — My Hero Academia day edition" loading="lazy" />
              <DialThemeToggle />
            </div>

            <div className="lp-collab-text reveal" data-delay="2">
              <span className="lp-collab-tag">WYP × MHA — exemple</span>
              <h3 className="lp-collab-title">
                Every collection<br />is a dialogue.
              </h3>
              <p className="lp-collab-body-text">
                The WYP dial is a surface. Collaborations bring to it a color,
                a story, a culture. The brand itself stays constant — graphic
                base, precision, structure.
              </p>

              <div className="lp-collab-stats">
                <div className="lp-collab-stat reveal" data-delay="1">
                  <span className="lbl">Case</span>
                  <span className="val">Ø 39 mm</span>
                </div>
                <div className="lp-collab-stat reveal" data-delay="2">
                  <span className="lbl">Design</span>
                  <span className="val">Swiss</span>
                </div>
                <div className="lp-collab-stat reveal" data-delay="3">
                  <span className="lbl">Phase</span>
                  <span className="val">I · 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── 05 · SUITE ───────── */}
      <section className="lp-section lp-section--dark lp-suite" id="suite">
        <div className="lp-container">
          <div className="lp-horizon lp-horizon--strong" aria-hidden="true" />
          <div className="lp-section-head">
            <span className="lp-snum">05 — NEXT</span>
            <h2 className="lp-section-title">The reveal.</h2>
          </div>

          <div className="lp-suite-inner">
            <h3 className="lp-suite-line">
              passion takes
              <span>form.</span>
            </h3>

            <div className="lp-suite-meta">
              <span className="lp-suite-date">Coming soon</span>
              <p className="lp-suite-note">
                Built in silence. Revealed in time.
              </p>
              <span className="lp-meta">First public opening — to follow.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── FOOTER ───────── */}
      <footer className="lp-footer">
        <div className="lp-container">
          <div className="lp-footer-inner">
            <div className="lp-footer-icon reveal" data-delay="1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/logos/WYP_ICON_BLANC.png" alt="WYP" loading="lazy" />
            </div>

            <div className="lp-footer-center reveal" data-delay="2">
              <span className="lp-meta">For licensing inquiries</span>
              <a className="lp-ig" href="mailto:inquiries@wyp.ch">
                inquiries@wyp.ch
              </a>
            </div>

            <div className="lp-footer-right reveal" data-delay="3">
              <a className="lp-ig" href="https://instagram.com/wyp.ch" target="_blank" rel="noopener noreferrer">
                Instagram <span className="arrow">→</span> @wyp.ch
              </a>
              <a className="lp-ig" href="https://tiktok.com/@wyp.ch" target="_blank" rel="noopener noreferrer">
                TikTok <span className="arrow">→</span> @wyp.ch
              </a>
              <span className="lp-meta">WYP · GENEVA · CH</span>
            </div>
          </div>

          <div className="lp-footer-bottom reveal" data-delay="4">
            <span>Watch Your Passion ®</span>
            <span>© 2026 · HYPERBIEN®</span>
          </div>
        </div>
      </footer>
    </>
  )
}
