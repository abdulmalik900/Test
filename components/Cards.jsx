"use client"
import Image from 'next/image';


const Cards = () => {
  return (
    <>
 <section className="bg-gray-50 py-10"> 
  <div
  className="container mx-auto px-2"> 
    <div className="-mx-4 flex flex-wrap items-center mb-2"> 
      <div className="px-4 w-full md:w-10/12"> 
        <h3 className="capitalize font-bold sm:text-lg md:text-lg lg:text-2xl text-gray-900">Our Top Available Cars</h3>
        <div className="bg-primary-500 mb-3 pb-1 w-2/12" />                             
      </div>                         
    </div>
    <div className="-mx-3 flex flex-wrap justify-center mb-12"> 
      <div className="p-3 w-full md:w-6/12 lg:w-4/12"> 
        <div className="bg-white border shadow-md text-gray-500"> 
        <a href="#">
  <Image
  // Pic 1 
    src="/image/ok.jpg"
    alt="..."
    objectFit='contain'
    width={600}
    height={500}
    className="hover:opacity-90 w-full"
  />
</a>
          <div className="p-6">
            <h4 className="font-bold mb-2 text-gray-900 text-xl"><a href="#" className="hover:text-gray-500">Mitsubishi Fuso Canter 3-ton freezer </a></h4>
            <p className="mb-2 text-sm">It is a medium-duty truck with a maximum gross weight of 6,000 pounds (3 tons) It is a popular choice for businesses of all sizes, and is commonly used for a variety of commercial purposes, such as delivery, construction, and landscaping.
            It is a reliable, fuel-efficient, and versatile truck that is available for your delivery work.</p>
            
           
          </div>                                 
        </div>                             
      </div>
      <div className="p-3 w-full md:w-6/12 lg:w-4/12"> 
        <div className="bg-white border shadow-md text-gray-500"> 
        <a href="#">
  <Image 

  // Pic 2
    src="/image/freezer.jpg"
    alt="..."
    objectFit='contain'
    width={600}
    height={500}
    className="hover:opacity-90 w-full"
  />
</a>
          <div className="p-6">
            <h4 className="font-bold mb-2 text-gray-900 text-xl"><a href="#" className="hover:text-gray-500">Honda Accord 2018</a></h4>
            <p className="mb-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            
          </div>                                 
        </div>                             
      </div>
      <div className="p-3 w-full md:w-6/12 lg:w-4/12"> 
        <div className="bg-white border shadow-md text-gray-500"> 
        <a href="#">
  <Image 
  // pic 3
    src="/image/rr.jpg"
    alt="..."
    width={600}
    height={500}
    objectFit='contain'
    className="hover:opacity-90 w-full"
  />
</a>
          <div className="p-6">
            <h4 className="font-bold mb-2 text-gray-900 text-xl"><a href="#" className="hover:text-gray-500">BMW M3 2010</a></h4>
            <p className="mb-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          
          </div>                                 
        </div>                             
      </div>
      <div className="p-3 w-full md:w-6/12 lg:w-4/12"> 
        <div className="bg-white border shadow-md text-gray-500"> 
        <a href="#">
  <Image 
    src="/image/ww.jpg"
    alt="..."
    objectFit='contain'
    width={600}
    height={500}
    className="hover:opacity-90 w-full"
  />
</a>
          <div className="p-6">
            <h4 className="font-bold mb-2 text-gray-900 text-xl"><a href="#" className="hover:text-gray-500">Chevrolet Equinox 2005</a></h4>
            <p className="mb-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          
          </div>                                 
        </div>                             
      </div>
      <div className="p-3 w-full md:w-6/12 lg:w-4/12"> 
        <div className="bg-white border shadow-md text-gray-500"> 
        <a href="#">
  <Image 
    src="/image/wee.jpg"
    alt="..."
    objectFit='contain'
    width={600}
    height={500}
    className="hover:opacity-90 w-full"
  />
</a>
          <div className="p-6">
            <h4 className="font-bold mb-2 text-gray-900 text-xl"><a href="#" className="hover:text-gray-500">Ferrari 458 Spider 2015</a></h4>
            <p className="mb-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            
          </div>                                 
        </div>                             
      </div>
      <div className="p-3 w-full md:w-6/12 lg:w-4/12"> 
        <div className="bg-white border shadow-md text-gray-500"> 
        <a href="#">
  <Image 
    src="/image/ton1.png"
    alt="..."
    objectFit='contain'
    width={600}
    height={500}
    className="hover:opacity-90 w-full"
  />
</a>
          <div className="p-6">
            <h4 className="font-bold mb-2 text-gray-900 text-xl"><a href="#" className="hover:text-gray-500">Ford Mustang Shelby 2017</a></h4>
            <p className="mb-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          
          </div>                                 
        </div>                             
      </div>                         
    </div>
   
  </div>                 
</section>

  
  
    </>
  )
}

export default Cards

