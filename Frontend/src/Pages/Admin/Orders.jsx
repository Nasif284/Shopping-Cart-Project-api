import { OrdersTable, SearchBox, SelectBox } from '../../Components/Admin';

const AdminOrders = () => {
  return (
    <div className=" my-4 w-full shadow-md sm:rounded-lg bg-white">
      <div className="flex items-center justify-between p-5">
        <h2 className="text-[18px] font-[600]">All Products </h2>

      </div>
      <div className="flex items-center w-full pl-5 gap-5">
        <SelectBox placeholder={"Category"} />
        <SelectBox placeholder={"Sub Category"} />
        <SelectBox placeholder={"Third Level Category"} />
        <SearchBox />
      </div>
      <div className="relative w-full overflow-x-scroll shadow-md sm:rounded-lg">
        <OrdersTable />
      </div>
    </div>
  );
}

export default AdminOrders