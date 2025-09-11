// for dynamic routes. [id]/page.tsx
// this is already SSG under app folder

import Button from "./button";

type CarProps = {
  params: { id: string };
};

// able to make the component async
export default async function Car({ params }: CarProps) {
  // need to do this in newer version. params have to be awaited
  const { id } = await params;
  
  // able to fetch data without useEffect
  const req = await fetch(`http://localhost:3000/${id}.json`);
  const car = await req.json();

  return (
    <>
      {/* calling client component here from this server component */}
      <Button />
      <h1>SALUT {car.id} with {car.color} made in {car.made}</h1>
    </>
  );
}
