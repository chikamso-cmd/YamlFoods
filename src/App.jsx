import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./Layout/Layout";

// cart-&-checkout
import CartPage from "./cart-&-checkout/Cart";
import Checkout from "./cart-&-checkout/Checkout";
import ProductDetails from "./cart-&-checkout/productdetails";
import ReviewOrder from "./cart-&-checkout/ReviewOrder";
import PaymentPage from "./cart-&-checkout/PaymentPage";
import Successfulpayment from "./cart-&-checkout/Successfulpayment";

// Auth
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

// Components / Modals
import Selectoptions from "./modals/Selectoptions";
import ScrollToTop from "./components/ScrollTotop";

// Seller-dashboard
import Overview from "./Seller-dashboard/Overview";
import MyOrders from "./Seller-dashboard/MyOrders";
import LayoutForSellers from "./dashboardlayout/LayoutForSeller";
import ViewOrder from "./Seller-dashboard/ViewOrder";
import Addresses from "./Seller-dashboard/Addresses";
import AccountSettings from "./Seller-dashboard/AccountSettings";

// Storekeeperdashboard-layout
import LayoutForStoreKeeper from "./Storekeeperdashboard-layout/LayoutForStoreKeeper";

// Storekeeper-Dashboard
import DashboardOverview from "./Storekeeper-Dashboard/DashboardOverview";
import Orders from "./Storekeeper-Dashboard/Orders";
import ViewOrders from "./Storekeeper-Dashboard/ViewOrders";
import InventoryDashboard from "./Storekeeper-Dashboard/ProductManagement";
import AddProduct from "./Storekeeper-Dashboard/AddProducts";
import ProductInventory from "./Storekeeper-Dashboard/AddBulkProduct";
import AddBulkProduct from "./Storekeeper-Dashboard/AddProductVariant";
import AddProductBulk from "./Storekeeper-Dashboard/BulkProducts";

// Dashboard-component
import ProductCard from "./Storekeeper-Dashboard/Dashboard-component/ProductCard";
//settings-component
import Settings from "./settings/Settings";
import ProfileSettingsScreen from "./settings/componentts/ProfileSettings";
import StoreInformationScreen from "./settings/componentts/StoreInformation";
import ProductPreferenceScreen from "./settings/componentts/ProductPreference";
import OrderManagement from "./settings/componentts/OrderManagement";
import NotificationSettings from "./settings/componentts/NotificationSettings";
import SecuritySettings from "./settings/componentts/SecuritySettings";
import SupportSettings from "./settings/componentts/CustomerSupport";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";








function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      disable: false,
    });
  }, []);

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
        <Route path="/productcard" element={<ProductCard />} />

        {/* Seller dashboard layout */}
        <Route path="/seller" element={<LayoutForSellers />}>
          <Route path="overview" element={<Overview />} />
          <Route path="my-orders" element={<MyOrders />} />
          <Route path="view-orders" element={<ViewOrder />} />
          <Route path="view-address" element={<Addresses />} />
          <Route path="account-settings" element={<AccountSettings />} />
        </Route>

        {/* Storekeeper dashboard */}
        <Route path="/storekeeper" element={<LayoutForStoreKeeper />}>
          <Route path="store-overview" element={<DashboardOverview />} />
          <Route path="my-orders" element={<Orders />} />
          <Route path="my-orders/view-orders" element={<ViewOrders />} />
          <Route path="product-management" element={<InventoryDashboard />} />

          {/* Bulk products */}
          <Route
            path="product-management/bulk-product"
            element={<ProductInventory />}
          />
          <Route
            path="product-management/add-variants"
            element={<AddBulkProduct />}
          />
          <Route
            path="product-management/bulkadd"
            element={<AddProductBulk />}
          />
          <Route
            path="product-management/add-product"
            element={<AddProduct />}
          />

          {/* settings */}
          <Route path='settings' element={<Settings />}/>
          <Route path='settings/profile-settings' element={<ProfileSettingsScreen />}/>
          <Route path='settings/store-information' element={<StoreInformationScreen />}/>
          <Route path='settings/product-preference' element={<ProductPreferenceScreen />}/>
          <Route path='settings/order-management' element={<OrderManagement />}/>
          <Route path='settings/notification-settings' element={<NotificationSettings />}/>
          <Route path='settings/security-settings' element={<SecuritySettings />}/>
          <Route path='settings/customer-support' element={<SupportSettings />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
