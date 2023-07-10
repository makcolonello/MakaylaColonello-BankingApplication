import { Route, Routes} from "react-router-dom";
import React from 'react';
import NavBar from "./navbar";
import MyBank from "./mybank";
import Home from "./home";
import CreateAccount from "./createaccount";
import Deposit from "./deposit";
import Withdraw from "./withdraw";
import Alldata from "./alldata";
import { UserContext } from "./context";

function App() {
  
 
  return (

    <>
      <NavBar />
      <div className="container">
        <UserContext.Provider value={{users:[{name:'', email:'', password:'', accountId:'', balance:25}]}}>
          <Routes>
          <Route path ="/" element={<MyBank />} />
          <Route path="/home" element={<Home />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/alldata" element={<Alldata />} />
          </Routes>
        </UserContext.Provider>
      </div>
   
    </>
  )
}
export default App;
