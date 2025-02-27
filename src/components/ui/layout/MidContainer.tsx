export default function MidContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="max-w-[1200px] w-full px-6 mx-auto">{children}</div>;
}
