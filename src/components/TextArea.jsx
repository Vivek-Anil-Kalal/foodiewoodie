import React from 'react'

const TextArea = (props) => {
  return (
    <div className="container bg-[#e1e1e1] w-full flex items-top py-2 px-5 rounded-xl">
      <div className="left flex flex-1 flex-col items-start">
        <div className="text-sm font-bold text-gray-600">{props.hint || "Hint"}</div>
        <textarea
          className="w-full bg-transparent text-black text-xl outline-none"
          type="text"
          rows={6}
          placeholder={props.placeholder || "Enter values here"}
        />
      </div>
      <div className="right">
        <img src={props.icon} className='w-8'/>
      </div>
    </div>
  )
}

export default TextArea