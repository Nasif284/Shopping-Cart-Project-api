import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const  DropdownButton = ({ title,link }) => {
  return (
    <li className="w-full ">
      <Link to={link}>
        <Button className="!text-[rgba(0,0,0,0.8)] !flex !gap-3 !items-center !pl-9 !text-[13px] !font-[500] !capitalize !justify-start !w-full">
          <span className="block h-[5px] w-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span> {title}
        </Button>
      </Link>
    </li>
  );
};

export default DropdownButton;
