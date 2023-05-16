
import React, { useEffect, useRef, useState } from 'react'
import {logo} from "../../assets/index"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {allItems} from '../../constants'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import HeaderBottom from './HeaderBottom';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Logout } from '@mui/icons-material';
import { getAuth, signOut } from "firebase/auth";
import { userSignOut } from '../../redux/amazonSlice';
const Headers = () => {
const dispatch = useDispatch()
  const auth = getAuth();
const handleLogout=()=>{
  signOut(auth).then(() => {
    console.log("sign out successfully")
dispatch((userSignOut()))

  }).catch((error) => {
    console.log(error);
  });
}


  const [showAll,setshowAll]= useState(false);
const products=useSelector((state)=>state.amazonReducer.products)
const userInfo=useSelector((state)=>state.amazonReducer.userinfo)

// console.log(userInfo )
const ref =useRef();
useEffect(()=>{
document.body.addEventListener("click",(e)=>{
  if(e.target.contains(ref.current)){
    showAll && setshowAll(false);
  }
})
},[ref,showAll]);
  
  return (
<div className='w-full sticky top-0 z-50'>
    <div className='w-full  bg-amazon_blue text-white mx-auto px4 py-3 flex item-center  gap-4'>
     <Link to='/'>
     <div className="headerHover">
     <img src={logo} alt="logo" className="w-24 mt-2" />
 </div>
     </Link>

<div className='headerHover hidden lgl:inline-flex'>
<LocationOnOutlinedIcon/>
<p  className='text-sm text-lightText font-light flex flex-col'> Delivery to {" "}<span  className='text-sm text- semibold -mt-1 text-whiteText'>Delhi</span></p>


</div>

<div className='h-10 rounded-md  hidden mdl:flex  flex-grow relative '>
  <span onClick={()=>setshowAll(!showAll)}className='w-14 h-full  bg-gray-200  border-2 hover:bg-gray-300 duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center cursor-pointer rounded-t1-md bounded-b1-md'>All <span><ArrowDropDownOutlinedIcon/></span></span>
  {showAll&& (
    <div className='absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50'>
      <ul>
        {/* <li className='text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200'>
          All Department
        </li> */}
        {allItems.map((item)=>(
          <li key={item.id} className='text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200'>{item.title}</li>
        )

        )}
      
      </ul>
    </div>

  )}
  <input type="text"  className='h-full text-base text-amazon_blue flex-grow outline-none border-none'/>

<span className='w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md bounded-br-md'><SearchOutlinedIcon/></span>
</div>

 <Link to='/signin'>
<div className='flex flex-col items-start justify-cen
headerHover'> 
 

  {
    userInfo?  (
    <p
    className='text-sm text-gray-100 font-medium'>{userInfo.userName}</p>
    ):  (<p
    className='text-xs text-lightText font-light'>Hello, sign in</p>)
  }

  <p className='text-sm font-semibold -mt-1 text-whiteText hidden mdl:inline-flex'> Account & lists{ " "}
    <span><ArrowDropDownOutlinedIcon/></span> </p>
</div>
</Link>

<div className= " hidden lgl:flex flex-col items-start justify-center headerHover">
  <p className='text-sm mdl:text-xs text-white mdl:text-lightText font-light'>Returns</p>
  <p className='text-sm font-semibold -mt-1 text-whiteText'>& Orders</p>
</div>

<Link to='/cart'>
<div className='flex items-start justify-center headerHover relative'>
  <ShoppingCartOutlinedIcon/>
  <p className='text-xs font-semibold mt-3 text-whiteText'>Cart
   <span className='absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847]
   text-amazon_blue rounded-full flex justify-center items-center '>{products.length>0? products.length:0}</span></p>

 </div>
</Link>

{
  userInfo &&(
    <div onClick={handleLogout} className='flex flex-col justify-center items-center headerHover relative'>
      <Logout/>
      <p className='hidden mdl:inline-flex text-xs font-semibold text-whiteText'>
        Logout
      </p>
      
    </div>
  )
}


    </div>
    {/* header bottom */}
   < HeaderBottom/>
    </div>
  )
}

export default Headers
