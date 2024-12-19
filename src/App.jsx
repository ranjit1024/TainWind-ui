import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {Sidebar} from "./components/Sidebar";
import { Header } from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
   <div className="h-screen flex  w-screen">
    <Sidebar/>
    <Header/>
    <Anoerh/>
    </div>
  );
}
function Anoerh(){
  return<div className="flex">
    <h1>fsd</h1>
  </div>
}

export default App;

