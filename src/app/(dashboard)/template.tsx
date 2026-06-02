export default function DashboardTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="view-transition">{children}</div>;
}
