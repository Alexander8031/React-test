import { Link, Outlet } from "react-router-dom";
import Header from "./Header/Header";

const Layout = () => {
  return (
    <>
      <Header>
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/input">Input</Link>
      </Header>

      <Outlet />
    </>
  );
};

export {Layout} 