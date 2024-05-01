export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="max-w-[1440px] px-6 mx-auto">{children}</div>;
}