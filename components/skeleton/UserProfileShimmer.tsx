const UserProfileShimmer = () => {
     return (
          <div className="animate-pulse space-y-4">
               {/* ================= Profile Card ================= */}
               <div className="rounded-[0.75rem] border border-gray-200 bg-white p-4">
                    {/* User */}
                    <div className="flex items-center gap-4 rounded-[0.5rem] border border-gray-200 bg-gray-100 p-4">
                         <div className="h-14 w-14 rounded-lg bg-gray-300" />

                         <div className="flex flex-1 flex-col gap-2">
                              <div className="h-5 w-40 rounded bg-gray-300" />
                              <div className="h-4 w-56 rounded bg-gray-200" />
                         </div>
                    </div>

                    {/* Bio */}
                    <div className="mt-6">
                         <div className="mb-4 h-5 w-32 rounded bg-gray-300" />

                         <div className="space-y-3">
                              <div className="h-4 w-full rounded bg-gray-200" />
                              <div className="h-4 w-full rounded bg-gray-200" />
                              <div className="h-4 w-11/12 rounded bg-gray-200" />
                              <div className="h-4 w-10/12 rounded bg-gray-200" />
                         </div>
                    </div>

                    {/* Member Since */}
                    <div className="mt-6">
                         <div className="mb-3 h-5 w-36 rounded bg-gray-300" />
                         <div className="h-4 w-28 rounded bg-gray-200" />
                    </div>
               </div>

               {/* ================= Work Experience ================= */}
               <section className="rounded-[0.75rem] border border-gray-200 bg-white p-6">
                    <div className="mb-6 h-8 w-56 rounded bg-gray-300" />

                    {[1, 2].map((_, index) => (
                         <div
                              key={index}
                              className={`py-5 ${index !== 1 ? "border-b border-gray-200" : ""
                                   }`}
                         >
                              <div>
                                   <div className="h-5 w-60 rounded bg-gray-300" />
                                   <div className="mt-3 h-4 w-44 rounded bg-gray-200" />
                                   <div className="mt-3 h-4 w-36 rounded bg-gray-200" />
                              </div>

                              <div className="mt-6 flex flex-col">
                                   {[1, 2, 3].map((_, i) => (
                                        <div
                                             key={i}
                                             className="relative flex items-start gap-4 pb-6 last:pb-0"
                                        >
                                             <div className="relative flex w-4 flex-col items-center">
                                                  <div className="z-10 mt-2 h-3 w-3 rounded-full bg-gray-300" />

                                                  {i !== 2 && (
                                                       <div className="absolute left-1/2 top-5 h-8 w-[2px] -translate-x-1/2 bg-gray-200" />
                                                  )}
                                             </div>

                                             <div className="flex-1 space-y-2">
                                                  <div className="h-4 w-full rounded bg-gray-200" />
                                                  <div className="h-4 w-10/12 rounded bg-gray-200" />
                                             </div>
                                        </div>
                                   ))}
                              </div>
                         </div>
                    ))}
               </section>

               {/* ================= Education + Job Preferences ================= */}
               <div className="flex flex-col gap-4 rounded-[0.75rem] border border-gray-200 bg-white p-4 md:flex-row">
                    {/* Education */}
                    <div className="flex-1 rounded-[0.75rem] border border-gray-200 p-4">
                         <div className="mb-4 flex items-center gap-4">
                              <div className="h-8 w-8 rounded-md bg-gray-300" />
                              <div className="h-6 w-40 rounded bg-gray-300" />
                         </div>

                         <div className="mb-6 h-px bg-gray-200" />

                         <div className="rounded-xl border-l-4 border-gray-300 bg-gray-100 p-4">
                              <div className="h-5 w-3/4 rounded bg-gray-300" />
                              <div className="mt-3 h-4 w-2/3 rounded bg-gray-200" />
                              <div className="mt-3 h-4 w-24 rounded bg-gray-200" />
                         </div>
                    </div>

                    {/* Job Preferences */}
                    <div className="flex-1 rounded-[0.75rem] border border-gray-200 p-4">
                         <div className="mb-4 flex items-center gap-4">
                              <div className="h-8 w-8 rounded-md bg-gray-300" />
                              <div className="h-6 w-44 rounded bg-gray-300" />
                         </div>

                         <div className="mb-6 h-px bg-gray-200" />

                         <div className="space-y-6">
                              <div>
                                   <div className="mb-3 h-5 w-20 rounded bg-gray-300" />
                                   <div className="h-4 w-48 rounded bg-gray-200" />
                              </div>

                              <div>
                                   <div className="mb-3 h-5 w-40 rounded bg-gray-300" />

                                   <div className="flex gap-3">
                                        <div className="h-8 w-24 rounded-full bg-gray-200" />
                                        <div className="h-8 w-24 rounded-full bg-gray-200" />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default UserProfileShimmer;