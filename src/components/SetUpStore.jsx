import React from "react";
import InputFields from "./InputFields";
import TextArea from "./TextArea";
import MyButton from "./MyButton";

import { arrow , shop , location , hastag , smartphone_call } from '../assets'

const SetUpStore = () => {
  return (
    <div className="bg-white h-full p-5">
      <div className="heading flex gap-5">
        <img src={arrow} className="w-8" alt="back" />
        <p className="text-2xl font-bold">SetUp Store</p>
      </div>
      <div className="content flex xl:flex-row flex-col">
        <div className="left flex flex-col items-center">
          <img
            className="w-48 m-5 rounded-[50%]"
            src="https://www.pacificfoodmachinery.com.au/media/catalog/product/placeholder/default/no-product-image-400x400_6.png"
            alt="nothing"
          />
          <p className="text-black font-bold">Set Store Image</p>
        </div>
        <div className="right flex flex-col items-center gap-5 flex-1 mt-10">
          <InputFields
            hint="Store Name"
            placeholder="XYZ FOOD CENTER"
            icon={shop}
          />
          <TextArea
            hint="Store Description"
            placeholder="Write description of your store"
            icon={hastag}
          />
          <TextArea
            hint="Store Address"
            placeholder="Write address of your store"
            icon={location}
          />
          <InputFields
            hint="Mobile No."
            placeholder="eg. 696969696969"
            icon={smartphone_call}
          />
          <MyButton text="SetUp Store Now"/>
          <MyButton text="List Food Items"/>
        </div>
      </div>
    </div>
  );
};

export default SetUpStore;