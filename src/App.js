import { useReducer } from "react";
import Loan from "./Loan";
import CloseAccount from "./CloseAccount";
import PayLoan from "./PayLoan";
import RequestLoan from "./RequestLoan";
import Withdraw from "./Withdraw";
import Deposit from "./Deposit";
import Balance from "./Balance";
import Main from "./Main";
import "./styles.css";
import OpenAccount from "./OpenAccount";

const initialState = {
  balance: 0,
  withdraw: 50,
  requestLoan: 5000,
  loan: 0,
  deposit: 50,
  payLoan: 50
};

const reducer = (state, action) => {
  switch (action.type) {
    case "newAcc":
      return {
        ...state,

        balance: state.balance + 550
      };
    case "depos":
      return {
        ...state,

        balance: state.balance + 50
      };
    case "withdraw":
      return {
        ...state,

        balance: state.balance - 50
      };
    case "addLoan":
      return {
        ...state,

        loan: state.loan + state.requestLoan
      };
    case "payLoan":
      return {
        ...state,

        loan: state.loan - state.payLoan
      };

    case "closeAcc":
      return {
        ...initialState
      };

    default:
      throw new Error("Action not recognised");
  }
};

export default function App() {
  const [
    { balance, loan, withdraw, deposit, requestLoan, payLoan },
    dispatch
  ] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <Main>
        <h1>useReducer Banking App</h1>
        <Balance balance={balance} />
        <Loan loan={loan} />
        <OpenAccount dispatch={dispatch} balance={balance} />
        <Deposit dispatch={dispatch} deposit={deposit} balance={balance} />
        <Withdraw balance={balance} withdraw={withdraw} dispatch={dispatch} />
        <RequestLoan
          balance={balance}
          loan={loan}
          requestLoan={requestLoan}
          dispatch={dispatch}
        />
        <PayLoan dispatch={dispatch} payLoan={payLoan} loan={loan} />
        <CloseAccount dispatch={dispatch} balance={balance} />
      </Main>
    </div>
  );
}
