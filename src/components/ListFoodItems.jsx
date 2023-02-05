import React, { useState } from "react";
import { InputFields, TextArea, FilterChips } from './index'
import { arrow, food, hastag, money, } from '../assets'
import { storage, db } from "../firebase";
import { doc, setDoc, updateDoc, getDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { localStoreID } from "../constants";
import { BallTriangle } from 'react-loader-spinner'
import Store from "../models/Store";

const ListProduct = () => {
  var categoryList = ["Gujarati", "Punjabi", "Chineese", "Fast Food"];

  const [activeCategory, setActiveCategory] = useState('');
  const [foodName, setFoodName] = useState('');
  const [foodPrice, setFoodPrice] = useState('');
  const [foodDesc, setFoodDesc] = useState('');
  const [foodImg, setFoodImg] = useState('')
  const [foodCategory, setFoodCategory] = useState('')
  const [isLoaded, setLoaded] = useState(true);

  const clearValues = () => {
    setFoodName('')
    setFoodPrice('')
    setFoodDesc('')
    setFoodImg('')
    setFoodCategory('')
  }

  const handleSubmit = async () => {
    const currTime = Date.now().toString();
    const itemUid = `foodieeWoodiee${currTime.substring(currTime.length - 4, currTime.length)}foodItem`;
    const storageRef = ref(storage, `foodPhotos/${itemUid}`);
    setLoaded(false);

    uploadBytesResumable(storageRef, foodImg).then(
      // (error) => {
      //   console.log(error.toString());
      // },
      () => {
        console.log("Sahi Chal Raha hai.")
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(storageRef).then(async (downloadURL) => {
          await setDoc(doc(db, "FoodItems", `${itemUid}${localStorage.getItem(localStoreID)}`), {
            foodName,
            foodDesc,
            foodImg: downloadURL,
            foodPrice,
            foodCategory,
            foodUid: itemUid,
            sellerId: localStorage.getItem(localStoreID),
            rating: 0,
            review: []
          }).then(async () => {
            setLoaded(true);
            clearValues();
            alert("Food Item listed Successfully .");
            // toast.success('Store Created Successfully . Now u can add your food items in the store.');
          })
            .catch((e) => {
              alert("Something went wrong !! , Please try again later." + e.message);
              // setIsLoading(false);
              // toast.error('Something went wrong !!');
            });
        });
      }
    );
  }

  const changeActiveCategory = (item) => {
    setActiveCategory(item)
  }

  const changeFoodName = (name) => {
    setFoodName(name);
  }

  const changeFoodPrice = (price) => {
    setFoodPrice(price);
  }

  const changeFoodDesc = (desc) => {
    setFoodDesc(desc);
  }

  const onChipClick = (cate) => {
    setFoodCategory(cate);
  }

  return (
    <div className="bg-white h-max p-5">
      <div className="heading flex gap-5">
        <img src={arrow} className="w-8" alt="back" />
        <h1 className="text-2xl font-bold">List My Food</h1>
      </div>

      {isLoaded ? <div className="foodContent flex flex-col gap-5 items-center">
        <label htmlFor="takeImg"><img
          className="xl:h-72 h-48 rounded-2xl xl:w-72 w-48 m-2 object-fill cursor-pointer"
          src={foodImg ? URL.createObjectURL(foodImg) : "https://www.pacificfoodmachinery.com.au/media/catalog/product/placeholder/default/no-product-image-400x400_6.png"}
          alt="Food_image" /></label>
        <label htmlFor="takeImg"><p className="text-black font-semibold cursor-pointer">Click To Upload Food Image</p></label>
        <input type="file" id="takeImg" onChange={e => setFoodImg(e.target.files[0])} className="hidden" />
        <InputFields
          hint="Food Name*"
          placeholder="Name of Food Item"
          icon={food}
          changeFoodName={changeFoodName}
          value={foodName}
        />
        <TextArea
          hint="Food Description*"
          placeholder="Describe your food here........."
          icon={hastag}
          changeFoodDesc={changeFoodDesc}
          value={foodDesc}
        />
        <div className="categoryItems w-full">
          <h1 className="text-xl font-bold">Select Category</h1>

          <div className="flex flex-wrap">
            {categoryList.map((item) => (
              <FilterChips text={item} activeCategory={activeCategory} changeActiveCategory={changeActiveCategory} onChipClick={onChipClick} />
            ))}
          </div>

        </div>
        <InputFields
          hint="Food Price*"
          placeholder="Rs 0000 /-"
          icon={money}
          changeFoodPrice={changeFoodPrice}
          value={foodPrice}
        />
        <button onClick={handleSubmit} className="bg-black w-full text-yellow-300 text-2xl py-2 rounded-xl">
          Start Selling Food
        </button>
      </div> : <div className="flex justify-center items-center min-h-[700px]">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      </div>
      }
    </div>
  );
};

export default ListProduct;