import Image from "next/image";
import {
  HiOutlineOfficeBuilding,
  HiOutlineBriefcase,
  HiOutlineUsers,
} from "react-icons/hi";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import moment from "moment";

interface TypeCompanyProfile {
  companyName: string;
  businessType: string;
  companySize: string;
  primaryIndustry: string;
  foundedDate: string;
  headOfficeCountry: string;
  ownerName: string;
  tradeName: string;
  businessRegistrationNumber: string;
  taxIdentificationNumber: string;
  dunsNumber: string;
  operationHour: string;
  website: string;
  description: string;
  logo: string;
}

export default function CompanyProfile({
  companyName,
  businessType,
  primaryIndustry,
  companySize,
  foundedDate,
  headOfficeCountry,
  ownerName,
  tradeName,
  businessRegistrationNumber,
  taxIdentificationNumber,
  dunsNumber,
  operationHour,
  website,
  description,
  logo
}: TypeCompanyProfile) {
  return (
    <div className=" p-[1.5rem] border border-gray-200 rounded-[0.5rem] bg-white font-sans text-gray-900">
      <div className="flex flex-col md:flex-row md:items-start justify-between p-[1.25rem] bg-[#DCDCDC33] rounded-[0.5rem] border border-gray-100 mb-[1.5rem]">
        <div className="flex items-start gap-[1.25rem]">
          <div className="flex-shrink-0 flex items-center justify-center w-[4rem] h-[4rem] bg-white border border-gray-200 rounded-[0.5rem] shadow-sm">
            <Image
              src={logo}
              alt="Company Logo"
              width={64}
              height={64}
            />
          </div>

          <div className="flex flex-col gap-[0.5rem]">
            <h1 className="text-[1.125rem] font-bold text-gray-900">
              {companyName}
            </h1>

            <div className="flex flex-wrap items-center gap-[0.75rem] text-[0.875rem] text-gray-500">
              <div className="flex items-center gap-[0.375rem]">
                <HiOutlineOfficeBuilding className="w-[1.125rem] h-[1.125rem] text-gray-500" />
                <span>{businessType}</span>
              </div>
              <span className="text-gray-400 text-[0.8rem]">●</span>

              <div className="flex items-center gap-[0.375rem]">
                <HiOutlineBriefcase className="w-[1.125rem] h-[1.125rem] text-gray-500" />
                <span>{primaryIndustry}</span>
              </div>
              <span className="text-gray-400 text-[0.8rem]">●</span>

              <div className="flex items-center gap-[0.375rem]">
                <HiOutlineUsers className="w-[1.125rem] h-[1.125rem] text-gray-500" />
                <span>{companySize} Employees</span>
              </div>
              <span className="text-gray-400 text-[0.8rem]">●</span>

              <div className="flex items-center gap-[0.375rem]">
                <FiCalendar className="w-[1.125rem] h-[1.125rem] text-gray-500" />
                <span>{moment(foundedDate).format('MM/DD/YYYY')}</span>
              </div>
              <span className="text-gray-400 text-[0.8rem]">●</span>

              <div className="flex items-center gap-[0.375rem]">
                <FiMapPin className="w-[1.125rem] h-[1.125rem] text-gray-500" />
                <span>{headOfficeCountry}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#fcfcfd] rounded-[0.5rem] border border-gray-100 p-[1.5rem] mb-[1.5rem]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-[1.5rem] gap-x-[1.5rem]">
          <div className="flex flex-col gap-[0.25rem]">
            <h3 className="text-[0.9375rem] font-semibold text-gray-900">
              Owner Name
            </h3>
            <p className="text-[0.875rem] text-gray-500">{ownerName}</p>
          </div>
          <div className="flex flex-col gap-[0.25rem]">
            <h3 className="text-[0.9375rem] font-semibold text-gray-900">
              Trade Name
            </h3>
            <p className="text-[0.875rem] text-gray-500">{tradeName}</p>
          </div>
          <div className="flex flex-col gap-[0.25rem]">
            <h3 className="text-[0.9375rem] font-semibold text-gray-900">
              Business Registration Number
            </h3>
            <p className="text-[0.875rem] text-gray-500">{businessRegistrationNumber}</p>
          </div>

          <div className="flex flex-col gap-[0.25rem]">
            <h3 className="text-[0.9375rem] font-semibold text-gray-900">
              Tax Identification Number
            </h3>
            <p className="text-[0.875rem] text-gray-500">{taxIdentificationNumber}</p>
          </div>
          <div className="flex flex-col gap-[0.25rem]">
            <h3 className="text-[0.9375rem] font-semibold text-gray-900">
              DUNS Number
            </h3>
            <p className="text-[0.875rem] text-gray-500">{dunsNumber}</p>
          </div>
          <div className="flex flex-col gap-[0.25rem]">
            <h3 className="text-[0.9375rem] font-semibold text-gray-900">
              Operating Hours
            </h3>
            <p className="text-[0.875rem] text-gray-500">{operationHour}</p>
          </div>

          <div className="flex flex-col gap-[0.25rem]">
            <h3 className="text-[0.9375rem] font-semibold text-gray-900">
              Official Company Website
            </h3>
            {website === 'N/A' ? (
              <span className="text-[0.875rem] text-gray-500">N/A</span>
            ) : (
              <>
                <a
                  href="https://www.globalmanufacturing.com"
                  className="text-[0.875rem] text-blue-600 hover:underline"
                >
                  www.globalmanufacturing.com
                </a>
              </>
            )}

          </div>
        </div>
      </div >
      <div>
        <h3 className="text-[1.125rem] font-bold text-gray-900 mb-[0.5rem]">
          Mission/Bio
        </h3>
        <p className="text-[0.875rem] text-gray-600 leading-[1.375rem]"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </div>
    </div >
  );
}
