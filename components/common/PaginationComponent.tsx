"use client";

import Pagination from "@/components/common/Pagination";

interface PaginationComponentProps {
  handlePageChange: (page: number) => void;
  totalPages: number;
  totalItems: number;
  totalItemsPerPage: number;
  currentPage: number;
}

export default function PaginationComponent({
  handlePageChange,
  totalPages,
  totalItems,
  totalItemsPerPage,
  currentPage,
}: PaginationComponentProps) {
  return (
    <Pagination
      currentPage={currentPage}
      totalItems={totalItems || 0}
      itemsPerPage={totalItemsPerPage || 10}
      totalPages={totalPages || 1}
      onPageChange={handlePageChange}
    />
  );
}