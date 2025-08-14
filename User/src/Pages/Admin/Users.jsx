import { SearchBox } from '../../Components/Admin';
import UsersTable from '../../Components/Admin/UsersTable';

const Users = () => {
  return (
    <div className="my-4  w-full shadow-md sm:rounded-lg bg-white p-5">
      <div className="flex w-full items-center justify-between pl-3">
        <h2 className="font-[600] text-[23px] ">All Users</h2>
        <div className='w-[30%]'>
          <SearchBox />
        </div>
      </div>

      <div className="relative mt-3 w-full overflow-x-scroll shadow-md sm:rounded-lg">
        <UsersTable />
      </div>
    </div>
  );
}

export default Users