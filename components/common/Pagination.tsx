"use client";

import ReactPaginate from "react-paginate";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalItems,
  itemsPerPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const startItem = totalItems === 0 ? 0 : (currentPage && currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min((currentPage || 0) * itemsPerPage, totalItems);

  return (
    <div className="flex items-center justify-between border-t border-[#E2E8F0] bg-white px-4 py-4">
      <p className="text-sm font-medium text-[#4A5568]">
        Showing{" "}
        <span className="text-[#111827]">
          {startItem}-{endItem}
        </span>{" "}
        Of <span className="text-[#111827]">{totalItems}</span>
      </p>

      <ReactPaginate
        forcePage={currentPage - 1}
        pageCount={totalPages}
        onPageChange={(e) => onPageChange(e.selected + 1)}
        previousLabel={
          <span className="flex items-center gap-2">
            <FiChevronLeft />
            Back
          </span>
        }
        nextLabel={
          <span className="flex items-center gap-2">
            Next
            <FiChevronRight />
          </span>
        }
        breakLabel="..."
        containerClassName="pagination-container"
        pageClassName="pagination-page"
        activeClassName="pagination-active"
        previousClassName="pagination-previous"
        nextClassName="pagination-next"
        breakClassName="pagination-break"
        disabledClassName="pagination-disabled"
      />
    </div>
  );
}
