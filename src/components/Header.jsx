import React from "react";
import MenuIcon from '@mui/icons-material/Menu';

export default function Header(props) {
  // return <h1 className="w-full text-center">Hello World</h1>
  const hamstate =()=>{
    props.chnghamstate()
  }
  return (
    <>
      <div className="flex align-middle items-center">
        <h1 className="w-full justify-self-center md:h-20 sm:h-12 h-10 text-xl font-bold sm:text-2xl mb-2 max-[425px]:h-14 sm:mb-0 text-center pt-2 md:pt-4 font-sans md:text-4xl">
          Expense Tracker 
        </h1>
        <div className="mr-2 text-right min-[425px]:hidden max-h-12" onClick={hamstate}><MenuIcon/></div>
      </div>
    </>
  );
}
