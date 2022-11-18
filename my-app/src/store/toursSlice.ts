import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../api/apiConfig';

interface Tours {
  imgSrc: string;
  description: string;
  duration: string;
  country: string;
  budget: string;
  name: string;
  id: number;
  cost: number;
}

interface ToursState {
  isFetching: boolean;
  tours: Tours[];
}

const initialState: ToursState = {
  isFetching: false,
  tours: []
};

export const getToursThunk = createAsyncThunk('tours/getTours', async () => {
  const response = await instance.get('http://localhost:3001/tours');
  const data = await response.data;
  return data;
});

const toursSlice = createSlice({
  name: 'tours',
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getToursThunk.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(getToursThunk.fulfilled, (state, action: PayloadAction<Tours[]>) => {
      state.tours = action.payload;
      state.isFetching = false;
    });
    builder.addCase(getToursThunk.rejected, () => {
      alert('something goes wrong with tours');
    });
  },

  reducers: {}
});

// export const { } = usersSlice.actions;
export default toursSlice.reducer;
