import Header from "./Header";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Note from "./Note";
import Table from "./Table";
import Budget from "./Budget";
import { useState } from "react";
import Aboutus from "./Aboutus";
import Analysis from "./Analysis";
import { useMediaQuery } from "@mui/material";

function App() {
  const [tableitems, settableitems] = useState([])
  const [hamstate, sethamstate] = useState(false)
  const state = useMediaQuery('(min-width:425px)')
  const [budlist, setbudlist] = useState({
    "Grocery":9000000,
    "Medical":9000000,
    "Stationary":9000000,
    "Petrol":9000000,
    "Rent":9000000,
    "Miscelleneous":9000000,
})
  const appendexpense = (li) => {
    settableitems((preval) => {
      return [
        ...preval,
        li,
      ]
    })
  }
  function newchanges(id) {
    settableitems(() => {
      return tableitems.filter((ele, i) => id !== i)
    })
  }
  return (
    <>
      <div className="w-full min-h-screen bg-white">
        <div className="  bg-indigo-950 text-slate-100">
          <Header chnghamstate = {()=>sethamstate(!hamstate)} />
        </div>
        <div className="my-0 sm:my-2 sm:pt-1 max-[425px]:bg-indigo-950 max-[425px]:h-56 pb-4 relative min-[425px]:max-sm:h-14" style={hamstate || state ?null:{display:"none"}} >
          <Navbar />
        </div>
        <Routes>
          <Route exact path="Expense-Tracker-using-React-/" Component={() => {
            return (<div className=" flex overflow-hidden h-4/6 max-h-128 border-2 border-black flex-col-reverse lg:flex-row"><Table plottable={tableitems} newchng={newchanges} budList={budlist} /><Note fun={appendexpense} explist={tableitems} budList={budlist} /></div>)
          }} />
          <Route exact path="Expense-Tracker-using-React-/budget" Component={()=><Budget budgetList = {(budgets)=>{setbudlist((preval)=>{
            return {...preval,
            [budgets.cat]:budgets.amt};

        })}} />} />
          <Route exact path="Expense-Tracker-using-React-/analysis" Component={() => { return <Analysis lists={tableitems} /> }} />
          <Route exact path="Expense-Tracker-using-React-/aboutus" Component={Aboutus} />
        </Routes>
      </div>
    </>
  );
}

export default App;
