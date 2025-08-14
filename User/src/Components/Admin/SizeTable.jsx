import { MdOutlineModeEdit } from "react-icons/md";
import AdminTable from "./AdminTable";
import { Button, Tooltip } from "@mui/material";
import { MdDeleteOutline } from "react-icons/md";
const ProductsColumns = [
  { id: "size", label: "Size", minWidth: 170 },
  { id: "action", label: "Action", minWidth: 100, align: "center" },
];

function productsCreateData(size, action) {
  return {size, action };
}

const SizeTable = () => {
  const ProductsRows = [
    productsCreateData(
      "S",
      <div className="flex gap-2 !text-[18px] justify-center items-center ">
        <Tooltip className="cursor-pointer" title="Edit">
          <MdOutlineModeEdit className="text-[22px]" />
        </Tooltip>
        <Tooltip className="cursor-pointer" title="Delete">
          <MdDeleteOutline className="text-[22px]" />
        </Tooltip>
      </div>
    ),
  ];
  return <AdminTable columns={ProductsColumns} rows={ProductsRows} />;
};

export default SizeTable;
