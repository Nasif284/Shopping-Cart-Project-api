import { DashBoxes, Graph, LineGraph, OrderStatusChart, ProductTable, SelectBox, TopCategory, TopProducts } from '../../Components/Admin'; 
import { Button} from '@mui/material';
import {  FaPlus } from "react-icons/fa6";
import { dashbordImg } from '../../assets'; 

const Dashboard = ({ show}) => {
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

      <div className=" my-4 w-full shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between p-5">
          <h2 className="text-[18px] font-[600]">Top Selling Products</h2>
        </div>

        <TopProducts />
      </div>
      <div className="my-4 w-full shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between p-5">
          <h2 className="text-[18px] font-[600]">Top Selling Categories </h2>
        </div>
        <TopCategory />
      </div>

      <div className="my-4 w-full flex gap-5 shadow-md sm:rounded-lg bg-white ">
        <div className="px-4">
          <div className="flex items-center justify-between p-5">
            <h2 className="text-[18px] font-[600]">Users</h2>
          </div>
          <Graph show={show} />
        </div>
        <div className="px-4">
          <div className="flex items-center justify-between p-5">
            <h2 className="text-[18px] font-[600]">Orders Status</h2>
          </div>
          <div className={`${show ? "" : "pl-[50px]"}`}>
            <OrderStatusChart show={show} />
          </div>
        </div>
      </div>
      <div className="my-4 w-full flex gap-5 shadow-md sm:rounded-lg bg-white ">
        <div className="px-4 w-full">
          <div className="flex items-center justify-between p-5">
            <h2 className="text-[18px] font-[600]">Sales and Orders</h2>
          </div>
          <LineGraph show={show} />
        </div>
      </div>
    </>
  );
};

export default Dashboard