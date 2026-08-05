export default function ProductDetailShimmer() {
     return (
          <div className="space-y-8 animate-pulse">
               {/* Top Section */}
               <div className="mb-8 flex flex-col gap-8 lg:flex-row">
                    {/* Left Image Gallery */}
                    <div className="w-full lg:w-[40%]">
                         {/* Main Image */}
                         <div className="aspect-[4/3] rounded-2xl bg-gray-200" />

                         {/* Thumbnails */}
                         <div className="mt-4 grid grid-cols-4 gap-3">
                              {[...Array(4)].map((_, index) => (
                                   <div
                                        key={index}
                                        className="aspect-[4/3] rounded-xl bg-gray-200"
                                   />
                              ))}
                         </div>
                    </div>

                    {/* Right Product Info */}
                    <div className="flex w-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:w-[60%]">
                         {/* Title */}
                         <div className="h-8 w-3/4 rounded bg-gray-200" />

                         {/* Description */}
                         <div className="mt-4 space-y-2">
                              <div className="h-4 w-full rounded bg-gray-200" />
                              <div className="h-4 w-5/6 rounded bg-gray-200" />
                         </div>

                         {/* Price */}
                         <div className="mt-8 flex items-end justify-between border-b border-gray-200 pb-6">
                              <div>
                                   <div className="h-9 w-32 rounded bg-gray-200" />
                                   <div className="mt-2 h-4 w-12 rounded bg-gray-200" />
                              </div>

                              <div className="h-5 w-24 rounded bg-gray-200" />
                         </div>

                         {/* Company */}
                         <div className="mt-6 flex items-center gap-3 rounded-xl bg-gray-100 p-4">
                              <div className="h-10 w-10 rounded-md bg-gray-200" />
                              <div className="h-6 w-56 rounded bg-gray-200" />
                         </div>

                         {/* Product Details */}
                         <div className="mt-8 space-y-5">
                              {[1, 2].map((item) => (
                                   <div
                                        key={item}
                                        className="flex items-center justify-between border-b border-gray-100 pb-5"
                                   >
                                        <div className="h-5 w-32 rounded bg-gray-200" />
                                        <div className="h-5 w-24 rounded bg-gray-200" />
                                   </div>
                              ))}
                         </div>
                    </div>
               </div>

               {/* Specifications */}
               <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
                    <div className="mb-6 h-7 w-56 rounded bg-gray-200" />

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                         {/* Specs Table */}
                         <div className="overflow-hidden rounded-xl border border-gray-300">
                              {[...Array(8)].map((_, index) => (
                                   <div
                                        key={index}
                                        className={`flex justify-between p-4 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                             }`}
                                   >
                                        <div className="h-5 w-32 rounded bg-gray-200" />
                                        <div className="h-5 w-24 rounded bg-gray-200" />
                                   </div>
                              ))}
                         </div>

                         {/* Product Detail */}
                         <div className="rounded-xl border border-gray-200 bg-gray-100 p-6">
                              <div className="mb-5 h-6 w-40 rounded bg-gray-200" />

                              <div className="space-y-3">
                                   {[...Array(7)].map((_, index) => (
                                        <div
                                             key={index}
                                             className={`h-4 rounded bg-gray-200 ${index === 6 ? "w-3/4" : "w-full"
                                                  }`}
                                        />
                                   ))}
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}