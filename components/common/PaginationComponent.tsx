"use client";

import Pagination from "@/components/common/Pagination";

interface PaginationComponentProps {
  handlePageChange: (page: number) => void;
  totalPages: number;
  currentPage: number;
}

export default function PaginationComponent({
  handlePageChange,
  totalPages,
  currentPage,
}: PaginationComponentProps) {
  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages || 1}
      onPageChange={handlePageChange}
    />
  );
}