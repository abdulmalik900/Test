import React from 'react'

const Test = () => {
  return (
   <>
   
<footer className="bg-black text-white">
  <div className="container mx-auto px-4 py-6 sm:grid sm:grid-cols-3">
    <div>
      <h3 className="text-lg font-bold mb-2">Reservation</h3>
      <ul>
        <li><a href="#">Car Hire</a></li>
        <li><a href="#">Modify or Cancel</a></li>
        <li><a href="#">Get a Receipt</a></li>
      </ul>
    </div>
    <div>
      <h3 className="text-lg font-bold mb-2">Customer Services</h3>
      <ul>
        <li><a href="#">Help/FAQs</a></li>
        <li><a href="#">Press</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </div>
    <div>
      <h3 className="text-lg font-bold mb-2">Company</h3>
      <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Career</a></li>
        <li><a href="#">Report &amp; Governance</a></li>
      </ul>
    </div>
  </div>
  <div className="bg-white text-black py-4">
    <p className="text-center">LUXURYCARS</p>
    <div className="flex justify-end px-4">
      <a href="#"><i className="fab fa-facebook fa-lg mx-2" /></a>
      <a href="#"><i className="fab fa-twitter fa-lg mx-2" /></a>
      <a href="#"><i className="fab fa-instagram fa-lg mx-2" /></a>
    </div>
  </div>
</footer>



   </>
  )
}

export default Test