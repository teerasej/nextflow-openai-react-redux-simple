
import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: 1, sender: 'User', message: 'Hello' },
  { id: 2, sender: 'GPT', message: 'Hi!' }
]



const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    messageAdded(state, action) {
      state.push({...action.payload, id: Math.floor(Math.random() * 1000)})
    },
  },
});

export const { messageAdded } = messageSlice.actions

export default messageSlice.reducer