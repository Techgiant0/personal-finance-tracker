import "../styles/App.css";
import Controls from "./Controls";
import ExpenseList from "./ExpenseList";
import Header from "./Header";
import SummarySection from "./SummarySection";
import { useState } from "react";

const expenses = [];

function App() {
  const [addExpense, setAddExpense] = useState(expenses);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function addExpenseToList(newExpense) {
    setAddExpense((addExpense) => [...addExpense, newExpense]);
  }

  function handleFilter(category) {
    setSelectedCategory(category.name);
  }

  function handleDel(expense){
    const filteredExpenses = addExpense.filter(addExpense => addExpense !== expense)
    setAddExpense(filteredExpenses)
  }

  const displayedExpenses =
    selectedCategory === "All"
      ? addExpense
      : addExpense.filter((item) => item.category === selectedCategory);

  return (
    <div className="p-5 bg-[#F8FAFC]">
      <Header />
      <SummarySection expenses={displayedExpenses} />
      <Controls
        onAddExpenseToList={addExpenseToList}
        onFilter={handleFilter}
        addExpense={addExpense}
      />
      <ExpenseList expenses={displayedExpenses} onDel={handleDel} />
    </div>
  );
}

export default App;
