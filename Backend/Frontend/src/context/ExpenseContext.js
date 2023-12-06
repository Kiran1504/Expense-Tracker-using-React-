const { createContext, useContext } = require("react");

export const ExpenseContext = createContext({
    email: "",
    expenses : null,
    delExpense : (id)=>{}
})

export const ExpenseProvider = ExpenseContext.Provider

export const ExpenseConsumer = ExpenseContext.Consumer

export const useExp = ()=>{
    return useContext(ExpenseContext);
} 

