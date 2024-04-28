// const url = "http://localhost:5274/books";
const url = "http://localhost:5274/books";
export const GetAllBooks = async () => {
    const response = await fetch(url);
    return await response.json();
}

export const SavePrivateBooks = (list) => {
    const listAsString = JSON.stringify(list);
    localStorage.setItem("myBooks", listAsString);
  };

  export const LoadPrivateBooks = () => {
    return JSON.parse(localStorage.getItem("myBooks"));
  }

  export const ResetStorage = () => {
    localStorage.clear();
  }

//500 error messages mean that you accessed a server and received a response, albeit an angry one