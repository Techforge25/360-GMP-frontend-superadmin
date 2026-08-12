const SidebarMenuShimmer = () => {
     return (
          <div className="flex-1 mt-3 flex flex-col gap-1 px-3 overflow-y-auto custom-scrollbar">
               {Array.from({ length: 8 }).map((_, index) => (
                    <div
                         key={index}
                         className="flex items-center gap-3 px-3 py-3 rounded-lg animate-pulse"
                    >
                         <div className="h-5 w-5 rounded-md bg-gray-200" />
                         <div className="h-4 w-32 rounded bg-gray-200" />
                    </div>
               ))}
          </div>
     );
};

export default SidebarMenuShimmer;