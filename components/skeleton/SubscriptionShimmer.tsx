export default function SubscriptionShimmer() {
     return (
          <div className="bg-white rounded-[1rem] p-[1.5rem] border border-[#e5e7eb] shadow-sm flex flex-col w-full font-sans animate-pulse">
               {/* Header */}
               <div className="flex justify-between items-start mb-[1.5rem] border-b border-[#f3f4f6] pb-[1.25rem]">
                    <div className="flex items-start gap-[0.75rem]">
                         {/* Icon */}
                         <div className="w-[2.25rem] h-[2.25rem] rounded-[0.375rem] bg-gray-200 mt-[0.125rem]" />

                         {/* Title + Subtitle */}
                         <div className="flex flex-col gap-[0.5rem]">
                              <div className="h-[1.25rem] w-[13rem] rounded bg-gray-200" />
                              <div className="h-[0.75rem] w-[8rem] rounded bg-gray-200" />
                         </div>
                    </div>

                    {/* Optional dropdown */}
                    {/* <div className="h-[2.25rem] w-[6rem] rounded-[0.5rem] bg-gray-200" /> */}
               </div>

               {/* Chart */}
               <div className="h-[20rem] w-full relative">
                    {/* Horizontal grid lines */}
                    <div className="absolute left-[3rem] right-0 top-0 bottom-[2rem] flex flex-col justify-between">
                         <div className="h-[1px] w-full bg-gray-200" />
                         <div className="h-[1px] w-full bg-gray-200" />
                         <div className="h-[1px] w-full bg-gray-200" />
                         <div className="h-[1px] w-full bg-gray-200" />
                         <div className="h-[1px] w-full bg-gray-200" />
                    </div>

                    {/* Y-axis labels */}
                    <div className="absolute left-0 top-0 bottom-[2rem] flex flex-col justify-between">
                         <div className="h-[0.75rem] w-[2rem] rounded bg-gray-200" />
                         <div className="h-[0.75rem] w-[2rem] rounded bg-gray-200" />
                         <div className="h-[0.75rem] w-[2rem] rounded bg-gray-200" />
                         <div className="h-[0.75rem] w-[2rem] rounded bg-gray-200" />
                         <div className="h-[0.75rem] w-[2rem] rounded bg-gray-200" />
                    </div>

                    {/* Bars */}
                    <div className="absolute left-[4rem] right-[1rem] top-[0.5rem] bottom-[2rem] flex items-end justify-around gap-[1rem]">
                         <div className="w-[2.8rem] h-[35%] rounded-t-[0.375rem] bg-gray-200" />
                         <div className="w-[2.8rem] h-[55%] rounded-t-[0.375rem] bg-gray-200" />
                         <div className="w-[2.8rem] h-[75%] rounded-t-[0.375rem] bg-gray-200" />
                         <div className="w-[2.8rem] h-[45%] rounded-t-[0.375rem] bg-gray-200" />
                         <div className="w-[2.8rem] h-[85%] rounded-t-[0.375rem] bg-gray-200" />
                         <div className="w-[2.8rem] h-[65%] rounded-t-[0.375rem] bg-gray-200" />
                    </div>

                    {/* X-axis labels */}
                    <div className="absolute left-[4rem] right-[1rem] bottom-0 flex justify-around gap-[1rem]">
                         <div className="h-[0.75rem] w-[2.5rem] rounded bg-gray-200" />
                         <div className="h-[0.75rem] w-[2.5rem] rounded bg-gray-200" />
                         <div className="h-[0.75rem] w-[2.5rem] rounded bg-gray-200" />
                         <div className="h-[0.75rem] w-[2.5rem] rounded bg-gray-200" />
                         <div className="h-[0.75rem] w-[2.5rem] rounded bg-gray-200" />
                         <div className="h-[0.75rem] w-[2.5rem] rounded bg-gray-200" />
                    </div>
               </div>
          </div>
     )
}