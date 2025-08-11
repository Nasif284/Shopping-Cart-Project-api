import React from "react";
import { UserSidebar } from "../Components";
import MyListItems from "../Components/MyListItems";

const MyList = () => {
  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <UserSidebar />
        <div className="col2 w-[50%]">
          <div className="card bg-white px-3 py-2 shadow-md rounded-md ">
            <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.1)] mb-3">
              <h2>Your Cart</h2>
              <p className="!m-0">
                There are <span className="font-bold text-primary">2</span> Items in your cart
              </p>
            </div>
            <MyListItems />
            <MyListItems />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyList;
