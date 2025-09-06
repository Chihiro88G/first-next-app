//  for dynamic routes. [id]/page.tsx

type CarProps = {
  params: { id: string };
};

export default function Car({ params }: CarProps) {
  return <h1>SALUT {params.id}</h1>;
}