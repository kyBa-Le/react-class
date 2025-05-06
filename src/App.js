import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Calculate } from "./task/CalculateGrade";
import { MyForm } from "./task/Form";
import { OrderDrink } from "./task/Menu";
import { ShowProducts } from "./task/ProductList";
import { FormProduct } from "./task/FormProduct";
import { Nav } from "./task/Nav";
import { About } from "./task/About";
import { Contact } from "./task/Contact";


function App() {
  return (
    <>
    
      <Nav></Nav>
      <div style={{ height: "100px" }}></div>
      <Routes>
        <Route path="/product/add" Component={FormProduct}></Route>
        <Route path="/product/show" Component={ShowProducts}></Route>
        <Route path="/order" Component={OrderDrink}></Route>
        <Route path="/about" Component={About}></Route>
        <Route path="/contact" Component={Contact}></Route>
      </Routes>
    </>
  );
}

export default App;
