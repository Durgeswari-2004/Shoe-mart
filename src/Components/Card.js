import React from 'react'
import img1 from "../Images/back.jpeg";
import img2 from "../Images/s2.jpeg";
import img3 from "../Images/s3.jpeg"
import img4 from "../Images/s4.jpeg";
import img5 from "../Images/s5.jpeg"
import img6 from "../Images/s6.jpeg"
import img7 from "../Images/s7.jpeg"
import img8  from "../Images/s8.jpeg"
import "../Components/Card.css"

export default function Card() {
  return (
    <section id='header3'>
    <div className='divmain'>
     <div className='product'>
        <img src={img1} alt="" />
        <h2>Casual shoes</h2>
        <h2>Price : Rs.500</h2>
        <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product1'>
        <img src={img2} alt="" />
        <h2>College wears</h2>
        <h2>Price : Rs.600</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product2'>
        <img src={img3} alt="" />
        <h2>Office wears</h2>
        <h2>Price : Rs.70</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product3'>
        <img src={img4} alt="" />
        <h2>Unisex wears</h2>
        <h2>Price : Rs.400</h2>
        <h2>Range : Short</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
    </div>



    <div className='divmain'>
     <div className='product'>
        <img src={img5} alt="" />
        <h2>Casuals</h2>
        <h2>Price : $500</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product1'>
        <img src={img6} alt="" />
        <h2>Casuals</h2>
        <h2>Price : Rs.300</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product2'>
        <img src={img7} alt="" />
        <h2>Royal wears</h2>
        <h2>Price : Rs.700</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product3'>
        <img src={img8} alt="" />
        <h2>Branded</h2>
        <h2>Price : Rs.750</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>

    </div>
    </section>
  )
}
