
import { baseApi } from "../../api/baseApi";
import {
  AuthUser,
  clearCredentials,
  setCredentials,
} from "./authSlice";

interface LoginRequest {
  email: string;
  password: string;
}

interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface MakeAdminRequest {
  email: string;
}

interface AuthResponse {
  accessToken: string;
  user: AuthUser;
}

interface MessageResponse {
  message: string;
}

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Login
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),

      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(
            setCredentials({
              accessToken: data.accessToken,
              user: data.user,
            })
          );
        } catch {
          // Login failed.
        }
      },

      invalidatesTags: ["Auth"],
    }),

    // Register
    register: builder.mutation<
      AuthResponse,
      RegisterRequest
    >({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),

      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          // Save credentials only if backend returns both.
          if (data?.accessToken && data?.user) {
            dispatch(
              setCredentials({
                accessToken: data.accessToken,
                user: data.user,
              })
            );
          }
        } catch {
          // Registration failed.
        }
      },

      invalidatesTags: ["Auth"],
    }),

    // Promote user to admin
    makeAdmin: builder.mutation<
      MessageResponse,
      MakeAdminRequest
    >({
      query: (body) => ({
        url: "/auth/make-admin",
        method: "POST",
        body,
      }),

      invalidatesTags: ["Auth"],
    }),

    // Get logged-in user
    getMe: builder.query<AuthUser, void>({
      query: () => "/auth/me",
      providesTags: ["Auth"],
    }),

    // Logout
    logout: builder.mutation<MessageResponse, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),

      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch {
          // Still clear local authentication.
        } finally {
          dispatch(clearCredentials());
          dispatch(baseApi.util.resetApiState());
        }
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useMakeAdminMutation,
  useGetMeQuery,
  useLogoutMutation,
} = authApi; 
