export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="flex min-h-screen bg-[#050816] text-white">
      {children}
    </div>
  );
}