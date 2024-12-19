import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {Sidebar} from "./components/Sidebar";
import { Header } from "./components/Header";
import { Overview } from "./components/Overview";
import {Transacton} from "./components/Transactions"

function App() {
 

  return (
   <div className="h-[100%] flex bg-slate-50">
    <Sidebar/>
    <div className="w-screen">
    <Header/>
    <h1 className="font-medium
    
    p-4 my-4 text-2xl tracking-wide ">Overview</h1>
    <Overview onlineOrder={231} amount={"19,123,454"}/>
    <Transacton/>
    </div>
    </div>
  );
}


export default App;

