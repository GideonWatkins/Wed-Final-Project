import { GetAllBooks } from "./service.js";

export var ApiBooksList = await GetAllBooks();

var CartList = [

];

export const GetCartList = () => {
    return [...CartList]
}

export var PrivateBooksList = [

];

export const RemoveFromList = (list, item) =>{
    const index = CartList.indexOf(item);
    CartList.splice(index,1);
}

export const AddToList = (list, item) => {
    //add something that filters for book by title
    CartList.push(item);
}