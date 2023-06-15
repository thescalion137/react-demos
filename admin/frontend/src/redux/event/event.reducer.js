import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [],
  eventImages: "",
  isLoading: false,
  isFileUploadLoading: false,
};

export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    getAllEvents: (state, action) => {
      state.events = action.payload;
    },
    storeEventImages: (state, action) => {
      state.eventImages = action.payload;
    },
    clearEventImages: (state) => {
      state.eventImages = "";
    },
    deleteEventImage: (state) => {
      state.eventImages = "";
    },
    fetchLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    fileUploadLoading: (state, action) => {
      state.isFileUploadLoading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getAllEvents,
  storeEventImages,
  clearEventImages,
  deleteEventImage,
  fetchLoading,
  fileUploadLoading,
} = eventSlice.actions;

export default eventSlice.reducer;
