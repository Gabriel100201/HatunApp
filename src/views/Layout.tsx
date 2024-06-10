import { Outlet } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { NavMobile } from "../components/layout/NavMobile";
import HatunLogo from "./../assets/HatunLogo.svg";

export const Layout = () => {
  return (
    <section>
      <Header
        name="Emprendedor"
        urlImage="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
        logoApp={HatunLogo}
      />
      <Outlet></Outlet>
      <NavMobile></NavMobile>
    </section>
  );
};
