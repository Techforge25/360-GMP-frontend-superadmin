"use client";

import React from "react";
import Image from "next/image";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { RiCornerLeftDownLine, RiShieldLine } from "react-icons/ri";
import { FaCrown } from "react-icons/fa6";

export default function EnterpriseMonitoringProfile() {
  return (
    <div className="p-[1.5rem] bg-white font-sans flex flex-col gap-[1.5rem] border border-gray-200 rounded-[0.75rem] shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-[0.25rem]">
          <h1 className="text-[1.25rem] font-bold text-kyc-text-subheading">
            Global Manufacturing Co.
          </h1>
          <p className="text-[0.875rem] text-kyc-text-heading">
            detailed view of global manufacturing co.
          </p>
        </div>

        <div className="flex items-center gap-[0.375rem] px-[1.5rem] py-[0.15rem]  text-text-purple text-[0.8125rem] font-medium rounded-full border border-text-purple">
          <span className="text-[1rem]">Enterprise</span>
          <FaCrown className="w-[0.875rem] h-[0.875rem]" />
        </div>
      </div>

      <div className="flex items-center justify-between p-[1rem] bg-[#f8fafc] border border-gray-200 rounded-[0.5rem]">
        <div className="flex items-center gap-[1rem]">
          <div className="flex flex-col gap-[0.25rem]">
            <div className="flex items-center gap-[0.75rem] text-[1rem] text-kyc-text-heading">
              <div className="flex items-center gap-[0.375rem]">
                <HiOutlineMail className="w-[1.3rem] h-[1.3rem] text-gray-500" />
                <span>globalmanufacturing@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => alert("Contacting Global Manufacturing Co....")}
          className="flex items-center gap-[0.5rem] px-[1.25rem] py-[0.625rem] bg-kyc-text-hover hover:bg-text-primary-hover text-white font-medium text-[1rem] rounded-[0.5rem] transition-colors cursor-pointer shadow-sm"
        >
          <span>Contact</span>
          <HiOutlineMail className="w-[1.3rem] h-[1.3rem]" />
        </button>
      </div>

      <div className="border border-gray-200 rounded-[0.5rem] p-[1.5rem] bg-white flex flex-col gap-[0.5rem]">
        <span className="text-[1rem] text-kyc-text-heading font-medium">
          Life Time Value
        </span>
        <h3 className="text-[2rem] font-bold text-kyc-text-subheading tracking-tight">
          $4,200.00
        </h3>
        <p className="text-[0.8125rem] text-kyc-text-heading pt-[0.25rem]">
          Total Collected Reenue Since 2021
        </p>
      </div>
    </div>
  );
}
