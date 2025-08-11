import React from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturn } from "react-icons/pi";
import { BsWallet2 } from "react-icons/bs";
import { AiOutlineGift } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { IoChatboxOutline } from "react-icons/io5";
import Button from '@mui/material/Button';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FaFacebookF } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { foooterImg } from '../assets';
const Footer = () => {
    return (
      <>
        <footer className="py-6 bg-[#fdfdfd]">
          <div className="container">
            <div className="flex items-center justify-center gap-2 py-8  ">
              <div className="col flex flex-col items-center group w-[15%] ">
                <LiaShippingFastSolid className="text-[50px] group-hover:text-primary duration-300 group-hover:-translate-y-1" />
                <h3 className="text-[16px] font-[600] mt-3">Free Shipping</h3>
                <p className="text-[12px] font-[500] mt-2">For all Orders Over $100</p>
              </div>
              <div className="col flex flex-col items-center group w-[15%] ">
                <PiKeyReturn className="text-[50px] group-hover:text-primary duration-300 group-hover:-translate-y-1" />
                <h3 className="text-[16px] font-[600] mt-3">30 Days Returns</h3>
                <p className="text-[12px] font-[500] mt-2">For an Exchange Product</p>
              </div>
              <div className="col flex flex-col items-center group w-[15%] ">
                <BsWallet2 className="text-[50px] group-hover:text-primary duration-300 group-hover:-translate-y-1" />
                <h3 className="text-[16px] font-[600] mt-3">Secured Payment</h3>
                <p className="text-[12px] font-[500] mt-2">Payment Cards Accepted</p>
              </div>
              <div className="col flex flex-col items-center group w-[15%] ">
                <AiOutlineGift className="text-[50px] group-hover:text-primary duration-300 group-hover:-translate-y-1" />
                <h3 className="text-[16px] font-[600] mt-3">Special Gifts</h3>
                <p className="text-[12px] font-[500] mt-2">Our First Product Order</p>
              </div>
              <div className="col flex flex-col items-center group w-[15%] ">
                <BiSupport className="text-[50px] group-hover:text-primary duration-300 group-hover:-translate-y-1" />
                <h3 className="text-[16px] font-[600] mt-3">Support 24/7</h3>
                <p className="text-[12px] font-[500] mt-2">Contact us Anytime</p>
              </div>
            </div>
            <br />
            <hr className="text-[rgba(0,0,0,0.1)]" />
            <br />
            <div className="footer flex  py-8">
              <div className="part1 w-[25%] border-r border-[rgba(0,0,0,0.1)]">
                <h2 className="text-[20px] font-[600] mb-4">Contact us</h2>
                <p className="text-[13px] font-[400] pb-4">
                  Classyshop - Mega Super Store <br /> 507-Union Trade Centre France
                </p>
                <Link className="link block w-full text-[13px]" to="mailto:sale">
                  sales@yourcompany.com
                </Link>
                <span className="text-[22px] block w-full font-[600] mt-3 mb-5 text-primary">(+91) 9876-543-210</span>
                <div className="flex items-center gap-2">
                  <IoChatboxOutline className="text-[40px] text-primary" />
                  <span className="text-[16px] font-[600]">
                    Online Chat <br />
                    Get Expert Help
                  </span>
                </div>
              </div>
              <div className="part2 pl-8 flex  w-[40%]">
                <div className="cal1 w-[50%]">
                  <h2 className="text-[20px] font-[600] mb-4">Products</h2>
                  <ul className="list ">
                    <li>
                      <Link className="link w-full mb-2 text-[13px]">Prices drop</Link>
                    </li>

                    <li>
                      <Link className="link mb-2 text-[13px]">New products</Link>
                    </li>
                    <li>
                      <Link className="link mb-2 text-[13px]">Best sales</Link>
                    </li>
                    <li>
                      <Link className="link mb-2 text-[13px]">Contact us</Link>
                    </li>
                    <li>
                      <Link className="link  mb-2 text-[13px]">Sitemap</Link>
                    </li>
                    <li>
                      <Link className="link mb-2 text-[13px]">Stores</Link>
                    </li>
                  </ul>
                </div>
                <div className="cal2 w-[50%]">
                  <h2 className="text-[20px] font-[600] mb-4">Our company</h2>
                  <ul className="list ">
                    <li>
                      <Link className="link w-full mb-2 text-[13px]">Delivery</Link>
                    </li>

                    <li>
                      <Link className="link mb-2 text-[13px]">Legal Notice</Link>
                    </li>
                    <li>
                      <Link className="link mb-2 text-[13px]">Terms and conditions of use</Link>
                    </li>
                    <li>
                      <Link className="link mb-2 text-[13px]">About us</Link>
                    </li>
                    <li>
                      <Link className="link  mb-2 text-[13px]">Secure payment</Link>
                    </li>
                    <li>
                      <Link className="link mb-2 text-[13px]">Login</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="part3 w-[35%]  pl-8 flex flex-col pr-8">
                <h2 className="text-[20px] font-[600] mb-4">Subscribe to newsletter</h2>
                <p className="text-[13px]">Subscribe to our latest newsletter to get news about special discounts.</p>
                <form action="" className="mt-5">
                  <input type="text" placeholder="Enter Your Email" className="w-full outline-none border border-[rgba(0,0,0,0.2)] h-[45px] px-4 rounded-sm" />
                  <Button className="!mt-4 !bg-primary !text-white !px-5  py-4">SUBSCRIBE</Button>
                  <FormControlLabel className="mt-2" control={<Checkbox defaultChecked />} label="I agree to the terms and conditions and the privacy policy" />
                </form>
              </div>
            </div>
          </div>
        </footer>
        <div className="bottom-strip py-3 bg-white border-t border-[rgba(0,0,0,0.2)]">
          <div className="container flex items-center justify-between">
            <ul className="flex gap-2">
              <li>
                <Link className="flex items-center justify-center w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.2)] group hover:bg-primary transition-all" target="_blank" to="/">
                  <FaFacebookF className=' group-hover:text-white transition-all' />
                </Link>
              </li>
              <li>
                <Link className="flex items-center justify-center w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.2)] group hover:bg-primary transition-all" target="_blank" to="/">
                  <FiYoutube className=' group-hover:text-white transition-all' />
                </Link>
              </li>
              <li>
                <Link className="flex items-center justify-center w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.2)] group hover:bg-primary transition-all" target="_blank" to="/">
                  <FaPinterestP className=' group-hover:text-white transition-all' />
                </Link>
              </li>
              <li>
                <Link className="flex items-center justify-center w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.2)] group hover:bg-primary transition-all" target="_blank" to="/">
                  <FaInstagram className=' group-hover:text-white transition-all' />
                </Link>
              </li>
            </ul>
                    <p className='text-[12px]'>© 2024 - Shopping Cart Website By Muhammad Nasif</p>
                   <img src={foooterImg} alt="" />
          </div>
        </div>
      </>
    );
}

export default Footer