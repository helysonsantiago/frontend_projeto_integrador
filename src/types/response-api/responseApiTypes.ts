import { stockModel } from "../stock/stockType";

export interface responseApiType{
    code?: number;
    message?: string;
}

export interface responseApiStock{
    code?: number;
    message?: string;
    stock?: stockModel[];
}