import { BrowserRouter, Routes, Route } from "react-router-dom";
import App1 from "./components/App"
import { Counter } from "./components/Counter";
import { Nav } from "./components/Nav";
import { CalculateArea } from "./components/Area";

function App() {
  return (
    <>
      <BrowserRouter>
      <Nav></Nav>
        <Routes>
          <Route path="/" element={<App1></App1>}></Route>
          <Route path="/count" element={<Counter></Counter>}></Route>
          <Route path="/area" element={<CalculateArea></CalculateArea>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
