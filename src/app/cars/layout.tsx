// layout.tsx could be in each route. not just for root

export default function CarsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1 style={{ color: 'blue' }}>Every Cars Route shows this h1</h1>
      { children }
    </>
  );
}
