"use client";
import { RiShieldCheckLine } from "react-icons/ri";
import { AiOutlineEye } from "react-icons/ai";
import amlIcon from "@/assets/amlIcon.svg";
import CheckIcon from "@/assets/CheckIcons.svg";
import Image from "next/image";
interface Props {
  purpose: string;
  revenueRange: string | any;
  tradeCorridors: string[] | any;
  mainCounterParties: string[] | any;
  pep: boolean;
  evidenceOfFunds: string;
}

export default function AmlAndTransactionProfile({
  purpose,
  revenueRange,
  tradeCorridors,
  mainCounterParties,
  pep,
  evidenceOfFunds,
}: Props) {
  return (
    <div className=" mt-[1.5rem] border border-border-shadow-50 rounded-[0.75rem] bg-white font-sans overflow-hidden">
      <div className="flex items-center gap-[0.75rem] bg-brand-btn-pills-background px-[1.5rem] py-[1.25rem] border-b border-border-shadow-dark">
        <Image
          src={amlIcon}
          width={100}
          height={100}
          alt=""
          className="w-[1.083rem] h-[1.083rem] text-brand-primary"
        />
        <h2 className="text-[1.125rem] font-semibold font-open-sans text-text-light">
          AML & Transaction Profile
        </h2>
      </div>

      <div className="p-[1.5rem] flex flex-col gap-[2rem]">
        <div className="flex flex-col gap-[0.375rem]">
          <span className="text-[0.875rem] font-semibold font-inter text-text-secondary ">
            Purpose Of Using Platform
          </span>
          <span
            className="text-[1rem] font-semibold font-open-sans text-text-light break-words whitespace-normal "
            dangerouslySetInnerHTML={{
              __html: purpose,
            }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-[1.5rem] gap-x-[1.5rem]">
          <div className="flex flex-col gap-[0.375rem]">
            <span className="text-[0.875rem] font-semibold font-inter text-text-secondary">
              Expected Value Range
            </span>
            <span className="text-[0.9375rem] font-medium text-text-light ">
              {revenueRange}
            </span>
          </div>

          <div className="flex flex-col gap-[0.375rem]">
            <span className="text-[0.875rem] font-semibold font-inter text-text-secondary">
              PEP (Politically Exposed Person) Status
            </span>
            {pep ? (
              <div className="flex items-center gap-[0.375rem]  text-text-light font-medium text-[1rem]">
                <Image
                  src={CheckIcon}
                  width={100}
                  height={100}
                  alt=""
                  className="w-[1.25rem] h-[1.25rem]"
                />
                Detected
              </div>
            ) : (
              <div className="flex items-center gap-[0.375rem] text-text-light  font-medium text-[1rem]">
                <Image
                  src={CheckIcon}
                  width={100}
                  height={100}
                  alt=""
                  className="w-[1.25rem] h-[1.25rem]"
                />
                None Detected
              </div>
            )}
          </div>
        </div>

        <div className="">
          <div className="flex flex-col gap-[0.375rem]">
            <span className="text-[0.875rem] font-semibold font-inter text-text-secondary">
              Main Counterparties
            </span>
            <div className="flex flex-wrap gap-[0.5rem]">
              {mainCounterParties?.length > 0 ? (
                mainCounterParties?.map((trade: string, index: number) => {
                  return (
                    <span
                      key={index}
                      className="px-[1rem] py-[0.375rem] bg-brand-primary text-white text-[1rem] font-normal font-inter rounded-[5.75rem] break-words whitespace-normal"
                    >
                      {trade}
                    </span>
                  );
                })
              ) : (
                <span className="text-[0.9375rem] font-medium text-text-light">
                  N/A
                </span>
              )}
            </div>
          </div>

        </div>
        <div className="flex flex-col gap-[0.5rem]">
          <span className="text-[0.875rem] font-semibold font-inter text-text-secondary">
            Trade Corridors
          </span>

          <div className="flex flex-wrap gap-[0.5rem]">
            {tradeCorridors?.length > 0 ? (
              tradeCorridors?.map((trade: string, index: number) => {
                return (
                  <span
                    key={index}
                    className="px-[1rem] py-[0.375rem] bg-brand-primary text-white text-[1rem] font-normal font-inter rounded-[5.75rem] break-words whitespace-normal"
                  >
                    {trade}
                  </span>
                );
              })
            ) : (
              <span className="text-[0.9375rem] font-medium text-text-light">
                N/A
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-[0.75rem]">
          <span className="text-[1rem] font-semibold font-open-sans text-text-light">
            Evidence Of Funds
          </span>

          <div className="max-w-[26rem]">
            <div className="flex items-center justify-between p-[1rem] border border-border-gray-200 rounded-[0.75rem] bg-surface-DEFAULT hover:border-gray-300 transition-all">
              <div className="flex items-center justify-between gap-[0.75rem] w-full">
                <span className="text-[1rem] font-semibold font-open-sans text-text-light">
                  Evidence Of Funds
                </span>

                <a
                  href={evidenceOfFunds}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.75rem] text-text-setting-light hover:text-brand-primary"
                >
                  <AiOutlineEye className="w-[1.25rem] h-[1.25rem]" />
                </a>
              </div>

              <button
                className="p-[0.5rem] text-gray-500 hover:text-[#2c0a59] transition-colors cursor-pointer"
                title="View file"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
