import React from "react";
import { arrow, email, location, smartphone_call } from '../assets'
import InputFields from "./InputFields";
import TextArea from "./TextArea";

const MyProfile = () => {
  return (
    <div className="bg-white h-full p-5">
      <div className="heading flex items-center gap-8 text-2xl font-bold">
        <img src={arrow} className="w-8 cursor-pointer" alt="back" />
        My Profile
      </div>

      <div className="content flex items-start flex sm:flex-row flex-col sm:items-start items-center">
        <div className="w-full">
          <div className="flex sm:flex-row flex-col ">
            <div className="left flex flex-col justify-center font-bold items-center">
              <img
                className="w-36 mt-5 ml-5 mb-2 rounded-xl"
                src="https://www.pacificfoodmachinery.com.au/media/catalog/product/placeholder/default/no-product-image-400x400_6.png"
                alt="image_"
              />
              <p className="font-semibold ml-5">
                Click To Change Image
              </p>
            </div>
            <div className="right m-5 flex flex-col justify-center items-center">
              <div className="userName text-3xl font-bold">User's Name</div>
              <div className="userId mt-2 text-xl">
                UserID : hsdcm
              </div>
              <div className="userType mt-5 bg-black w-max text-yellow-300 px-8 py-2 rounded-xl text-lg">
                Only User / Only Seller / Both
              </div>
            </div>
          </div>

          <div className="bottom flex flex-col gap-5 items-start mt-10 sm:w-full w-[300px] items-center">
            <InputFields
              hint="Email ID"
              placeholder="eg: userXYZ@gmail.com"
              icon={email}
            />
            <InputFields
              hint="Contact Number"
              placeholder="eg: 696969669"
              icon={smartphone_call}
            />
            <TextArea
              hint="Address"
              placeholder="Type your address here (It will never be shared with anyone.)"
              icon={location}
            />
            <button className="bg-black w-full text-yellow-300 text-2xl py-2 rounded-xl">
              Update Profile Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;