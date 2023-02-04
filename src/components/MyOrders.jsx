import React from 'react'
import { food } from '../assets'
import MyButton from './MyButton'
import { orders } from '../constants'
import '../index.css'

const MyOrders = () => {

  return (
    <div className="w-full p-2 flex flex-col gap-3 mt-1">
      {
        orders.map((item, index) => (
          <div className="w-full flex sm:flex-row flex-col p-2 gap-2 rounded-[15px] shadow">
            <div className="flex items-center justify-center">
              <img src={food} alt="Food_Image" className="sm:w-[100px] w-[80px] rounded-full" />
            </div>

            <div className="flex flex-1 flex-col gap-3 p-3">
              <div key={index} className="">
                <h1 className="font-semibold sm:text-3xl text-2xl ">{item.itemName}</h1>
                <h4 className="font-normal sm:text-xl text-[18px] max-w-[500px] my-2">{item.description}</h4>
                <h5 className="font-bold sm:text-xl text-[18px] text-green-600"><span className="text-green-500 text-xl">Order Amt :</span> <br /> Rs. {item.amount}</h5>

                <div className="flex justify-center items-center sm:mt-2 mt-4">
                  <MyButton text="Cancel Order" />
                </div>
              </div>


            </div>

          </div>
        )
        )
      }
    </div>
  )
}

export default MyOrders