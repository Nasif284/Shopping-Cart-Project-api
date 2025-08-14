import AdminTable from "./AdminTable";
import { CiCalendar } from "react-icons/ci";
import { useState } from "react";
import { Button } from "@mui/material";
const ProductsColumns = [
  { id: "user", label: "User", minWidth: 100 },
  { id: "email", label: "Email", minWidth: 100 },
  { id: "phone", label: "Phone Number", minWidth: 100 },
  { id: "created", label: "Created At", minWidth: 100 },
  { id: "action", label: "Action", minWidth: 100, align: "center" },
];

function productsCreateData(user,email, phone, created, action) {
  return { user,email, phone, created, action };
}
const UsersTable = () => {
      const [blocked,setBlocked]=useState(false)
 const ProductsRows = [
   productsCreateData(
     <div className="flex items-center gap-3">
       <div className="imgWrapper w-[35px] h-[35x] rounded-full overflow-hidden cursor-pointer">
         <img src="https://grandamanta.com/wp-content/uploads/2022/06/4.jpg" className="w-full h-full object-cover" alt="" />
       </div>
       <div className="info">
         <h3 className="text-[15px] font-[500] leading-5">Muhammad Nasif</h3>
       </div>
     </div>,
   "admin@gmail.com",
     "+91 9048468383",
     <span className="flex gap-2 items-center">
       <CiCalendar className="text-[20px]" />
       2025-08-13
     </span>,
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
};

export default UsersTable;


