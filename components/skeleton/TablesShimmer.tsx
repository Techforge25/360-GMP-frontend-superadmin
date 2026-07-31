"use client";

interface TableShimmerProps {
     columns: any;
     rows?: any;
}

export default function TableShimmer({
     columns,
     rows = 6,
}: TableShimmerProps) {
     return (
          <tbody className="divide-y divide-border-light">
               {Array.from({ length: rows }).map((_, rowIndex) => (
                    <tr key={rowIndex} className="bg-white">
                         {Array.from({ length: columns }).map((_, colIndex) => (
                              <td key={colIndex} className="px-6 py-4">
                                   <div className="h-5 w-full animate-pulse rounded-md bg-gray-200" />
                              </td>
                         ))}
                    </tr>
               ))}
          </tbody>
     );
}