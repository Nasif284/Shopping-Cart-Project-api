import Button from "@mui/material/Button";
import { IoBagCheckOutline } from "react-icons/io5";

const Cart = () => {
  return (
    <section className="py-5 ">
      <div className="container flex w-[80%] max-w-[80%] pb-10 gap-4">
        <div className="leftPart w-[75%] shadow-md rounded-md p-3 bg-white">
          <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.1)] mb-3">
            <h2>Your Cart</h2>
            <p className="!mt-0">
              There are <span className="font-bold text-primary">2</span> Items in your cart
            </p>
          </div>
          <CartItem />
        </div>
        <div className="w-[25%] rightPart">
          <div className="bg-white rounded-md shadow-md p-5">
            <h3>Cart Totals</h3>
            <div className="py-5">
              <p className="flex text-[14px] justify-between !m-0">
                Subtotal <span className=" font-bold text-primary">₹2,921.00</span>
              </p>
              <p className="flex justify-between !m-0">
                Shipping <span className=" font-bold">Free</span>
              </p>
              <p className="flex text-[14px] justify-between !m-0">
                Total <span className=" font-bold text-primary">₹2,921.00</span>
              </p>
            </div>
            <Button type="submit" className="!bg-primary w-full !mt-2 !text-white !text-[14px] !py-2 flex gap-2  hover:!bg-[rgba(0,0,0,0.8)] !font-[600]">
              <IoBagCheckOutline className="text-[16px]" />
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
