import { NavLink } from "react-router-dom";
import logo from "../../../assets/Logo.png";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center shadow-sm">
      <div className="">
        <img className="w-28 md:w-48" src={logo} alt="" />
      </div>
      <div className="">
        <ul className="flex font-normal text-sm md:text-base gap-3 md:gap-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline font-bold"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline font-bold"
                  : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline font-bold"
                  : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
