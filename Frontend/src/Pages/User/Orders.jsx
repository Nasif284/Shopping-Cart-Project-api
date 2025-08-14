import React from "react";
import { Badge, MyListItems, UserSidebar } from "../../Components/User";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";
const Orders = () => {
  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <UserSidebar />
        <div className="col2 w-[80%]">
          <div className="card bg-white px-3 py-2 shadow-md rounded-md ">
            <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.1)] mb-3">
              <h2>Your Cart</h2>
              <p className="!m-0">
                There are <span className="font-bold text-primary">2</span> Items in your cart
              </p>
            </div>

            <div className="relative mt-5 overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3  whitespace-nowrap">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Amount
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      View More
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                    <td className="px-6 py-4  whitespace-nowrap">12.01.2025</td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <div className="img w-[45px] h-[45px] rounded-md overflow-hidden">
                          <img src="https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg" alt="" />
                        </div>
                        <div className="info flex-1 max-w-[170px]">
                          <p className="truncate">White Printed Shirt adsfds acvdsfads afdsf White Printed Shirt adsfds acvdsfads afdsfWhite Printed Shirt adsfds acvdsfads afdsf</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">25</td>
                    <td className="px-6 py-4 whitespace-nowrap">$1234</td>
                    <td className="px-6 py-4 whitespace-nowrap"> $1234 </td>
                    <td className="px-5 py-4 whitespace-nowrap">
                      <Badge status={"confirm"} />
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap">
                      <Button type="submit" className="!bg-primary !rounded-full !capitalize  !text-white !text-[11px] !px-3 !py-1 flex gap-2  hover:!bg-[rgba(0,0,0,0.8)] !font-[600]">
                        View More
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;
