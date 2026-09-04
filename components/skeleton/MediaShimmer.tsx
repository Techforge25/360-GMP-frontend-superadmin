export const MediaShimmer = () => {
  return (
    <div className="relative overflow-hidden rounded-[3px]">
      {/* Main shimmer */}
      <div className="relative aspect-[16/7] w-full overflow-hidden bg-gray-200">
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      </div>

      {/* Left navigation */}
      <div className="absolute left-3 top-1/2 h-7 w-7 -translate-y-1/2 overflow-hidden rounded-full bg-gray-200">
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      </div>

      {/* Right navigation */}
      <div className="absolute right-3 top-1/2 h-7 w-7 -translate-y-1/2 overflow-hidden rounded-full bg-gray-200">
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      </div>

      {/* Pagination */}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        <div className="h-2 w-2 rounded-full bg-gray-300" />
        <div className="h-2 w-2 rounded-full bg-gray-300" />
        <div className="h-2 w-2 rounded-full bg-gray-300" />
      </div>
    </div>
  );
};
