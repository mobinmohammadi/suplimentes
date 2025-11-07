import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OnsPageProducts from "./assets/Components/OnsPageProducts/OnsPageProducts.jsx";
import FilterBrands from "./Pages/FilterBrands/FilterBrands.jsx";
import CategurtByProducts from "./Pages/CategurtByProducts/CategurtByProducts.jsx";
import { CartProvider } from "./assets/Context/CartContext.jsx";
import NotFoundPage from "./Pages//NotFoundPage/NotFoundPage.jsx";
import { ToastContainer } from "react-toastify";
import PurchaseProcessCart from "./Pages/PurchaseProcessCart/PurchaseProcessCart.jsx";
import TheSeconedStepOfTheShoppingCart from "./assets/Components/PurchaseProcessCart/TheSeconedStepOfTheShoppingCart/TheSeconedStepOfTheShoppingCart.jsx";
import Panel from "./Pages/Panel/Panel.jsx";
import Login from "./Pages/Login/Login.jsx";
import TheMonyStepOfTheShoppingCart from "./assets/Components/PurchaseProcessCart/TheMonyStepOfTheShoppingCart/TheMonyStepOfTheShoppingCart.jsx";
import TheFirstStepOfTheShoppingCart from "./assets/Components/PurchaseProcessCart/TheFirstStepOfTheShoppingCart/TheFirstStepOfTheShoppingCart.jsx";
import ContactUs from "./Pages/ContactUs/ContactUs.jsx";
import Articles from "./Pages/Articles/Articles.jsx";
import EmptyBasket from "./Pages/EmptyBasket/EmptyBasket.jsx";
import SuccusPayCart from "./assets/Components/PurchaseProcessCart/SuccussPayCart/SuccussPayCart.jsx";
import Compare from "./Pages/Compare/Compare.jsx";
import { ProviderComparse } from "./assets/Context/ComparseContext/ComparseContext.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <ProviderComparse>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/onspageproduct/:ProductID"
            element={<OnsPageProducts />}
          />
          <Route path="/productsBrand/:BrandName" element={<FilterBrands />} />
          <Route
            path="/categuryByProducts/:categuryProduct"
            element={<CategurtByProducts />}
          />
          <Route path="/cart" element={<PurchaseProcessCart />}>
            <Route index element={<TheFirstStepOfTheShoppingCart />} />
            <Route
              path="billingaddress"
              element={<TheSeconedStepOfTheShoppingCart />}
            />
            <Route
              path="billingaddress/mony"
              element={<TheMonyStepOfTheShoppingCart />}
            />
            <Route
              path="billingaddress/mony/successPay"
              element={<SuccusPayCart />}
            />
          </Route>
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/Articles" element={<Articles />} />

          <Route path="/Compare" element={<Compare />} />
          <Route path="/login" element={<Login />} />
          <Route path="/EmptyBasket" element={<EmptyBasket />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ProviderComparse>
    </CartProvider>
    <ToastContainer autoClose={2000} position="top-left" />
    <Toaster position="center-center" />
  </BrowserRouter>
);
