//  short cut rafce   REACT ARROW FUNCTION EXPORT COMPONENT
import GlobalStyle from "./components/styles/GlobalStyle";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//! Router V6!!!
// in Products categories we can add instead of categories ( ex all,women ,blue, xl)
//  !Product example http://localhost:3000/product/hjsjskhjskhks
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
