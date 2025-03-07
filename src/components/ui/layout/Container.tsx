export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="max-w-[1440px] w-full mx-auto">{children}</div>;
}
