import React from 'react'

const DisplayExp = (props) => {
    let mode
    if (props.e.cat === "Income"){
                mode = true
            }
            else{
                mode = false
            }
    const del=()=>{
        props.delexp(props.id)
    }
  return (
    <>
            <li>
                <div className="mx-6 my-4 rounded-lg bg-red-500 h-24 align-middle transition ease-in-out delay-50 hover:scale-105">
                    <div className="bg-white grid grid-cols-6 h-full grid-rows-4 rounded-lg" style={{width:"99%"}} >
                        <div className="h-12 p-2 px-4 mx-4 my-1 w-1/2 row-span-2 min-[319px]:col-span-3  md:col-span-5 font-bold text-2xl lg:text-3xl border-b-4 border-zinc-500" style={mode? {color:"#2fc41b"}:{color:"rgb(220 38 38)"}}>{props.e.cat}</div>
                        <div className="h-10 px-4 mx-4 my-1 w-1/2 row-span-2 min-[319px]:col-span-3 col-start-5 max-[320px]:col-start-2 md:col-start-6 font-medium text-right text-2xl lg:text-3xl " style={mode? {color:"#2fc41b"}:{color:"rgb(220 38 38)"}}>{props.e.amt}</div>
                        <div className=" col-span-4 min-[319px]:col-span-4 row-span-1 lg:text-lg px-4 mx-4 my-1"> {props.e.date} </div>
                        <div className=" col-span-1 md:col-start-6 col-start-5 max-[320px]:col-start-2 row-span-2 lg:text-lg md:px-4 mx-4 " onClick={del}><button className=" bg-red-600 py-1 px-4 mr-8 rounded-xl text-white">Delete</button></div>
                    </div>
                </div>
            </li>
    </>
  )
}

export default DisplayExp
