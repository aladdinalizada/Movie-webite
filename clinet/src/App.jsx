import { Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import Header from "./layouts/header";
import Details from "./pages/details";
import Home from "./pages/home";

function App() {
  let { id } = useParams();
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details/>} />
      </Routes>
    </div>
  );
}

export default App;
