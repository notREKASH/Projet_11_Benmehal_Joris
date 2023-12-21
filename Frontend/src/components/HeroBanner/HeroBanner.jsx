import "./HeroBanner.scss";

const dataHero = ["No fees.", "No minimum deposit.", "High interest rates."];

function HeroBanner() {
  return (
    <div className="hero">
      <section className="hero__content">
        <h2 className="sr_only">Promoted Content</h2>
        {dataHero.map((hero) => (
          <p key={`hero-${hero}`} className="hero__content--subtitle">
            {hero}
          </p>
        ))}
        <p className="hero__content--text">
          Open a savings account with Argent Bank today!
        </p>
      </section>
    </div>
  );
}

export default HeroBanner;
