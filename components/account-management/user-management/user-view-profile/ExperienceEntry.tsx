import { workExperienceData } from "@/constants/acount-management/workExperienceData";
import workIcon from "@/assets/workexperienceicon.svg";
import Image from "next/image";
import { TypeWorkExperience } from "@/types";
import moment from "moment";

interface Props {
  workExperience: TypeWorkExperience[];
}

function ExperienceEntry({ workExperience }: Props) {
  console.log(workExperience, "work exp");
  return (
    <section className="w-full mt-[1.5rem] rounded-xl border p-[1rem] border-border-gray-light bg-surface-DEFAULT mt-5">
      <div className="flex items-center gap-3 pb-4 border-b border-border-gray-light">
        <div className="flex h-8 w-8 items-center justify-center rounded-md border border-bg-light-icon bg-bg-light-icon">
          <div className="relative flex h-4 w-4 items-center justify-center rounded ">
            <Image
              src={workIcon}
              width={100}
              height={100}
              alt=""
              className="w-[1.042rem] h-[1.042rem]"
            />
            <div className="relative z-10 h-1.5 w-1.5 rounded-full bg-white" />
          </div>
        </div>

        <h2 className="text-[1.375rem] font-semibold text-text-work-dark font-open-sans">
          Work Experience
        </h2>
      </div>

      <div className="">
        {workExperience?.map((entry, index) => (
          <div
            key={index}
            className={`py-5 ${
              index !== workExperienceData.length - 1
                ? "border-b border-gray-200"
                : ""
            }`}
          >
            <div>
              <h3 className="text-[1rem] font-semibold leading-6 text-text-work-dark font-inter">
                {entry.jobTitle}
              </h3>

              <p className="mt-1 text-[0.875rem] text-brand-rating-text-border font-normal">
                {entry?.companyName}
              </p>

              <p className="mt-2 text-[0.875rem] font-normal text-brand-primary font-inter">
                {moment(entry?.startDate).format("MMM YYYY")} -{" "}
                {entry?.endDate
                  ? moment(entry?.endDate)?.format("MMM YYYY")
                  : `Present`}
              </p>
            </div>

            <div className="mt-[0.5rem] flex flex-col ">
              <div className="flex">
                {entry?.employmentType?.map((type, index) => {
                  return (
                    <span
                      key={index}
                      className="px-[1rem] py-[0.375rem] bg-bg-light-icon text-brand-primary text-[0.813rem] font-medium rounded-[3.125rem] font-inter ml-1"
                    >
                      {type}
                    </span>
                  );
                })}
              </div>
              <div className="mt-[0.5rem]">
              <p className="flex-1 text-[0.875rem] leading-[1.75rem] font-normal text-text-secondary break-words whitespace-normal">
                {entry?.location}
              </p>
              <div className="relative flex items-start ">
                {/* <div className="relative flex flex-col items-center w-[1rem]">
                  <div className="z-10 h-[0.75rem] w-[0.75rem] rounded-full bg-brand-primary mt-[0.45rem]" />
                  <div className="absolute left-1/2 top-[1.2rem] h-[30px] -translate-x-1/2 w-[2px] bg-[#9B82D9]" />
                </div> */}
                <p
                  className={`flex-1 text-[0.875rem] leading-[1.75rem] font-normal break-words whitespace-normal text-text-secondary pb-[1.75rem]`}
                  dangerouslySetInnerHTML={{
                    __html: entry?.description,
                  }}
                />
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceEntry;
