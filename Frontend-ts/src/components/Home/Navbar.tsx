import { FC } from "react"
// import { Link } from "react-router-dom"
import * as Types from "../../utility/types"
import Link from "../utils/Link"
import {
  MdHome,
  MdNotifications,
  MdChat,
  MdSearch,
} from "react-icons/md"

const Navbar: FC<Types.NavbarProps> = () => {
  return (
    <nav className="w-full flex items-center p-2 px-4 border bg-white sticky top-0 z-50">
      <div className="w-2/12">
        <div className="h-12">
          <img
            src={import.meta.env.VITE_MAIN_LOGO}
            alt="Uttara Logo"
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="w-4/12 flex justify-center">
        <ul className="list-none flex gap-6 text-sm">
          <li className="flex items-center gap-1">
            <MdHome size={20} />
            <Link path="/" title="Home" />
          </li>
          <li className="flex items-center gap-1">
            <MdNotifications size={20} />
            <Link path="/Notifications" title="Notifications" />
          </li>
          <li className="flex items-center gap-1">
            <MdChat size={20} />
            <Link path="/Messages" title="Messages" />
          </li>
        </ul>
      </div>
      <div className="w-4/12 px-4">
        <div className="w-full flex relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full text-sm text-gray-800 rounded-full border border-slate-300 p-2 focus:outline-none"
          />
          <button className="absolute rounded-full right-0 top-0 h-full p-2 focus:outline-none">
            <MdSearch size={18} />
          </button>
        </div>
      </div>
      <div className="w-2/12 px-3">
        <button className="w-full rounded bg-teal-500 px-4 py-2 text-white hover:bg-teal-600 focus:outline-none">
          Login
        </button>
      </div>
    </nav>
  )
}

export default Navbar
