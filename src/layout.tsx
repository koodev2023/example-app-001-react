import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="max-w-2xl flex flex-col items-center justify-center w-auto">
      (Spring Boot Demo App - Frontend)
      <Outlet />
    </main>
  );
};

export default Layout;
