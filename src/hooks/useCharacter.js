import { useMemo } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useCharacter = () => {
  const { data, error, fetchNextPage, isError, isLoading, hasNextPage } = useInfiniteQuery(
    ["characters"],
    ({ pageParam = 1 }) =>
      fetch(
        `https://rickandmortyapi.com/api/character/?page=${pageParam}`
      ).then((res) => res.json()),
    {
      getNextPageParam: (lastPage) => {
        const previousPage = lastPage.info.prev
          ? +lastPage.info.prev.split("=")[1]
          : 0;
        const currentPage = previousPage + 1;

        if (currentPage === lastPage.info.pages) return false;
        return currentPage + 1;
      },
    }
  );

  const characters = useMemo(
    () =>
      data?.pages.reduce((prev, page) => {
        return {
          info: page.info,
          results: [...prev.results, ...page.results],
        };
      }),
    [data]
  );

  return {
    error,
    fetchNextPage,
    isError,
    isLoading,
    hasNextPage,
    characters,
    data,
  };
};
