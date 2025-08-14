import React, { useState } from 'react'
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { ProductDetailsComponent, ProductSlider, ProductZoom, QtyBox, Review } from '../../Components/User';
const ProductDetails = () => {
    const [activeTab,setActiveTab]=useState(0)
    return (
      <>
        <div className="py-5">
          <div className="breadCrumbs container">
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/" className="link transition !text-[14px]">
                Home
              </Link>
              <Link underline="hover" color="inherit" href="/" className="link transition !text-[14px]">
                Fashion
              </Link>
              <Typography className="!text-[14px]" sx={{ color: "text.primary" }}>
                Details
              </Typography>
            </Breadcrumbs>
          </div>
        </div>
        <section className="bg-white py-5">
          <div className="container items-center flex gap-8 ">
            <div className="productZoomContainer w-[40%]">
              <ProductZoom />
            </div>
            <div className="productContent pr-10 w-[60%]">
              <ProductDetailsComponent />
            </div>
          </div>
          <div className="container pt-10 ">
            <div className="flex items-center gap-8 mb-5">
              <span className={`${activeTab === 0 && "text-primary "} text-[17px] font-[600] cursor-pointer link`} onClick={() => setActiveTab(0)}>
                Description
              </span>
              <span className={`${activeTab === 1 && "text-primary "} text-[17px] font-[600] cursor-pointer link`} onClick={() => setActiveTab(1)}>
                Product Details
              </span>
              <span className={`${activeTab === 2 && "text-primary "} text-[17px] font-[600] cursor-pointer link`} onClick={() => setActiveTab(2)}>
                Reviews (12)
              </span>
            </div>
            <div className="shadow-md py-5 px-8 w-full rounded-md">
              {activeTab === 0 && (
                <>
                  <p className="text-[14px] mb-[10px]">The best is yet to come! Give your walls a voice with a framed poster. This aesthethic, optimistic poster will look great in your desk or in an open-space office. Painted wooden frame with passe-partout for more depth.</p>
                  <h4>Lightweight Design</h4>
                  <p>Designed with a super light geometric case, the Versa family watches are slim, casual and comfortable enough to wear all day and night. Switch up your look with classic, leather, metal and woven accessory bands. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </>
              )}
              {activeTab === 1 && (
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <tbody>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Apple MacBook Pro 17"
                        </th>
                        <td className="px-6 py-4">Silver</td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Microsoft Surface Pro
                        </th>
                        <td className="px-6 py-4">White</td>
                      </tr>
                      <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Magic Mouse 2
                        </th>
                        <td className="px-6 py-4">Black</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
              {activeTab === 2 && (
                <div className="reviewsWrapper max-h-[500px] overflow-x-hidden overflow-y-scroll w-full">
                  <Review />
                  <Review />
                  <Review />
                  <Review />
                  <Review />
                  <Review />
                  <Review />
                </div>
              )}
            </div>
          </div>
          <div className="container !mt-10">
            <h2 className="text-[22px] mb-3 font-[600]">Related Products</h2>
            <ProductSlider items={6} />
          </div>
        </section>
      </>
    );
}

export default ProductDetails