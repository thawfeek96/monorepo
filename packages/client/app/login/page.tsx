import React from 'react'
import HankoAuth from "@/app/components/hankoComponents/Register";


const login = () => {
  return (
    <main className=" w-[100%] h-[90vh]">
      <div style={{
        boxShadow: "0px 0px 61.3082px rgba(0, 0, 0, 0.10)",
      }}
        className="flex items-center flex-col py-6 bg-white w-full">
        <img
          className="w-[185px] block mx-auto"
          src="https://feedbackuploadimage.s3.ap-south-1.amazonaws.com/FeedbackBrand.png"
          alt="logo"
        />

      </div>
     
<div className='w-full h-[100%] mt-2'>
  <HankoAuth />
</div>
    </main>
  )
}

export default login