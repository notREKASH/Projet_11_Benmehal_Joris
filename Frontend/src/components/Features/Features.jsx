import "./Features.scss";
import iconChat from "../../assets/images/icon-chat.webp";
import iconMoney from "../../assets/images/icon-money.webp";
import iconSecurity from "../../assets/images/icon-security.webp";

const dataFeatures = [
  {
    icon: iconChat,
    title: "You are our #1 priority",
    description:
      "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },
  {
    icon: iconMoney,
    title: "More savings means higher rates",
    description:
      "The more you save with us, the higher your interest rate will be!",
  },
  {
    icon: iconSecurity,
    title: "Security you can trust",
    description:
      "We use top of the line encryption to make sure your data and money is always safe.",
  },
];

function Features() {
  return (
    <section className="features">
      <h2 className="sr_only">Features</h2>
      {dataFeatures.map((feature, idx) => (
        <div key={`feature-${idx}`} className="features__item">
          <img className="features__item__icon" src={feature.icon}></img>
          <h3 className="features__item__title">{feature.title}</h3>
          <p className="features__item__text">{feature.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;
