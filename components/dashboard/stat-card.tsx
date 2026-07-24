interface StatCardProps {
  title: string;
  value: string;
  description: string;
}

export default function StatCard({
  title,
  value,
  description,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <h3 className="text-sm font-medium text-gray-500">
        {title}
      </h3>

      <p className="mt-3 text-3xl font-bold text-gray-900">
        {value}
      </p>

      <p className="mt-2 text-sm text-gray-500">
        {description}
      </p>
    </div>
  );
}