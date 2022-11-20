export interface Product{
    id:number;
    name:string;
    price:number;
    quantity:number;
    selected:boolean;
    available:boolean;
}

export enum ProductActionsType{
    GET_ALL_PRODUCTS='[Product] Get all products',
    GET_SELECTED_PRODUCTS='[Product] Get selected products',
    GET_AVAILABLE_PRODUCTS='[Product] Get available products',
    GET_NEW_PRODUCTS='[Product] Get new product',
    GET_SEARCHED_PRODUCTS='[Product] Get searched products',
    EDIT_PRODUCT='[Product] Edit product',
    DELETE_PRODUCT='[Product] Delete Product',
    SELECT_PRODUCT='[Product] Select Product'
}

export interface ActionEvent{
    type:ProductActionsType,
    payload?:any
}