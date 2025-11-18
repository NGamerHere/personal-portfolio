import './App.css'
import Portfolio from "./Portfolio.jsx";
import {Routes,Route} from "react-router-dom";
import CareSyncLanding from "./CareSyncLanding.jsx";
import VisitingCard from "./VisitingCard.jsx";
import PlanifyPage from "./PlanifyPage.jsx";

function App(){
    return <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/visiting-card" element={<VisitingCard />} />
        <Route path='/caresync' element={<CareSyncLanding />} />
        <Route path="planify" element={<PlanifyPage />} />
    </Routes>
}

export default App;