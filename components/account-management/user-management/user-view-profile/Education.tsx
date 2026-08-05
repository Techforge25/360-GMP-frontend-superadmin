import React from "react";
import { LuGraduationCap, LuClipboardCheck } from "react-icons/lu";
import educationIcon from "@/assets/educationIcon.svg"
import jobPreferenceIcon from "@/assets/jobPreferenceIcon.svg"
import Image from "next/image";

export default function Education() {
  return (
    <div className="flex flex-col md:flex-row w-full mt-4 border border-border-gray-light rounded-[0.75rem] bg-surface-DEFAULT font-sans overflow-hidden p-4 gap-3">
      <div className="flex-1 p-[1rem] border border-border-gray-dark rounded-[0.75rem]">
        <div className="flex items-center gap-[1rem] mb-[1rem]">
          <div className="flex items-center justify-center w-[2rem] h-[2rem] rounded-[0.375rem] bg-bg-light-icon">
             <Image src={educationIcon} width={100} height={100} alt="" className="w-[1.042rem] h-[0.833rem]"/>  
          </div>
          <h2 className="text-[1.375rem] font-semibold text-text-primary font-open-sans">
            Education
          </h2>
        </div>

        <hr className="border-t border-bg-light-icon mb-[1.5rem]" />

        <div className="relative bg-bg-light-icon rounded-[0.75rem] p-[0.625rem]  border border-bg-light-icon border-l-[0.188rem] border-l-brand-primary overflow-hidden">
          <h3 className="text-[1rem] font-medium text-text-primary mb-[0.375rem] font-inter">
            M.S In Human-Computer Interaction (HCI)
          </h3>
          <p className="text-[1rem] text-slate-600 mb-[0.25rem] font-inter font-normal">
            Carnegie Mellon University
          </p>
          <p className="text-[0.875rem] font-normal text-brand-primary font-inter">
            2015 – 2017
          </p>
        </div>
      </div>

     <div className="flex-1 p-[1rem] border border-border-gray-dark rounded-[0.75rem]">
        <div className="flex items-center gap-[1rem] mb-[1rem]">
          <div className="flex items-center justify-center w-[2rem] h-[2rem] rounded-[0.375rem] bg-bg-light-icon">
             <Image src={jobPreferenceIcon} width={100} height={100} alt="" className="w-[1.042rem] h-[0.833rem]"/>  
          </div>
           <h2 className="text-[1.375rem] font-semibold text-text-primary font-open-sans">
            Jobs Preferences
          </h2>
        </div>

        <hr className="border-t border-bg-light-icon mb-[1.5rem]" />

        <div className="flex flex-col gap-[1.25rem]">
          <div>
            <h3 className="text-[1rem] font-medium text-text-primary mb-[0.375rem] font-inter">
              Title
            </h3>
            <p className="text-[1rem] text-slate-600 font-inter font-normal">
              Supply Chain Analyst
            </p>
          </div>

          <div>
            <h3 className="text-[1rem] font-medium text-text-primary mb-[0.625rem] font-inter ">
              Employment Type
            </h3>
            <div className="flex items-center gap-[0.75rem]">
              <span className="px-[1rem] py-[0.375rem] bg-bg-light-icon text-brand-primary text-[0.813rem] font-medium rounded-[3.125rem] font-inter">
                Full Time
              </span>
              <span className="px-[1rem] py-[0.375rem] bg-bg-light-icon text-brand-primary text-[0.813rem] font-medium rounded-[3.125rem] font-inter">
                Contract
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
