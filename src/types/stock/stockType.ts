export type stockModel = {
  id: string;
  nome: string;
  quantidade: number;
  preco: number;
  descricao: string;
};

export type stockStates = {
    stock : stockModel[];
    error_stock: string | boolean;
    success_stock: string | boolean;
    loading_stock: boolean;
}
