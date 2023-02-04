import React from "react";

import { InputFields , TextArea , FilterChips } from './index'
import { arrow , food , hastag , money , } from '../assets'

const ListProduct = () => {
  var categoryList = ["Gujarati", "Punjabi", "Chineese", "Fast Food"];

  return (
    <div className="bg-white h-max p-5">
      <div className="heading flex gap-5">
        <img src={arrow} className="w-8" alt="back" />
        <h1 className="text-2xl font-bold">List My Food</h1>
      </div>

      <div className="foodContent flex flex-col gap-5 items-center">
        <img
          className="xl:h-72 h-48 rounded-2xl xl:w-72 w-48 m-2 object-fill cursor-pointer"
          src="https://www.pacificfoodmachinery.com.au/media/catalog/product/placeholder/default/no-product-image-400x400_6.png"
          alt="Food_image"/>
        <h1 className="text-black font-semibold cursor-pointer">Click To Upload Food Image</h1>
        <InputFields
          hint="Food Name*"
          placeholder="Name of Food Item"
          icon={food}
        />
        <TextArea
          hint="Food Description*"
          placeholder="Describe your food here........."
          icon={hastag}
        />
        <div className="categoryItems w-full">
          <h1 className="text-xl font-bold">Select Category</h1>
          <div className="flex flex-wrap">
            {categoryList.map((item) => (
              <FilterChips text={item} />
            ))}
          </div>
        </div>
        <InputFields
          hint="Food Price*"
          placeholder="Rs 0000 /-"
          icon={money}
        />
        <button className="bg-black w-full text-yellow-300 text-2xl py-2 rounded-xl">
        Start Selling Food
    </button>
      </div>
    </div>
  );
};

export default ListProduct;