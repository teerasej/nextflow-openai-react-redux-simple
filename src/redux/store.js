// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit'
// import slice ที่ต้องการ
import chatSlice from './chatSlice.js'


export default configureStore({
  reducer: {
    // กำหนด slice ให้เป็น reducer ของ store โดยตั้งชื่อ slice นี้ ว่า chatroom 
    chatroom: chatSlice
  }
})