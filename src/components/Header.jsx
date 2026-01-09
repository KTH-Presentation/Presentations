import { NavLink } from "react-router-dom";
import KTH from "../assets/logos/KTH.svg";

const Header = ({ logo = KTH, textColor = "text-black", position = "relative", shadow = "shadow-[0_4px_6px_-2px_rgba(0,0,0,0.15)]" }) => {
  return (
    <header className={`${shadow} ${textColor} ${position} top-0 left-0 z-50 w-full`}>
      <div className="max-w-[1920px] mx-auto h-24 px-16 flex justify-between items-center">
        <NavLink to="/">
          <img src={logo} alt="KTH logo" />
        </NavLink>

        {/* NAVBAR */}
        <nav className="flex flex-row gap-10">
          <NavLink
            to="/grupp1"
            className={({ isActive }) => `transition-transform duration-200 hover:scale-102 hover:font-semibold ${isActive ? "underline font-semibold" : ""}`}
          >
            IoT Water-Efficiency
          </NavLink>
          <NavLink
            to="/grupp2"
            className={({ isActive }) => `transition-transform duration-200 hover:scale-102 hover:font-semibold ${isActive ? "underline font-semibold" : ""}`}
          >
            Sustainable Community Development
          </NavLink>
          <NavLink
            to="/grupp3"
            className={({ isActive }) => `transition-transform duration-200 hover:scale-102 hover:font-semibold ${isActive ? "underline font-semibold" : ""}`}
          >
            Smart Waste Management
          </NavLink>
          <NavLink
            to="/grupp4"
            className={({ isActive }) => `transition-transform duration-200 hover:scale-102 hover:font-semibold ${isActive ? "underline font-semibold" : ""}`}
          >
            National IoT Infrastructures
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
export default Header;