import React from 'react'
import { DashBoxes } from '../Components'
import { Button } from '@mui/material';
import { FaPlus } from "react-icons/fa6";
import { dashbordImg } from '../assets';
import { MdOutlineModeEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import Pagination from "@mui/material/Pagination";
import Checkbox from "@mui/material/Checkbox";
const Dashboard = () => {
  return (
    <>
      <div className="w-full p-5 border-1 rounded-md border-[rgba(0,0,0,0.1)] flex items-center gap-5 mb-5 bg-sky-100 justify-between">
        <div className="col1 w-60%">
          <h2 className="text-[30px] font-[700] leading-10 mb-3">
            Welcome, <br />
            <span className="text-[33px] font-[700] text-blue-500">Muhammad Nasif</span>
          </h2>
          <p>Here’s What happening on your store today. See the statistics at once.</p>
          <Button className="!flex !bg-blue-500 !text-white !font-[600] !capitalize !px-5 !gap-3 !mt-4">
            <FaPlus />
            Add Products
          </Button>
        </div>
        <div className="col2 ">
          <img src={dashbordImg} className="w-[220px]" alt="" />
        </div>
      </div>
      <DashBoxes />

      <div className="table my-4 w-full shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between p-5">
          <h2 className="text-[18px] font-[600]">Top Selling Products</h2>
        </div>
        <div class="relative overflow-x-auto ">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Product name
                </th>
                <th scope="col" class="px-6 py-3">
                  Category
                </th>
                <th scope="col" class="px-6 py-3">
                  Total quantity sold
                </th>
                <th scope="col" class="px-6 py-3">
                  Total Revanue
                </th>
                <th scope="col" class="px-6 py-3">
                  Order Count
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">Electronics</td>
                <td class="px-6 py-4">1234</td>
                <td class="px-6 py-4">$2999</td>
                <td class="px-6 py-4">999</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full flex items-center justify-center py-5">
          <Pagination count={10} color="primary" />
        </div>
      </div>
      <div className="table my-4 w-full shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between p-5">
          <h2 className="text-[18px] font-[600]">Top Selling Categories </h2>
        </div>
        <div class="relative overflow-x-auto ">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Category
                </th>
                <th scope="col" class="px-6 py-3">
                  Total quantity Sold
                </th>
                <th scope="col" class="px-6 py-3">
                  Total Revanue
                </th>
                <th scope="col" class="px-6 py-3">
                  Order Count
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Fashion
                </th>
                <td class="px-6 py-4">450</td>
                <td class="px-6 py-4">$2999</td>
                <td class="px-6 py-4">250</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full flex items-center justify-center py-5">
          <Pagination count={10} color="primary" />
        </div>
      </div>
      <div className="table my-4 w-full shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between p-5">
          <h2 className="text-[18px] font-[600]">All Products </h2>
        </div>
        <div class="relative overflow-x-auto ">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="pl-2 py-3">
                  <Checkbox size="small" />
                </th>
                <th scope="col" class="px-6 py-3">
                  Product Id
                </th>
                <th scope="col" class="px-6 py-3">
                  Product Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Category
                </th>
                <th scope="col" class="px-6 py-3">
                  Price
                </th>
                <th scope="col" class="px-6 py-3">
                  Sales
                </th>
                <th scope="col" class="px-6 py-3">
                  Stock
                </th>
                <th scope="col" class="px-6 py-3">
                  Offer %
                </th>
                <th scope="col" class="px-6 py-3">
                  Add Offer
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <td className="pl-2 py-4">
                  <Checkbox size="small" />
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  123654
                </th>
                <td class="px-6 py-4">
                  <div className="flex items-center gap-4 w-[250px]">
                    <div className="img w-[55px] h-[55px] rounded-md overflow-hidden">
                      <img src="https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg" alt="" />
                    </div>
                    <div className="info w-[75%]">
                      <p>White Printed Shirt</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">Fashion</td>
                <td class="px-6 py-4">$250</td>
                <td class="px-6 py-4">250</td>
                <td class="px-6 py-4">750</td>
                <td class="px-6 py-4">7%</td>
                <td class="px-6 py-4">
                  <Button className="!bg-blue-500 !text-white !capitalize !text-[12px]">Add Offer</Button>
                </td>
                <td class="px-6 py-4">
                  <div className="flex gap-2 !text-[18px]">
                    <MdOutlineModeEdit />
                    <MdOutlineDelete />
                    <FaEye />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full flex items-center justify-center py-5">
          <Pagination count={10} color="primary" />
        </div>
      </div>
    </>
  );
}

export default Dashboard