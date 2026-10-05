import AddExpense from "./AddExpense";
import FilterSection from "./FilterSection";

export default function Controls({
  onAddExpenseToList,
  onFilter,
  addExpense
}) {
  return (
    <div className="grid grid-cols-3 gap-4 mt-5">
      <AddExpense onAddExpenseToList={onAddExpenseToList} />
      <FilterSection
        onFilter={onFilter}
        addExpense={addExpense}
      />
    </div>
  );
}
