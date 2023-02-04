import React from "react";
import FilterChips from "./FilterChips";

const QuickActionBar = () => {
  var filterList = ["Gujarati", "Punjabi", "Chineese", "Fast Food"];

  return (
    <div className="bg-white h-full w-[500px] flex flex-col justify-center items-center drop-shadow">
      <div className="container text-center justify-center">
        <div className="text-3xl ml-5 mt-5 text-center">
          <h1 className="font-bold">
            Quick Filters
          </h1>
        </div>
        <div className="flex flex-wrap items-center justify-center">

          {filterList.map((item) => (
            <FilterChips text={item} />
          ))
          }
        </div>
      </div>
      <div className='md:w-[450px] w-[320px] p-5 rounded-xl bg-[#e1e1e1] flex flex-col mt-10 justify-center items-center sm:mr-0 mr-[100px]'>
        <div className="sm:text-3xl text-2xl font-semibold">
          <h1 className="md:text-2xl text-xl">Review & Suggestions</h1>
        </div>
        <div className="text-xs mt-2 bg-black text-yellow-300 md:w-full w-[280px] px-5 py-2 rounded-2xl">
          <p className="font-normal md:text-[16px] text-[13px]">
            Your valuable Review and suggestions will <br className="md:block hidden" /> help us to improve FoodieeWoodie.eat
          </p>
        </div>
        <div className="w-full">
          <textarea placeholder="Type Here......." className="rounded-lg w-full h-[200px] mt-5 text-lg text-start p-2" />
        </div>
        <div className="w-full">
          <button className="bg-black text-yellow-300 rounded-xl py-3 w-full mt-5">Submit My Review</button>
        </div>
      </div>
    </div>
  );
};

export default QuickActionBar;