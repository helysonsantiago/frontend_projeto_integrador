
export type userCredentials = {
    email: string;
    password: string;
};

export type user = {
    id: number;
    nome : string;
    password: string;
    email:string;
}

//REACT REDUX
export type authState = {
    auth: boolean;
    error_login: string | boolean;
    success_login: string | boolean;
    loading_login: boolean;
  };
  
  