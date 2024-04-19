import React, { useState } from 'react'
import Card from '../Card/Card'
import {ProductData} from "../../Data/Data"





const Menucard = () => {

const[alldata, setalldata] = useState(ProductData);
console.log(alldata);


  return (
    <>
      <div className="container">
        <div className="flex justify-between bg-gray-100 py-4 pl-2 pr-2">
          {alldata?.map((item) => (
            <div key={item.id}>
              <Card 
              title={item.titlle ? item.titlle : null}
              actualprice={(item.mainprice - item.discountprice)}
              mainprice={item.mainprice ? item.mainprice : null}
              percentage={Math.round(((item.mainprice - item.discountprice)/item.mainprice)*100)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Menucard
