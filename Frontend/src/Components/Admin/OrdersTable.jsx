import { MdOutlineModeEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import Checkbox from "@mui/material/Checkbox";
import AdminTable from './AdminTable';
import {  Button, Tooltip } from '@mui/material';
import { Badge } from "../User";
const ProductsColumns = [
  { id: "orderId", label: "Order Id", minWidth: 100 },
  { id: "userId", label: "User Id", minWidth: 100 },
  {
    id: "userName",
    label: "User Name",
    minWidth: 100,

  },
  {
    id: "numberOfItems",
    label: "No Of Items",
    minWidth: 100,

  },
  {
    id: "totalAmount",
    label: "Total Amount",
    minWidth: 100,

  },
  {
    id: "date",
    label: "Date",
    minWidth: 100,

  },
  {
    id: "status",
    label: "Status",
    minWidth: 100,

  },
  {
    id: "more",
    label: "View More",
    minWidth: 100,

  },
];

function productsCreateData(orderId, userId, userName, numberOfItems, totalAmount, date, status,more) {
  return { orderId, userId, userName, numberOfItems, totalAmount, date, status,more };
}

const OrdersTable = () => {
  const ProductsRows = [
    productsCreateData(
        "12345",
        "12343545",
        "Muhammad Nasif",
        "2",
        "$1234",
        "12.03.2025",
        <Badge status={"confirm"} />,
             <Button type="submit" className="!bg-primary !rounded-full !capitalize  !text-white !text-[11px] !px-3 !py-1 flex gap-2  hover:!bg-[rgba(0,0,0,0.8)] !font-[600]">
                                View More
                              </Button>

    ),
  ];
  return <AdminTable columns={ProductsColumns} rows={ProductsRows} />;
}

export default OrdersTable