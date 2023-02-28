
import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { sender: 'User', message: 'Hello' },
  { sender: 'GPT', message: 'Hi!' }
]



const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    
  },
});

export const {  } = messageSlice.actions

export default messageSlice.reducer