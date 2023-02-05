import React from "react";

const InputFields = (props) => {
  return (
    <div className="container bg-[#e1e1e1] w-full flex items-center py-2 px-5 rounded-xl">
      <div className="left flex flex-1 flex-col items-start">
        <div className="text-sm font-bold text-[14px] text-gray-600">{props.hint || "Hint"}</div>
        <input
          className="w-full bg-transparent text-black text-xl outline-none"
          type="text"
          value={props.value}
          placeholder=
          {
            props.placeholder || "Enter values here"}
          onChange={
            props.hint === 'Store Name' ? (e) => {
              props.actionSetName(e.target.value)
            } : (props.hint === 'Mobile No.') ? (e) => {
              props.actionSetMobNo(e.target.value)
            } : props.hint === 'Food Name*' ? (e) => {
              props.changeFoodName(e.target.value)
            } : props.hint === 'Food Price*' ? (e) => {
              props.changeFoodPrice(e.target.value)
            } : ''
          }
        />
      </div>
      <div className="right">
        <img src={props.icon} className='w-8' alt="icon" />
      </div>
    </div>
  );
};

export default InputFields;