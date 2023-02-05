import React from 'react'
import FoodDetail from './FoodDetail';
import { MyOrders, MyProfile, SetUpStore, Nothing, Home, ListFoodItems } from './index';

export const MainContent = (props) => {
  const componentList = {
    'home': <Home />,
    'myorders': <MyOrders />,
    'myprofile': <MyProfile />,
    'setupstore': <SetUpStore loadComponent={props.loadComponent} />,
    'nothing': <Nothing />,
    'listfooditems': <ListFoodItems />,
    'foodDetail': <FoodDetail />
  }

  return (
    <div id='mainContent' className="p-2 border-2 max-w-full rounded-[8px] drop-shadow">
      {
         componentList[props.load]
      }
    </div>
  )
}

export default MainContent;