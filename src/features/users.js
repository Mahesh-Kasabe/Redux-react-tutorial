import { createSlice } from "@reduxjs/toolkit"
import { UserData } from "../FakeData";

export const userSlice = createSlice({
    name: "users",
    initialState: { value: UserData },
    reducers: {
        addUser: (state,action) => {
            state.value.push(action.payload);
        },
        deleteUser: (state,action) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id); 
        },
        update: (state,action) => {
             state.value.map((user) => {
                 if(user.id === action.payload.id){
                     user.username = action.payload.username;
                 }
             })
        } 
    }
})

export const { addUser,deleteUser,update } = userSlice.actions; 
export default userSlice.reducer;