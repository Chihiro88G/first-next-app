// for dynamic routes. [id]/page.tsx
// this is already SSG under app folder

type CarProps = {
  params: { id: string };
};

export default async function Car({ params }: CarProps) {
  const { id } = await params;  // need to do this in newer version. params have to be awaited
  const req = await fetch(`http://localhost:3000/${id}.json`);
  const car = await req.json();

  return <h1>SALUT {car.id} with {car.color} made in {car.made}</h1>;
}
