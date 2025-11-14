import { Outlet } from "react-router-dom";
import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";
import AppNavbar from "../components/AppNavbar";
import "./AppLayout.css";

const AppLayout = ({ products, carts, setToken }) => {
  return (
    <div className="app-layout">
      <header className="app-header">
        <AppHeader />
      </header>

      <nav className="app-navbar">
        <AppNavbar products={products} carts={carts} setToken={setToken} />
      </nav>

      <main className="app-main">
        <Outlet />
      </main>

      <footer className="app-footer">
        <AppFooter />
      </footer>
    </div>
  );
};

export default AppLayout;
