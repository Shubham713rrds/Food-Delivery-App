import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
     <h3 className='text-orange-500 font-bold text-2xl text-center'>Quick Delivery App</h3>
      <div className='w-[1520px] mx-auto grid md:grid-cols-2'>
        <img className='w-[550px] mx-auto my-4' src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp'/>
        <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'>Food - Delivery</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convenience on-demand</h1>
            <div>
            <p>
            Welcome to YumEats 🚚 , your gateway to a world of culinary delights brought straight to
            your doorstep. Indulge in the ultimate dining experience, right from the comfort of your 
            own space. With a seamless blend of technology and gastronomy, we're here to redefine the 
            way you savor your favorite meals. Immerse yourself in the art of customization, where each dish becomes an expression of your palate. Craft your perfect meal by adding or modifying ingredients, just as you would at your favorite eatery. With a few clicks, you can curate a culinary masterpiece tailored to your exact desires.
            </p>
            <br />
            <p>
            Join us in this culinary adventure and embrace a new way of dining. Whether you're sharing a meal with loved ones, treating yourself, or simply exploring new flavors, YumEats is your reliable companion. Elevate your dining experiences with us today. Bon appétit!
            </p>
            </div>
            <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'> Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Delivery
