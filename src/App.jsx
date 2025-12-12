import HomePage from "./Features/Home/Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";

function App() {
  return (
    <>
   
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
