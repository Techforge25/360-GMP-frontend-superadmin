export const MediaShimmer = () => {
     return (
          <div className="relative overflow-hidden rounded-[3px] bg-[#08111a]">
               <div className="relative aspect-[16/7] w-full animate-pulse bg-gray-700/40">
                    {/* Optional shimmer overlay */}
                    <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
               </div>

               {/* Left navigation shimmer */}
               <div className="absolute left-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10" />

               {/* Right navigation shimmer */}
               <div className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10" />

               {/* Pagination dots shimmer */}
               <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-white/30" />
                    <div className="h-2 w-2 rounded-full bg-white/20" />
                    <div className="h-2 w-2 rounded-full bg-white/20" />
               </div>
          </div>
     );
};