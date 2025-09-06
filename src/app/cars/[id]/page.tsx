// for dynamic routes. [id]/page.tsx
// this is already SSG under app folder

type CarProps = {
  params: { id: string };
};

export default async function Car({ params }: CarProps) {
  const req = await fetch(`http://localhost:3000/${params.id}.json`);
  const car = await req.json();

  return <h1>SALUT {car.id} with {car.color} made in {car.made}</h1>;
}
