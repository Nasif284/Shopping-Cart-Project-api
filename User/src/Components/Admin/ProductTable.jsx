import React, { useState } from 'react'
import { MdOutlineModeEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import Checkbox from "@mui/material/Checkbox";
import AdminTable from './AdminTable';
import { Button, Tooltip } from '@mui/material';
const ProductsColumns = [
  {
    id: "radio",
    label: <Checkbox size="small" />,
    minWidth: 50,
    align: "right",
  },
  { id: "productId", label: "Product Id", minWidth: 170 },
  { id: "productName", label: "Product Name", minWidth: 100 },
  {
    id: "category",
    label: "Category",
    minWidth: 100,
    align: "center",
  },
  {
    id: "oldPrice",
    label: "Old Price",
    minWidth: 130,
    align: "center",
  },
  {
    id: "price",
    label: "Price",
    minWidth: 100,
    align: "center",
  },
  {
    id: "sales",
    label: "Sales",
    minWidth: 100,
    align: "center",
  },
  {
    id: "stock",
    label: "Stock",
    minWidth: 100,
    align: "center",
  },
  {
    id: "offer",
    label: "Offer %",
    minWidth: 100,
    align: "center",
  },
  {
    id: "addOffer",
    label: "Add Offer",
    minWidth: 120,
    align: "center",
  },
  {
    id: "action",
    label: "Action",
    minWidth: 100,
    align: "center",
  },
  {
    id: "block",
    label: "Block",
    minWidth: 100,
    align: "center",
  },
];

function productsCreateData(radio, productId, productName, category, oldPrice, price, sales, stock, offer, addOffer, action, block) {
  return { radio, productId, productName, category, oldPrice, price, sales, stock, offer, addOffer, action,block };
}


const ProductTable = () => {
  const [blocked,setBlocked]=useState(false)
  const ProductsRows = [
    productsCreateData(
      <Checkbox size="small" />,
      1324171354,
      <div className="flex items-center gap-2">
        <div className="img w-[45px] h-[45px] rounded-md overflow-hidden">
          <img src="https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg" alt="" />
        </div>
        <div className="info flex flex-col flex-1 max-w-[170px]">
          <p className="truncate !m-0 !font-[600]">White Printed Shirt adsfds acvdsfads afdsf White Printed Shirt adsfds acvdsfads afdsfWhite Printed Shirt adsfds acvdsfads afdsf</p>
          <span className="font-[500] opacity-75">Zara</span>
        </div>
      </div>,
      "Fashion",
      "$1234",
      "$1234",
      "234",
      "12",
      "7%",
      <Button className="!bg-blue-500 !text-white !capitalize !text-[12px]">Add Offer</Button>,
      <div className="flex gap-2 !text-[18px] justify-center ">
        <Tooltip className="cursor-pointer" title="Edit">
          <MdOutlineModeEdit />
        </Tooltip>
        <Tooltip className="cursor-pointer" title="View">
          <FaEye />
        </Tooltip>
      </div>,
      blocked ? (
        <Button onClick={() => setBlocked(!blocked)} className="!bg-green-500 !text-white !capitalize !text-[12px]">
          Unblock
        </Button>
      ) : (
        <Button onClick={() => setBlocked(!blocked)} className="!bg-red-500 !text-white !capitalize !text-[12px]">
          Block
        </Button>
      )
    ),
  ];
  return <AdminTable columns={ProductsColumns} rows={ProductsRows} />;
}

export default ProductTable