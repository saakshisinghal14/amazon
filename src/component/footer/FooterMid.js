import React from 'react'
import {logo,In_Flag} from '../../assets/index'
const FooterMid = () => {
    return (
        <div className='w-full bg-amazon_light text-white'>
            <div className='w-full border-b-[1px] border-gray-500 p-10'>

                <div className='max-w-5xl mx-auto text-gray-300 '>
                    <div className='w-full grid grid-cols-1  md:grid-cols-2  mdl:grid-cols-4 gap-6 md:place-items-center md:items-start'>
                      <div className='w-full'>
                    
                   
                   <h3 className='font-titleFont text-white text-base font-semibold mb-3 '>
                            Get to Know Us</h3>
                        <ul className='flex flex-col gap-2 font-bodyFont'>
                            <li className='footerLink'>
                              About Us
                            </li>
                            <li className='footerLink'>
                                Careers
                            </li>
                            <li className='footerLink'>
                                Press Releases
                            </li>
                            <li className='footerLink'>
                                Amazon Science
                            </li>
                        </ul>
                   </div>
                    
                      <div className='w-full'>
                      <h3 className='font-titleFont text-white text-base font-semibold mb-3 '>
                            Connect with Us</h3>
                        <ul className='flex flex-col gap-2 font-bodyFont'>
                            <li className='footerLink'>
                               FaceBook
                            </li>
                            <li className='footerLink'>
                                Twitter
                            </li>
                            <li className='footerLink'>
                                Instagram
                            </li>
                        </ul>
                      </div>
                      <div className='w-full'>
                      <h3 className='font-titleFont text-white text-base font-semibold mb-3 '>
                            Make Money with Us</h3>
                        <ul className='flex flex-col gap-2 font-bodyFont'>
                            <li className='footerLink'>
                                Sell on Amazon
                            </li>
                            <li className='footerLink'>
                                Sell under Amazon Acceleration
                            </li>
                            <li className='footerLink'>
                                Protect and build Your Brand
                            </li>
                            <li className='footerLink'>
                                Amazon Global Selling
                            </li>
                            <li className='footerLink'>
                                Become an Affiliate
                            </li>
                            <li className='footerLink'>
                              Fulfilment by Amazon
                            </li>
                            <li className='footerLink'>
                               Advertise Your Products
                            </li>
                            <li className='footerLink'>
                                Amazon Pay on Merchants
                            </li>
                            
                        </ul>
                      </div>
                      <div className='w-full'>
                      <h3 className='font-titleFont text-white text-base font-semibold mb-3 '>
                            Let Us Help You</h3>
                        <ul className='flex flex-col gap-2 font-bodyFont'>
                            <li className='footerLink'>
                               Covid-19 and Amazon
                            </li>
                            <li className='footerLink'>
                                Your Account
                            </li>
                            <li className='footerLink'>
                                Returns Centre
                            </li>
                            <li className='footerLink'>
                                100% Purchase Protection
                            </li>
                            <li className='footerLink'>
                                Amazon App Download
                            </li>
                            <li className='footerLink'>
                                Help
                            </li>
                        </ul>
                    </div>
                      </div>
                    </div>


            </div>
            <div className='w-full flex gap-6 items-center justify-center py-6 '>
<div>
    <img src={logo} alt="logo" className='w-20 pt-3 src={logo} ' />
</div>
<div className='flex gap-2 '>
    <p className='flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1'>English</p>
</div>
<div className='flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1'>
    <img src={In_Flag} alt="Indian flag" className='w-6' />
    <p>India</p>
</div>
            </div>
        </div>
    )
}

export default FooterMid
