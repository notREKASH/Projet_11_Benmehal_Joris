import TransactionCard from "../../components/TransactionCard/TransactionCard";
import "./TransactionList.scss";

const transactionData = [
  {
    title: "Argent Bank Checking (x8349)",
    amount: "$2,082.79",
    description: "Available Balance",
  },
  {
    title: "Argent Bank Savings (x6712)",
    amount: "$10,928.42",
    description: "Available Balance",
  },
  {
    title: "Argent Bank Credit Card (x8349)",
    amount: "$184.30",
    description: "Current Balance",
  },
];

function TransactionList() {
  return (
    <>
      <div className="transactionList">
        <h2 className="sr_only">Accounts</h2>
        <TransactionCard transactionData={transactionData} />
      </div>
    </>
  );
}

export default TransactionList;
