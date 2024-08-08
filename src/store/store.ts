import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/features/userSlice";

export interface User {
  user: {
    users: {
      name: {
        first: string;
        last: string;
      };
      location: {
        city: string;
        country: string;
      };
      picture: {
        large: string;
      };
    }[];
  };
}

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
