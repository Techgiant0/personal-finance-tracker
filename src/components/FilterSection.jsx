import {
  LayoutGrid,
  Utensils,
  CarFront,
  Layers,
  Gamepad2,
  MoreHorizontal,
} from "lucide-react";

const categories = [
  {
    id: "all",
    name: "All",
    icon: LayoutGrid,
    iconBg: "bg-emerald-100",
    text: "text-emerald-600",
    bg: "bg-[#f4f8fa]",
  },
  {
    id: "food",
    name: "Food",
    icon: Utensils,
    iconBg: "bg-orange-100",
    text: "text-orange-500",
    bg: "bg-[#f4f8fa]",
  },
  {
    id: "transport",
    name: "Transport",
    icon: CarFront,
    iconBg: "bg-blue-100",
    text: "text-blue-500",
    bg: "bg-[#f4f8fa]",
  },
  {
    id: "school",
    name: "School",
    icon: Layers,
    iconBg: "bg-purple-100",
    text: "text-purple-500",
    bg: "bg-[#f4f8fa]",
  },
  {
    id: "entertainment",
    name: "Entertainment",
    icon: Gamepad2,
    iconBg: "bg-amber-100",
    text: "text-amber-500",
    bg: "bg-[#f4f8fa]",
  },
  {
    id: "other",
    name: "Other",
    icon: MoreHorizontal,
    iconBg: "bg-slate-200",
    text: "text-slate-500",
    bg: "bg-[#f4f8fa]",
  },
];

export default function FilterSection({ addExpense, onFilter }) {
  return (
    <div className="bg-white rounded-xl p-5">
      <h1 className="font-bold text-lg">Filter by Category</h1>
      <ul className="mt-3 flex flex-col gap-2">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <li
              className={`flex flex-row items-center justify-between ${category.bg} p-2 rounded-xl`}
              key={category.id}
              onClick={() => onFilter(category)}
            >
              <div className="flex items-center gap-2">
                <span className={`${category.iconBg} p-1 rounded-full`}>
                  <Icon className={` ${category.text}`} />
                </span>

                {category.name}
              </div>

              <span>
                {category.name === "All"
                  ? addExpense.length
                  : addExpense.filter(
                      (expense) => expense.category === category.name,
                    ).length}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
