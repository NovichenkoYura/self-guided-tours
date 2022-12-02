import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../api/apiConfig';
import { endpoints } from '../api/endpoints';

interface Tours {
  imgSrc: string;
  description: string;
  duration: number;
  country: string;
  budget: number;
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

export const addToursThunk = createAsyncThunk(
  'tours/addTours',
  async ({ imgSrc, description, duration, country, budget, name, id, cost }: Tours) => {
    const tour = {
      imgSrc: imgSrc,
      description: description,
      duration: duration,
      country: country,
      budget: budget,
      name: name,
      id: id,
      cost: cost
    };
    const response = await instance.post(endpoints.tours, tour);
    const data = await response.data;
    return data;
  }
);

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

  reducers: {
    sortBudgetLowToHigh(state, action) {
      // console.log(action.payload);
      state.tours = state.tours.sort((a, b) => (a.budget > b.budget ? 1 : -1));
    }
  }
});

export const { sortBudgetLowToHigh } = toursSlice.actions;
export default toursSlice.reducer;
