const Withdraw = ({ dispatch, withdraw, balance }) => {
  return (
    <div>
      <button
        onClick={() => dispatch({ type: "withdraw" })}
        disabled={balance <= 50 && balance < 550}
        className="btn"
      >
        Withdraw
      </button>
      <input className="inputs" placeholder={withdraw} />
    </div>
  );
};

export default Withdraw;
