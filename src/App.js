import React from 'react'
import Header from './component/header/Headers';

import Footer from './component/footer/Footers';
import Home from './pages/Home';

import Signin from './pages/Login';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Outlet,
  ScrollRestoration,
  
} from "react-router-dom";

import { productData } from './api/api';
import Cart from './pages/Cart';
import Registration from './pages/Registration';




const Layout=()=>{
  return(
    <div>
        
    <Header/>
    <ScrollRestoration/>
    <Outlet/>
    <Footer/>
  </div>
  )
}
function App() {

  const router=createBrowserRouter(createRoutesFromElements(
    <Route>
  <Route path="/" element={<Layout/>}>

    <Route index element={<Home/>}loader={productData}></Route>

    <Route path='/cart' element={<Cart/>}></Route>
   
    </Route>
    <Route path="/signin" element={<Signin/>}> </Route>
    <Route path="/registration" element={<Registration/>}> </Route>
   
    

  </Route>
  ))

  

 
  


  return (
    <div className='font-bodyFont 0 bg-gray-100'>
     {/* <Header/>
    <Banner/>
    <Footer/> */}
    <RouterProvider router={router}>
   
    </RouterProvider>
  



    </div>
  )
}

export default App
