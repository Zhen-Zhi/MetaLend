import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

// import { useStateContext } from '../context';
import { createCampaign, money } from '../assets';
import { CustomButton, FormField } from '../components';
import { checkIfImage } from '../utils';

const CreateCampaign = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    // const { CreateCampaign } = useStateContext();
    const [form, setForm] = useState({
      name: '',
      title: '',
      description: '',
      target: '', 
      deadline: '',
      image: '',
      address: ''
    });

    const handleFormFieldChange = (fieldName, e) => {
        setForm({ ...form, [fieldName]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        checkIfImage(form.image, async (exists) => {
            if(true) {
                setIsLoading(true)
                // await createCampaign({
                //     ...form, target: ethers.utils.parseUnits(form.target, 18)
                // })
                setIsLoading(false)
                navigate('/')
            }
            // else {
            //     alert('Invalid url')
            //     setForm({...form, image: ''})
            // }
        })

        
    }

    return (
        <div className='bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4'>
            {isLoading && 'Loader...'}
            <div className='flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]'>
                <h1 className='font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white'>Start a campaign</h1>
            </div>
            <form onSubmit={handleSubmit} className='w-full mt-[65px] flex flex-col gap-[30px]'>
                <div className='flex flex-wrap gap-[40px]'>
                    <FormField 
                        LabelName="Your Name *"
                        placeholder="John Doe"
                        inputType="text"
                        value={form.name}
                        handleChange={(e) => handleFormFieldChange('name', e)}
                    />
                    <FormField 
                        LabelName="Campaign Title *"
                        placeholder="MyDAO"
                        inputType="text"
                        value={form.title}
                        handleChange={(e) => handleFormFieldChange('title', e)}
                    />
                </div>
                <FormField 
                    LabelName="Descriptions *"
                    placeholder="Write your project ideas and stories here"
                    isTextArea
                    value={form.description}
                    handleChange={(e) => handleFormFieldChange('description', e)}
                />

                <div className="w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px]">
                    <img src={money} alt="money" className="w-[40px] h-[40px] object-contain"/>
                    <h5 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">You will get 100% of the raised amount</h5>
                </div>

                <div className='flex flex-wrap gap-[40px]'>
                    <FormField 
                        LabelName="Target Funding *"
                        placeholder="XDAI 1,000,000"
                        inputType="text"
                        value={form.target}
                        handleChange={(e) => handleFormFieldChange('target', e)}
                    />
                    <FormField 
                        LabelName="End Date *"
                        placeholder="End date"
                        inputType="date"
                        value={form.deadline}
                        handleChange={(e) => handleFormFieldChange('deadline', e)}
                    />
                </div>

                <FormField 
                    LabelName="Campaign Image *"
                    placeholder="Enter URL"
                    inputType="url"
                    value={form.image}
                    handleChange={(e) => handleFormFieldChange('image', e)}
                />

                <FormField 
                    LabelName="Colleteral Address *"
                    placeholder="Address 1"
                    inputType="url"
                    value={form.address}
                    handleChange={(e) => handleFormFieldChange('collateral', e)}
                />
                <input
                    placeholder='Address 2'
                    className='py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent 
                    font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]'
                ></input>
                <input
                    placeholder='Address 3'
                    className='py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent 
                    font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]'
                ></input>

                <p className='mt-[20px] font-epilogue font-normal leading-[22px] text-[#808191]'>These collateral will be released via account abstraction after the payment of the debt is completed.</p>

                <div className="flex justify-center items-center mt-[40px]">
                    <CustomButton 
                        btnType="submit"
                        title="Submit new campaign"
                        styles="bg-[#00cfeb]"
                    />
                </div>
            </form>
        </div>
    )
}

export default CreateCampaign;