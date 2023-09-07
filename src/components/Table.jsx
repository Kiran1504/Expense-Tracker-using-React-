import React from "react";
import DisplayExp from "./DisplayExp";

import CheckforBud from "./CheckforBud"

export default function Table(props) {
    // const green = {
    //     color:"#2fc41b"
    // }
    // const red = {
    //     color:"rgb(220 38 38)"
    // }
  // CheckforBud(props.plottable, props.budList);

  const newtable = props.plottable;
  const delitem = (id)=>{
    props.newchng(id);
  }
  return (
    <>
      <div className="w-full   md:w-full border-2 border-black overflow-hidden h-4/6 max-h-128 m-auto my-2 lg:m-2 bg-zinc-500 rounded-xl">
        <ul className="max-h-4/6">
          {newtable.map((ele, i) =><DisplayExp key={i} id= {i} e={ele} delexp={delitem} /> )}
        </ul>
      </div>
    </>
  );
}
