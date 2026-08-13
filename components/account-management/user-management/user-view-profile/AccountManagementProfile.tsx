'use client'
import { FiMail } from "react-icons/fi";
import DOMPurify from "dompurify";
import moment from "moment";

interface Props {
  fullName: string;
  email: string;
  bio: string;
  year: string;
  logo: string;
}

export default function ProfileCard({ fullName, email, bio, year, logo }: Props) {
  return (
    <div className="p-[1rem] mt-6 border border-gray-200 rounded-[0.75rem] bg-surface-DEFAULT font-sans">
      <div className="flex items-center gap-[1rem] p-[1rem] bg-bg-gray-200 rounded-[0.5rem] border border-border-gray-200">
        <div className="relative w-[3.5rem] h-[3.5rem] rounded-[0.5rem] overflow-hidden border border-gray-200 bg-white">
          <img
            src={logo === '' ? '/images/user-icon.webp' : logo}
            alt="Alex Morgan"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex flex-col gap-[0.25rem] font-inter">
          <h2 className="text-[1rem] font-semibold text-text-light  ">
            {fullName}
          </h2>
          <div className="flex items-center gap-[0.5rem] text-[1rem] font-normal text-text-secondary ">
            <span>{email}</span>

            <FiMail className="w-[1rem] h-[1rem] text-text-secondary" />
          </div>
        </div>
      </div>

      <div className="mt-[1.5rem]">
        <h3 className="text-[1.125rem] font-semibold text-text-light mb-[0.75rem] font-open-sans ">
          Mission/Bio
        </h3>
        <p className="text-[0.875rem] text-text-secondary font-normal  leading-[1.375rem] font-inter"
          dangerouslySetInnerHTML={{
            __html: bio,
          }}
        />
      </div>

      <div className="mt-[1.5rem]">
        <h3 className="text-[1.125rem] font-semibold text-text-primary mb-[0.75rem] font-open-sans">
          Member Since
        </h3>
        <p className="text-[0.875rem] text-text-setting-dark font-inter font-normal">{moment(year).format('MMMM, YYYY')}</p>
      </div>
    </div >
  );
}
