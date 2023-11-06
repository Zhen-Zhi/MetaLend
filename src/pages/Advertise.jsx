import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

// import { useStateContext } from '../context';
import { createCampaign, money } from '../assets';
import { CustomButton, FormField } from '../components';
import { checkIfImage } from '../utils';

const Advertise = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
      name: '',
      title: '',
      description: '',
      target: '', 
      deadline: '',
      image: ''
    });

    const handleFormFieldChange = (fieldName, e) => {
        setForm({ ...form, [fieldName]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        navigate('/')

        // checkIfImage(form.image, async (exists) => {
        //     if(exists) {
        //         setIsLoading(true)
        //         setIsLoading(false)
        //         navigate('/')
        //     }
        //     else {
        //         alert('Invalid url')
        //         setForm({...form, image: ''})
        //     }
        // })
        

        
    }

    return (
        <div className='bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4'>
            {isLoading && 'Loader...'}
            <div className='flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]'>
                <h1 className='font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white'>Withdraw fund raised</h1>
            </div>
            <form onSubmit={handleSubmit} className='w-full mt-[65px] flex flex-col gap-[30px]'>
                <FormField 
                    LabelName="Total Amount *"
                    placeholder="Enter withdrawal amount"
                    inputType="number"
                    value={form.target}
                    handleChange={(e) => handleFormFieldChange('target', e)}
                />

                <FormField 
                    LabelName="Wallet Address *"
                    placeholder="Enter wallet address"
                    inputType="text"
                    value={form.target}
                    handleChange={(e) => handleFormFieldChange('target', e)}
                />

                <table className='w-full text-white text-xl text-right'>
                    <tr>
                        <td>Total: </td>
                        <td className='w-32'>35 Eth</td>
                    </tr>
                    <tr>
                        <td>Total interest: </td>
                        <td className='w-32'>4.4 %</td>
                    </tr>
                    <tr>
                        <td>Total amount to return: </td>
                        <td className='w-32'>36.54 ETH</td>
                    </tr>
                    <tr>
                        <td>Payment period"</td>
                        <td className='w-32'>12 months</td>
                    </tr>
                </table>

                <p className="mt-[20px] font-epilogue font-normal leading-[22px] text-[#808191]">Note: Before payment of debt is complete, your collateral will be hold by abstraction account.</p>

                <div className="flex justify-center items-center mt-[40px]">
                    <CustomButton 
                        btnType="submit"
                        title="Withdraw now"
                        styles="bg-[#00cfeb]"
                    />
                </div>
            </form>
        </div>
    )
}

export default Advertise;