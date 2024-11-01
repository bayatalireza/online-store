import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import Shop from "./pages/shop/Shop";
import Nav from "./component/Nav";
import { ShopContextProvider } from "./context/ShopContext";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
