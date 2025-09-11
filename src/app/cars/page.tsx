// use page.tsx (not index.tsx) as file name

async function makePostRequest() {

  // make api call from server -> need a full uri
  // make api call from client -> need only 'api/hello'
  const res = await fetch('http://localhost:3000/api/hello', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'Lucy' }),
  });

  const data = await res.json();
  return { data };
}

export default async function CarsList() {
  const { data } = await makePostRequest();

  return <h1>{ data.message }, here is your CARS LIST</h1>
}