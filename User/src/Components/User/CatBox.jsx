import React from 'react'
import { Link } from 'react-router-dom';

const CatBox = ({image,title}) => {
    return (
      <Link>
        <div className="item py-7 px-3 bg-white rounded-sm flex flex-col items-center justify-center">
          <img src={image} alt="" className="w-[80px] transition-all" />
          <h3 className="font-[500] text-[17px] mt-3">{title}</h3>
        </div>
      </Link>
    );
}

export default CatBox