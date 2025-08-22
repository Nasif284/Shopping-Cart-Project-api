import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, Header,ProductDialogBox, } from "./Components/User";
import { Cart, Checkout, ForgotPassword, Home, Login, MyAccount, MyList, Orders, ProductDetails, ProductListing, Register, Verify } from "./Pages/User";
import toast, { Toaster } from "react-hot-toast";
import { AdminHeader, AdminSidebar } from './Components/Admin'
import {AddCategory, AddHomeSlides, AddProducts, AddSubCategory, AdminLogin, CategoryList, Dashboard, HomeSlides, Products, Users,AdminOrders, SubCategoryList, AddSize, BannersList1, BannersList2, AddBanner} from './Pages/Admin'
export const ProductContext = createContext();

function App() {
  const [role, setRole] = useState("user");
  const [open, setOpen] = useState(false);
  const [showSidebar,setShowSidebar]=useState(true)
  const openToast = (status, msg) => {
    if (status === "success") {
      toast.success(msg);
    } else {
      toast.error(msg);
    }
  };

  const values = {
    setOpen,
    openToast,
  };
  return (
    <>
      {role === "user" ? (
        <ProductContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/products/details" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<Register />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/password/forgot" element={<ForgotPassword />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/myAccount" element={<MyAccount />} />
            <Route path="/myList" element={<MyList />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
          <Toaster />
          <Footer />
          <ProductDialogBox open={open} setOpen={setOpen} />
        </ProductContext.Provider>
      ) : (
        <Routes>
          <Route path="/login" element={<AdminLogin />} />
          <Route
            path="/*"
            element={
              <section className="main">
                <AdminHeader setShow={setShowSidebar} show={showSidebar} />
                <div className="contentMain flex">
                  <div className={`sidebarWrapper transition-all duration-300 ${showSidebar ? "w-[18%]" : "w-[0px] overflow-hidden"}`}>
                    <AdminSidebar show={showSidebar} setShow={setShowSidebar} />
                  </div>
                  <div className={`rightContent transition-all duration-300 py-4 mt-[50px] px-5 ${showSidebar ? "w-[78%]" : "w-full"}`}>
                    <Routes>
                      <Route path="/" element={<Dashboard setShow={setShowSidebar} show={showSidebar} />} />
                      <Route path="/products" element={<Products />} />
                      <Route path="/products/add" element={<AddProducts />} />
                      <Route path="/products/size" element={<AddSize />} />
                      <Route path="/homeSlides" element={<HomeSlides />} />
                      <Route path="/homeSlides/add" element={<AddHomeSlides />} />
                      <Route path="/category/main/list" element={<CategoryList />} />
                      <Route path="/category/sub/list" element={<SubCategoryList />} />
                      <Route path="/category/main/add" element={<AddCategory />} />
                      <Route path="/category/sub/add" element={<AddSubCategory />} />
                      <Route path="/users" element={<Users />} />
                      <Route path="/orders" element={<AdminOrders />} />
                      <Route path="/banner1" element={<BannersList1 />} />
                      <Route path="/banner1/add" element={<AddBanner />} />
                      <Route path="/banner2" element={<BannersList2 />} />
                    </Routes>
                  </div>
                </div>
              </section>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
