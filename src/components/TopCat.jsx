import React from 'react'

const TopCat = () => {
  return (
    <div className="flex md:w-[120px] w-[80px] md:h-[120px] h-[80px] rounded-full drop-shadow">
      <div className="w-full flex-col text-center">
        <img src="https://imgs.search.brave.com/Kjo6mws6-Rv8MCECzOuT1F0hu1jjrSL4dCDOpB3DwWU/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5I/R1ZYU3NFWjVoWXFz/YUduRkxGd2lBSGFF/OCZwaWQ9QXBp" alt="food" className="object-cover rounded-[50%] w-[120px] h-[120px]" />
        <h2 className="font-normal text-2xl">Gujarati</h2>
      </div>
    </div>
  )
}

export default TopCat