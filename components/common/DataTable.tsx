"use client";
import { ReactNode } from "react";
import TableShimmer from "../skeleton/TablesShimmer";

export interface Column<T> {
  key: keyof T | string;
  header: string;
  align?: "left" | "center" | "right";
  render?: (row: T) => ReactNode;
}

interface DataTableProps<T> {
  columns?: Column<T>[];
  data?: T[];
  rowKey?: (row: T) => string;
  isLoading?: boolean;
}

export default function DataTable<T>({
  columns,
  data,
  rowKey,
  isLoading,
}: DataTableProps<T>) {
  return (
    <div className="w-full max-w-full overflow-x-auto rounded-xl border border-border-light bg-surface shadow-sm font-secondary">
      <table className="w-full min-w-[900px] border-collapse text-sm md:text-base">
        <thead>
          <tr className="border-b border-border-light bg-surface-muted font-secondary text-sm md:text-[1rem] font-medium capitalize tracking-wide text-black">
            {columns?.map((column) => (
              <th
                key={String(column.key)}
                className={`whitespace-nowrap px-3 py-3 md:px-6 md:py-4 font-medium ${
                  column.align === "center"
                    ? "text-center"
                    : column.align === "right"
                      ? "text-right"
                      : "text-left"
                }`}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>

        {isLoading ? (
          <TableShimmer columns={columns?.length} rows={6} />
        ) : (
          <tbody className="divide-y divide-border-light text-text-primary">
            {data && data?.length > 0 ? (
              data?.map((row) => (
                <tr
                  key={rowKey?.(row)}
                  className="bg-white transition-colors hover:bg-surface-muted/30"
                >
                  {columns?.map((column) => (
                    <td
                      key={String(column.key)}
                      className={`whitespace-nowrap px-3 py-3 text-sm md:px-6 md:py-4 md:text-base ${
                        column.align === "center"
                          ? "text-center"
                          : column.align === "right"
                            ? "text-right"
                            : "text-left"
                      }`}
                    >
                      {column.render
                        ? column.render(row)
                        : String(row[column.key as keyof T] ?? "")}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr className="bg-white transition-colors hover:bg-surface-muted/30">
                <td
                  colSpan={columns?.length || 1}
                  className="px-3 py-3 text-center text-sm text-gray-500 md:text-base"
                >
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        )}
      </table>
    </div>
  );
}
