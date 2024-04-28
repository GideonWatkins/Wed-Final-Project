import { GetAllBooks } from "./service.js";

export var ApiBooksList = await GetAllBooks();

var CartList = [];

export const GetCartList = () => {
  return [...CartList];
};

export const RemoveFromList = (item) => {
  var books = GetCartList();
  const bookByTitle = books.filter((book) => book.title === item);
  const index = CartList.indexOf(bookByTitle);
  CartList.splice(index, 1);
};

export const AddToList = async (item) => {
  var books = await GetAllBooks();
  const bookByTitle = books.filter((book) => book.title === item);
  CartList.push(bookByTitle[0]);
  console.log(GetCartList());
};

