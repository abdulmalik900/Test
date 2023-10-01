import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <>


  <footer className="bg-second  pt-12 text-gray-300"> 
  <div className="container mx-auto px-4 relative"> 
  
    <div className="flex flex-wrap -mx-4">
      <div className="p-4 w-full  lg:w-4/12"> 
      <div className="mt-4">
      <Image
                  src="/image/logo1.png"
                  width={105}
                  height={105}
                  alt="Icon"
                  className="cursor-pointer"
                />
        </div>
        <ul className="mb-4 space-y-1">
          <li> Surrounding in All UAE 🏳️‍🌈 </li>
          <li>
            <a href="#" className="hover:text-gray-400 text-white">00971568608823</a><br/>
            <a href="#" className="hover:text-gray-400 text-white">00971526686087</a>
            
          </li>
          <li>
            <a href="mailto:hello@fafo.com" className="hover:text-gray-400 text-white"> M.R ShiftingMovers@gmail.com</a>
          </li>
        </ul>                         
        <div className="flex-wrap inline-flex space-x-3"> 
          <a href="#" aria-label="facebook" className="hover:text-gray-400"> <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"> 
              <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" /> 
            </svg></a> 
          <a href="#" aria-label="twitter" className="hover:text-gray-400"> <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"> 
              <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" /> 
            </svg></a> 
         
          <a href="#" aria-label="linkedin" className="hover:text-gray-400"> <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"> 
              <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" /> 
            </svg></a>
         
        </div>                         
      </div>                     
      <div className="p-4 w-full  more_small   sm:w-6/12 md:flex-1 lg:w-3/12">
        <h2 className="font-bold text-color3-500 text-xl">Pages</h2>
        <hr className="border-gray-600 inline-block mb-6 mt-4 w-3/12" />
        <ul> 
          <li className="mb-4"> 
            <a href="#" className="hover:text-gray-400">Home</a> 
          </li>
          <li className="mb-4"> 
            <a href="#" className="hover:text-gray-400">Services</a> 
          </li>                             
          <li className="mb-4"> 
            <a href="#" className="hover:text-gray-400">Location</a> 
          </li>
          <li className="mb-4"> 
            <a href="#" className="hover:text-gray-400">About Us</a> 
          </li>
          <li className="mb-4"> 
            <a href="#" className="hover:text-gray-400">Contact Us</a> 
          </li>                             
        </ul>
      </div>
      <div className="p-4 w-full more_small sm:w-6/12 md:flex-1 lg:w-3/12">
        <h2 className="font-bold text-color3-500 text-xl">Vehicles</h2>
        <hr className="border-gray-600 inline-block mb-6 mt-4 w-3/12" />
        <ul> 
          <li className="mb-4"> 
            <a href="#" className="hover:text-gray-400">Mitsubishi Box 3 Ton</a> 
          </li>
          <li className="mb-4"> 
            <a href="#" className="hover:text-gray-400">Mitsubishi Box 5 Ton</a> 
          </li>                             
          <li className="mb-4"> 
            <a href="#" className="hover:text-gray-400">Mitsubishi Box 10 Ton</a> 
          </li>
          <li className="mb-4"> 
            <a href="#" className="hover:text-gray-400">Mitsubishi open 3 Ton</a> 
          </li>
          <li className="mb-4"> 
            <a href="#" className="hover:text-gray-400">High Roof Chiller Van</a> 
          </li>                             
        </ul>
      </div>
      <div className="p-4 w-full   md:w-5/12 lg:w-4/12"> 
        <h2 className="font-bold text-color3-500 text-xl text-center mr-52">Location</h2>
        <hr className="border-gray-600 inline-block mb-6 mt-4 w-3/12" />
        <div className="-mx-4 flex flex-wrap "> 
          <div className="pb-4 px-4 w-full more_small sm:w-6/12"> 
            <ul> 
              <li className="mb-4"> 
                <a href="#" className="hover:text-gray-400">Abu Dhabi</a> 
              </li>
              <li className="mb-4"> 
                <a href="#" className="hover:text-gray-400">Dhabi</a> 
              </li>                                     
              <li className="mb-4"> 
                <a href="#" className="hover:text-gray-400">Sharjah</a> 
              </li>
              <li className="mb-4"> 
                <a href="#" className="hover:text-gray-400">Ajman</a> 
              </li>
              <li className="mb-4"> 
                <a href="#" className="hover:text-gray-400">Fujairah</a> 
              </li>                                     
            </ul>
          </div>
          <div className="pb-4 px-4 w-full more_small  sm:w-6/12"> 
            <ul> 
              <li className="mb-4"> 
                <a href="#" className="hover:text-gray-400">Ras Al Khaimah</a> 
              </li>
              <li className="mb-4"> 
                <a href="#" className="hover:text-gray-400">Umm Al Quwain</a> 
              </li>
              <li className="mb-4"> 
                <a href="#" className="hover:text-gray-400">Al Ain</a> 
              </li>
              <li className="mb-4"> 
                <a href="#" className="hover:text-gray-400">Dibba Al-Fujairah</a> 
              </li>
              <li className="mb-4"> 
                <a href="#" className="hover:text-gray-400">Khor Fakkan</a> 
              </li>                                     
            </ul>
          </div>                             
        </div>                         
      </div>                     
    </div>                 

    <div className="py-4"> 
      <hr className="mb-4 opacity-25" /> 
      <div className="flex flex-wrap -mx-4  items-center"> 
        <div className="px-4 py-2 w-full flex-1 "> 
          <p className='text-xs lg:text-base md:text-base'>© 2023. All Rights Reserved - M.R ShiftingMovers</p> 
        </div>                         
        <div className="px-4 py-2 w-full md:w-auto sm:w-auto"> 
          <a href="#" className="hover:text-gray-400 text-xs lg:text-base md:text-base">Privacy Policy</a> |                      
          <a href="#" className="hover:text-gray-400 text-xs lg:text-base md:text-base"> Terms of Use</a> 
        </div>                         
      </div>                     
    </div>                 
  </div>             
</footer>
    
    </>
  )
}

export default Footer