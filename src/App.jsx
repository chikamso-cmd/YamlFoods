import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout/Layout";
import CartPage from "./cart & checkout/Cart";
import Checkout from "./cart & checkout/Checkout";
import ProductDetails from "./cart & checkout/productdetails";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Selectoptions from "./modals/Selectoptions";
import ScrollToTop from "./components/ScrollTotop";
import ReviewOrder from "./cart & checkout/ReviewOrder";
import PaymentPage from "./cart & checkout/PaymentPage";
import Overview from "./Seller dashboard/Overview";
import MyOrders from "./Seller dashboard/MyOrders";
import LayoutForSellers from "./dashboardlayout/LayoutForSeller";
import ViewOrder from "./Seller dashboard/ViewOrder";
import Addresses from "./Seller dashboard/Addresses";
import AccountSettings from "./Seller dashboard/AccountSettings";
import Successfulpayment from "./cart & checkout/Successfulpayment";
import LayoutForStoreKeeper from "./Storekeeperdashboard layout/LayoutForStoreKeeper";
import DashboardOverview from "./Storekeeper Dashboard/DashboardOverview";
import Orders from "./Storekeeper Dashboard/Orders";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Public layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Productdetails" element={<ProductDetails />} />
        </Route>

        {/* Standalone routes */}
        <Route path="/Cart" element={<CartPage />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Selectoptions" element={<Selectoptions />} />
        <Route path="/ReviewOrder" element={<ReviewOrder />} />
        <Route path="/PaymentPage" element={<PaymentPage />} />
        <Route path="/Successfulpayment" element={<Successfulpayment />} />
        {/* <Route path="/storekeeper" element={<LayoutForStoreKeeper />}></Route> */}

        {/* Seller dashboard layout */}
        <Route path="/seller" element={<LayoutForSellers />}>
          <Route path="overview" element={<Overview />} />
          <Route path="my-orders" element={<MyOrders />} />
          <Route path="view-orders" element={<ViewOrder />} />
          <Route path="view-address" element={<Addresses />} />
          <Route path="account-settings" element={<AccountSettings />} />
        </Route>

        {/* storekeeper dashboard routes */}
        <Route path="/storekeeper" element={<LayoutForStoreKeeper />}>
        <Route path="store-overview" element={<DashboardOverview />} />
        <Route path="my-orders" element={<Orders />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
