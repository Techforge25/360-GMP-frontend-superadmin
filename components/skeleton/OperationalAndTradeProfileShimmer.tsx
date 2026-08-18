export default function OperationalAndTradeProfileShimmer() {
  return (
    <div className="mt-[1.5rem] border border-border-shadow-50 rounded-[0.75rem] bg-white font-sans overflow-hidden">

      <div className="flex items-center gap-[0.75rem] bg-brand-btn-pills-background px-[1.5rem] py-[1.25rem] border-b border-border-shadow-dark">
   
        <div className="w-[1.083rem] h-[1.083rem] rounded shimmer" />

   
        <div className="h-[1.125rem] w-[15rem] rounded shimmer" />
      </div>


      <div className="flex flex-col gap-[2rem] p-[1.5rem]">

        <div className="grid grid-cols-1 gap-x-[2.5rem] gap-y-[1.5rem] md:grid-cols-2">

          <div className="flex flex-col gap-[0.375rem]">
    
            <div className="h-[0.875rem] w-[7rem] rounded shimmer" />

            <div className="h-[1rem] w-[8rem] rounded shimmer" />
          </div>

  
          <div className="flex flex-col gap-[0.5rem]">

            <div className="h-[0.875rem] w-[8rem] rounded shimmer" />


            <div className="flex flex-wrap gap-[0.5rem]">
              <div className="h-[2rem] w-[6rem] rounded-[5.75rem] shimmer" />

              <div className="h-[2rem] w-[9rem] rounded-[5.75rem] shimmer" />

              <div className="h-[2rem] w-[7rem] rounded-[5.75rem] shimmer" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[0.5rem]">

          <div className="h-[0.875rem] w-[9rem] rounded shimmer" />

          <div className="flex flex-wrap gap-[0.5rem]">
            <div className="h-[2rem] w-[8rem] rounded-[5.75rem] shimmer" />

            <div className="h-[2rem] w-[7rem] rounded-[5.75rem] shimmer" />

            <div className="h-[2rem] w-[9rem] rounded-[5.75rem] shimmer" />

            <div className="h-[2rem] w-[6rem] rounded-[5.75rem] shimmer" />
          </div>
        </div>
      </div>
    </div>
  );
}