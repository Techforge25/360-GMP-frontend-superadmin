"use client";

import ReactPaginate from "react-paginate";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-end border-t border-[#E2E8F0] bg-white px-4 py-4">
      <ReactPaginate
        forcePage={Math.max(currentPage - 1, 0)}
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
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        containerClassName="pagination-container"
        pageClassName="pagination-page"
        pageLinkClassName="pagination-page-link"
        activeClassName="pagination-active"
        previousClassName="pagination-previous"
        previousLinkClassName="pagination-previous-link"
        nextClassName="pagination-next"
        nextLinkClassName="pagination-next-link"
        breakClassName="pagination-break"
        breakLinkClassName="pagination-break-link"
        disabledClassName="pagination-disabled"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
