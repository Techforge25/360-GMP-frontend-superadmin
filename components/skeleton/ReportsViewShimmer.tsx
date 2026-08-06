export default function ReportsViewShimmer() {
     return (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 sm:p-6 font-sans">
               <div className="flex w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl max-h-[90vh] animate-pulse">
                    {/* Header */}
                    <div className="relative border-b border-gray-100 px-8 py-6">
                         <div className="absolute right-6 top-6 h-6 w-6 rounded-full bg-gray-200" />

                         <div className="h-7 w-60 rounded-md bg-gray-200" />
                         <div className="mt-3 h-4 w-96 rounded-md bg-gray-100" />
                    </div>

                    <div className="flex-1 overflow-y-auto space-y-5 p-6 sm:px-8 custom-scrollbar">
                         {/* Reporter Information */}
                         <div className="rounded-lg border border-gray-200 p-5 shadow-sm">
                              <div className="mb-5 h-4 w-40 rounded bg-gray-200" />

                              <div className="flex items-center gap-4">
                                   <div className="h-12 w-12 rounded-full bg-gray-200" />

                                   <div className="flex-1 space-y-2">
                                        <div className="h-4 w-40 rounded bg-gray-200" />
                                        <div className="h-3 w-56 rounded bg-gray-100" />
                                   </div>
                              </div>
                         </div>

                         {/* Details Section */}
                         <div className="rounded-lg border border-gray-200 p-5 shadow-sm">
                              <div className="mb-5 h-4 w-48 rounded bg-gray-200" />

                              <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                                   {[...Array(6)].map((_, index) => (
                                        <div key={index}>
                                             <div className="mb-2 h-3 w-24 rounded bg-gray-100" />
                                             <div className="h-4 w-36 rounded bg-gray-200" />
                                        </div>
                                   ))}
                              </div>
                         </div>

                         {/* Violation Details */}
                         <div className="rounded-lg border border-gray-200 p-5 shadow-sm">
                              <div className="mb-5 h-4 w-44 rounded bg-gray-200" />

                              <div className="mb-6 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                                   {[...Array(2)].map((_, index) => (
                                        <div key={index}>
                                             <div className="mb-2 h-3 w-28 rounded bg-gray-100" />
                                             <div className="h-4 w-40 rounded bg-gray-200" />
                                        </div>
                                   ))}
                              </div>

                              <div className="rounded-lg bg-gray-100 p-4">
                                   <div className="mb-3 h-3 w-32 rounded bg-gray-200" />

                                   <div className="space-y-2">
                                        <div className="h-3 w-full rounded bg-gray-200" />
                                        <div className="h-3 w-full rounded bg-gray-200" />
                                        <div className="h-3 w-5/6 rounded bg-gray-200" />
                                        <div className="h-3 w-2/3 rounded bg-gray-200" />
                                   </div>
                              </div>
                         </div>

                         {/* Evidence */}
                         <div className="rounded-lg border border-gray-200 p-5 shadow-sm">
                              <div className="mb-5 h-4 w-52 rounded bg-gray-200" />

                              <div className="space-y-3">
                                   {[...Array(3)].map((_, index) => (
                                        <div
                                             key={index}
                                             className="flex items-center justify-between rounded-lg border border-gray-200 p-3"
                                        >
                                             <div className="flex items-center gap-3">
                                                  <div className="h-12 w-12 rounded-lg bg-gray-200" />

                                                  <div className="space-y-2">
                                                       <div className="h-4 w-40 rounded bg-gray-200" />
                                                       <div className="h-3 w-28 rounded bg-gray-100" />
                                                  </div>
                                             </div>

                                             <div className="h-6 w-6 rounded-full bg-gray-200" />
                                        </div>
                                   ))}
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}