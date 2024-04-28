import { LoadPrivateBooks, ResetStorage, SavePrivateBooks } from "./service.js";

export const checkPassword = (input) => {
  if (input !== "hellothere") {
    return false;
  } else {
    return true;
  }
};

export const adminValidation = (input) => {
  if (checkPassword(input)) {
    const url = new URL("admin.html", window.location.href);
    var value = "iamironman";
    url.searchParams.set("hasAccess", value);
    location.assign(url);
  }
};

export const RefreshPrivateBooks = async (item, checked) => {
  if (checked && (await FilterPB(item)) === null) {
    console.log(PrivateBooksList);
    PrivateBooksList.push(item);
    SaveNewStorage();
  } else if (!checked && (await FilterPB(item))) {
    const index = PrivateBooksList.indexOf(item);
    PrivateBooksList.splice(index, 1);
    SaveNewStorage();
  }
};

const FilterPB = async (item) => {
  const books = GetPrivateBooksList();
  if (books.length !== 0) {
    const bookByTitle = books.filter((book) => book.title === item.title);
    if (bookByTitle.length !== 0) {
      return bookByTitle;
    } else {
      return null;
    }
  } else {
    return null;
  }
};

export const IsThere = (item) => {
  const matchingBook = PrivateBooksList.map(
    (book) => book.title === item.title
  );
  console.log(matchingBook)
  matchingBook.forEach(book => {
    if (book === true) {
      return true;
    } else {
      return false;
    }
  });
};

var PrivateBooksList = [];

export const SaveNewStorage = () => {
  ResetStorage();
  SavePrivateBooks(PrivateBooksList);
};

export const SetPrivateBooksListToLoadedData = () => {
  PrivateBooksList = LoadPrivateBooks();
};

export const EmptyPrivateBooksList = () => {
  PrivateBooksList = [];
};

export const GetPrivateBooksList = () => {
  if (PrivateBooksList !== null) {
    return [...PrivateBooksList];
  } else {
    EmptyPrivateBooksList();
    return PrivateBooksList;
  }
};

export const FilterPrivate = (input) => {
    return PrivateBooksList.filter((book) => book.title.toLowerCase().includes(input.toLowerCase()))
}