import React from 'react'
import { MyOrders , MyProfile , SetUpStore , Nothing , Home , ListFoodItems } from './index';

export const MainContent = (props) => {

  const componentList =  {
    'home' : <Home /> ,
    'myorders': <MyOrders /> ,
    'myprofile' : <MyProfile /> ,
    'setupstore' : <SetUpStore /> ,
    'nothing' : <Nothing /> ,
    'listfooditems' : <ListFoodItems />
  }

  return (
    <div id='mainContent' className="p-2 border-2 max-w-full rounded-[8px] drop-shadow">
      {componentList[props.load]}
    </div>
  )
}

export default MainContent;