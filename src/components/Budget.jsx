import React, {useState} from "react";
import Catlist from "./Catlist";

export default function Budget(props){
    const [drop, setdrop] = useState(false);
    const [amount, setamount] = useState("");
    const [category, setcategory] = useState("");
    
    const [budgets, setbudgets] = useState({
        cat:"",
        amt:"",
        type:"budget",
    })
    const amt = (event)=>{
        setamount(event.target.value)
        setbudgets( (preval)=> {
            return {cat: category.slice(4,),
            amt:event.target.value,
            type:"budget",}
        })
    }
    const chngcat = (event)=>{
        setcategory(" :  " + event.target.value)
        
    }
    const dropdown = ()=>{
        setdrop(!drop);
    }
    const newbudget = (event)=>{ // on submit function set append budgets amount to budlist object
        props.budgetList(budgets);
        console.log(budgets);
        setamount("")
        setcategory("")
        event.preventDefault()
    }
    const chng= (event)=>{
        // setbudgets( (preval)=> {
        //     return {...preval,
        //     cat :event.target.value,
        //     type:"budget",}
        // })
        // amt(event)
        
    }
    return (
        <>
            <div className=" rounded-xl h-full lg:w-2/6 lg:m-2 sm:w-1/2 md:w-1/3 m-auto my-2 font-Ubuntu max-[425px]:w-full max-[425px]:m-2 max-[425px]:mx-auto max-[640px]:w-3/4 lg:mx-auto">
            <div className="border-2 border-black rounded-xl max-[425px]:m-4">
            <div className="mb-10 mt-8 mx-4 border-2 border-black text-center  bg-orange-100  shadow-xl" onClick={dropdown}>
                         <ul><h3 className="text-lg font-bold m-2 px-2">Categories {category}</h3>
                         {drop? <div className=" text-md text-black font-medium grid gap-2">
                                <Catlist change = {chngcat} clicked = {chng} val={"Grocery"} />
                                <Catlist change = {chngcat} clicked = {chng} val={"Medical"} />
                                <Catlist change = {chngcat} clicked = {chng} val={"Stationary"} />
                                <Catlist change = {chngcat} clicked = {chng} val={"Petrol"} />
                                <Catlist change = {chngcat} clicked = {chng} val={"Rent"} />
                                <Catlist change = {chngcat} clicked = {chng} val={"Miscelleneous"} />
                            </div> : null}

                        </ul></div>
                        <div className="my-24 text-center mx-auto ">
                        <h3 className=" font-Ubuntu">Enter the Budget</h3>
                        <form onSubmit={newbudget} >
                            <input type="text" name="category" style={{display: "none"}} />
                            <input type="number" onChange={amt} value={amount} placeholder="Enter the amount" name="amt" className=" border-2 w-3/4 m-2 text-xl p-2 border-black"/>
                            <button type="submit" className=" rounded-lg bg-black text-white px-10 py-4 my-4"> Save </button></form>
                        </div>
                        

            </div>
            </div>
        </>
    )
}