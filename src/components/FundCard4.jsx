import React from 'react';

import { tagType, thirdweb } from '../assets';
import { daysLeft } from '../utils';
import { CustomButton } from '../components';

const FundCard = ({ owner, title, description, target, deadline, amountCollected, image, handleClick, showButton }) => {
  const remainingDays = daysLeft(deadline);

  const Navigate = () => {
    window.location.href = "/campaign-details/:1"
  }
  
  return (
    <div className="sm:w-[288px] w-full rounded-[15px] bg-[#1c1c24] cursor-pointer" onClick={Navigate}>
      <img src='https://thumbs.dreamstime.com/b/web-world-technology-digital-background-web-planet-future-internet-new-version-blockchain-metaverse-web-world-technology-digital-254303940.jpg' alt="fund" className="w-full h-[158px] object-cover rounded-[15px]"/>

      <div className="flex flex-col p-4">
        <div className="flex flex-row items-center mb-[18px]">
          <img src={tagType} alt="tag" className="w-[17px] h-[17px] object-contain"/>
          <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#808191]">3R</p>
        </div>

        <div className="block">
          <h3 className="font-epilogue font-semibold text-[16px] text-white text-left leading-[26px] truncate">Sustainable Energy Solutions: A Web3 Revolution</h3>
          <p className="mt-[5px] font-epilogue font-normal text-[#808191] text-left leading-[18px] truncate">Sustainable Energy Solutions: A Web3 Revolution</p>
        </div>

        <div className="flex justify-between flex-wrap mt-[15px] gap-2">
          <div className="flex flex-col">
            <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">ETH 0.001</h4>
            <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">Raised of ETH 0.990</p>
          </div>
          <div className="flex flex-col">
            <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">30</h4>
            <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">Days Left</p>
          </div>
        </div>

        <div className="flex justify-between flex-wrap mt-[15px] gap-2">
          <div className="flex flex-col flex-grow">
            {showButton && (
              <CustomButton 
                  btnType="submit"
                  title="Advertise Now"
                  styles="bg-[#00cfeb]"
              />
            )}
          </div>
        </div>

        <div className="flex items-center mt-[20px] gap-[12px]">
          <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]">
            <img src={thirdweb} alt="user" className="w-1/2 h-1/2 object-contain"/>
          </div>
          <p className="flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate">by <span className="text-[#b2b3bd]">Defi Verse</span></p>
        </div>
      </div>
    </div>
  )
}

export default FundCard