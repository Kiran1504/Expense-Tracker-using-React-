import Header from "./Header";
import Navbar from "./Navbar";
import { Route, Routes, useNavigate } from "react-router-dom";
import Budget from "./Budget";
import { useEffect, useState } from "react";
import Aboutus from "./Aboutus";
import Analysis from "./Analysis";
import { useMediaQuery } from "@mui/material";
import Register from "./Register";
import Login from "./Login";
// import Logout from "./Logout";
import { ExpenseProvider, useExp } from "../context"
import Home from "./Home";

function App() {
  const [email, setEmail] = useState("");
  const email2 = useExp().email;
  const navigate = useNavigate();
  const [expenses, setExpenses] = useState([])
  const [tableitems, settableitems] = useState([]);
  const [hamstate, sethamstate] = useState(false);
  const state = useMediaQuery("(min-width:425px)");
  const [budlist, setbudlist] = useState({
    Grocery: 9000000,
    Medical: 9000000,
    Stationary: 9000000,
    Petrol: 9000000,
    Rent: 9000000,
    Miscelleneous: 9000000,
  });






  useEffect(() => {
    const getdata = async () => {
      try {
        const res = await fetch("/home", {
          method: "GET",
          headers: {
            Accept: "appliation/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        const data = await res.json();
        if (!data.email) {
          navigate("/signin");
          // throw new Error("something went wrong");
        } else {
          console.log(data);
          setEmail(data.email)
          setExpenses(data.expenses)
        }
      } catch (error) {
        // alert(error);
        console.log(error);
      }
    };
    getdata();
  }, [email, navigate]);








  const logout = async () => {
    try {
      const res = await fetch("/logout", {
        method: "GET",
        headers: {
          Accept: "appplication/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      })
      const data = await res.json();
      if (data) {
        setEmail("")
        navigate("/signin")
        alert(data.message)
      }
      else {
        throw new Error("you messed up kiran")
      }
    } catch (error) {
      alert(error)
      console.log(error);
    }
  }









  const appendexpense = (li) => {
    settableitems((preval) => {
      return [...preval, li];
    });
  };
  function newchanges(id) {
    settableitems(() => {
      return tableitems.filter((ele, i) => id !== i);
    });

  }
  return (
    <ExpenseProvider value={{ email, expenses }}>
      <div className="w-full min-h-screen bg-white">
        <div className="  bg-indigo-950 text-slate-100">
          <Header chnghamstate={() => sethamstate(!hamstate)} />
        </div>
        <div
          className="my-0 sm:my-2 sm:pt-1 max-[425px]:bg-indigo-950 max-[425px]:h-56 pb-4 relative min-[425px]:max-sm:h-14"
          style={hamstate || state ? null : { display: "none" }}
        >
          <Navbar isuser={email2} logtoggle={logout} />
        </div>
        <Routes>
          <Route
            exact
            path="/"
            Component={() => <Home tableitems={tableitems} newchanges={newchanges} budlist={budlist} appendexpense={appendexpense} />}
          />
          <Route
            exact
            path="/budget"
            Component={() => (
              <Budget
                budgetList={(budgets) => {
                  setbudlist((preval) => {
                    return { ...preval, [budgets.cat]: budgets.amt };
                  });
                }}
              />
            )}
          />
          <Route
            exact
            path="/analysis"
            Component={() => {
              return <Analysis lists={tableitems} />;
            }}
          />
          <Route exact path="/aboutus" Component={Aboutus} />
          <Route exact path="/signup" Component={Register} />
          <Route exact path="/signin" Component={Login} />
          {/* <Route exact path="/logout" Component={Logout} /> */}
        </Routes>
      </div>
    </ExpenseProvider>
  );
}

export default App;
