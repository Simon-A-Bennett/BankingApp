const Deposit = ({ dispatch, deposit, balance }) => {
  return (
    <div>
      <button
        disabled={!balance}
        onClick={() => dispatch({ type: "depos" })}
        className="btn"
      >
        Deposit
      </button>
      <input className="inputs" placeholder={deposit} />
    </div>
  );
};

export default Deposit;
