export type userModel = {
  id: string | null;
  email: string | null;
  nome: string | null;
};

export type userStates = {
  user: userModel | null;
  error_user: string | boolean;
  success_user: string | boolean;
  loading_user: boolean;
};
