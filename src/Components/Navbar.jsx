import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {

  const user = useSelector((store)=> store.user)
  console.log(user);
  

  return (
    <div className="navbar bg-gray-800 text-white px-10 py-4">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl"> 🧑‍💻 DevTinder</a>
      </div>
      {
        user && 
      <div className="flex-none text-black flex items-center gap-4 text-white">
        <div> Welcome, {user?.username}</div>
        <div className="dropdown dropdown-end text-black">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={user.photoURL}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
      }
    </div>
  );
};

export default Navbar;
