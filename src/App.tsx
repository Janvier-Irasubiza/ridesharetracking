import { Route, Routes } from "react-router-dom";
import Index from "./views/Index.tsx";
import TopNav from "./components/TopNav.tsx";
import BottomNav from "./components/BottomNav.tsx";
import "./App.css";

export default function App() {
  return (
    <div>
      <TopNav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dashboard/" element={<Dashboard />} />
      </Routes>
      <div className="btm-nav">
        <BottomNav />
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <Routes>
      <Route />
    </Routes>
  );
}
