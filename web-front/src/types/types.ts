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
    };
  }

  export interface User {
    _id: string;
    name: string;
    username: string;
    image: string;
    id: string;
    notes:{
      id: string;
      title: string;
      description: string;
      favorite: string;
    }
  }

  export interface Note {
    _id: string;
    title: string;
    description: string;
    created_at: string,
    updated_at: string,
    user: string
    id: string;
    favorite: boolean;
  }
  
  export interface AccessTokenResponse {
    statusCode: number;
    body: {
      accessToken: string;
    };
    error?: string;
  }