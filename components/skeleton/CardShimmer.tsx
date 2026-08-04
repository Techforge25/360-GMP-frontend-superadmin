export default function CardShimmer() {
     return (
          <>
               {
                    Array.from({ length: 3 }).map((_, index) => (
                         <div
                              key={index}
                              className="flex animate-pulse flex-col rounded-2xl border border-[#f0f0f5] bg-white p-4 shadow-sm"
                         >
                              {/* Icon */}
                              <div className="mb-4 h-[2.875rem] w-[2.875rem] rounded-[0.625rem] bg-gray-200" />

                              <div className="flex flex-col gap-1.5">
                                   {/* Title */}
                                   <div className="h-4 w-32 rounded bg-gray-200" />

                                   {/* Value */}
                                   <div className="mb-1 h-8 w-20 rounded bg-gray-200" />

                                   {/* Subtitle */}
                                   <div className="flex items-center gap-2">
                                        <div className="h-1.5 w-1.5 rounded-full bg-gray-200" />
                                        <div className="h-3 w-24 rounded bg-gray-200" />

                                        <div className="ml-2 h-1.5 w-1.5 rounded-full bg-gray-200" />
                                        <div className="h-3 w-20 rounded bg-gray-200" />
                                   </div>
                              </div>
                         </div>
                    ))
               }
          </>
     )
}