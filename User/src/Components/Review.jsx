import Rating from '@mui/material/Rating';
import React from 'react'

const Review = () => {
  return (
    <div className=" w-full border-b-1 border-[rgba(0,0,0,0.1)] mb-5">
      <div className="flex items-center justify-between">
        <div className="col1 flex gap-3 items-center">
          <div className="img w-[40px] h-[40px] rounded-full overflow-hidden">
            <img src="https://lirp.cdn-website.com/6f140169/dms3rep/multi/opt/Parikshit+Gokhale-640w.jpg" className="w-full" alt="" />
          </div>
          <div className="flex flex-col">
            <h4 className="text-[13px]">Muhammad Nasif</h4>
            <h6 className="text-[12px]">12.05.2025</h6>
          </div>
        </div>
        <div className="col2">
          <Rating name="size-small" defaultValue={2} size="small" readOnly />
        </div>
      </div>
      <p className="!mt-2 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    </div>
  );
}

export default Review