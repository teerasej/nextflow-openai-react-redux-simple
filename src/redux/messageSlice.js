
import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: 1, sender: 'User', message: 'Hello' },
  { id: 2, sender: 'GPT', message: 'Hi!' }
]



const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    
  },
});

export const {  } = messageSlice.actions

export default messageSlice.reducer