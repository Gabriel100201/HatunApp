import { FaRegUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdEvent } from "react-icons/md";

export const NavMobile = () => {
  return (
    <nav className="w-full h-auto absolute bottom-0 border-t-[1px] bg-[#fefefe] border-black/20 px-12 py-0">
      <ul className="w-full flex justify-center items-center gap-12">
        <li className="text-2xl p-3 rounded-full flex justify-center items-center bg-primary-100 hover:bg-primary-300 transition-all">
          <FaHome />
        </li>
        <li className="text-2xl p-3 rounded-full flex justify-center items-center bg-primary-100 hover:bg-primary-300 transition-all">
          <MdEvent />
        </li>
        <li className="text-2xl p-3 rounded-full flex justify-center items-center bg-primary-100 hover:bg-primary-300 transition-all">
          <FaSearch />
        </li>
        <li className="text-2xl p-3 rounded-full flex justify-center items-center bg-primary-100 hover:bg-primary-300 transition-all">
          <FaRegUser />
        </li>
      </ul>
    </nav>
  );
};
