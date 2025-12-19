import { Link } from "react-router-dom";
import KTH from "../assets/logos/KTH.svg";

const Header = () => {
  return (
    <header className="shadow-[0_4px_6px_-2px_rgba(0,0,0,0.15)]">
      <div className="h-24 px-16 flex justify-between items-center">
        <Link to="/">
          <img src={KTH} alt="KTH logo" />
        </Link>
        
        {/* NAVBAR */}
        <nav className="flex flex-row gap-8">
          <Link
            to="/grupp1"
            className="hover:text-[#125375] hover:underline transition-transform duration-200 hover:scale-110"
          >
            IoT Water-Efficiency
          </Link>
          <Link
            to="/grupp2"
            className="hover:text-[#450744] hover:underline transition-transform duration-200 hover:scale-110"
          >
            Sustainable Community Development
          </Link>
          <Link
            to="/grupp3"
            className="hover:text-[#51822B] hover:underline transition-transform duration-200 hover:scale-110"
          >
            Smart Waste Management
          </Link>
          <Link
            to="/grupp4"
            className="hover:text-[#094979] hover:underline transition-transform duration-200 hover:scale-110"
          >
            National IoT Infrastructures
          </Link>
        </nav>
      </div>
    </header>
  )
}
export default Header;