import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  depositMoney,
  loanRequest,
  payLoan,
  withdrawMoney,
} from "../redux/account/accountSlice";
// payLoan
depositMoney;
export default function Accounts() {
  let totalAmount = 1200;
  const fullName = useSelector((state) => state.customer.fullName);
  const account = useSelector((store) => store.account);
  // console.log(account);
  //   console.log(fullName);
  const dispatch = useDispatch();
  const [depositAmount, setDepositAmout] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("BDT");

  const handleDeposit = () => {
    if (!depositAmount) return;
    // console.log(currency);
    dispatch(depositMoney(Number(depositAmount)));

    setDepositAmout("");
  };
  const handleWithdraw = () => {
    console.log(withdrawAmount);
    if (!withdrawAmount) return;
    dispatch(withdrawMoney(Number(withdrawAmount)));
    setWithdrawAmount("");
  };
  const handleLoanAmount = () => {
    if (!loanAmount || !loanPurpose) return;
    dispatch(loanRequest(Number(loanAmount), loanPurpose));
    setLoanAmount("");
    setLoanPurpose("");
  };
  const payLoanAmout = () => {
    console.log(account);
    dispatch(payLoan());
    // dispatch(payLoan());
  };

  //   console.log(currency);
  return (
    <div className="my-6">
      <h1 className="text-center font-bold text-2xl ">Transactiosn</h1>
      <p>Welcome {fullName}</p>
      <div>
        <div className="flex gap-4 items-center justify-center">
          <p className="text-2xl font-bold text-slate-600">
            $<span className="text-4xl">{account.balance}</span>
          </p>
        </div>
      </div>
      <div className="bg-green-900 text-slate-900 p-2 rounded-lg sm:px-28 sm:py-12">
        <div className="w-full sm:max-w-xl mx-auto my-6 flex gap-2 items-center">
          <p className=" font-bold">Deposit</p>
          <input
            type="number"
            className="sm:ml-2 p-1  bg-slate-200 rounded-md border-slate-200 focus:outline-none focus:border-slate-300"
            value={depositAmount}
            onChange={(e) => setDepositAmout(e.target.value)}
          />
          <select
            name="currency"
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="BDT">BDT</option>
            <option value="USD">USD</option>
          </select>
          <button
            onClick={handleDeposit}
            className="bg-slate-700 text-slate-50 rounded-md p-1 text-xs"
          >
            deposit
          </button>
        </div>
        <div className="w-full sm:max-w-xl mx-auto my-6 flex gap-2 items-center">
          <p className=" font-bold">Withdraw</p>
          <input
            type="number"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
            className="sm:ml-2 p-1  bg-slate-200 rounded-md border-slate-200 focus:outline-none focus:border-slate-300"
          />
          <button
            onClick={handleWithdraw}
            className="bg-slate-700 text-slate-50 rounded-md p-1 text-xs"
          >
            withdraw
          </button>
        </div>
        <div className="w-full sm:max-w-xl mx-auto my-6 flex flex-col md:flex-row gap-2 items-center">
          <p className=" font-bold">Loan </p>
          <input
            type="number"
            className="sm:ml-2 p-1  bg-slate-200 rounded-md border-slate-200 focus:outline-none focus:border-slate-300"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />

          <input
            type="text"
            className="sm:ml-2 p-1  bg-slate-200 rounded-md border-slate-200 focus:outline-none focus:border-slate-300"
            placeholder="loan purpose"
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
          />

          <button
            onClick={handleLoanAmount}
            className="bg-slate-700 text-slate-50 rounded-md p-1 text-xs"
          >
            Loan
          </button>
        </div>

        {account.loan > 0 && (
          <div className="w-full sm:max-w-xl mx-auto my-6 flex gap-2 items-center">
            <p className=" font-bold">Pay Loan </p>
            <button
              onClick={payLoanAmout}
              className="bg-slate-700 text-slate-50 rounded-md p-1 text-xs"
            >
              pay {account.loan} ({account.whyLoan})
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// reducer need to be pure function,no side effect
// no asynchronous operation
