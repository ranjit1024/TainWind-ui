import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RevenuCard } from "./components/RevenueCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid grid-cols-3">
      <RevenuCard title={"Amount Pending"} orderCount={12} amount={"92,340,234"}></RevenuCard>
    </div>
  );
}

export default App;
