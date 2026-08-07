import { useEffect, useRef } from "react";

export function useTableScroll(page: number, isPending: boolean) {
  const tableRef = useRef<HTMLDivElement>(null);
  const prevPage = useRef(page);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      prevPage.current = page;
      return;
    }

    if (prevPage.current !== page && !isPending) {
      tableRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      prevPage.current = page;
    }
  }, [page, isPending]);

  return tableRef;
}