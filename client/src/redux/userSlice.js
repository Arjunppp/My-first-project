import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    currentUser: null,
    loading: true,
    error: null,
  };


const userslice = createSlice ({
    name:'user',
    initialState,
    reducers :{
        signInStart : (state) => {
            state.loading =false;
        },
        signInSucess:(state,action) => 
        {
            state.currentUser = action.payload;
            state.loading =true;
            state.error=null;
        },
        signInFailure : (state, action) => {
            state.error =action.payload;
            state.loading =true;
        }
    }
});


export const {signInFailure ,signInStart ,signInSucess} = userslice.actions
export default userslice.reducer;