import React from 'react'
import Image from "../assets/image01jpg.jpg"

const Card = () => {
  return (
    <>
      <div className="bg-gray-100 py-20">
        <div className="container">
            <div className=" bg-white w-[185px] h-[300px] px-2 cursor-pointer hover:drop-shadow-md">
                <div>
                    <picture>
                        <img src={Image} alt={Image} />
                    </picture>
                </div>
                <div className="pt-3">
                    <h2 className="font-Roboto text-sm font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    <p className="font-Roboto text-lg font-normal text-orange-600 pt-2">$20</p>
                    <h3><del className="font-Roboto opacity-45 mr-3 text-xs">$1500</del><span className="font-Roboto text-xs font-normal">-98%</span></h3>
                </div>
                
            </div>
        </div>
      </div>
    </>
  )
}

export default Card
