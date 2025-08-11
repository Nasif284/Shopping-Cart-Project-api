import Button from '@mui/material/Button'
import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { IoBagCheckOutline } from 'react-icons/io5'
import Radio from "@mui/material/Radio";
import { Link } from 'react-router-dom';
const Checkout = () => {
  return (
    <section className="py-5 ">
      <div className="container flex w-[60%] max-w-[80%] pb-10 gap-4">
        <div className="w-[75%]">
          <div className="leftPart w-full shadow-md rounded-md p-3 px-5 bg-white">
            <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.1)] mb-3">
              <div className="head flex items-center justify-between">
                <h2>Select Delivery Address</h2>
                <Button className="!bg-primary !px-3 !mt-2 !text-white !text-[14px] !py-2 flex gap-2  hover:!bg-[rgba(0,0,0,0.8)] !font-[600]">
                  <FaPlus />
                  Add new address
                </Button>
              </div>
            </div>
            <div className="card py-3 bg-[#FFF2F2] shadow-md rounded-md flex">
              <div className="px-3">
                <Radio defaultChecked />
              </div>
              <div className="address">
                <span className=" bg-[#f1f1f1] text-[13px] rounded-md py-1 px-2 font-[600] cursor-pointer ">Home</span>
                <div className='mt-2'>
                  <h1>Muhammad Nasif</h1>
                  <p className="!mt-1">fdsaf (h), fdedika, padf po fadsf India fsda dsf + 915646541654</p>
                  <p>
                    <span className="font-[500]">Phone:</span> +915646541654
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="leftPart w-full shadow-md mt-2 rounded-md p-3 px-5 bg-white">
            <h2>Apply coupen</h2>
            <div className="py-3 bg-[#FFF2F2] shadow-md rounded-md p-2 mt-2">
              <input type="text" className="w-full outline-none border-0" placeholder="Enter Coupen Code" />
            </div>
            <Link className="link text-[12px] font-[400] mt-1">View Coupens</Link>
          </div>
        </div>

        <div className="w-[40%] rightPart">
          <div className="bg-white rounded-md shadow-md p-5">
            <div className="py-2 border-b border-[rgba(0,0,0,0.1)]">
              <h3>Your Order</h3>
            </div>
            <div className="py-2 flex justify-between border-b border-[rgba(0,0,0,0.1)]">
              <h5 className="text-[14px]">Items</h5>
              <h5 className="text-[14px]">Price</h5>
            </div>
            <div className="items max-h-[200px] overflow-y-scroll">
              <div className="product  border-b border-[rgba(0,0,0,0.1)] py-2 flex items-center justify-between">
                <div className="col1 flex gap-2">
                  <div className="imgWrapper h-[50px] w-[50px] rounded-md overflow-hidden">
                    <img className="w-full" src="https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg" alt="" />
                  </div>
                  <div className="h-[45px] overflow-hidden">
                    <p className="font-[600] !m-0 overflow-hidden h-[23px]">Men Alias-N Regular Fit Spread </p>
                    <p className="!m-0 !text-[12px]">Qty: 1</p>
                  </div>
                </div>
                <p>$5678</p>
              </div>
              <div className="product  border-b border-[rgba(0,0,0,0.1)] py-2 flex items-center justify-between">
                <div className="col1 flex gap-2">
                  <div className="imgWrapper h-[50px] w-[50px] rounded-md overflow-hidden">
                    <img className="w-full" src="https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg" alt="" />
                  </div>
                  <div className="h-[45px] overflow-hidden">
                    <p className="font-[600] !m-0 overflow-hidden h-[23px]">Men Alias-N Regular Fit Spread </p>
                    <p className="!m-0 !text-[12px]">Qty: 1</p>
                  </div>
                </div>
                <p>$5678</p>
              </div>
              <div className="product  border-b border-[rgba(0,0,0,0.1)] py-2 flex items-center justify-between">
                <div className="col1 flex gap-2">
                  <div className="imgWrapper h-[50px] w-[50px] rounded-md overflow-hidden">
                    <img className="w-full" src="https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg" alt="" />
                  </div>
                  <div className="h-[45px] overflow-hidden">
                    <p className="font-[600] !m-0 overflow-hidden h-[23px]">Men Alias-N Regular Fit Spread </p>
                    <p className="!m-0 !text-[12px]">Qty: 1</p>
                  </div>
                </div>
                <p>$5678</p>
              </div>
              <div className="product  border-b border-[rgba(0,0,0,0.1)] py-2 flex items-center justify-between">
                <div className="col1 flex gap-2">
                  <div className="imgWrapper h-[50px] w-[50px] rounded-md overflow-hidden">
                    <img className="w-full" src="https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg" alt="" />
                  </div>
                  <div className="h-[45px] overflow-hidden">
                    <p className="font-[600] !m-0 overflow-hidden h-[23px]">Men Alias-N Regular Fit Spread </p>
                    <p className="!m-0 !text-[12px]">Qty: 1</p>
                  </div>
                </div>
                <p>$5678</p>
              </div>
              <div className="product  border-b border-[rgba(0,0,0,0.1)] py-2 flex items-center justify-between">
                <div className="col1 flex gap-2">
                  <div className="imgWrapper h-[50px] w-[50px] rounded-md overflow-hidden">
                    <img className="w-full" src="https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg" alt="" />
                  </div>
                  <div className="h-[45px] overflow-hidden">
                    <p className="font-[600] !m-0 overflow-hidden h-[23px]">Men Alias-N Regular Fit Spread </p>
                    <p className="!m-0 !text-[12px]">Qty: 1</p>
                  </div>
                </div>
                <p>$5678</p>
              </div>
            </div>
            <div className="border-b border-[rgba(0,0,0,0.1)] py-3">
              <div className="py-1 flex justify-between">
                <p className="font-[600] text-[14px] !m-0">Total Price</p>
                <p className="!m-0">$3344</p>
              </div>
              <div className="py-1 flex justify-between">
                <p className="font-[600] text-[14px] !m-0">Total Discount</p>
                <p className="!m-0">-$3344</p>
              </div>
              <div className="py-1 flex justify-between">
                <p className="font-[600] text-[14px] !m-0">Coupen Applied</p>
                <p className="!m-0">-$456</p>
              </div>
              <div className="py-1 flex justify-between">
                <p className="font-[600] text-[14px] !m-0">Shipping fee</p>
                <p className="!m-0">Free</p>
              </div>
            </div>
            <div className="py-3 flex justify-between">
              <p className="font-[600] text-[14px] !m-0">Total Amount</p>
              <p className="!m-0 font-[600]">$3344</p>
            </div>

            <Button type="submit" className="!bg-primary w-full !mt-2 !text-white !text-[14px] !py-2 flex gap-2  hover:!bg-[rgba(0,0,0,0.8)] !font-[500]">
              <IoBagCheckOutline className="text-[16px]" />
              Razorpay
            </Button>
            <Button type="submit" className="!bg-black w-full !mt-2 !text-white !text-[14px] !py-2 flex gap-2  hover:!bg-[rgba(0,0,0,0.8)] !font-[500]">
              <IoBagCheckOutline className="text-[16px]" />
              Paypal
            </Button>
            <Button type="submit" className="!bg-primary w-full !mt-2 !text-white !text-[14px] !py-2 flex gap-2  hover:!bg-[rgba(0,0,0,0.8)] !font-[500]">
              <IoBagCheckOutline className="text-[16px]" />
              Pay with Valet
            </Button>
            <Button type="submit" className="!bg-black w-full !mt-2 !text-white !text-[14px] !py-2 flex gap-2  hover:!bg-[rgba(0,0,0,0.8)] !font-[500]">
              <IoBagCheckOutline className="text-[16px]" />
              Cash on Delivery
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout