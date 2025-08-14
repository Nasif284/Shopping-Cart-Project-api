import { MdOutlineModeEdit } from "react-icons/md";
import AdminTable from "./AdminTable";
import { Button, Tooltip } from "@mui/material";
import { MdDeleteOutline } from "react-icons/md";
const ProductsColumns = [
  { id: "image", label: "Image", minWidth: 170 },
  { id: "action", label: "Action", minWidth: 100, align: "center" },
];

function productsCreateData(image,action) {
  return { image,action };
}

const BannerTable = () => {
  const ProductsRows = [
    productsCreateData(
      <div className="w-[300px] rounded-md overflow-hidden">
        <img src="https://serviceapi.spicezgold.com/download/1751685144346_NewProject(11).jpg" alt="" className="w-full" />
      </div>,
      <div className="flex gap-2 !text-[18px] justify-center items-center ">
        <Tooltip className="cursor-pointer" title="Edit">
          <MdOutlineModeEdit className="text-[25px]" />
        </Tooltip>
        <Tooltip className="cursor-pointer" title="Delete">
          <MdDeleteOutline className="text-[25px]"  />
        </Tooltip>
      </div>
    ),
  ];
  return <AdminTable columns={ProductsColumns} rows={ProductsRows} />;
};

export default BannerTable;
