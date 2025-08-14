import React from 'react'
import { CiClock2 } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
const BlogItem = () => {
  return (
    <div className="blog-card">
      <div className="imgWrapper w-full rounded-md overflow-hidden group cursor-pointer relative">
        <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/psblog/b/9/1105_813/b-blog-7.jpg" alt="" className="w-full transition-all group-hover:scale-105" />
        <span className="date font-[400] flex items-center justify-center p-2 text-[12px] gap-1 rounded-md absolute bottom-[15px] right-[15px] bg-primary text-white ">
          <CiClock2 />
          12.04.2025
        </span>
      </div>
      <div className="info py-4">
        <h2 className="font-[600] text-[16px]">
          <Link className='link'>Nullam ullamcorper ornare molestie</Link>
        </h2>
        <p className="text-[12px] text-[rgba(0,0,0,0.8)] mb-2">Suspendisse posuere, diam in bibendum lobortis, turpis ipsum aliquam risus, sit amet dictum ligula lorem non nisl Urna pretium elit mauris....</p>
        <Link className="link font-[500] text-[14px] flex gap-1 items-center">
          Read more
          <IoIosArrowForward className="text-[12px]" />
        </Link>
      </div>
    </div>
  );
}

export default BlogItem