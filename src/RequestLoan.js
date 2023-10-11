const RequestLoan = ({ dispatch, requestLoan, loan, balance }) => {
  return (
    <div>
      <button
        disabled={!balance || loan}
        onClick={() => dispatch({ type: "addLoan" })}
        className="btn"
      >
        Request Loan
      </button>
      <input className="inputs" placeholder={requestLoan} />
    </div>
  );
};

export default RequestLoan;
