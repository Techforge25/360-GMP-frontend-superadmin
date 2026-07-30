"use client";

import { useState } from "react";
import Pagination from "@/components/common/Pagination";

export default function AccountPagination() {
  const [page, setPage] = useState(1);

  return (
    <Pagination
      currentPage={page}
      totalItems={20}
      itemsPerPage={4}
      totalPages={5}
      onPageChange={(page) => {
        setPage(page);
      }}
    />
  );
}