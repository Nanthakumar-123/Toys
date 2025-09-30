import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./Cartslice";




export const store=configureStore({




    // creats and exports redux store stance for name withstore
    reducer:{
        cart:Cartslice,
    },
    devTools:true,
    //  extension toll for debugging
});
