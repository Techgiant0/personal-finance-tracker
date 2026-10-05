import { Trash } from "lucide-react";
import {
  Utensils,
  CarFront,
  Layers,
  Gamepad2,
  MoreHorizontal,
} from "lucide-react";
import { useState } from "react";

const iconMap = {
  Food: Utensils,
  Entertainment: Gamepad2,
  School: Layers,
  Transport: CarFront,
  Other: MoreHorizontal,
};

export default function ExpenseList({ expenses, onDel }) {
  const [order, setOrder] = useState("highest");

   const sortedProducts = [...expenses].sort((a, b) => {
    if (order === 'highest') return b.price - a.price; // High to Low
    if (order === 'lowest') return a.price - b.price;  // Low to High
    return 0; // Unsorted
  });
  return (
    <div className="bg-white p-5 mt-5 rounded-xl">
      <div className="flex items-center mb-5 justify-between">
        <h1 className="font-bold text-lg">Expenses</h1>
        <span className="flex gap-1">
          <label className="text-slate-400">Sort by</label>
          <select
            className="border border-slate-300 p-10px rounded-lg"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          >
            <option value="highest">
              Highest to Lowest
            </option>
            <option value="lowest">
              Lowest to Highest
            </option>
          </select>
        </span>
      </div>

      {!expenses || expenses.length === 0 ? (
        <p className="text-slate-500 text-center py-4">No expenses yet.</p>
      ) : (
        <div>
          <ul>
            {sortedProducts.map((expense) => {
              const IconComponent = iconMap[expense.category] || MoreHorizontal;

              return (
                <li
                  className="flex items-center justify-between border p-2 border-slate-300"
                  key={expense.id}
                >
                  <div className="flex gap-5 items-center">
                    <span className={`${expense.iconBg} p-1 rounded-full`}>
                      <IconComponent className={expense.text} />
                    </span>

                    <div className="flex flex-col gap-1">
                      <p className="font-bold">{expense.name}</p>
                      <small
                        className={`${expense.text} ${expense.iconBg} rounded-xl text-center self-start px-1.5 py-0.5`}
                      >
                        {expense.category}
                      </small>
                    </div>
                  </div>

                  <div className="flex items-center gap-[15vw]">
                    <div>
                      <p className="font-bold">
                        ₦{Number(expense.price).toLocaleString()}
                      </p>
                      <small className="text-slate-500">{expense.date}</small>
                    </div>

                    <Trash
                      color="#EF4444"
                      size={20}
                      onClick={() => onDel(expense)}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
