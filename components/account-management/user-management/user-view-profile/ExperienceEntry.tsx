import { workExperienceData } from "@/constants/acount-management/workExperienceData";
import { MdWork } from "react-icons/md";

function ExperienceEntry() {
  return (
    <section className="w-full rounded-xl border border-gray-200 bg-white mt-5">
      <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-200">
        <div className="flex h-7 w-7 items-center justify-center rounded-md border border-bg-experience-light bg-bg-experience-light">
          <div className="relative flex h-4 w-4 items-center justify-center rounded  ">
            <MdWork className="h-7 w-7 text-brand-primary " />
            <div className="relative z-10 h-1.5 w-1.5 rounded-full bg-white" />
          </div>
        </div>

        <h2 className="text-[18px] font-semibold text-text-work-dark">
          Work Experience
        </h2>
      </div>

      <div className="px-5">
        {workExperienceData.map((entry, index) => (
          <div
            key={index}
            className={`py-5 ${
              index !== workExperienceData.length - 1
                ? "border-b border-gray-200"
                : ""
            }`}
          >
            <div>
              <h3 className="text-[18px] font-semibold leading-6 text-text-work-dark">
                {entry.title}
              </h3>

              <p className="mt-1 text-[15px] text-brand-rating-text-border">{entry.company}</p>

              <p className="mt-2 text-[15px] font-medium text-text-dark-purple">
                {entry.dateRange}
                <span className=" font-normal"> ({entry.duration})</span>
              </p>
            </div>

            <div className="mt-[1.5rem] flex flex-col">
              {entry.achievements.map((achievement, aIndex) => {
                const isLast = aIndex === entry.achievements.length - 1;

                return (
                  <div
                    key={aIndex}
                    className="relative flex items-start gap-[1rem]"
                  >
                    <div className="relative flex flex-col items-center w-[1rem]">
                      <div className="z-10 h-[0.75rem] w-[0.75rem] rounded-full bg-[#35126F] mt-[0.45rem]" />

                      {!isLast && (
                        <div className="absolute left-1/2 top-[1.2rem] h-[30px] -translate-x-1/2 w-[2px] bg-[#9B82D9]" />
                      )}
                    </div>

                    <p
                      className={`flex-1 text-[0.9375rem] leading-[1.75rem] text-[#556179] ${!isLast ? "pb-[1.75rem]" : ""}`}
                    >
                      {achievement}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceEntry;
