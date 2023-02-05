import React from 'react'

const FilterChips = (props) => {
  return (
    <div className={`w-max h-max bg-[#e1e1e1] px-8 py-2 rounded-xl text-xl ml-8 mt-4 hover:bg-black hover:text-yellow-300 cursor-pointer text-xl font-semibold ${props.activeCategory === props.text ? "custom-bg-black text-yellow-300" : 'bg-[#e1e1e1] text-black'}`}
      onClick={() => {
        props.changeActiveCategory(props.text)
      }}>
      {props.text}
    </div>
  )
}

export default FilterChips