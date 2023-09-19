import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="app">
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
