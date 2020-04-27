import axios from "axios";
const BASE_URL = "http://localhost:8000/api";

const routes = {
  API_GET_AUTHORS: BASE_URL + "/authors",
  API_GET_BOOKS: BASE_URL + "/books",
};

export const fetchAllAuthors = () => {
  return axios
    .get(routes.API_GET_AUTHORS, {
      headers: {
        Accept: "application/json",
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      return [];
    });
};

export const fetchBookById = (bookId) => {
  return axios
    .get(routes.API_GET_BOOKS + "/" + bookId, {
      headers: {
        Accept: "application/json",
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      return [];
    });
};

export const fetchAllBooks = (searchValue = "", pageNumber = 1) => {
  console.log("pageNumber", pageNumber);
  return axios
    .get(
      routes.API_GET_BOOKS + "?title=" + searchValue + "&page=" + pageNumber,
      {
        headers: {
          Accept: "application/json",
        },
      }
    )
    .then((response) => response.data)
    .catch((error) => {
      return [];
    });
};

export const saveBook = (book) => {
  const data = {
    isbn: book.isbn,
    summary: book.summary,
    title: book.title,
    publisher: book.publisher,
    publicationDate: book.publicationDate,
    numberOfPages: parseInt(book.numberOfPages),
    language: book.language,
    author: book.author,
  };

  console.log(book.author);

  axios
    .post(routes.API_GET_BOOKS, data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      alert(error);
    });
};

export const updateBook = (book) => {
  const { id, ...data } = { book };
  axios
    .put(routes.API_GET_BOOKS + "/" + book.id, data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      alert(error);
    });
};
