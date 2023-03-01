
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


const key = '';

const initialState = [
  { id: 1, sender: 'User', message: 'Hello' },
  { id: 2, sender: 'GPT', message: 'Hi!' }
]

export const fetchOpenAI = createAsyncThunk(
  'user/fetchOpenAI',
  async (prompt) => {

    console.log('fetching openAI')

    const jsonPrompt = JSON.stringify({
      "model": "text-davinci-003",
      "prompt": `${prompt}\n\n>`,
      "temperature": 0.7,
      "max_tokens": 256,
      "top_p": 1,
      "frequency_penalty": 0,
      "presence_penalty": 0
    });

    console.log(jsonPrompt)

    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      jsonPrompt,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${key}`
        }
      });

      console.log(response)

    return response.data.choices[0].text;
  }
);


const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    messageAdded(state, action) {
      state.push({...action.payload, id: Math.floor(Math.random() * 1000)})
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOpenAI.fulfilled, (state, action) => {
        console.log('succeeded');
        state.push({ sender:'GPT', message: action.payload, id: Math.floor(Math.random() * 1000)})
        
      })
      .addCase(fetchOpenAI.rejected, (state, action) => {
        console.log('failed');
        console.error(action.error.message);
      });
  },
});

export const { messageAdded } = messageSlice.actions

export default messageSlice.reducer