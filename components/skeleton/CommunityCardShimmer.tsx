export default function CommunityCardShimmer() {
     return (
          <div className="flex-1 min-h-[10.5rem] border border-border-gray-200 bg-white rounded-[0.75rem] p-4 animate-pulse">
               {/* Title */}
               <div className="h-5 w-40 bg-gray-200 rounded mb-4" />

               {/* Content */}
               <div className="flex gap-2">
                    {/* Image */}
                    <div className="shrink-0">
                         <div className="w-[3.25rem] h-[3.25rem] rounded-full bg-gray-200" />
                    </div>

                    {/* Text */}
                    <div className="flex-1 space-y-2">
                         {/* Name */}
                         <div className="h-4 w-32 bg-gray-200 rounded" />

                         {/* Description */}
                         <div className="h-4 w-full bg-gray-200 rounded" />
                         <div className="h-4 w-3/4 bg-gray-200 rounded" />

                         {/* Date */}
                         <div className="flex items-center gap-1 pt-1">
                              <div className="w-[0.75rem] h-[0.833rem] bg-gray-200 rounded" />
                              <div className="h-3 w-20 bg-gray-200 rounded" />
                         </div>
                    </div>
               </div>
          </div>
     );
};