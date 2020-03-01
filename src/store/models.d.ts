export interface Profile {
  username: string;
  bio?: string;
  image: string;
  following: boolean;
}

export interface User {
  email: string;
  token: string;
  username: string;
  bio?: string;
  image?: string;
}

export interface UserSubmit {
  email: string;
  username: string;
}

export interface UserResponse {
  user: User;
}
