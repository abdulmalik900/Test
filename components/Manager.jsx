import React from 'react'


const Manager = () => {
  return (
   <>
   <div className='pt-6'>
  <div className="p-4 pt-3 m-4 bg-gray-50 border-l-4 border-r-4 border-stone-200 border-x-first rounded-lg overflow-hidden md:pt-8 lg:pt-11">
  <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="relative">

        <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900 text-raleway">
          <p>
            “ Let us take the load off your shoulders and make your move stress-free ”
          </p>
        </div>
        <footer className="mt-8">
          <div className="md:flex md:items-center md:justify-center">
            <div className="md:flex-shrink-0">
              <img alt="Muhammad Rahman" loading="lazy" className="mx-auto h-16 w-[20] object-contain rounded-full" src="/image/avatar.png" />
            </div>
            <div className=" text-center md:mt-0 md:ml-4 md:flex md:items-center">
              <div className="text-base leading-6 font-medium text-gray-900">
                Muhammad Rahman
              </div>
              <svg className="hidden md:block mx-1 h-5 w-5 text-purple-600" fill="currentColor" style={{color: '#ff89ff'}} viewBox="0 0 20 20">
                <path d="M11 0h3L9 20H6l5-20z">
                </path>
              </svg>
              <div className="text-base leading-6 font-medium text-gray-500">
                Manager
              </div>
            </div>
          </div>
        </footer>
     
    </div>
  </div>
</div>
</div>

   </>
  )
}

export default Manager