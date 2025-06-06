import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";

const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

export default Layout;
