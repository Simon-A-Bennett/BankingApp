const OpenAccount = ({ dispatch, balance }) => {
  return (
    <div>
      <button
        disabled={balance >= 550}
        onClick={() => dispatch({ type: "newAcc" })}
        className="btn"
      >
        Open Account
      </button>
    </div>
  );
};

export default OpenAccount;
