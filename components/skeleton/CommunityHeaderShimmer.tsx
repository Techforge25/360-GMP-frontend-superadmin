const CommunityHeaderSkeleton = () => {
     return (
          <div className="animate-pulse">
               {/* Header */}
               <div className="flex items-center justify-between w-full">
                    {/* Back button */}
                    <div className="h-9 w-28 rounded-md bg-gray-200" />

                    {/* Category */}
                    <div className="h-8 w-24 rounded-md bg-gray-200" />
               </div>

               {/* Community Info */}
               <div className="flex mt-9 gap-4 items-start">
                    {/* Image */}
                    <div className="w-[7rem] h-[7rem] shrink-0 rounded-[0.75rem] bg-gray-200" />

                    {/* Text */}
                    <div className="flex-1 space-y-3">
                         {/* Title */}
                         <div className="h-9 w-[18rem] max-w-full rounded-md bg-gray-200" />

                         {/* Description */}
                         <div className="space-y-2">
                              <div className="h-4 w-full rounded bg-gray-200" />
                              <div className="h-4 w-3/4 rounded bg-gray-200" />
                         </div>

                         {/* Members / Status / Public */}
                         <div className="flex items-center gap-2">
                              <div className="h-4 w-28 rounded bg-gray-200" />
                              <div className="h-4 w-3 rounded-full bg-gray-200" />
                              <div className="h-4 w-14 rounded bg-gray-200" />
                              <div className="h-4 w-3 rounded-full bg-gray-200" />
                              <div className="h-4 w-14 rounded bg-gray-200" />
                         </div>

                         {/* Created On */}
                         <div className="flex items-center gap-2">
                              <div className="h-4 w-20 rounded bg-gray-200" />
                              <div className="h-4 w-3 rounded-full bg-gray-200" />
                              <div className="h-4 w-24 rounded bg-gray-200" />
                         </div>
                    </div>
               </div>

               {/* Suspend Button */}
               <div className="mt-6 h-10 w-32 rounded-md bg-gray-200" />
          </div>
     );
};

export default CommunityHeaderSkeleton;