"use client";

import { FileItem } from "@/types";
import { AiOutlineEye } from "react-icons/ai";
import { MdOutlineAccountTree } from "react-icons/md";
import {
  regulatedDocument,
} from "@/constants/acount-management/documents";

interface Props {
  certificateOfIncorporation: string;
  taxRegistrationCertificate: string;
  shareHolderRegister: string;
  operatingLicense: string;
}

export default function RequiredDocuments({ certificateOfIncorporation, taxRegistrationCertificate, shareHolderRegister, operatingLicense }: Props) {
  const handleViewFile = (file: FileItem) => {
    alert(`Viewing: ${file.filename} (${file.subtext})`);
  };

  const requiredDocuments = [
    {
      title: "Certificate Of Incorporation",
      filename: "Certificate Of Incorporation",
      fileUrl: certificateOfIncorporation,
    },
    {
      title: "Tax Registration Certificate",
      filename: "Tax Registration Certificate",
      fileUrl: taxRegistrationCertificate,
    },
    {
      title: "Share holder Register Certificate",
      filename: "Share holder Register Certificate",
      fileUrl: shareHolderRegister,
    },
  ]

  return (
    <div className="mt-8 border border-gray-200 rounded-[0.5rem] bg-white font-sans overflow-hidden">
      <div className="flex items-center gap-[0.75rem] bg-[#f5effa] px-[1.5rem] py-[1.25rem] border-b border-gray-200">
        <MdOutlineAccountTree className="w-[1.25rem] h-[1.25rem] text-[#2c0a59]" />
        <h2 className="text-[1rem] font-semibold text-[#334155]">
          Required Documents
        </h2>
      </div>

      <div className="p-[1.5rem] flex flex-col gap-[2rem]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[1.5rem] gap-y-[1.5rem]">
          {requiredDocuments.map((doc, idx) => (
            <div key={idx} className="flex flex-col gap-[0.75rem]">
              <span className="text-[0.875rem] font-semibold text-[#475569]">
                {doc.title}
              </span>

              <div className="flex items-center justify-between p-[0.875rem] border border-gray-200 rounded-[0.5rem] bg-[#fcfcfd] hover:border-gray-300 transition-all">
                <div className="flex items-center gap-[0.75rem]">
                  <div className="flex flex-col">
                    <span className="text-[0.875rem] font-semibold text-[#1e293b]">
                      {doc.filename}
                    </span>
                  </div>
                </div>

                <a
                  href={doc?.fileUrl}
                  target="_blank"
                  rel="noopener"
                  className="p-[0.5rem] text-gray-500 hover:text-[#2c0a59] transition-colors cursor-pointer"
                  title="View file"
                >
                  <AiOutlineEye className="w-[1.25rem] h-[1.25rem]" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-[1rem] pt-[0.5rem] border-t border-gray-100">
          <span className="text-[0.875rem] font-semibold text-[#475569]">
            Regulated Industry Requirements
          </span>

          <div className="flex flex-col gap-[0.75rem]">
            <span className="text-[0.875rem] font-semibold text-[#475569]">
              {regulatedDocument.title}
            </span>

            <div className="max-w-[26rem]">
              <div className="flex items-center justify-between p-[0.875rem] border border-gray-200 rounded-[0.5rem] bg-[#fcfcfd] hover:border-gray-300 transition-all">
                <div className="flex items-center gap-[0.75rem]">
                  <div className="flex flex-col">
                    <span className="text-[0.875rem] font-semibold text-[#1e293b]">
                      Operating License Certificate
                    </span>
                  </div>
                </div>

                <a
                  href={operatingLicense}
                  target="_blank"
                  rel="noopener"
                  className="p-[0.5rem] text-gray-500 hover:text-[#2c0a59] transition-colors cursor-pointer"
                  title="View file"
                >
                  <AiOutlineEye className="w-[1.25rem] h-[1.25rem]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
