import React from 'react'
import { Link } from 'react-router-dom';

const BannerBox = ({image}) => {
  return (
    <div className="box bannerBox overflow-hidden rounded-lg group">
      <Link>
        <img src={image} alt="" className="w-full group-hover:scale-110 transition-all" />
      </Link>
    </div>
  );
}

export default BannerBox