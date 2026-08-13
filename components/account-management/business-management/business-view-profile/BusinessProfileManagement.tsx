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
    <div className=" p-[1.5rem] mt-6 border border-border-shadow-50 rounded-[0.5rem] bg-surface-DEFAULT font-sans text-text-light">
      <div className="flex flex-col md:flex-row md:items-start justify-between p-[1.25rem] bg-bg-gray-200 rounded-[0.75rem] border border-border-gray-200 mb-[1.5rem]">
        <div className="flex items-start gap-[1.25rem]">
          <div className="flex-shrink-0 flex items-center justify-center w-[4.437rem] h-[4.437rem] bg-white border border-gray-200 rounded-[0.5rem] shadow-sm">
            <Image
              src={logo}
              alt="Company Logo"
              width={64}
              height={64}
            />
          </div>

          <div className="flex flex-col gap-[0.5rem]">
            <h1 className="text-[1rem] font-inter font-semibold text-text-light">
              {companyName}
            </h1>

            <div className="flex flex-wrap items-center gap-[0.75rem] text-[1rem] font-normal font-inter text-text-secondary">
              <div className="flex items-center gap-[0.375rem]">
                <HiOutlineOfficeBuilding className="w-[1.042rem] h-[1.042rem] text-text-secondary" />
                <span>{businessType}</span>
              </div>
              <span className="text-gray-400 text-[0.8rem]">●</span>

              <div className="flex items-center gap-[0.375rem]">
                <HiOutlineBriefcase className="w-[1.042rem] h-[1.042rem] text-text-secondary" />
                <span>{primaryIndustry}</span>
              </div>
              <span className="text-gray-400 text-[0.8rem]">●</span>

              <div className="flex items-center gap-[0.375rem]">
                <HiOutlineUsers className="w-[1.042rem] h-[1.042rem] text-text-secondary" />
                <span>{companySize} Employees</span>
              </div>
              <span className="text-gray-400 text-[0.8rem]">●</span>

              <div className="flex items-center gap-[0.375rem]">
                <FiCalendar className="w-[1.042rem] h-[1.042rem] text-text-secondary" />
                <span>{moment(foundedDate).format('MM/DD/YYYY')}</span>
              </div>
              <span className="text-gray-400 text-[0.8rem]">●</span>

              <div className="flex items-center gap-[0.375rem]">
                <FiMapPin className="w-[1.042rem] h-[1.042rem] text-text-secondary" />
                <span>{headOfficeCountry}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-bg-gray-200 rounded-[0.5rem] border border-gray-100 p-[1.5rem] mb-[1.5rem]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-[1.5rem] gap-x-[1.5rem]">
          <div className="flex flex-col gap-[0.25rem]">
            <h3 className="text-[1rem] font-semibold font-open-sans text-text-light">
              Owner Name
            </h3>
            <p className="text-[0.875rem] text-text-secondary font-normal font-inter">{ownerName}</p>
          </div>
          <div className="flex flex-col gap-[0.25rem]">
            <h3 className="text-[1rem] font-semibold font-open-sans text-text-light">
              Trade Name
            </h3>
            <p className="text-[0.875rem] text-text-secondary font-normal font-inter">{tradeName}</p>
          </div>
          <div className="flex flex-col gap-[0.25rem]">
            <h3 className="text-[1rem] font-semibold font-open-sans text-text-light">
              Business Registration Number
            </h3>
            <p className="text-[0.875rem] text-text-secondary font-normal font-inter">{businessRegistrationNumber}</p>
          </div>

          <div className="flex flex-col gap-[0.25rem]">
            <h3 className="text-[1rem] font-semibold font-open-sans text-text-light">
              Tax Identification Number
            </h3>
            <p className="text-[0.875rem] text-text-secondary font-normal font-inter">{taxIdentificationNumber}</p>
          </div>
          <div className="flex flex-col gap-[0.25rem]">
            <h3 className="text-[1rem] font-semibold font-open-sans text-text-light">
              DUNS Number
            </h3>
            <p className="text-[0.875rem] text-text-secondary font-normal font-inter">{dunsNumber}</p>
          </div>
          <div className="flex flex-col gap-[0.25rem]">
            <h3 className="text-[1rem] font-semibold font-open-sans text-text-light">
              Operating Hours
            </h3>
            <p className="text-[0.875rem] text-text-secondary font-normal font-inter">{operationHour}</p>
          </div>

          <div className="flex flex-col gap-[0.25rem]">
            <h3 className="text-[1rem] font-semibold font-open-sans text-text-light">
              Official Company Website
            </h3>
            {website === 'N/A' ? (
              <span className="text-[0.875rem] text-text-secondary">N/A</span>
            ) : (
              <>
                <a
                  href="https://www.globalmanufacturing.com"
                  className="text-[0.875rem] text-brand-business-icon-dark font-normal font-inter hover:underline"
                >
                  www.globalmanufacturing.com
                </a>
              </>
            )}

          </div>
        </div>
      </div >
      <div>
        <h3 className="text-[1.125rem] font-semibold font-open-sans text-text-light mb-[0.5rem]">
          Mission/Bio
        </h3>
        <p className="text-[0.875rem] text-text-secondary font-inter font-normal leading-[1.375rem]"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </div>
    </div >
  );
}
