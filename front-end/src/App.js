import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import New from "./pages/New";
import Home from "./pages/Home";
import SnackIndex from "./pages/SnackIndex";
import Show from "./pages/Show";
import Edit from "./pages/Edit";



function App() {
   return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/snacks" element={<SnackIndex />} />
          <Route path="/snacks/new" element={<New />} />
          <Route path="/snacks/:id" element={<Show />} />
          <Route path="/snacks/:id/edit" element={<Edit />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
