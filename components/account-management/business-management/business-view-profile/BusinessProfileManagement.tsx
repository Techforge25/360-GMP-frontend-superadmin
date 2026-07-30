import Image from "next/image";
import {
  HiOutlineOfficeBuilding,
  HiOutlineBriefcase,
  HiOutlineUsers,
} from "react-icons/hi";
import { FiCalendar, FiMapPin, FiAward } from "react-icons/fi";

export default function CompanyProfile() {
  return (
    <div className=" p-[1.5rem] border border-gray-200 rounded-[0.5rem] bg-white font-sans text-gray-900">
      <div className="flex flex-col md:flex-row md:items-start justify-between p-[1.25rem] bg-[#DCDCDC33] rounded-[0.5rem] border border-gray-100 mb-[1.5rem]">
        <div className="flex items-start gap-[1.25rem]">
          <div className="flex-shrink-0 flex items-center justify-center w-[4rem] h-[4rem] bg-white border border-gray-200 rounded-[0.5rem] shadow-sm">
            <Image
              src="/images/image 55.png"
              alt="Company Logo"
              width={64}
              height={64}
            />
          </div>

          <div className="flex flex-col gap-[0.5rem]">
            <h1 className="text-[1.125rem] font-bold text-gray-900">
              Global Manufacturing Co.
            </h1>

            <div className="flex flex-wrap items-center gap-[0.75rem] text-[0.875rem] text-gray-500">
              <div className="flex items-center gap-[0.375rem]">
                <HiOutlineOfficeBuilding className="w-[1.125rem] h-[1.125rem] text-gray-500" />
                <span>Manufacturing</span>
              </div>
              <span className="text-gray-400 text-[0.8rem]">●</span>

              <div className="flex items-center gap-[0.375rem]">
                <HiOutlineBriefcase className="w-[1.125rem] h-[1.125rem] text-gray-500" />
                <span>LLC</span>
              </div>
              <span className="text-gray-400 text-[0.8rem]">●</span>

              <div className="flex items-center gap-[0.375rem]">
                <HiOutlineUsers className="w-[1.125rem] h-[1.125rem] text-gray-500" />
                <span>500-1000 Employees</span>
              </div>
              <span className="text-gray-400 text-[0.8rem]">●</span>

              <div className="flex items-center gap-[0.375rem]">
                <FiCalendar className="w-[1.125rem] h-[1.125rem] text-gray-500" />
                <span>6/15/2026</span>
              </div>
              <span className="text-gray-400 text-[0.8rem]">●</span>

              <div className="flex items-center gap-[0.375rem]">
                <FiMapPin className="w-[1.125rem] h-[1.125rem] text-gray-500" />
                <span>Canada</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[1rem] md:mt-0 flex-shrink-0">
          <div className="flex items-center gap-[0.375rem] px-[1.3rem] py-[0.25rem] bg-white border border-purple-300 rounded-full text-[#8A38F5]">
            <span className="text-[0.8125rem] font-medium">Enterprise</span>
            <FiAward className="w-[0.875rem] h-[0.875rem]" />
          </div>
        </div>
      </div>

      <div className="bg-[#fcfcfd] rounded-[0.5rem] border border-gray-100 p-[1.5rem] mb-[1.5rem]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-[1.5rem] gap-x-[1.5rem]">
          <div className="flex flex-col gap-[0.25rem]">
            <h3 className="text-[0.9375rem] font-semibold text-gray-900">
              Owner Name
            </h3>
            <p className="text-[0.875rem] text-gray-500">Alex Morgan</p>
          </div>
          <div className="flex flex-col gap-[0.25rem]">
            <h3 className="text-[0.9375rem] font-semibold text-gray-900">
              Trade Name
            </h3>
            <p className="text-[0.875rem] text-gray-500">SGL Express</p>
          </div>
          <div className="flex flex-col gap-[0.25rem]">
            <h3 className="text-[0.9375rem] font-semibold text-gray-900">
              Business Registration Number
            </h3>
            <p className="text-[0.875rem] text-gray-500">123456789-B</p>
          </div>

          <div className="flex flex-col gap-[0.25rem]">
            <h3 className="text-[0.9375rem] font-semibold text-gray-900">
              Tax Identification Number
            </h3>
            <p className="text-[0.875rem] text-gray-500">VAT-UK-9928374</p>
          </div>
          <div className="flex flex-col gap-[0.25rem]">
            <h3 className="text-[0.9375rem] font-semibold text-gray-900">
              DUNS Number
            </h3>
            <p className="text-[0.875rem] text-gray-500">123456789</p>
          </div>
          <div className="flex flex-col gap-[0.25rem]">
            <h3 className="text-[0.9375rem] font-semibold text-gray-900">
              Operating Hours
            </h3>
            <p className="text-[0.875rem] text-gray-500">9:00 AM - 6:00 PM</p>
          </div>

          <div className="flex flex-col gap-[0.25rem]">
            <h3 className="text-[0.9375rem] font-semibold text-gray-900">
              Official Company Website
            </h3>
            <a
              href="https://www.globalmanufacturing.com"
              className="text-[0.875rem] text-blue-600 hover:underline"
            >
              www.globalmanufacturing.com
            </a>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-[1.125rem] font-bold text-gray-900 mb-[0.5rem]">
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
    </div>
  );
}
