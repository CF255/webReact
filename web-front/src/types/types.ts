export interface AuthResponse {
    body: {
      user: User;
      accessToken: string;
      refreshToken: string;
      sucess: string;
    };
  }
  export interface AuthResponseError {
    body: {
      error: string;
      miss: string
     /*  success: string; */
    };
  }

  export interface User {
    _id: string;
    name: string;
    username: string;
  }
  
  export interface AccessTokenResponse {
    statusCode: number;
    body: {
      accessToken: string;
    };
    error?: string;
  }