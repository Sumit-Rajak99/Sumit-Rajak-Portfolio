import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout.jsx";
import Home from "./Pages/Home.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;