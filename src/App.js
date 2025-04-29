import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Calculate } from "./task/CalculateGrade";
import { MyForm } from "./task/Form";
import { OrderDrink } from "./task/Menu";
import { ShowProducts } from "./task/ProductList";
import { FormProduct } from "./task/FormProduct";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/product/add" Component={FormProduct}></Route>
          <Route path="/product/show" Component={ShowProducts}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
