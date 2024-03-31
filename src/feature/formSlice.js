import {createSlice, nanoid} from '@reduxjs/toolkit'

//initial state of data
const initialState = {
    formData:[{
        id:nanoid(),
        title:"Default News!!",
        category:"Default",
        date:'30-03-2024',
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,debitis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,debitis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,debitis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,debitis?",
        image:null,
        likes:200,
        comment:50,
        views:500,
    }]
}

export const newsSlice = createSlice({
    name:'news',
    initialState,
    // reducers
    reducers:{
        //reducer to add news in store
        addNews:(state,action)=>{
            const forminfo = action.payload
            state.formData.push(forminfo)
            
        },
        //reducer to delete news from store
        deleteNews:(state,action)=>{
            state.formData = state.formData.filter((news)=> news.id !==action.payload)
        },
    }
})
export const {addNews,deleteNews} = newsSlice.actions
export default newsSlice.reducer