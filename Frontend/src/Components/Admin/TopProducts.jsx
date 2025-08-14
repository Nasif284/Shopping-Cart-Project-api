import AdminTable from './AdminTable';
const topProductsColumns = [
  { id: "productName", label: "Product name", minWidth: 170 },
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

function topProductsCreateData(productName, category, totalQuantitySold, totalRevenue, orderCount) {
  return { productName, category, totalQuantitySold, totalRevenue, orderCount };
}

const topProductsRows = [
  topProductsCreateData(
"Apple MacBook Pro 17",
    "Fashion",
    "234",
    "$1234",
    "234",
  ),
];
const TopProducts = () => {
  return (
    <AdminTable columns={topProductsColumns} rows={topProductsRows}/>
  )
}

export default TopProducts