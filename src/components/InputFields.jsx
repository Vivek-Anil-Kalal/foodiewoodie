import React from "react";

const InputFields = (props) => {
  return (
    <div className="container bg-[#e1e1e1] w-full flex items-center py-2 px-5 rounded-xl">
      <div className="left flex flex-1 flex-col items-start">
        <div className="text-sm font-bold text-[14px] text-gray-600">{props.hint || "Hint"}</div>
        <input
          className="w-[200px] bg-transparent text-black text-xl outline-none"
          type="text"
          placeholder={props.placeholder || "Enter values here"}
        />
      </div>
      <div className="right">
        <img src={props.icon} className='w-8'/>
      </div>
    </div>
  );
};

export default InputFields;