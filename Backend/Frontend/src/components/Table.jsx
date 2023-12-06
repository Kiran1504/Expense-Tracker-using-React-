import React, { useEffect, useState } from "react";
import DisplayExp from "./DisplayExp";
import { ExpenseProvider, useExp } from "../context";

// import CheckforBud from "./CheckforBud"

export default function Table(props) {
  // const green = {
  //     color:"#2fc41b"
  // }
  // const red = {
  //     color:"rgb(220 38 38)"
  // }
  // CheckforBud(props.plottable, props.budList);

  // const newtable = props.plottable;

  const [expenses, setExpenses] = useState(useExp().expenses)
  const delExpense = (id) => {
    setExpenses((preval) => preval.filter((ele) => ele._id !== id))
  }
  const update = async () => {
    const res = await fetch("/updateexpenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(expenses)
    })
    const data = await res.json();
    if (data.error) {
      alert(data.error)
    }
    else {
      alert(data.message)
    }
  };
  useEffect(() => {
  }, [])
  return (
    <ExpenseProvider value={{ expenses, delExpense }}>
      <div className="w-full md:w-full border-2 border-black overflow-hidden h-4/6 max-h-128 m-auto my-2 lg:m-2 bg-zinc-500 rounded-xl">
        <ul className="max-h-4/6">
          {expenses.map((ele, i) => <DisplayExp key={expenses[i]._id} id={ele._id} e={ele} delexp={delExpense} />)}
        </ul>
      </div>
    </ExpenseProvider>
  );
}
