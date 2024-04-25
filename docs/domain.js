import { GetAllBooks } from "./service.js";

export var ApiBooksList = await GetAllBooks();

export var CartList = [

];

export var PrivateBooksList = [

];

export const RemoveFromList = (list, item) =>{
    const index = list.indexOf(item);
    list.splice(index,1);
}

export const AddToList = (list, item) => {
    list.push(item);
}