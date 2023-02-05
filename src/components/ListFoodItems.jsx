import React, { useState } from "react";
import { InputFields , TextArea , FilterChips } from './index'
import { arrow , food , hastag , money , } from '../assets'
import { storage, db } from "../firebase";
import { doc, setDoc, updateDoc, getDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { localStoreID } from "../constants";
import Store from "../models/Store";

const ListProduct = () => {
  var categoryList = ["Gujarati", "Punjabi", "Chineese", "Fast Food"];

  const [activeCategory , setActiveCategory ] = useState('');
  const [foodName , setFoodName ] = useState('');
  const [foodPrice , setFoodPrice ] = useState('');
  const [foodDesc , setFoodDesc ] = useState('');
  const [foodImg,setFoodImg] = useState('')
  const [foodCategory,setFoodCategory] = useState('')
  const [itemData,setItemData] = useState(null);
  const [isLoaded, setLoaded] = useState(false);


  const getItemData = async () => {
    getDoc(doc(db, 'Stores', localStorage.getItem(localStoreID)).withConverter(new Store().storeConverter)).then((snapshot) => {
      if (snapshot.data() != null) {
        const Data = snapshot.data();
        console.log(Data);
        setItemData(Data);
        setFoodDesc(Data.foodDesc);
        setFoodPrice(Data.foodPrice);
        setFoodName(Data.foodName);
        setFoodImg(Data.foodImg);
      }
    }).then(() => {
    })
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
            foodImg : downloadURL,
            foodPrice,
            foodCategory,
            foodUid : itemUid,
            sellerId : localStorage.getItem(localStoreID),
            rating : 0,
            review : []
          }).then(async () => {
            getItemData()
            setLoaded(true);
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

  const changeActiveCategory = ( item ) => {
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

  const onChipClick = (cate) =>{
    setFoodCategory(cate);
  }

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
              <FilterChips text={item} activeCategory={activeCategory} changeActiveCategory={changeActiveCategory} onChipClick={onChipClick}/>
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
      </div>
    </div>
  );
};

export default ListProduct;