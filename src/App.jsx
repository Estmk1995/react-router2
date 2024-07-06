import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="menu">
          <Link className="menu_item" to={"/Home"}>
            Home Page
          </Link>
          <Link className="menu_item" to="/Profiles">
            Profiles Page
          </Link>
        </div>
        <Outlet className="app" />
      </div>
    </>
  );
}

export default App;
