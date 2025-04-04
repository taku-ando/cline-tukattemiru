export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data: {id: number, title: string}[] = await res.json();
  console.log(data[0]);
  return (
    <div>
      <h1>Hello World</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <p>{item.title}</p>
          </li>
        ))}
        <li></li>
      </ul>
    </div>
  );
}
