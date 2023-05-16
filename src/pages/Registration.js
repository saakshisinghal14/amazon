// documentation of firebase signin  https://firebase.google.com/docs/auth/web/start
//  for spinner we use this website https://mhnpd.github.io/react-loader-spinner/
import React from 'react'
import {darkLogo} from '../assets/index'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { motion } from 'framer-motion'
import {RotatingLines } from  'react-loader-spinner'


const Registration = () => { 

    const navigate = useNavigate()
    const auth = getAuth();

    const [clientName,setName]= useState("");
    const [clientEmail,setEmail]= useState("");
    const [clientPassword,setPassword]= useState("");
    const [clientCPassword,setCPassword]= useState("");

//Error  Message start
const [errclientName,setErrName]= useState("");
const [errclientEmail,setErrEmail]= useState("");
const [errclientPassword,setErrPassword]= useState("");
const [errclientCPassword,setErrCPassword]= useState("");
const [firebaseErr,setFirebaseErr]= useState("");


//Loading state
const [Loading, setLoading] = useState(false);
const [successMsg,setSuccessMsg] = useState("");


    // Handle Function 
    const handleName=(e)=>{
        setName(e.target.value)
        setErrName("")
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value)
        setErrEmail("")
    }

    const handlePassword=(e)=>{
        setPassword(e.target.value)
        setErrPassword("")
    }
    const handleCPassword=(e)=>{
        setCPassword(e.target.value)
        setErrCPassword("")
    }

    //handle submit button
const handleRegistration=(e)=>{
    e.preventDefault();
   if(!clientName){
    setErrName("! Enter your name")
   }
   if(!clientEmail){
    setErrEmail("! Enter your Email")
    setFirebaseErr("")
   }
   else{
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(clientEmail)) {

        setErrEmail('Please enter a valid email address');
      } else {
        setErrEmail("");
      }
  
   }
   if(!clientPassword){
    setErrPassword("! Enter your Password")
   }
   else{
    if(clientPassword.length<6){
        setErrPassword("Password must be at least 6 characters")
    } }
    if(!clientCPassword){
        setErrCPassword("Confirm your password")
    }
    else{
        if(clientCPassword!==clientPassword){
            setErrCPassword(" Password  not match")
        }
    }
    if(!clientCPassword){
        setErrCPassword("! Enter your Re-enter Password")
       }
       
     if(clientName && clientEmail   && clientPassword  && clientPassword.length>=6 &&clientCPassword===clientPassword ){
    setLoading(true)



    createUserWithEmailAndPassword(auth, clientEmail, clientPassword)
  .then((userCredential) => {
    // Signed in 
    
    updateProfile(auth.currentUser, {
        displayName: "saakshi Singhal", photoURL: "https://example.com/jane-q-user/profile.jpg",
        
      }).then(() => {
        // Profile updated!
        // ...
      });
   


    const user = userCredential.user;
  
setLoading(false);
setSuccessMsg("Account Created Successfully");
setTimeout(()=>{
    navigate('/signin')
},3000)
  })
  .catch((error) => {
    setLoading(false);
    const errorCode = error.code;
    const errorMessage = error.message;
    if(errorCode.includes("auth/email-already-in-use")){
setFirebaseErr("Email Already in use, Try another one");
    }
  });
    
    setName(""); setPassword(""); setEmail(""); setCPassword(""); setFirebaseErr("");
    
     }



}



  return (
    <div className='w-full'>
       <div className='w-full bg-gray-100 pb-10'>
<form className=' w-[370px] mx-auto flex flex-col items-center'>
<img src={darkLogo} className='w-32' alt="" />
<div className=' w-full border border-zinc-200 p-6'>
    <h2 className='font-titleFont text-3xl font-medium mb-4 '>
        Create Account
    </h2>
    <div className=' flex flex-col gap-3'>
        <div className='flex flex-col gap-2'>
            <p className='text-sm font-medium'>Your Name</p>
            <input  value={clientName} type="text" className=' w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100 ' onChange={handleName} />
            {
                errclientName&& (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'> {errclientName}</p>
                )
            }
            </div>
            <div  className='flex flex-col gap-2'>
            <p className='text-sm font-medium'>Email or mobile phone number</p>
            <input  value={clientEmail} type="email" className=' w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100 '  onChange={handleEmail}/>
            {
                errclientEmail&& (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'> {errclientEmail}</p>
                )}
                   {
                firebaseErr&& (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'> {firebaseErr}</p>
                )}
            </div>
            <div  className='flex flex-col gap-2'>
            <p className='text-sm font-medium'>Password</p>
            <input value={clientPassword} type="password" className=' w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100 '  onChange={handlePassword} />
            {
                errclientPassword&& (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'> {errclientPassword}</p>
                )}
            </div>
            <div  className='flex flex-col gap-2'>
            <p className='text-sm font-medium'>Re-enter password</p>
            <input  value={clientCPassword} type="password" className=' w-full  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100 ' onChange={handleCPassword}  />
            {
                errclientCPassword&& (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'> {errclientCPassword}</p>
                )}
            <p className='text-xs text-gray-600'>Password must be atleast 6 characters </p>

</div>
<button  onClick={handleRegistration} className=' w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput'>Continue</button>
        
        {
            Loading && (
                <div className=' flex justify-center'>
                    <RotatingLines
  strokeColor="#febd69"
  strokeWidth="5"
  animationDuration="0.75"
  width="50"
  visible={true}
/>
                </div>
            )
        }
        {
            successMsg &&(
                <div>
                    <motion.p
                    initial={{y:10,opacity:0}}
                    animate={{y:0,opacity:1}}
                    transition={{duration:0.5}}
                    className='text-base font-titleFont font-semibold text-green-500 border border-green-500 px-2 text-center'
                    >
                        {successMsg}
                    </motion.p>
                </div>
            )
        }


    </div>
   <p className='text-xs text-black leading-4 mt-4'>
    By Continuing, you agree to Amazon's{" "}
    <span className='text-blue-600'>Conditions of Use </span> and {" "} <span className='text-blue-600'>Privacy Notice.</span>
   </p>
   <div>
    <p className='text-xs text-black '> Already have an account? <Link to='/signin'><span className=' text-xs text-blue-500 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'  >Sign in <span><ArrowRightIcon></ArrowRightIcon></span></span></Link>  </p>
    <p className='text-xs text-black '> Buying for work? <span className=' text-xs text-blue-500 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>Create a free business account</span> 

</p>
   </div>

</div>
</form>
       </div>
       <div className=' w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col gap-4 justify-center items-center py-10'>
<div className=' flex items-center gap-6 '>
  <p className=' text-xs text-blue-500 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>Conditions of Use</p>
  <p className=' text-xs text-blue-500 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>Privacy Notice</p>
  <p className=' text-xs text-blue-500 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>Help</p>
</div>
<p className='text-xs text-gray-600 '> © 1996-2023, Amazon.com, Inc. or its affiliates</p>
   </div>

    </div>
  )
}

export default Registration

