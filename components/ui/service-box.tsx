export default function ServiceBox({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#1a2a2a] rounded-xl p-6 flex flex-col items-center text-center gap-3">
      {icon}
      <h3 className="font-semibold text-lg text-white">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}