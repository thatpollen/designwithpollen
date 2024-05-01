export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="max-w-[1156px] w-full px-6 mx-auto">{children}</div>;
}