import './App.css'
import Portfolio from "./Portfolio.jsx";
import {Routes,Route} from "react-router-dom";

function App(){
    return <Routes>
        <Route path="/" element={<Portfolio />} />
    </Routes>;
}

export default App
