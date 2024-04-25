import { adminValidation, checkPassword } from "./domain-users.js";
import { AddToList, GetCartList, RemoveFromList, ApiBooksList } from "./domain.js";

var StoreList = await ApiBooksList;

var draggedBook = null;
var rejectedBook = null;

const RenderStore = () => {
  const storeContainer = document.getElementById("shopContainer");
  if (storeContainer) {
    storeContainer.replaceChildren();
    StoreList.forEach((item) => {
      const book = document.createElement("div");
      const bookTitle = document.createElement("div");
      const bookdescription = document.createElement("div");
      const bookSeries = document.createElement("div");
      bookTitle.textContent = "Title: " + item.title;
      bookdescription.textContent = "Description: " + item.description;
      bookSeries.textContent = "Part of the Series: " + item.series;

      book.appendChild(bookTitle);
      book.appendChild(bookdescription);
      book.appendChild(bookSeries);
      book.draggable = true;
      book.classList.add("shopCard");
      storeContainer.appendChild(book);

      book.addEventListener("dragstart", (event) => {
        draggedBook = item;
        rejectedBook = null;
        event.dataTransfer.setData("text/plain", item.title)
        //   why does this work 1st time but adds array[3] 2nd time?
      });
    });
    const dropArea = document.getElementById("shopContainer");
    dropArea.addEventListener("dragover", (event) => {
      event.preventDefault();
    });
    dropArea.addEventListener("drop", (event) => {
      event.preventDefault();
      if (draggedBook === null) {
        RemoveFromList(GetCartList(), rejectedBook);
        RenderCart();
      }
    });
  }
};

const RenderCart = () => {
  const cartContainer = document.getElementById("purchaseContainer");
  if (cartContainer) {
    cartContainer.replaceChildren();
    GetCartList().forEach((item) => {
      const book = document.createElement("div");
      const bookTitle = document.createElement("div");
      const bookdescription = document.createElement("div");
      const bookSeries = document.createElement("div");
      bookTitle.textContent = "Title: " + item.title;
      bookdescription.textContent = "Description: " + item.description;
      bookSeries.textContent = "Part of the Series: " + item.series;

      book.appendChild(bookTitle);
      book.appendChild(bookdescription);
      book.appendChild(bookSeries);
      book.draggable = true;
      book.classList.add("cartCard");
      cartContainer.appendChild(book);

      book.addEventListener("drag", (event) => {
        draggedBook = null;
        rejectedBook = item;
      });
    });
    const dropArea = document.getElementById("purchaseContainer");
    dropArea.addEventListener("dragover", (event) => {
      event.preventDefault();
    });
    dropArea.addEventListener("drop", (event) => {
      event.preventDefault();
      console.log(event.dataTransfer.getData("text/plain"))
        AddToList(GetCartList(), draggedBook);
        RenderCart();
    });
  }
};

const SetUpSubmit = () => {
  const submit = document.getElementById("submit");
  const passInput = document.getElementById("input");
  if (submit) {
    submit.addEventListener("click", (event) => {
      event.preventDefault();
      if (passInput.value === "") {
        const error = document.getElementById("errorMsg");
        error.textContent = "";
      } else if (!checkPassword(passInput.value)) {
        const error = document.getElementById("errorMsg");
        error.textContent = "Invalid Password";
      } else {
        const error = document.getElementById("errorMsg");
        error.textContent = "";
        adminValidation(passInput.value);
      }
    });
  }
};

SetUpSubmit();
RenderStore();
RenderCart();
