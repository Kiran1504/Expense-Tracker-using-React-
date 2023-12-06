let alerted = {"Grocery":0,
    "Medical":0,
    "Stationary":0,
    "Petrol":0,
    "Rent":0,
    "Miscelleneous":0,}
export default function CheckforBud(lists, budlist=[], currcat){
    
     let expenses = {
        "Grocery":0,
        "Medical":0,
        "Stationary":0,
        "Petrol":0,
        "Rent":0,
        "Miscelleneous":0,
    }

    try {
        lists.map((ele, i)=>{
            if (ele.cat === 'Grocery'){return expenses.Grocery += Number(ele.amt)}
            else if (ele.cat === 'Medical'){return expenses.Medical += Number(ele.amt)}
            else if (ele.cat === 'Stationary'){return expenses.Stationary += Number(ele.amt)}
            else if (ele.cat === 'Petrol'){return expenses.Petrol += Number(ele.amt)}
            else if (ele.cat === 'Rent'){return expenses.Rent += Number(ele.amt)}
            else if (ele.cat === 'Miscelleneous'){return expenses.Miscelleneous += Number(ele.amt)}
            else return null
        })
    } catch (error) {
        
    }

    for (const key in expenses){
        if ((Number(expenses[key]) > Number(budlist[key])) && key === currcat){
            alerted[key] = 123;
            alert(`limit for ${key} reached`)
        }
    }
    // console.log(lists);
    // console.log(budlist);
    // console.log(currcat);
    // console.log(expenses);
}