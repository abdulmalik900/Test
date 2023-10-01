"use client"
import { useState, useCallback } from 'react';
import Image from 'next/image';

function Faq() {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);
  const [showAnswer4, setShowAnswer4] = useState(false);
  const [showAnswer5, setShowAnswer5] = useState(false);
  const [showAnswer6, setShowAnswer6] = useState(false);

  const handleToggleAnswer1 = useCallback(() => {
    setShowAnswer1(!showAnswer1);
  }, [showAnswer1]);

  const handleToggleAnswer2 = useCallback(() => {
    setShowAnswer2(!showAnswer2);
  }, [showAnswer2]);

  const handleToggleAnswer3 = useCallback(() => {
    setShowAnswer3(!showAnswer3);
  }, [showAnswer3]);

  const handleToggleAnswer4 = useCallback(() => {
    setShowAnswer4(!showAnswer4);
  }, [showAnswer4]);

  const handleToggleAnswer5 = useCallback(() => {
    setShowAnswer5(!showAnswer5);
  }, [showAnswer5]);

  const handleToggleAnswer6 = useCallback(() => {
    setShowAnswer6(!showAnswer6);
  }, [showAnswer6]);

  return (
    <div className="my-8 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-8 text-third">Frequently Asked Questions</h2>
      <div className=" flex items-center justify-center flex-col ">
        <div className=' max-w-3xl flex-1 pl-5 md:pl-0  items-start lg:max-w-5xl'>
        <div className="flex mb-4">
          <button className="text-gray-600 hover:text-gray-900 mr-2" onClick={handleToggleAnswer1}>
            {showAnswer1 ? '-' : '+'}
          </button>
          <h3 className="lg:text-lg  md:text-base  text-base  font-medium">What services does M.R ShiftingMovers offer in UAE?</h3>
        </div>
        {showAnswer1 && (
          <p className="text-gray-600  mb-4">
         M.R ShiftingMovers offers a range of services including furniture removal for houses, villas, apartments, and office shifting. We also provide professional carpenter labor and transport services.
          </p>
        )}
        <div className="flex  mb-4">
          <button className="text-gray-600 hover:text-gray-900 mr-2" onClick={handleToggleAnswer2}>
            {showAnswer2 ? '-' : '+'}
          </button>
          <h3 className="lg:text-lg  md:text-base  text-base  font-medium">How experienced are your movers and packers?</h3>
        </div>
        {showAnswer2 && (
          <p className="text-gray-600 mb-4">
           Our movers and packers at M.R ShiftingMovers are highly experienced and trained professionals. They have extensive knowledge in handling and transporting furniture, ensuring a smooth and efficient relocation process.
          </p>
        )}
        <div className="flex  mb-4">
          <button className="text-gray-600 hover:text-gray-900 mr-2" onClick={handleToggleAnswer3}>
            {showAnswer3 ? '-' : '+'}
          </button>
          <h3 className="lg:text-lg  md:text-base  text-base  font-medium">Can you handle both residential and commercial moves?</h3>
        </div>
        {showAnswer3 && (
          <p className="text-gray-600 mb-4">
            Absolutely! We specialize in both residential and commercial moves. Whether you are moving your home or office, M.R ShiftingMovers has the expertise to handle all types of relocations with utmost care and efficiency.
          </p>
        )}
        <div className="flex items-center mb-4">
          <button className="text-gray-600 hover:text-gray-900 mr-2" onClick={handleToggleAnswer4}>
            {showAnswer4 ? '-' : '+'}
          </button>
          <h3 className="lg:text-lg  md:text-base  text-base  font-medium">Do you provide packing materials for the move?</h3>
        </div>
        {showAnswer4 && (
          <p className="text-gray-600 mb-4">
            Yes, we provide high-quality packing materials to ensure the safety of your belongings during the move. Our team will carefully pack your furniture and other items using appropriate packing materials to prevent any damage or breakage.
          </p>
        )}
        <div className="flex items-center mb-4">
          <button className="text-gray-600 hover:text-gray-900 mr-2" onClick={handleToggleAnswer5}>
            {showAnswer5 ? '-' : '+'}
          </button>
          <h3 className="lg:text-lg  md:text-base  text-base  font-medium">How can I get a quote for my upcoming move?</h3>
        </div>
        {showAnswer5 && (
          <p className="text-gray-600 mb-4">
            Getting a quote is easy! Simply visit our website or give us a call, and our friendly customer service team will assist you in providing a personalized quote based on your specific moving requirements.
          </p>
        )}
        <div className="flex items-center mb-4">
          <button className="text-gray-600 hover:text-gray-900 mr-2" onClick={handleToggleAnswer6}>
            {showAnswer6 ? '-' : '+'}
          </button>
          <h3 className="lg:text-lg  md:text-base  text-base  font-medium">Do you offer cleaning services for the old location after the move?</h3>
        </div>
        {showAnswer6 && (
          <p className="text-gray-600 mb-4">
            Yes, we offer cleaning services for the old location after the move to ensure that it is left in a clean and tidy condition. Our team will clean the space according to your specifications, allowing you to focus on settling into your new location
          </p>
        )}
        </div>
      </div>
     
    </div>
  );
}

export default Faq;
