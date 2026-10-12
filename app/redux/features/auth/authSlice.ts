
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role?: string;
}

interface AuthState {
  accessToken: string | null;
  user: AuthUser | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  accessToken: null,
  user: null,
  isAuthenticated: false,
};

interface CredentialsPayload {
  accessToken: string;
  user: AuthUser;
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<CredentialsPayload>
    ) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      state.isAuthenticated = true;
    },

    setUser: (state, action: PayloadAction<AuthUser>) => {
      state.user = action.payload;
    },

    clearCredentials: (state) => {
      state.accessToken = null;
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const {
  setCredentials,
  setUser,
  clearCredentials,
} = authSlice.actions;

export default authSlice.reducer;
