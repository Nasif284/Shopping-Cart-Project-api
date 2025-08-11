import React, { useState } from "react";
import { ProductCard, ProductListView, ProductSidebar } from "../Components";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { product1 } from "../assets";
import Button from "@mui/material/Button";
import { IoGridSharp } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IoIosArrowDown } from "react-icons/io";
import Pagination from "@mui/material/Pagination";
const ProductListing = () => {
      const [anchorEl, setAnchorEl] = React.useState(null);
      const open = Boolean(anchorEl);
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
    };
    const [itemView,setItemView]=useState("grid")
  return (
    <section className="pt-5 ">
      <div className="breadCrumbs container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/" className="link transition !text-[14px]">
            Home
          </Link>
          <Typography className="!text-[14px]" sx={{ color: "text.primary" }}>
            Fashion
          </Typography>
        </Breadcrumbs>
      </div>
      <div className="bg-white py-2 mt-4">
        <div className="container flex gap-3">
          <div className="sidebarWrapper w-[20%] h-full bg-white">
            <ProductSidebar />
          </div>
          <div className="rightContent w-[80%]">
            <div className="bg-[#f1f1f1] py-3 w-full rounded-md mb-4 flex items-center justify-between p-2">
              <div className="col1 items-center ">
                <Button onClick={() => setItemView("list")} className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-black ${itemView === "list" && "!bg-primary !text-white"}`}>
                  <MdOutlineMenu />
                </Button>
                <Button onClick={() => setItemView("grid")} className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-black ${itemView === "grid" && "!bg-primary !text-white"}`}>
                  <IoGridSharp />
                </Button>
                <span className="text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)]">There are 27 products</span>
              </div>
              <div className="col2 flex items-center justify-end gap-3 pr-4">
                <span className="text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)]">Sort By:</span>
                <div>
                  <Button className="!bg-white !text-[12px] !text-black !capitalize" id="basic-button" aria-controls={open ? "basic-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick}>
                    Dashboard <IoIosArrowDown className="ml-2" />
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                      list: {
                        "aria-labelledby": "basic-button",
                      },
                    }}
                  >
                    <MenuItem className="!text-[13px] !text-black" onClick={handleClose}>
                      Sales Highest to Lowest
                    </MenuItem>
                    <MenuItem className="!text-[13px] !text-black" onClick={handleClose}>
                      Relevance
                    </MenuItem>
                    <MenuItem className="!text-[13px] !text-black" onClick={handleClose}>
                      Name, A-Z
                    </MenuItem>
                    <MenuItem className="!text-[13px] !text-black" onClick={handleClose}>
                      Name, Z-A
                    </MenuItem>
                    <MenuItem className="!text-[13px] !text-black" onClick={handleClose}>
                      Price, low to high
                    </MenuItem>
                    <MenuItem className="!text-[13px] !text-black" onClick={handleClose}>
                      Price, high to low
                    </MenuItem>
                  </Menu>
                </div>
              </div>
            </div>
            <div className={`${itemView === "grid" ? "grid grid-cols-4 md:grid-cols-4 gap-4" : "grid grid-cols-1 md:grid-cols-1 gap-4"}`}>
              {itemView === "grid" ? (
                <>
                  <ProductCard image={product1} />
                  <ProductCard image={product1} />
                  <ProductCard image={product1} />
                  <ProductCard image={product1} />
                  <ProductCard image={product1} />
                  <ProductCard image={product1} />
                  <ProductCard image={product1} />
                  <ProductCard image={product1} />
                </>
              ) : (
                <>
                  <ProductListView image={product1} />
                  <ProductListView image={product1} />
                  <ProductListView image={product1} />
                  <ProductListView image={product1} />
                  <ProductListView image={product1} />
                </>
              )}
            </div>
            <div className="flex items-center justify-center mt-5">
              <Pagination count={10} color="primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
