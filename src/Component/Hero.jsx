import React from 'react'

import kitchen1 from '../Images/good-soul-shop-DlO0yz4U67A-unsplash.jpg'
import kitchen2 from '../Images/jorge-de-jorge-pHbAY99SRB4-unsplash.jpg'

const Hero = () => {
   return (
      <section className='bg-[#F3F3F3] w-full px-10 py-24'>
         {/* main div start */}
         <div className='mainDiv h-[650px] bg-white py-5 px-10 rounded-xl relative'>

            {/* background design start */}
            <div>
               <div className='w-16 h-16 rounded-full bg-[#305F63] absolute top-[180px] -left-[30px]'></div>
               <div className='w-4 h-4 rounded-full bg-[#E09504] absolute top-[100px] left-[100px]'></div>

               <div className='w-16 h-16 rounded-full bg-[#E09504] absolute bottom-[50px] -right-[30px]'></div>
               <div className='w-4 h-4 rounded-full bg-[#305F63] absolute bottom-[200px] right-[100px]'></div>
            </div>
            {/* background design end */}

            <header className='w-full h-14'>
               <nav className='flex items-center justify-start gap-11'>
                  <div className='font-bold flex items-center gap-3'>
                     <h1 className='text-white bg-[#21383E] w-7 h-7 flex items-center justify-center rounded-full'>G</h1>
                     <h1 className='uppercase'>Goodfood</h1>
                  </div>

                  <div>
                     <ul className='flex gap-5 items-center'>
                        <li><a href="@">How it works</a></li>
                        <li><a href="@">Library</a></li>
                        <li><a href="@">Pricing</a></li>
                     </ul>
                  </div>
               </nav>

               {/* top right image start */}
               <div className='relative'>
                  <img className='absolute right-0 -top-28 w-[250px] h-[450px] rounded-full' src={kitchen1} alt="kitchen pic" />

                  <div className='bg-gray-200 flex items-center justify-around h-[70px] w-[330px] rounded-xl absolute top-10 right-[180px]'>

                     <div className='text-5xl'>🧁</div>

                     <div>
                        <p className='font-bold'>Strawberry Cupcakes</p>
                        <p>Payment Received</p>
                     </div>

                     <div className='bg-black w-px h-[80%]'>
                     </div>

                     <div className='font-bold'>$6</div>
                  </div>
               </div>
               {/* top right image end */}
            </header>

            {/* hero section start */}
            <section className='hero-section'>

               <div className='flex items-end'>
                  <div className='h-full'>
                     <img className='w-[250px] h-[450px] rounded-full absolute -bottom-16' src={kitchen2} alt="kitchen 2nd pic" />

                     <div className='absolute bottom-72 left-[170px] bg-[#e09504] rounded-full rounded-bl-none text-white px-4 py-2 w-44 text-center'>
                        <p>Very Delicious!</p>
                     </div>

                     <div className='absolute left-60 bottom-[70px] py-3 pl-7 pr-3 bg-white flex justify-between w-[650px] rounded-full shadow-lg shadow-black'>
                        <div>
                           <p>Your email address</p>
                           <p className='font-bold'>asrafmail01@gmail.com</p>
                        </div>

                        <div>
                           <button className='bg-[#305F63] text-white rounded-full px-5 py-3'>Get Started</button>
                        </div>
                     </div>
                  </div>

                  <div className='w-full mt-44 text-center flex flex-col justify-center items-center'>
                     <h1 className='w-[325px] text-5xl font-bold mb-5'>Help You to Grow Your Food Business</h1>
                     <p className='w-[325px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, maxime modi earum iste eligendi autem alias hic dolores a officiis </p>
                  </div>
               </div>

            </section>
            {/* hero section end */}
         </div>
         {/* main div end */}

      </section>
   )
}

export default Hero