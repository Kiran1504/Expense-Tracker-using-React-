import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ExpenseProvider } from '../context'

const Logout = () => {
    const [email, setEmail] = useState();
    const navigate = useNavigate()
    
    useEffect(()=>{
        const logout = async ()=>{
            try {
                const res = await fetch("/logout", {
                    method: "GET",
                    headers:{
                        Accept : "appplication/json",
                        "Content-Type" : "application/json"
                    },
                    credentials:"include"
                })
                const data = await res.json();
                if(data){
                    setEmail(null)
                    navigate("/signin")
                    alert(data.message)
                }
                else{
                    throw new Error("you messed up kiran")
                }
            } catch (error) {
                alert(error)
                console.log(error);
            }
        }
        logout();
    },[navigate])

  return (
    <ExpenseProvider value={{email}}>
      
    </ExpenseProvider>
  )
}

export default Logout
