import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Main from "./pages/Main/Main";
import Calendar from "./pages/subscription/Subcription";


function App() {
   return (
      <>
      <Router>
         <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/subscription" element={<Calendar />} />
         </Routes>
         </Router>
      </>
   );
}
export default App;