export default function SummaryCard({
  summaryText,
  summaryValue,
  borderClass,
  children,
  iconBg
}) {
  return (
    <div className={`${borderClass} flex border p-3 gap-5 items-center rounded-lg mt-5`}>
      <div className={`p-2 ${iconBg} rounded-full`}>{children}</div>
      <span>
        <small className="text-gray-400">{summaryText}</small>
        <h1 className="font-bold text-lg">{summaryValue}</h1>
      </span>
    </div>
  );
}