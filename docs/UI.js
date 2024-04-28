import {
  RefreshPrivateBooks,
  adminValidation,
  checkPassword,
  GetPrivateBooksList,
  EmptyPrivateBooksList,
  SetPrivateBooksListToLoadedData,
  SaveNewStorage,
  IsThere,
  FilterPrivate,
} from "./domain-users.js";
import {
  AddToList,
  GetCartList,
  RemoveFromList,
  ApiBooksList,
} from "./domain.js";

var StoreList = await ApiBooksList;

var fromCart = false;

const RenderStore = () => {
  const storeContainer = document.getElementById("shopContainer");
  if (storeContainer) {
    storeContainer.replaceChildren();
    const storeBody = document.createElement("div");
    storeBody.id = "storeBody";
    storeContainer.appendChild(storeBody);
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
      storeBody.appendChild(book);

      book.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", item.title);
        fromCart = false;
      });
    });
    const dropArea = document.getElementById("storeBody");
    if (dropArea) {
      dropArea.addEventListener("dragover", (event) => {
        event.preventDefault();
      });
      dropArea.addEventListener("drop", (event) => {
        event.preventDefault();
        if (fromCart) {
          RemoveFromList(event.dataTransfer.getData("text/plain"));
          RenderCart();
        }
        event.stopImmediatePropagation();
        event.stopPropagation();
      });
    }
  }
};

const RenderCart = async () => {
  const cartContainer = document.getElementById("purchaseContainer");
  if (cartContainer) {
    cartContainer.replaceChildren();
    const cartBody = document.createElement("div");
    cartContainer.appendChild(cartBody);
    cartBody.id = "cartBody";
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
      cartBody.appendChild(book);

      book.addEventListener("drag", (event) => {
        event.dataTransfer.setData("text/plain", item.title);
        fromCart = true;
      });
    });
    const dropArea = document.getElementById("cartBody");
    if (dropArea) {
      dropArea.addEventListener("dragover", (event) => {
        event.preventDefault();
      });
      dropArea.addEventListener("drop", async (event) => {
        event.preventDefault();
        console.log("dropping");
        if (!fromCart) {
          await AddToList(event.dataTransfer.getData("text/plain"));
          RenderCart();
        }
        event.stopImmediatePropagation();
        event.stopPropagation();
      });
    }
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

const RenderPrivateBooks = async () => {
  SetPrivateBooksListToLoadedData();
  const bookHolder = document.getElementById("privateBookHolder");
  if (bookHolder) {
    const urlParams = new URLSearchParams(window.location.search);
    const myParams = urlParams.get("hasAccess");
    if (myParams !== null && myParams === "iamironman") {
      bookHolder.replaceChildren();
      const bookContainer = document.createElement("div");
      bookContainer.id = "bookContainer";
      bookHolder.appendChild(bookContainer);

      await ApiBooksList.forEach(async (book) => {
        const card = document.createElement("label");
        card.textContent = book.title + " --- " + book.series;
        card.classList.add("check");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        if (IsThere(book)) {
          checkbox.checked = true;
        }
        checkbox.classList.add("checkbox");
        checkbox.addEventListener("click", async (event) => {
          await RefreshPrivateBooks(book, checkbox.checked);
        });
        card.appendChild(checkbox);
        const br = document.createElement("br");
        card.appendChild(br);
        bookContainer.appendChild(card);
      });
    }
  }
};

const RenderBookPage = (list) => {
  const container = document.getElementById("PublicBookContainer");
  if (container) {
    container.replaceChildren();

    list.forEach((book) => {
      const card = document.createElement("div");
      card.classList.add("bookCard");
      const cardImg = document.createElement("img");
      cardImg.classList.add("bookCardImg");
      cardImg.src = "book1.jpg";
      const cardTitle = document.createElement("div");
      cardTitle.textContent = book.title;
      const cardDescr = document.createElement("div");
      cardDescr.textContent = book.description;
      card.appendChild(cardImg);
      card.appendChild(cardTitle);
      card.appendChild(cardDescr);
      container.appendChild(card);
    });
  }
};

const reset = document.getElementById("reset");
if (reset) {
  reset.addEventListener("click", (event) => {
    event.preventDefault();
    SaveNewStorage();
  });
}

const input = document.getElementById("text");
if (input) {
  input.addEventListener("input", (event) => {
    console.log("here");
    RenderBookPage(FilterPrivate(input.value));
  });
}

SetUpSubmit();
RenderStore();
RenderCart();
await RenderPrivateBooks();
RenderBookPage(GetPrivateBooksList());
