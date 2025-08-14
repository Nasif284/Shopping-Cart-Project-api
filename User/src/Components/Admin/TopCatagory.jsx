import React from 'react'
import AdminTable from "./AdminTable";
const topCategoryColumns = [
  { id: "category", label: "Category", minWidth: 100 },
  {
    id: "totalQuantitySold",
    label: "Total quantity sold",
    minWidth: 100,
    align: "center",
  },
  {
    id: "totalRevenue",
    label: "	Total Revenue	",
    minWidth: 100,
    align: "center",
  },
  {
    id: "orderCount",
    label: "Order Count",
    minWidth: 100,
    align: "center",
  },
];

function topCategoryCreateData(category, totalQuantitySold, totalRevenue, orderCount) {
  return { category, totalQuantitySold, totalRevenue, orderCount };
}

const topProductsRows = [topCategoryCreateData("Apple MacBook Pro 17", "Fashion", "234", "$1234", "234")];
const TopCategory = () => {
  return <AdminTable columns={topCategoryColumns} rows={topProductsRows} />;
}

export default TopCategory