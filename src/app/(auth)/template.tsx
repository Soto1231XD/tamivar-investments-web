export default function AuthTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="view-transition">{children}</div>;
}
