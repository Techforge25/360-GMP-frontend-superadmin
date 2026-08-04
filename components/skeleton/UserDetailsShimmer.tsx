export default function UserDetailsShimmer() {
     return (
          <div className="mt-4 flex animate-pulse flex-col gap-6 rounded-[0.75rem] border border-border-gray-light bg-white p-6 shadow-sm">
               {/* Header */}
               <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-2">
                         <div className="h-7 w-56 rounded bg-gray-200" />
                         <div className="h-4 w-40 rounded bg-gray-200" />
                    </div>

                    <div className="h-8 w-20 rounded-full bg-gray-200" />
               </div>

               {/* Contact Card */}
               <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-[#f8fafc] p-4">
                    <div className="flex items-center gap-4">
                         <div className="h-10 w-10 rounded-full bg-gray-200" />
                         <div className="flex flex-col gap-2">
                              <div className="h-5 w-64 rounded bg-gray-200" />
                         </div>
                    </div>

                    <div className="h-10 w-28 rounded-lg bg-gray-200" />
               </div>

               {/* Subscription Card */}
               <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
                    {/* Heading */}
                    <div className="border-b border-gray-200 px-6 py-4">
                         <div className="h-7 w-72 rounded bg-gray-200" />
                    </div>

                    <div className="p-6">
                         <div className="flex flex-col gap-5 rounded-lg border border-gray-200 bg-[#fcfcfd] p-5">
                              {/* Plan Heading */}
                              <div className="flex flex-col gap-2">
                                   <div className="h-7 w-40 rounded bg-gray-200" />
                                   <div className="h-4 w-52 rounded bg-gray-200" />
                              </div>

                              {/* Plan Details */}
                              <div className="flex items-start justify-between">
                                   <div className="flex flex-col gap-2">
                                        <div className="h-5 w-44 rounded bg-gray-200" />
                                        <div className="h-4 w-36 rounded bg-gray-200" />
                                   </div>

                                   <div className="h-6 w-16 rounded bg-gray-200" />
                              </div>

                              {/* Renewal Date */}
                              <div className="flex items-center justify-between border-b border-gray-200 py-3">
                                   <div className="h-4 w-28 rounded bg-gray-200" />
                                   <div className="h-5 w-24 rounded bg-gray-200" />
                              </div>

                              {/* Included Features */}
                              <div className="flex flex-col gap-3">
                                   <div className="h-5 w-40 rounded bg-gray-200" />

                                   <div className="flex items-center gap-2">
                                        <div className="h-5 w-5 rounded-full bg-gray-200" />
                                        <div className="h-4 w-48 rounded bg-gray-200" />
                                   </div>

                                   <div className="flex items-center gap-2">
                                        <div className="h-5 w-5 rounded-full bg-gray-200" />
                                        <div className="h-4 w-40 rounded bg-gray-200" />
                                   </div>

                                   <div className="flex items-center gap-2">
                                        <div className="h-5 w-5 rounded-full bg-gray-200" />
                                        <div className="h-4 w-52 rounded bg-gray-200" />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}