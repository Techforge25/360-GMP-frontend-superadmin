"use client";

import { useState } from "react";
import Pagination from "@/components/common/Pagination";

interface PaginationComponentProps {
  handlePageChange: (page: number) => void;
  totalPages: number;
  totalItems: number;
  totalItemsPerPage: number;
}

export default function PaginationComponent({ handlePageChange, totalPages, totalItems, totalItemsPerPage }: PaginationComponentProps) {
  const [page, setPage] = useState(1);
  return (
    <Pagination
      currentPage={page}
      totalItems={totalItems && totalItems}
      itemsPerPage={totalItemsPerPage && totalItemsPerPage}
      totalPages={totalPages && totalPages}
      onPageChange={(page) => {
        setPage(page);
        if (handlePageChange) {
          handlePageChange(page);
        }
      }}
    />
  );
}