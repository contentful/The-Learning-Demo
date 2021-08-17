import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickets: [],
  test: "testing",
  isLoading: false,
  error: "",
  replyTicketError: "",
  searchTicketList: [],
  selectedTicket: {},
  replyMsg: "",
  cart: [],
};

const testSlice = createSlice({
  name: "testSlice",
  initialState,
  reducers: {
    fetchTicketLoading: (state) => {
      state.isLoading = true;
    },
    fetchTicketSuccess: (state, action) => {
      state.tickets = action.payload;
      state.searchTicketList = action.payload;
      state.isLoading = false;
    },
    fetchTicketFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

const { reducer, actions } = testSlice;

export const {
  fetchTicketLoading,
  fetchTicketSuccess,
  fetchTicketFail,
  fetchSingleTicketLoading,
  fetchSingleTicketSuccess,
  fetchSingleTicketFail,

} = actions;

export default reducer;