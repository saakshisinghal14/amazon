import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [ ],
    userinfo: null,
}

export const amazonSlice= createSlice({
    name: 'amazon',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const item=state.products.find((item)=> item.id===action.payload.id)
            if(item){
                item.quantity+=action.payload.quantity;
            }
            else{
state.products.push(action.payload);}
        },
        increment:(state,action)=>{
            const item=state.products.find((item)=> item.id===action.payload)
           
                item.quantity++;
            
        },
        decrement:(state,action)=>{
            const item=state.products.find((item)=> item.id===action.payload)
           if(item.quantity===1){
            item.quantity=1;
           }
           else{
                item.quantity--;}
            
        },
        deleteItem:(state,action)=>{
state.products=state.products.filter((item)=>item.id!==action.payload)
        },
        resetCart:(state)=>{
            state.products=[ ]
        },
// User authentication
  
          setUserInfo:(state,action)=>{
state.userinfo=action.payload;
    },

    userSignOut:(state)=>{
state.userinfo=null;
    },
    },

    

})
export const{addToCart,increment,decrement,deleteItem,resetCart,setUserInfo,userSignOut}=amazonSlice.actions;
export default amazonSlice.reducer;