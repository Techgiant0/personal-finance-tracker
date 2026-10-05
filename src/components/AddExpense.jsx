import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Utensils,
  CarFront,
  Layers,
  Gamepad2,
  MoreHorizontal,
} from "lucide-react";

const items = [
  {
    label: "Food",
    value: "Food",
    icon: Utensils,
    text: "text-orange-500",
    iconBg: "bg-orange-100",
  },
  {
    label: "Entertainment",
    value: "Entertainment",
    icon: Gamepad2,
    text: "text-amber-500",
    iconBg: "bg-amber-100",
  },
  {
    label: "School",
    value: "School",
    icon: Layers,
    text: "text-purple-500",
    iconBg: "bg-purple-100",
  },
  {
    label: "Transport",
    value: "Transport",
    icon: CarFront,
    text: "text-blue-500",
    iconBg: "bg-blue-100",
  },
  {
    label: "Other",
    value: "Other",
    icon: MoreHorizontal,
    text: "text-slate-500",
    iconBg: "bg-slate-200",
  },
];

export default function AddExpense({ onAddExpenseToList }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Food");

  const activeCategoryObject = items.find((item) => item.value === category);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !price || !category) return;

    const newExpense = {
      name,
      price,
      category,
      date: new Date().toDateString(),
      bg: "bg-[#f4f8fa]",
      id: activeCategoryObject?.value,
      iconBg: activeCategoryObject?.iconBg,
      text: activeCategoryObject?.text,
    };

    onAddExpenseToList(newExpense);

    setName("");
    setPrice("");
    setCategory("Food");
  }

  return (
    <form
      className="col-span-2 bg-white p-5 rounded-xl"
      onSubmit={handleSubmit}
    >
      <h1 className="font-bold text-lg">Add Expense</h1>
      <small className="text-gray-400">Enter the details of your expense</small>
      <div className="mt-3">
        <label className="font-bold">Expense Name</label>
        <br />
        <input
          type="text"
          placeholder="e.g. Lunch, Bus fare, Textbook"
          className="w-full p-3 border border-[#E2E8F0] rounded-lg mt-2 mb-6"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="font-bold">Amount</label>
            <br />
            <input
              type="number"
              placeholder="e.g 3500"
              className="w-full p-3 border border-[#E2E8F0] rounded-lg mt-2"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="flex-1">
            <label className="font-bold">Category</label>
            <br />

            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full p-6 mt-2">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <SelectItem key={item.value} value={item.value}>
                        <span className={`${item.iconBg} p-1 rounded-full`}>
                          <Icon className={item.text} />
                        </span>
                        {item.label}
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <button className="bg-[#16A34A] hover:bg-[#15803D] text-white transition w-full mt-10 p-3 rounded-lg">
          + Add Expense
        </button>
      </div>
    </form>
  );
}
