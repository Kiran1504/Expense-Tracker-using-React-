import React, { useState } from "react";
import Catlist from "./Catlist";
import CheckforBud from "./CheckforBud";

export default function Note(props) {
    const [drop, setdrop] = useState(false);
    const [amount, setamount] = useState("");
    const [category, setcategory] = useState("");
    const [list, setlist] = useState({
        date:"",
        cat:"",
        amt:"",
    })
    const [incomemode, setincomemode] = useState(false)
    const [expensemode, setexpensemode] = useState(true)
    const dropdown = ()=>{
        setdrop(!drop);
    }
    const changemode = ()=>{
        setincomemode(!incomemode)
        setexpensemode(!expensemode)
        setcategory("    Income")
    }
    const amt = (event)=>{
        const notedate = new Date().toLocaleDateString()
        setamount(event.target.value)
        setlist((preval)=>{
            return {
                date: notedate,
                cat: category.slice(4,),
                amt: event.target.value,
            }
        })
    }
    const createExpense = (event)=>{
        // if (list.cat === '' || list.amt === ''){alert("Enter correct details")}
        // else{props.fun(list)}
        props.fun(list)
        CheckforBud(props.explist, props.budList, category.slice(4,));
        setamount("")
        setcategory("")
        event.preventDefault();
    }
    const chngcat = (event)=>{
        setcategory(" :  " + event.target.value)
    }


  



    return (
        <>
            <div className=" rounded-xl h-full lg:w-2/6 lg:m-2 sm:w-1/2 md:w-1/3 m-auto my-2 font-Ubuntu max-[425px]:w-full max-[425px]:m-2 max-[425px]:mx-auto max-[640px]:w-3/4">
                <div className="border-2 border-black rounded-xl max-[425px]:m-4">

                    <div className="flex justify-center border-b-yellow-700 border-b-2">
                        <h3 className=" lg:text-xl font-semibold lg:m-4 sm:m-3 px-3 m-2 lg:px-6 md:px-2 py-1 lg:py-2 rounded-xl" onClick={changemode} style={incomemode? {backgroundColor:"#000000", color:"#2fc41b"}:{color:"#2fc41b"}} >Income</h3> <h3 className=" text-2xl font-semibold lg:m-4 sm:m-3 px-3 m-2 lg:px-6 md:px-2 py-1 lg:py-2">|</h3>
                        <h3 className=" lg:text-xl font-semibold lg:m-4 sm:m-3 px-3 m-2 lg:px-6 md:px-2 py-1 lg:py-2 rounded-xl" onClick={changemode} style={expensemode? {backgroundColor:"#000000", color:"rgb(220 38 38)"}:{color:"rgb(220 38 38)"}} >Expense</h3>
                    </div>


                    {expensemode?<div className="mb-10 mt-8 mx-4 border-2 border-black text-center  bg-orange-100  shadow-xl" onClick={dropdown}>
                         <ul><h3 className="text-lg font-bold m-2 px-2">Categories {category}</h3>
                            {drop? <div className=" text-md text-black font-medium grid gap-2">
                                <Catlist change = {chngcat} val={"Grocery"} />
                                <Catlist change = {chngcat} val={"Medical"} />
                                <Catlist change = {chngcat} val={"Stationary"} />
                                <Catlist change = {chngcat} val={"Petrol"} />
                                <Catlist change = {chngcat} val={"Rent"} />
                                <Catlist change = {chngcat} val={"Miscelleneous"} />
                            </div> : null}

                        </ul></div>:
                        <input className=" outline-none text-center bg-transparent cursor-pointer hidden"  name="category"/>
                         }
                    
                    <div className="my-24 text-center mx-auto ">
                        <h3 className=" font-Ubuntu">Enter the amount</h3>
                        <form onSubmit={createExpense}>
                            <input type="text" name="category" style={{display: "none"}} />
                            <input type="number" onChange={amt} value={amount} placeholder="Enter the amount" name="amount" className=" border-2 w-3/4 m-2 text-xl p-2 border-black"/>
                            <button type="submit" className=" rounded-lg bg-black text-white px-10 py-4 my-4"> Save </button></form>
                    </div>
                </div>
            </div>
        </>
    )
}