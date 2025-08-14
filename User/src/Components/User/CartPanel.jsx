import Drawer from "@mui/material/Drawer";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import Button from "@mui/material/Button";
const CartPanel = ({ open, setOpen }) => {
  return (
    <Drawer className="cartPanel" anchor="right" open={open} onClose={() => setOpen(false)}>
      <div className="flex items-center justify-between py-3 px-4 gap-3 border-b border-[rgba(0,0,0,0.1)]">
        <h1>Shopping Cart (1)</h1>
        <IoMdClose className="cursor-pointer text-[20px]" onClick={() => setOpen(false)} />
      </div>
      <div className="drawerMain flex flex-col justify-between h-full">
        <div className="scroll w-full max-h-[435px] overflow-y-scroll overflow-x-hidden py-3 px-4  ">
          <div className="cartItem w-full flex items-center gap-4 border-b mb-4 border-[rgba(0,0,0,0.1)] pb-3">
            <div className="img w-[25%] h-[80px] rounded-md overflow-hidden">
              <img src="https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg" className="w-full" alt="" />
            </div>
            <div className="info w-[75%] pr-5 relative">
              <Link className="link">
                <h4 className="text-[15px] font-[500]">Men Alias-N Regular Fit Spread Collar</h4>
              </Link>
              <p className="flex items-center gap-5 mb-2">
                <span>Qty: 2</span>
                <span className="text-primary font-bold text-[14px]">Price : $23</span>
              </p>
              <MdDeleteOutline className="absolute !text-[20px] link top-[5px] right-[10px]" />
            </div>
          </div>
          <div className="cartItem w-full flex items-center gap-4 border-b mb-4 border-[rgba(0,0,0,0.1)] pb-3">
            <div className="img w-[25%] h-[80px] rounded-md overflow-hidden">
              <img src="https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg" className="w-full" alt="" />
            </div>
            <div className="info w-[75%] pr-5 relative">
              <Link className="link">
                <h4 className="text-[15px] font-[500]">Men Alias-N Regular Fit Spread Collar</h4>
              </Link>
              <p className="flex items-center gap-5 mb-2">
                <span>Qty: 2</span>
                <span className="text-primary font-bold text-[14px]">Price : $23</span>
              </p>
              <MdDeleteOutline className="absolute !text-[20px] link top-[5px] right-[10px]" />
            </div>
          </div>
        </div>

        <div className="bottom-info py-3  px-4 w-full border-t border-[rgba(0,0,0,0.1)]">
          <div className="flex items-center justify-between border-b border-[rgba(0,0,0,0.1)]">
            <p className="font-[600] !text-[15px]">Items (2)</p>
            <p className="text-primary font-bold">₹2999.00</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-[600] !text-[15px]">Total (tax excl.)</p>
            <p className="text-primary font-bold">₹2,921.00</p>
          </div>
          <div className="flex w-full gap-2 mt-3">
            <Button className="!bg-primary !rounded-md !text-white w-[50%] !font-[500]">View Cart</Button>
            <Button className="!bg-white  !rounded-md !text-primary !border-2 border-primary  w-[50%] !font-[500]">Checkout</Button>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default CartPanel;
