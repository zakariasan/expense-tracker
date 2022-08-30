import React from 'react';
import './App.css';
import  Header  from "./components/header";
import Balance from "./components/Balance";
import  IncomeExpenses  from "./components/IncomeExpenses";
import  Transaction  from "./components/Transaction";
import  AddTransaction from "./components/addTransaction";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <GlobalProvider >
     <Header />
     <div className="container">
       <Balance />
       <IncomeExpenses/>
       <Transaction />
       <AddTransaction />
     </div>
    </GlobalProvider>
  );
}

export default App;
