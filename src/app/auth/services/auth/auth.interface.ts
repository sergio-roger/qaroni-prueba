export interface Auth {
  username: string;
  password: string;
}

export interface AuthResponse {
  count: number;
  included: null;
  input: string;
  result: Result[];
  links: null;
}

export interface Result {
  userId: number;
  access_token: string;
  issued: string;
  expires: string;
}
