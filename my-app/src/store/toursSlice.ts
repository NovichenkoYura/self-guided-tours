import { TourInterface } from './../types';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../api/apiConfig';
import { endpoints } from '../api/endpoints';

interface ToursState {
  isFetching: boolean;
  tours: TourInterface[];
  titleOfSort: string;
}

const initialState: ToursState = {
  isFetching: false,
  tours: [],
  titleOfSort: ''
};

export const getToursThunk = createAsyncThunk('tours/getTours', async () => {
  const response = await instance.get('http://localhost:3001/tours');
  const data = await response.data;
  return data;
});

export const addToursThunk = createAsyncThunk(
  'tours/addTours',
  async ({ imgSrc, description, duration, country, budget, name, id, cost }: TourInterface) => {
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
    builder.addCase(getToursThunk.fulfilled, (state, action: PayloadAction<TourInterface[]>) => {
      state.tours = action.payload;
      state.isFetching = false;
    });
    builder.addCase(getToursThunk.rejected, () => {
      alert('something goes wrong with tours');
    });
  },

  reducers: {
    sortTours(state, action) {
      console.log(action.payload.item.typeOfSort);
      state.titleOfSort = action.payload.item.title;
      switch (action.payload.item.typeOfSort) {
        case 'BLTH':
          state.tours = state.tours.sort((a, b) => (a.budget > b.budget ? 1 : -1));
          break;
        case 'BHTL':
          state.tours = state.tours.sort((a, b) => (b.budget > a.budget ? 1 : -1));
          break;
        case 'DLTH':
          state.tours = state.tours.sort((a, b) => (a.duration > b.duration ? 1 : -1));
          break;
        case 'DHTL':
          state.tours = state.tours.sort((a, b) => (b.duration > a.duration ? 1 : -1));
          break;

        default:
          break;
      }
    },
    sortBudgetLowToHigh(state, action) {
      console.log(action.payload);
      state.tours = state.tours.sort((a, b) => (a.budget > b.budget ? 1 : -1));
    },
    sortBudgetHighToLow(state) {
      state.tours = state.tours.sort((a, b) => (b.budget > a.budget ? 1 : -1));
    },
    sortDurationLowToHigh(state) {
      state.tours = state.tours.sort((a, b) => (a.duration > b.duration ? 1 : -1));
    },
    sortDurationHighToLow(state) {
      state.tours = state.tours.sort((a, b) => (b.duration > a.duration ? 1 : -1));
    }
  }
});

export const {
  sortBudgetLowToHigh,
  sortBudgetHighToLow,
  sortDurationLowToHigh,
  sortDurationHighToLow,
  sortTours
} = toursSlice.actions;
export default toursSlice.reducer;
