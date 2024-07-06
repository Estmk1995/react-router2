import { Link } from "react-router-dom";

export function ProductsPage() {
  const products = [1, 2, 3, 4, 5, 6];
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {products.map((product) => {
        return (
          <Link key={product} to={`/products/${product}`}>
            Producto {product}
          </Link>
        );
      })}
    </div>
  );
}
