import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Products() {
  const { data, error } = useSWR("/api/products", fetcher);
  console.log(data);
  if (!data) {
    return;
  }
  if (error) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>
              Price: {product.currency} {product.price}
            </p>
            <p>Category: {product.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
