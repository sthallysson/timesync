export default function EventListItem({
  title,
  label,
}: {
  title: string;
  label: string;
}) {
  return (
    <li
      className={`flex bg-[#f8f9fa] px-4 py-2 gap-4 items-center border-l-[15px] border-${label}-500 rounded-lg mb-2`}
    >
      <span className="text-md">Dia Inteiro</span>
      <h3 className="text-lg font-semibold">{title}</h3>
    </li>
  );
}
