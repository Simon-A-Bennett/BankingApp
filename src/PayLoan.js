const PayLoan = ({ dispatch, payLoan, loan }) => {
  return (
    <div>
      <button
        disabled={!loan}
        onClick={() => dispatch({ type: "payLoan" })}
        className="btn"
      >
        Pay Loan
      </button>
      <input className="inputs" placeholder={payLoan} />
    </div>
  );
};

export default PayLoan;
