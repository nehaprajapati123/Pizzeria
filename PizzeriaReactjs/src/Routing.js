import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Pages/Nav";
import Home from "./Pages/HomePage";
import IngredientPage from "./Pages/IngredientPage";
import PizzaPage from "./Pages/PizzaPage";

function Routing()  {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="IngredientPage" element={<IngredientPage />} />
            <Route path="PizzaPage" element={<PizzaPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

export default Routing;