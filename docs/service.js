// const url = "http://localhost:5274/books";
const url = "http://localhost:5274/books";
export const GetAllBooks = async () => {
    const response = await fetch(url);
    return await response.json();
}




//500 error messages mean that you accessed a server and received a response, albeit an angry one