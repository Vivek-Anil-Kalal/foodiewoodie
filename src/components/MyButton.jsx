import React from 'react'

const MyButton = (props) => {
    return (
        <button className="bg-black w-full text-yellow-300 text-2xl sm:py-2 py-1 sm:text-[24px] text-[18px] rounded-xl">
            {props.text}
        </button>
    )
}

export default MyButton