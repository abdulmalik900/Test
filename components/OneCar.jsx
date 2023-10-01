import Image from 'next/image';

const OneCar = () => {
  return (
    <>
  <div 
  className="container mx-auto px-4 space-y-12">
  <div
  
  className="flex flex-wrap items-center">
    <div className=" w-full lg:w-6/12">
    <Image 
      src="/image/one.jpg"
      alt=""
      width={600}
      height={400}
     
    />
    </div>
    <div className=" w-full lg:w-6/12">
      <div className=" bg-white lg:-ml-12 lg:pl-12 lg:py-12">
        <h3 className="capitalize font-bold mt-3 text-gray-900 text-xl md:text-2xl lg:text-3xl xl:text-4xl">Experience a Rental & Shifting service like never before</h3>
        <div className="bg-primary-500 pb-1 w-2/12" />
        <p className="mb-6  ">Experience a rental and shifting service like never before with M.R ShiftingMovers! Our team of professionals is dedicated to providing top-quality rental and shifting services that exceed your expectations. Whether you re moving houses, offices, or need a rental vehicle, we have you covered. With our wide range of rental options and exceptional customer service, we ensure a seamless and hassle-free experience. Contact us today to discover how M.R ShiftingMovers can fulfill all your rental and shifting needs!</p>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default OneCar;
