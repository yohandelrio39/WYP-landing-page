// WYP — Product card + grid
function ProductCard({ p, onAdd }) {
  return (
    <article className="wyp-pc">
      <div className="wyp-pc-media">
        {p.tag && (
          <span className={"wyp-pc-tag" + (p.tagPill ? " pill" : "")}>{p.tag}</span>
        )}
        <img src={p.image} alt={p.name} />
      </div>
      <div className="wyp-pc-meta">
        <span className="wyp-pc-overline">{p.tier}</span>
        <h3 className="wyp-pc-title">{p.name}</h3>
        <span className="wyp-pc-price">CHF {p.price}.—</span>
        <div className="wyp-pc-actions">
          <Button variant="secondary" onClick={() => onAdd && onAdd(p)}>+ Ajouter</Button>
          <Button variant="ghost" arrow>Voir</Button>
        </div>
      </div>
    </article>
  );
}

function ProductGrid({ products, onAdd }) {
  return (
    <section className="wyp-section">
      <div className="wyp-container">
        <SectionHead num="02 / Boutique" title="Collection." link="Tout voir" />
        <div className="wyp-products">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} onAdd={onAdd} />
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ProductCard, ProductGrid });
