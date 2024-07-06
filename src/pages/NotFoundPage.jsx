import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div>
      <h1>404 La ruta que intentas acceder no esta definida</h1>
      <Link to="/">Regresa a Home</Link>
    </div>
  );
}
