import React, { useEffect, useState } from "react";
import { fetchAllBooks } from "./api";

export default function useBookSearch(searchValue, pageNumber) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setBooks([]);
  }, [searchValue]);

  useEffect(() => {
    setLoading(true);

    fetchAllBooks(searchValue, pageNumber).then((res) => {
      setBooks((prevBooks) => {
        return [...new Set([...prevBooks, ...res])];
      });

      setHasMore(res.length > 0);
      setLoading(false);
    });
  }, [searchValue, pageNumber]);
  return { loading, books, hasMore };
}
