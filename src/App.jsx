import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout/Layout";
import CartPage from "./cart & checkout/Cart";
import Checkout from "./cart & checkout/Checkout";
import ProductDetails from "./cart & checkout/productdetails";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Productdetails"element={<ProductDetails />}/>
          </Route>
          <Route path="/Cart" element={<CartPage />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
