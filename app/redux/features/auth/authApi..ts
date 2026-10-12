import { baseApi } from "../../api/baseApi";
import { AuthUser, clearCredentials, setCredentials,  } from "./authSlice";




interface LoginRequest {
  email: string;
  password: string;
}

interface RegisterRequest {
  name: string;
  email: string;
  password: string;
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
          // Failed login: do not set authentication state.
        }
      },

      invalidatesTags: ["Auth"],
    }),

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

          // Automatically authenticate only if registration
          // returns a valid access token and user.
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

    getMe: builder.query<AuthUser, void>({
      query: () => "/auth/me",
      providesTags: ["Auth"],
    }),

    logout: builder.mutation<MessageResponse, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),

      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch {
          // Continue local logout even if the server request fails.
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
  useGetMeQuery,
  useLogoutMutation,
} = authApi;
