import qrCode from './assets/image-qr-code.png'
import React from 'react';


function App() {


  return (
    <div className=" min-h-screen min-w-screen bg-cover bg-no-repeat bg-center  bg-[url('./assets/mountain.jpg')] flex justify-center items-center overflow-hidden" >
      <div className='lg:bg-customBlueGray w-4/5 lg:h-[500px]  flex justify-center items-center '>
        <div className=' md:w-1/2 lg:w-1/4  h-4/5 bg-customWhite rounded-xl'>
          <div className='flex-col ' >
            <div className='p-3  overflow-hidden flex items-center justify-center'>
              <img src={qrCode} alt="qrCode" className='rounded-xl object-scale-down  ' />
            </div>
            <h1 className="text-xl xl:text-lg font-bold text-center px-4 text-black ">
              Improve your front-end skills by building projects
            </h1>
            <p className='text-lg xl:text-xs  text-center px-6 pt-2 xl:pt-2 pb-5 text-gray-400  '>
              Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
