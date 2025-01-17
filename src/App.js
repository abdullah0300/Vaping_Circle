import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Main_Component/Home";
import FlavourPage from "./Sub_Component/Retail/Flavour/FlavourPage";
import CategoryPage from "./Sub_Component/Retail/Category/CategoryPage";
import Footer from "./Sub_Component/Retail/Footer";
import Fixed_Component from "./Sub_Component/Retail/Fixed_Component";
import ProfilePage from "./Sub_Component/Retail/ProfilePage";
import Register from "./Sub_Component/Retail/Register";
import Login from "./Sub_Component/Retail/Login";
import CartPage from "./Sub_Component/Retail/CartPage";
import Checkout from "./Sub_Component/Retail/Checkout";
import ProductPage from "./Sub_Component/Retail/Product/ProductPage";
import ProductDetails from "./Sub_Component/Retail/Product/ProductDetails";
// import FlavourPageW from "./Sub_Component/WholeSale/FlavourW/FlavourPageW";
import ScrollToTop from "./ScrollToTop";
import VapesDeal from "./Sub_Component/Retail/VapesDeal";
import Setting from "./Sub_Component/Retail/Setting";
import MyOrder from "./Sub_Component/Retail/MyOrder";
import AboutUs from "./Sub_Component/Retail/StaticPages/AboutUs";
import Term_Conditions from "./Sub_Component/Retail/StaticPages/Term_Conditions";
import Return_Policy from "./Sub_Component/Retail/StaticPages/Return_Policy";
import Age_varification from "./Sub_Component/Retail/StaticPages/Age_varification";
import Privacy_Policy from "./Sub_Component/Retail/StaticPages/Privacy_Policy";
import Compliance from "./Sub_Component/Retail/StaticPages/Compliance";
import axios from "axios";
import { apiUrl } from "./data/env";

const App = () => {
  const [products, setProducts] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [filters, setFilters] = React.useState([]);
  const [currentCategory, setCurrentCategory] = React.useState("");

  const [currentProductId, setCurrentProductId] = React.useState("");

  React.useEffect(() => {
    axios
      .get(`${apiUrl}/api/v1/category?sort=priority`)
      .then((res) => setCategories(res.data.data))
      .catch((err) => console.log(err));

    axios
      .get(`${apiUrl}/api/v1/filter?sort=priority`)
      .then((res) => setFilters(res.data.data))
      .catch((err) => console.error(err));

    axios
      .get(`${apiUrl}/api/v1/product`)
      .then((res) => setProducts(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <BrowserRouter>
        {/* <Fixed_Component /> */}
        <ScrollToTop>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  setCurrentCategory={setCurrentCategory}
                  categories={categories}
                  setCategories={setCategories}
                  filters={filters}
                />
              }
            />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/profilePage"
              element={
                <ProfilePage categories={categories} filters={filters} />
              }
            />
            <Route
              path="/setting"
              element={<Setting categories={categories} filters={filters} />}
            />
            <Route
              path="/myOrder"
              element={<MyOrder categories={categories} filters={filters} />}
            />
            <Route
              path="/vapedeals"
              element={<VapesDeal categories={categories} filters={filters} />}
            />
            <Route
              path="/flavour_page"
              element={
                <FlavourPage categories={categories} filters={filters} />
              }
            />
            <Route
              path="/category_page"
              element={
                <CategoryPage
                  setCurrentCategory={setCurrentCategory}
                  categories={categories}
                  filters={filters}
                />
              }
            />
            <Route
              path="/productPage/:categoryId/:currentCategoryName"
              element={
                <ProductPage
                  products={products}
                  currentCategory={currentCategory}
                  categories={categories}
                  filters={filters}
                  setCurrentProductId={setCurrentProductId}
                />
              }
            />
            <Route
              path="/productDetails/:currentProdId"
              element={
                <ProductDetails
                  currentProductId={currentProductId}
                  products={products}
                  categories={categories}
                  filters={filters}
                />
              }
            />
            <Route path="/cartView" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route
              path="/aboutus"
              element={<AboutUs categories={categories} filters={filters} />}
            />
            <Route path="/term_conditions" element={<Term_Conditions />} />
            <Route path="/age_varification" element={<Age_varification />} />
            <Route path="/privacy_policy" element={<Privacy_Policy />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/return_policy" element={<Return_Policy />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
};

export default App;
