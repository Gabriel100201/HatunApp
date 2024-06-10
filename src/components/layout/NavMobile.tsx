import { FaRegUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { Link } from "react-router-dom";

export const NavMobile = () => {
  return (
    <nav className="w-full h-auto fixed bottom-0 z-50 border-t-[1px] bg-[#fefefe] border-black/20 px-12 py-0">
      <ul className="w-full flex justify-center items-center gap-12 py-1">
        <Link to={"/"}>
          <li className="text-xl p-3 rounded-full flex justify-center items-center hover:bg-gray-200 transition-all">
            <FaHome />
          </li>
        </Link>
        <Link to={"eventos"}>
          <li className="text-xl p-3 rounded-full flex justify-center items-center hover:bg-gray-200 transition-all">
            <MdEvent />
          </li>
        </Link>
        <Link to={"#search"}>
          <li className="text-xl p-3 rounded-full flex justify-center items-center hover:bg-gray-200 transition-all">
            <FaSearch />
          </li>
        </Link>
        <Link to={"perfil"}>
          <li className="text-xl p-3 rounded-full flex justify-center items-center hover:bg-gray-200 transition-all">
            <FaRegUser />
          </li>
        </Link>
      </ul>
    </nav>
  );
};
