export interface EventlyUser {
  name: string;
  email: string;
}

const USER_KEY = "evently_user";

export function getUser(): EventlyUser | null {
  if (typeof window === "undefined") {
    return null;
  }

  const user = localStorage.getItem(USER_KEY);

  if (!user) {
    return null;
  }

  try {
    return JSON.parse(user) as EventlyUser;
  } catch {
    return null;
  }
}

export function setUser(user: EventlyUser) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function logoutUser() {
  localStorage.removeItem(USER_KEY);
}