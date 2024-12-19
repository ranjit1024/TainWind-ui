import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {Sidebar} from "./components/Sidebar";
import { Header } from "./components/Header";
import { Overview } from "./components/Overview";

function App() {
  const [count, setCount] = useState(0);

  return (
   <div className="h-screen w-screen flex bg-slate-50">
    <Sidebar/>
    <div className="w-screen">
    <Header/>
    <h1 className="font-bold
    
    p-4 my-4 text-2xl tracking-wide ">Overview</h1>
    <Overview onlineOrder={231} amount={"19,123,454"}/>
    </div>
    </div>
  );
}


export default App;

