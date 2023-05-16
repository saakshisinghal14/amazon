import React from 'react'
import { footerBottomItem} from '../../constants';
const Footerbottom = () => {
console.log(footerBottomItem)

  return (
    <div className='w-full bg-footerBottom py-8' >
     
     <div className='max-w-5xl mx-auto px-4'>
<div className='w-full grid grid-cols-3 md:grid-cols-5 gap-3 place-content-center text-gray-400'>

{
  footerBottomItem.map((items)=>(
    <div key={items.id} className='group cursor-pointer'>
    <h3 className=' w-24 font-semibold text-[12px] text-[#DDD] group-hover: underline leading-3 mb=[2px] m-1'> {items.title }</h3>
    <p className='w-24 text-[12px] text-[#999] leading-3 tracking-normal'>{items.des}</p>
  </div>
  ))
}
</div>
     </div>
     <div className='flex flex-col justify-center items-center px-4'>
<div>
  <ul className="text-gray-300 text-sm gap-2 md:gap-4 py-2 mt-4 flex">
  <li className="font-normal text-[12px] hover:underline cursor-pointer text-[#DDD] leading-3">Conditions of Use & Sale</li>
  <li className="font-normal text-[12px] hover:underline cursor-pointer text-[#DDD] leading-3">Privacy Notice</li>
  <li className="font-normal text-[12px] hover:underline cursor-pointer text-[#DDD] leading-3">Interest-Based Ads</li>
  </ul>
</div>
<div>
<p className="font-normal text-[12px] text-[#DDD] leading-3">© 1996-2023, Amazon.com, Inc. or its affiliates</p>
</div>
     </div>

    </div>
  )
}

export default Footerbottom
