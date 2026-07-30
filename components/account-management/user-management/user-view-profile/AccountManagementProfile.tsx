import React from "react";
import { FiMail } from "react-icons/fi";

export default function ProfileCard() {
  return (
    <div className="p-[1.5rem] border border-gray-200 rounded-[0.5rem] bg-white font-sans">
      <div className="flex items-center gap-[1rem] p-[1rem] bg-[#f8f9fa] rounded-[0.5rem] border border-gray-100">
        <div className="relative w-[3.5rem] h-[3.5rem] rounded-[0.5rem] overflow-hidden border border-gray-200 bg-white">
          <img
            src="https://i.pravatar.cc/150?img=11" 
            alt="Alex Morgan"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex flex-col gap-[0.25rem]">
          <h2 className="text-[1rem] font-semibold text-gray-900">
            Alex Morgan
          </h2>
          <div className="flex items-center gap-[0.5rem] text-[0.875rem] text-gray-500">
            <span>alexamorgan@gmail.com</span>

          <FiMail className="w-[1.125rem] h-[1.125rem] text-gray-500" />
          </div>
        </div>
      </div>

      <div className="mt-[1.5rem]">
        <h3 className="text-[1.125rem] font-semibold text-gray-900 mb-[0.75rem]">
          Mission/Bio
        </h3>
        <p className="text-[0.875rem] text-gray-600 leading-[1.375rem]">
          Global Manufacturing Co. is a leading Tier 1 and Tier 2 supplier
          specializing in high-tolerance components, advanced material
          production, and efficient sub-assembly modules. With over 15 years of
          operational excellence, we partner with automotive OEMs and other
          suppliers to ensure supply chain resilience, superior component
          quality, and compliance with strict industry standards (like IATF
          16949). We drive manufacturing optimization from raw material input to
          just-in-time delivery.
        </p>
      </div>

      <div className="mt-[1.5rem]">
        <h3 className="text-[1.125rem] font-semibold text-gray-900 mb-[0.75rem]">
          Member Since
        </h3>
        <p className="text-[0.875rem] text-gray-600">August 2023</p>
      </div>
    </div>
  );
}
