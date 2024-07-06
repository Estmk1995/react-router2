import { useParams } from "react-router-dom";

export function ProductDetails() {
  const params = useParams();
  return <div>Productos {params.productId}</div>;
}
