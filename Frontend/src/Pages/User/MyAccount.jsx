import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { UserSidebar } from "../../Components/User";
const MyAccount = () => {
  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <UserSidebar />
        <div className="col2 w-[50%]">
          <div className="card bg-white p-5 shadow-md rounded-md ">
            <div className="w-full flex justify-between border-b border-[rgba(0,0,0,0.1)]">
              <h2>My Profile</h2>
              <Button className="!font-[600]">Change Password</Button>
            </div>
            <form action="">
              <div className="flex items-center gap-5 py-5">
                <div className="w-[50%]">
                  <TextField className="w-full" id="outlined-basic" label="Full Name" variant="outlined" />
                </div>
                <div className="w-[50%]">
                  <TextField className="w-full" id="outlined-basic" label="Email" variant="outlined" />
                </div>
              </div>
              <div className="w-[48%]">
                <TextField className="w-full" id="outlined-basic" label="Phone" variant="outlined" />
              </div>
              <Button type="submit" className="!bg-primary  w-[48%] !mt-5 !text-white !text-[14px] !px-3 !py-3 flex gap-2  hover:!bg-[rgba(0,0,0,0.8)] !font-[600]">
                Save
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
