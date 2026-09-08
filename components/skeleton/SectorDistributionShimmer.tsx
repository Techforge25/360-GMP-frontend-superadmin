
export default function SectorDistributionShimmer() {
  return (
    <div className="w-full rounded-[0.625rem] border border-border-gray-200 bg-white p-3 sm:p-4">
      <div>
        <div className="h-6 w-[12rem] animate-pulse rounded-md bg-gray-200" />

        <div className="mt-3 h-4 w-[17rem] animate-pulse rounded-md bg-gray-200" />
      </div>

      <div className="my-5 h-px w-full bg-brand-rating-star-border" />

      <div className="flex min-h-[18rem] w-full flex-col items-center justify-between gap-5 pl-9 sm:flex-row sm:gap-6">
        <div className="flex h-[18rem] w-full max-w-[18rem] items-center justify-center sm:h-[280px] sm:w-[280px]">
          <div className="h-[220px] w-[220px] animate-pulse rounded-full border-[55px] border-gray-200 bg-white" />
        </div>

        <div className="flex w-full max-w-[18.308rem] flex-col gap-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="flex h-[3rem] w-full animate-pulse items-center justify-between rounded-[0.5rem] border border-border-gray-200 bg-white p-[0.75rem]"
            >
              <div className="flex items-center gap-2">
                <div className="h-[1rem] w-[1rem] rounded-[4px] bg-gray-200" />

                <div className="h-4 w-[6rem] rounded-md bg-gray-200" />
              </div>

              <div className="h-4 w-[2.5rem] rounded-md bg-gray-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
