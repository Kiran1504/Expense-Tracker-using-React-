import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const classes = ({ isActive, isPending }) =>
    isActive
      ? "bg-black text-white h-full p-3 md:p-4 min-[876px]:px-14 text-xs px-2 md:text-lg  w-1/4 rounded-md  text-center m-1 shadow-red-400/40 drop-shadow-xl"
      : "bg-white hover:bg-zinc-500 hover:text-white h-full p-3 md:p-4 min-[876px]:px-14 text-xs px-2 md:text-lg  w-1/4 rounded-md  text-center m-1";

  return (
    <>
      <div>
        <ul className=" flex min-[425px]:flex-row flex-col mx-auto z-10 max-[425px]:top-5 relative justify-center align-middle max-[425px]:h-40  font-semibold sm:h-14 md:h-16 sm: sm:text-lg">
          <li className=" m-4 max-[425px]:m-3 max-[425px]:mx-auto  hover:-translate-y-1  z-10 relative">
            <NavLink to="Expense-Tracker-using-React-/" className={classes}>Home</NavLink>
          </li>

          <li className="m-4 max-[425px]:m-3 max-[425px]:mx-auto hover:-translate-y-1  z-10 relative ">
            <NavLink to="Expense-Tracker-using-React-/budget" className={classes}>Budget</NavLink>
          </li>

          <li className="m-4 max-[425px]:m-3 max-[425px]:mx-auto hover:-translate-y-1  z-10 relative ">
            <NavLink to="Expense-Tracker-using-React-/analysis" className={classes}>Analysis</NavLink>
          </li>

          <li className="m-4 max-[425px]:m-3 max-[425px]:mx-auto hover:-translate-y-1  z-10 relative ">
            <NavLink to="Expense-Tracker-using-React-/aboutus" className={classes}>About US</NavLink>
          </li>

        </ul>
      </div>
    </>
  );
}
