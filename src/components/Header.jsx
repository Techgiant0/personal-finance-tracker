import wallet from "../assets/wallet.svg";
import {Calendar} from 'lucide-react'

export default function Header() {
    const date = new Date()
    const convertedDate = date.toDateString()
  return (
    <div className="flex justify-between items-center bg-[#f6f8fd] p-4 rounded-lg">
      <div className="flex gap-5">
        <div className="bg-[#ddf1e8] p-3 rounded-xl">
          <img src={wallet} alt="wallet" width="25" />
        </div>

        <span>
          <h1 className="font-bold text-lg">Expense Tracker</h1>
          <small className="text-gray-400">Track your spending. Build better habits</small>
        </span>
      </div>

      <div className="flex gap-1 items-center">
        <Calendar color="#99a1af" size={15} aria-hidden="true" />
        <small className="text-gray-400">{convertedDate}</small>
      </div>
    </div>
  );
}
