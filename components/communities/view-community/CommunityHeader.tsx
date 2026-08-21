import BackButtonMain from "@/components/common/BackButtonMain";
import Image from "next/image";
import React from "react";
import CommunityIcon from "@/assets/communityDetailIcon.svg";
import CommunnitySuspendButton from "./CommunnitySuspendButton";
import { TypeCommunityId } from "@/types";



function CommunityHeader({communityId } : TypeCommunityId) {
  return (
    <div>
      <div className="flex items-center justify-between w-full ">
        <BackButtonMain />
        <button className="category-type font-inter font-normal py-1 px-4">
          IT & tech
        </button>
      </div>
      <div className="flex mt-9 gap-4 items-start">
        <div className="img">
          <Image
            src={CommunityIcon}
            width={100}
            height={100}
            alt=""
            className="w-[7rem] h-[7rem] border-border-shadow-50 border-[1.5px] rounded-[0.75rem]"
          />
        </div>
        <div className="text">
          <h1 className="text-text-primary font-semibold text-[2rem] font-open-sans">
            The Techvision Hub
          </h1>
          <p className="text-text-setting-light text-[1rem] font-inter font-normal">
            Creating sustainable place for tech and IT professional and
            corporates.
          </p>
          <p className="font-inter font-normal text-[1rem]">
            <span className="text-text-gray-more">1,56.3k Members</span>

            <span className="mx-1 text-text-gray-more text-xl">•</span>

            <span className="text-border-green">Active</span>

            <span className="mx-1 text-text-gray-more text-xl">•</span>

            <span className="text-brand-business-icon-dark">Public</span>
          </p>
          <p className="font-inter font-normal ">
            <span className="text-text-gray-more text-[1rem]">Created On</span>

            <span className="mx-1 text-text-gray-more text-xl">•</span>

            <span className="text-text-gray-more text-[0.875rem]">
              Oct 26, 2022
            </span>
          </p>
        </div>
      </div>
      <CommunnitySuspendButton communityId={communityId}/>
    </div>
  );
}

export default CommunityHeader;
