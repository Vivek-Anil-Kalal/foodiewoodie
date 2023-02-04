import React from 'react'
import { agent } from '../assets'

const SellerButton = () => {
    return (
        <div className="mt-5 flex flex-1">
            <button className="flex mr-5 items-center gap-5 bg-black text-yellow-300 p-3 rounded-2xl text-2xl sm:mt-0 mt-5">
                <img src={agent} className='w-10' alt='seller_icon'/>
                Become a Seller
            </button>
        </div>
    )
}

export default SellerButton