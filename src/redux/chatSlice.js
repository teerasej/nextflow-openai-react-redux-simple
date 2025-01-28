// src/redux/chatSlice.js

import { createSlice } from '@reduxjs/toolkit'

// import askAI thunk เพื่อมากำหนด case ใน extraReducer
import { askAI } from './askAIThunk';

const initialState = {
  chatHistory: [
    { id: 1, sender: 'User', text: 'Hello' },
    { id: 2, sender: 'GPT', text: 'Hi!' }
  ]
}


const chatSlice = createSlice({
  name: 'chatSlice',
  initialState,
  reducers: {
    addMessageToHistory(state, action) {
      console.log(action.type)
      console.log(action.payload)
      state.chatHistory.push({
          id: Math.floor(Math.random() * 1000),
          sender: 'User',
          text: action.payload
        })
    },
  },
  // กำหนด reducer พิเศษ ที่จะทำงานตามกรณีของ AsyncThunk
  extraReducers: (builder) => {
    // กำหนด case ที่จะทำงานจากกลไกของ async thunk
    builder
      .addCase(askAI.fulfilled, (state, action) => {
        console.log('succeeded');

        // ถ้าได้การทำงานของ Async thunk สมบูรณ์ ค่าที่ return ออกมาจะอยู่ใน payload 
        // ในที่นี้เราจะเอามาใส่เพิ่มในห้องแชท โดยกำหนดชื่อ sender เป็น GPT
        state.chatHistory.push({ 
          sender:'GPT', 
          text: action.payload, 
          id: Math.floor(Math.random() * 1000)
        });
        
      })
      // ในกรณีที่ Async Thunk ล้มเหลวจะเข้าเคสนี้
      .addCase(askAI.rejected, (state, action) => {
        console.log('failed');
        // แสดงข้อความ error ที่ได้
        console.error(action.error.message);
      });
  },
});

export const { addMessageToHistory } = chatSlice.actions

export default chatSlice.reducer