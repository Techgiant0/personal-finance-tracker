import SummaryCard from "./SummaryCard";
import { Wallet, ReceiptText, Star } from "lucide-react";

export default function SummarySection({ expenses }) {
  const totalAmount = expenses.reduce((acc, expense) => {
    const numericPrice = Number(expense.price);
    return acc + numericPrice;
  }, 0);
  
  const totalItems = expenses.length

  const avgAmount = totalAmount / totalItems
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <SummaryCard 
        summaryText="Total Spent"
        summaryValue={`₦${totalAmount.toLocaleString()}`}
        borderClass="border-[#ebf5f5] bg-[#f5fbf9]"
        iconBg="bg-[#ddf1e8]"
      >
        <Wallet color="#16a34a" />
      </SummaryCard>
      <SummaryCard
        summaryText="Number of expenses"
        summaryValue={totalItems}
        borderClass="border-[#eeecfb] bg-[#f7f5fe]"
        iconBg="bg-[#e1d6fc]"
      >
        <ReceiptText color="#713cda" />
      </SummaryCard>
      <SummaryCard
        summaryText="Average per expense"
        summaryValue={`₦${Number.isNaN(avgAmount) ? 0 : avgAmount.toLocaleString()}`}
        borderClass="border-[#e7f0fb] bg-[#f2f8fe]"
        iconBg="bg-[#cce2fd]"
      >
        <Star color="#1769e5" />
      </SummaryCard>
    </div>
  );
}
