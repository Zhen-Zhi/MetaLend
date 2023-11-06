import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

import { useStateContext } from '../context';
import { CountBox, CustomButton } from '../components';
import { calculateBarPercentage, daysLeft } from '../utils';
import { thirdweb } from '../assets';


const CampaignDetails = () => {
  return (
    <div>
      {/* {isLoading && <Loader />} */}

      <div className="w-full flex md:flex-row flex-col mt-10 gap-[30px]">
        <div className="flex-1 flex-col">
          <img src='https://cimg.co/w/articles-attachments/0/611/77a1915252.jpg' alt="campaign" className="w-full h-[410px] object-cover rounded-xl"/>
          <div className="relative w-full h-[5px] bg-[#3a3a43] mt-2">
            <div className="absolute h-full bg-[#1ad5d5]" style={{ width: `${calculateBarPercentage(100, 35)}%`, maxWidth: '100%'}}>
            </div>
          </div>
        </div>

        <div className="flex md:w-[150px] w-full flex-wrap justify-between gap-[30px]">
          <CountBox title="Days Left" value="18" />
          <CountBox title={`Raised of 100`} value='35' />
          <CountBox title="Total Backers" value='1' />
        </div>
      </div>

      <div className="mt-[60px] flex lg:flex-row flex-col gap-5">
        <div className="flex-[2] flex flex-col gap-[40px]">
          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">Creator</h4>

            <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px]">
              <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#2c2f32] cursor-pointer">
                <img src={thirdweb} alt="user" className="w-[60%] h-[60%] object-contain"/>
              </div>
              <div>
                <h4 className="font-epilogue font-semibold text-[14px] text-white break-all">Metalending.blc</h4>
                <p className="mt-[4px] font-epilogue font-normal text-[12px] text-[#808191]">10 Campaigns</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">Story</h4>

              <div className="mt-[20px]">
                <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">We aim to achieve better and versatile solution for account abstraction.</p>
              </div>
          </div>

          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">Donators</h4>

              <div className="mt-[20px] flex flex-col gap-4">
                {/* {donators.length > 0 ? donators.map((item, index) => (
                  <div key={`${item.donator}-${index}`} className="flex justify-between items-center gap-4">
                    <p className="font-epilogue font-normal text-[16px] text-[#b2b3bd] leading-[26px] break-ll">{index + 1}. {item.donator}</p>
                    <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] break-ll">{item.donation}</p>
                  </div>
                )) : (
                  <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">No donators yet. Be the first one!</p>
                )} */}
                <p className="font-epilogue font-normal text-[16px] text-[#b2b3bd] leading-[26px] break-ll">1. Donator</p>
                <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] break-ll">10 ETH</p>
              </div>
          </div>
        </div>

        <div className="flex-1">
          <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">Fund</h4>   

          <div className="mt-[20px] flex flex-col p-4 bg-[#1c1c24] rounded-[10px]">
            <p className="font-epilogue fount-medium text-[20px] leading-[30px] text-center text-[#808191]">
              Fund the campaign
            </p>
            <div className="mt-[30px]">
              <input 
                type="number"
                placeholder="ETH 0.1"
                step="0.01"
                className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[18px] leading-[30px] placeholder:text-[#4b5264] rounded-[10px]"
                value='0.1'
                onChange={(e) => setAmount(e.target.value)}
              />

              <div className="my-[20px] p-4 bg-[#13131a] rounded-[10px]">
                <h4 className="font-epilogue font-semibold text-[14px] leading-[22px] text-white">The funder had added this collateral to gain trust</h4>
                <img src='data:image/jpeg;base64,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' 
                class="mx-auto my-2"></img>
                <p className='mt-[20px] mb-[30px] font-epilogue font-normal leading-[22px] text-[#808191]'>Address: 0xc0ffee254729296a45a3885639AC7E10F9d54979</p>
                <p className="mt-[20px] font-epilogue font-normal leading-[22px] text-[#808191]">Return of interst will be done automatically with account abstraction.</p>
              </div>

              <CustomButton 
                btnType="button"
                title="Fund Campaign"
                styles="w-full bg-[#8c6dfd]"
                handleClick='Donate'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CampaignDetails