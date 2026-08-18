export default function RevenueShimmer() {
     return (
          <div className="bg-white rounded-[1rem] p-[1.5rem] border border-[#e5e7eb] shadow-sm flex flex-col w-full font-sans animate-pulse">
               {/* Header */}
               <div className="flex justify-between items-center mb-[1.5rem] border-b border-[#f3f4f6] pb-[1.25rem]">
                    <div className="flex items-center gap-[0.75rem]">
                         {/* Icon */}
                         <div className="w-[2.25rem] h-[2.25rem] rounded-[0.375rem] bg-gray-200" />

                         {/* Title */}
                         <div className="h-[1.25rem] w-[8rem] rounded bg-gray-200" />
                    </div>

                    {/* Optional dropdown skeleton */}
                    {/* <div className="h-[2.25rem] w-[6rem] rounded-[0.5rem] bg-gray-200" /> */}
               </div>

               {/* Chart */}
               <div className="h-[20rem] w-full relative">
                    {/* Horizontal grid lines */}
                    <div className="absolute inset-0 flex flex-col justify-between py-[0.5rem]">
                         <div className="h-[1px] w-full bg-gray-200" />
                         <div className="h-[1px] w-full bg-gray-200" />
                         <div className="h-[1px] w-full bg-gray-200" />
                         <div className="h-[1px] w-full bg-gray-200" />
                         <div className="h-[1px] w-full bg-gray-200" />
                         <div className="h-[1px] w-full bg-gray-200" />
                         <div className="h-[1px] w-full bg-gray-200" />
                    </div>

                    {/* Vertical grid lines */}
                    <div className="absolute inset-0 flex justify-between px-[2.5rem]">
                         <div className="w-[1px] h-full bg-gray-200" />
                         <div className="w-[1px] h-full bg-gray-200" />
                         <div className="w-[1px] h-full bg-gray-200" />
                         <div className="w-[1px] h-full bg-gray-200" />
                         <div className="w-[1px] h-full bg-gray-200" />
                         <div className="w-[1px] h-full bg-gray-200" />
                    </div>

                    {/* Y-axis labels */}
                    <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between py-[0.25rem]">
                         <div className="h-[0.75rem] w-[3rem] rounded bg-gray-200" />
                         <div className="h-[0.75rem] w-[3rem] rounded bg-gray-200" />
                         <div className="h-[0.75rem] w-[3rem] rounded bg-gray-200" />
                         <div className="h-[0.75rem] w-[3rem] rounded bg-gray-200" />
                         <div className="h-[0.75rem] w-[3rem] rounded bg-gray-200" />
                         <div className="h-[0.75rem] w-[3rem] rounded bg-gray-200" />
                    </div>

                    {/* X-axis labels */}
                    <div className="absolute bottom-[-0.25rem] left-[4rem] right-0 flex justify-between">
                         <div className="h-[0.75rem] w-[2.5rem] rounded bg-gray-200" />
                         <div className="h-[0.75rem] w-[2.5rem] rounded bg-gray-200" />
                         <div className="h-[0.75rem] w-[2.5rem] rounded bg-gray-200" />
                         <div className="h-[0.75rem] w-[2.5rem] rounded bg-gray-200" />
                         <div className="h-[0.75rem] w-[2.5rem] rounded bg-gray-200" />
                         <div className="h-[0.75rem] w-[2.5rem] rounded bg-gray-200" />
                    </div>

                    {/* Fake line graph */}
                    <div className="absolute left-[4rem] right-[1rem] top-[1rem] bottom-[2rem] overflow-hidden">
                         <svg
                              viewBox="0 0 600 250"
                              preserveAspectRatio="none"
                              className="w-full h-full"
                         >
                              <polyline
                                   points="0,210 80,175 160,190 240,120 320,145 400,80 480,105 600,45"
                                   fill="none"
                                   stroke="#e5e7eb"
                                   strokeWidth="4"
                              />

                              {/* Fake dots */}
                              <circle cx="0" cy="210" r="5" fill="#e5e7eb" />
                              <circle cx="80" cy="175" r="5" fill="#e5e7eb" />
                              <circle cx="160" cy="190" r="5" fill="#e5e7eb" />
                              <circle cx="240" cy="120" r="5" fill="#e5e7eb" />
                              <circle cx="320" cy="145" r="5" fill="#e5e7eb" />
                              <circle cx="400" cy="80" r="5" fill="#e5e7eb" />
                              <circle cx="480" cy="105" r="5" fill="#e5e7eb" />
                              <circle cx="600" cy="45" r="5" fill="#e5e7eb" />
                         </svg>
                    </div>
               </div>
          </div>
     )
} 