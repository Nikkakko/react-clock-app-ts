import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
const KEY = import.meta.env.VITE_WORLD_API_KEY;

const BASE_TIME_URL = `http://worldtimeapi.org/api/timezone/Asia/Tbilisi`;

const BASE_WORLD_URL = `https://api.ipbase.com/v2/info?apikey=nZTwmzPVzhPvDVw2qpZP92hcrDumCmHnoDylmG3l&ip`;

export interface timeProps {
  timezone: string;
  day_of_year: number;
  day_of_week: number;
  week_number: number;
}

export const fetchWorld = createAsyncThunk('world/fetchWorld', async () => {
  const { data } = await axios(BASE_WORLD_URL);
  return data;
});

export const fetchTime = createAsyncThunk('time/fetchTime', async () => {
  const { data } = await axios(BASE_TIME_URL);
  return data;
});

export interface clockState {
  isOpen: boolean;
  isDayTime: boolean;
  timeContent: string[];
  worldContent: string[];
}

const initialState: clockState = {
  isOpen: false,
  isDayTime: false,
  timeContent: [],
  worldContent: [],
};

export const clockSlice = createSlice({
  name: 'clock',
  initialState,
  reducers: {
    toggleMore: state => {
      state.isOpen = !state.isOpen;
    },

    dayTimeTrue: state => {
      state.isDayTime = true;
    },

    dayTimeFalse: state => {
      state.isDayTime = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchTime.fulfilled, (state, action) => {
      state.timeContent = action.payload;
    });
    builder.addCase(fetchWorld.fulfilled, (state, action) => {
      state.worldContent = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { toggleMore, dayTimeTrue, dayTimeFalse } = clockSlice.actions;
export default clockSlice.reducer;
