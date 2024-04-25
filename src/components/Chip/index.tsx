export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <div className="background-secondary text-white px-3 py-2 rounded-3xl text-xs font-medium">
      {children}
    </div>
  );
}
