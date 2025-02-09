import { configureStore } from '@reduxjs/toolkit';
import reducer from './redux/reducer';

const store = configureStore({
  reducer: {
    auth: reducer,
  },
});

export default store;
