import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state)=>state.user.currentUser);
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />}> </Route>
      <Route path="/products/:category" element={<ProductList/>}> </Route>
      <Route path="/products/:id" element={<Product/>}> </Route>
      <Route path="/cart" element={<Cart/>}> </Route>
      <Route path="/success" element={<Success/>}> </Route>
      <Route path="/login" element={user? <Navigate replace to="/" /> : <Login/>}/>
      <Route path="/register" element={user? <Navigate replace to="/" /> : <Register/>}/>
    </Routes>
    </Router>
  );
}

export default App;
