import BackButtonMain from "@/components/common/BackButtonMain";
import Image from "next/image";
import moment from "moment";
import { formatNumber, stripHtml } from "@/helpers";
import { ParamValue } from "next/dist/server/request/params";
import CommunnitySuspendButton from "./CommunnitySuspendButton";
import DOMPurify from "dompurify";

interface Props {
  profileImage: string;
  category: string;
  name: string;
  purpose: string;
  description: string;
  status: string;
  type: string;
  createdAt: string;
  members: number;
  communityId: ParamValue;
  warnings: number;
}

function CommunityHeader({ profileImage, category, name, purpose, status, type, createdAt, members, communityId, warnings, description }: Props) {
  return (
    <div>
      <div className="flex items-center justify-between w-full ">
        <BackButtonMain />
        <button className="category-type font-inter font-normal py-1 px-4">
          {category}
        </button>
      </div>
      <div className="flex mt-9 gap-4 items-start">
        <div className="img shrink-0">
          <Image
            src={profileImage}
            width={100}
            height={100}
            alt=""
            className="w-[7rem] h-[7rem] object-cover border-border-shadow-50 border-[1.5px] rounded-[0.75rem]"
          />
        </div>
        <div className="text">
          <h1 className="text-text-primary font-semibold text-[2rem] font-open-sans">
            {name}
          </h1>
          <p className="text-text-setting-light text-[1rem] font-inter font-normal"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(purpose),
            }}
          />
          <p className="font-inter font-normal text-[1rem]">
            <span className="text-text-gray-more">{formatNumber(members)} Members</span>
            <span className="mx-1 text-text-gray-more text-xl">•</span>
            <span className={`capitalize ${status === "active" ? "text-border-green" : "text-accent-danger-light"}`}>{status}</span>
            <span className="mx-1 text-text-gray-more text-xl">•</span>
            <span className="text-brand-business-icon-dark capitalize">{type}</span>
          </p>
          <p className="font-inter font-normal ">
            <span className="text-text-gray-more text-[1rem]">Created On</span>
            <span className="mx-1 text-text-gray-more text-xl">•</span>
            <span className="text-text-gray-more text-[0.875rem]">
              {moment(createdAt).format("MMM DD, YYYY")}
            </span>
          </p>
        </div>
      </div>
      <CommunnitySuspendButton communityId={communityId} warnings={warnings} status={status} name={name} />
    </div>
  );
}

export default CommunityHeader;
