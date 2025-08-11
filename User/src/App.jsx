import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, Header, ProductDetailsComponent, ProductZoom } from "./Components";
import { Cart, Checkout, ForgotPassword, Home, Login, MyAccount, MyList, ProductDetails, ProductListing, Register, Verify } from "./Pages";
import { IoMdClose } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";


export const ProductContext = createContext();

function App() {

  const [open, setOpen] = useState(false);
  const openToast = (status,msg) => {
    if (status === "success") {
    toast.success(msg)
    } else {
      toast.error(msg)
  }} ;
  const handleClose = () => {
    setOpen(false);
  };
  const values = {
    setOpen,
    openToast 
  }

  return (
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
      </Routes>
      <Toaster />
      <Footer />
      <Dialog fullWidth={true} maxWidth={"lg"} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogContent>
          <div className="flex items-center w-full relative">
            <div className="col1 w-[40%]">
              <ProductZoom />
            </div>
            <div className="col2 w-[60%] pl-10 pr-7">
              <ProductDetailsComponent />
            </div>
            <Button onClick={handleClose} className="!absolute !top-0 !right-0 !rounded-full w-[40px] h-[40px] !min-w-[40px] !text-[rgba(0,0,0,0.7)]">
              <IoMdClose className="text-[25px]" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </ProductContext.Provider>
  );
}

export default App;
