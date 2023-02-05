import React from "react";
import arrow from "../assets/arrow.png";
import MyButton from "./MyButton";

const FoodDetail = () => {
  return (
    <div className="bg-white h-max p-5">
      <div className="heading flex gap-5">
        <img src={arrow} className="w-8 cursor-pointer" alt="back" />
        <h1 className="text-2xl font-bold">Food Details</h1>
      </div>

      <div className="detailContent flex flex-col gap-5">
        <img
          className="h-96 drop-shadow-lg rounded-2xl m-2"
          src="https://www.pacificfoodmachinery.com.au/media/catalog/product/placeholder/default/no-product-image-400x400_6.png"
          alt="foodPhoto"
        />

        <h1 className="text-3xl font-bold">Food Name</h1>
        <h1 className="text-2xl">
          Food description....................................
        </h1>

        <div className="flex gap-8 items-center justify-between xl:flex-row flex-col">
        <div className="StoreDetials flex items-center gap-5 w-max bg-[#f1f1f1] px-8 py-2 rounded-2xl">
          <img
            className="w-16 h-16 rounded-[50%]"
            src="https://assets.cntraveller.in/photos/62975dd66a6d562435831f90/1:1/w_1080,h_1080,c_limit/new-restaurants-delhi-lead.jpg"
            alt="sellerLogo"
          />
          <div>
            <h1 className="text-xl font-bold">Store Name</h1>
            <h1 className="text-lg">Contact : +91 69696969696</h1>
          </div>
        </div>

        <div className="flex h-max items-center gap-2 bg-[#f1f1f1] w-max py-2 px-5 rounded-xl">
            <h1 className="text-lg font-bold text=[#333333]">Category : </h1>
            <h1 className="text-xl font-bold">Gujarati Thali</h1>
        </div>
        </div>

        <div className="flex xl:flex-row gap-5 flex-col items-center justify-between">
            <div>
                <h1 className="text-[#333333] font-bold">Best Price : </h1>
                <h1 className="text-4xl text-[#00B267]">Rs 150 /- Only</h1>
            </div>
            <div className="w-72">
            <MyButton text="Buy Now"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;