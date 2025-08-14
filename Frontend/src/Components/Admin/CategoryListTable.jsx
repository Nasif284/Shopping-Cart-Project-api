import { MdOutlineModeEdit } from "react-icons/md";
import AdminTable from "./AdminTable";
import { Tooltip } from "@mui/material";
import { MdDeleteOutline } from "react-icons/md";
import { cat1 } from "../../assets";
const ProductsColumns = [
  { id: "image", label: "Image", minWidth: 100 },
  { id: "name", label: "Category Name", minWidth: 100, align: "center" },
  { id: "action", label: "Action", minWidth: 100, align: "center" },
];

function productsCreateData(image, name, action) {
  return { image, name, action };
}

const CategoryListTable = () => {
   const ProductsRows = [
     productsCreateData(
       <div className="w-[70px] rounded-md overflow-hidden">
         <img src={cat1} alt="" className="w-full" />
       </div>,
       "Fashion",
       <div className="flex gap-2 !text-[18px] justify-center items-center ">
         <Tooltip className="cursor-pointer" title="Edit">
           <MdOutlineModeEdit className="text-[25px]" />
         </Tooltip>
         <Tooltip className="cursor-pointer" title="Delete">
           <MdDeleteOutline className="text-[25px]" />
         </Tooltip>
       </div>
     ),
   ];
   return <AdminTable columns={ProductsColumns} rows={ProductsRows} />;
};

export default CategoryListTable;
