import React from "react";

const Catlist = (props) => {
  // const chng = () => null;
  
  return (
    <div>
      <input
        className=" outline-none text-center bg-transparent cursor-pointer"
        name="cat"
        onClick={props.change}
        onChange={props.change}
        value={props.val}
      />
    </div>
  );
};

export default Catlist;
