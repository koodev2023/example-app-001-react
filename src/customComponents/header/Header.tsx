import { navRoutes } from "@/constants/navRoutes";
import { IoVideocam } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  // window.location.pathname not working

  return (
    <nav>
      <div className="flex flex-row justify-between sticky top-0 bg-gray-100 font-medium">
        <div className="flex flex-row gap-1 items-center justify-center">
          <div className="flex flex-row gap-1 items-center justify-center mx-2">
            <IoVideocam className="text-4xl my-1.5 text-blue-800" />
            <div className="text-2xl text-blue-800">Mov</div>
          </div>

          <div className="flex flex-row gap-2">
            {navRoutes.map((route) => (
              <NavLink
                key={route.href}
                to={route.href}
                className={`text-1xl border-b-2 ${
                  route.href === location.pathname
                    ? "text-blue-800 border-blue-700"
                    : "text-slate-800 border-transparent"
                }`}
              >
                {route.name}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="flex flex-row gap-1 items-center justify-center mr-2">
          <div className="text-1xl text-blue-800 border-[1.5px] border-blue-800 rounded-sm px-2">
            Login
          </div>
          <div className="text-1xl text-blue-800 border-[1.5px] border-blue-800 rounded-sm px-2">
            SignUp
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
