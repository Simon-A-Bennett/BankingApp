const CloseAccount = ({ dispatch, balance }) => {
  return (
    <div>
      <button
        disabled={!balance}
        onClick={() => dispatch({ type: "closeAcc" })}
        className="btn"
      >
        Close Account
      </button>
    </div>
  );
};

export default CloseAccount;
