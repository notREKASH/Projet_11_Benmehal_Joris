import "./TransactionCard.scss";
import PropTypes from "prop-types";

function TransactionCard({ transactionData }) {
  return (
    <>
      {transactionData.map((transaction) => (
        <section
          className="transactionCard"
          key={`transaction-${transaction.title}`}
        >
          <div className="transactionCard__container">
            <h3 className="transactionCard__container--title">
              {transaction.title}
            </h3>
            <p className="transactionCard__container--amount">
              {transaction.amount}
            </p>
            <p className="transactionCard__container--description">
              {transaction.description}
            </p>
          </div>
          <div className="transactionCard__container cta">
            <button className="transactionCard__container--button">
              View transactions
            </button>
          </div>
        </section>
      ))}
    </>
  );
}

TransactionCard.propTypes = {
  transactionData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionCard;
