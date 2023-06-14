import "./App.css";
import HomePage from "./pages/dashboard/component/homePage";
import Profiles from "./pages/dashboard/component/profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/page2" element={<Profiles />} />
          {/* <Route path = "/page3" element={<MensPage3/>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
