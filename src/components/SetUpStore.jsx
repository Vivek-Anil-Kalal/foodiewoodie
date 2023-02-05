import React, { useEffect, useState } from "react";
import InputFields from "./InputFields";
import TextArea from "./TextArea";
import MyButton from "./MyButton";
import Store from "../models/Store";
import { storage, db } from "../firebase";
import { doc, setDoc, updateDoc, getDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { localStoreID } from "../constants";
import { arrow, shop, location, hastag, smartphone_call } from '../assets'
import { BallTriangle } from 'react-loader-spinner'

const SetUpStore = (props) => {
  const [storeName, setStoreName] = useState('');
  const [storeDesc, setStoredesc] = useState('');
  const [storeAddress, setStoreAddress] = useState('');
  const [storeContact, setStoreContact] = useState('');
  const [storeImg, setStoreImg] = useState('');
  const [store, setStore] = useState(null);

  // 
  const [isLoaded, setLoaded] = useState(false);
  let set = true;

  const getStoreData = async () => {
    setLoaded(false);
    getDoc(doc(db, 'Stores', localStorage.getItem(localStoreID)).withConverter(new Store().storeConverter)).then((snapshot) => {
      if (snapshot.data() != null) {
        const storeData = snapshot.data();
        console.log(storeData);
        setStore(storeData);
        setStoreName(storeData.storeName);
        setStoreAddress(storeData.storeAddress);
        setStoreContact(storeData.storeContact);
        setStoreImg(storeData.storeImg);
        setStoredesc(storeData.storeDesc);
      }
    }).then(() => {
      setLoaded(true);
    })
  }

  useEffect(() => {
    console.log('Sahi Hai');
    getStoreData();
  }, []);

  const updateStore = async () => {
    await setDoc(doc(db, "Stores", localStorage.getItem(localStoreID)), {
      storeName,
      storeDesc,
      storeAddress,
      storeContact,
      sellerUid: localStorage.getItem(localStoreID),
    }).then(async () => {
      alert("Store Created Successfully . Now u can add your food items in the store.");
      // toast.success('Store Created Successfully . Now u can add your food items in the store.');
    })
  }

  const handleSubmit = async () => {
    if (store != null) {
      alert('Store already Exists.');
      return;
    }

    const currTime = Date.now().toString();
    const storeUid = `foodieeWoodiee${currTime.substring(currTime.length - 4, currTime.length)}`;
    
    setLoaded(false);

    const storageRef = ref(storage, `storePhotos/${localStorage.getItem(localStoreID)}`);

    uploadBytesResumable(storageRef, storeImg).then(
      // (error) => {
      //   console.log(error.toString());
      // },
      () => {
        console.log("Sahi Chal Raha hai.")
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(storageRef).then(async (downloadURL) => {
          await setDoc(doc(db, "Stores", localStorage.getItem(localStoreID)), {
            storeName,
            storeDesc,
            storeAddress,
            storeContact,
            storeUid,
            storeImg: downloadURL,
            sellerUid: localStorage.getItem(localStoreID),
            listOfFoods: [],
          }).then(async () => {
            await updateDoc(doc(db, 'Users', localStorage.getItem(localStoreID)), {
              isSeller: true,
              storeId: storeUid,
            }).then(() => localStorage.setItem('isUserASeller', true)).catch(e => console.log(e.message));
            setLoaded(true);
            getStoreData()
            alert("Store Created Successfully . Now u can add your food items in the store.");
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

  const actionSetName = (currName) => {
    setStoreName(currName)
  }

  const actionSetDesc = (currDesc) => {
    setStoredesc(currDesc)
  }

  const actionSetAddress = (currAddress) => {
    setStoreAddress(currAddress)
  }

  const actionSetMobNo = (currAddress) => {
    setStoreContact(currAddress)
  }

  return (

    <div className="bg-white h-full p-5">
      {
        isLoaded ? <div>
          <div className="heading flex gap-5">
            <img src={arrow} className="w-8" alt="back" />
            <p className="text-2xl font-bold">SetUp Store</p>
          </div>
          <div className="content flex xl:flex-row flex-col">
            <div className="left flex flex-col items-center">
              <label htmlFor="imgUrl"><img
                className="w-48 h-48 m-5 rounded-[50%] cursor-pointer object-cover"
                src={storeImg ? storeImg : "https://www.pacificfoodmachinery.com.au/media/catalog/product/placeholder/default/no-product-image-400x400_6.png"}
                alt="nothing"
              /></label>
              <input type="file" onChange={e => setStoreImg(e.target.files[0])} id="imgUrl" className="hidden" />
              <label htmlFor="imgUrl"><p className="text-black font-bold cursor-pointer">Set Store Image</p></label>
            </div>
            <div className="right flex flex-col items-center gap-5 flex-1 mt-10">
              <InputFields
                hint="Store Name"
                placeholder="XYZ FOOD CENTER"
                icon={shop}
                value={storeName}
                actionSetName={actionSetName}
              />
              <TextArea
                hint="Store Description"
                placeholder="Write description of your store"
                value={storeDesc}
                icon={hastag}
                actionSetDesc={actionSetDesc}
              />
              <TextArea
                hint="Store Address"
                placeholder="Write address of your store"
                value={storeAddress}
                icon={location}
                actionSetAddress={actionSetAddress}
              />
              <InputFields
                hint="Mobile No."
                value={storeContact}
                placeholder="eg. 696969696969"
                icon={smartphone_call}
                actionSetMobNo={actionSetMobNo}
              />
              <MyButton text={store != null ? "Update Store Details" : "SetUp Store Now"} handleSubmit={handleSubmit} upadateStore={updateStore} />
              <MyButton text="List Food Items" loadComponent={props.loadComponent} />
            </div>
          </div>
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

export default SetUpStore;