import './App.css'
import Portfolio from "./Portfolio.jsx";
import {Routes,Route} from "react-router-dom";
import CareSyncLanding from "./CareSyncLanding.jsx";
import VisitingCard from "./VisitingCard.jsx";

function App(){
    return <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/visiting-card" element={<VisitingCard />} />
        <Route path='/caresync' element={<CareSyncLanding />} />
    </Routes>
}

export default App;