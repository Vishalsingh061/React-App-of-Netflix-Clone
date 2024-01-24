import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import Header from "./components/Header/Headers"

function App() {
  return <Router>
    <Header/>
    <Routes>
      <Route exact path='/' element={<Home />} />
    </Routes>
  </Router>
}

export default App;
