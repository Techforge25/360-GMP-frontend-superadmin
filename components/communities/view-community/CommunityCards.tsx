import Image from "next/image";
import React from "react";
import dateIcon from "@/assets/dateIcon.svg";
import { communityCards } from "@/constants/communities/CommunitiesCards";

export default function CommunityCards() {
  return (
    <div className="flex items-stretch gap-4 w-full p-5 pt-5">
      {communityCards.map((card) => (
        <div
          key={card.title}
          className="flex-1 min-h-[10.5rem] border border-border-gray-200 bg-white rounded-[0.75rem] p-4"
        >
          <h1 className="text-text-light text-[1.125rem] font-medium font-inter pb-4">
            {card.title}
          </h1>

          {card.image ? (
            <div className="flex gap-2">
              <div className="shrink-0">
                <Image
                  src={card.image}
                  alt=""
                  width={100}
                  height={100}
                  className="w-[3.25rem] h-[3.25rem] rounded-full"
                />
              </div>

              <div>
                <h2 className="text-[1rem] font-medium font-inter text-text-light">
                  {card.name}
                </h2>

                <p className="text-text-secondary text-[0.875rem] font-inter font-normal">
                  {card.description}
                </p>

                <div className="flex items-center gap-1 pt-1">
                  <Image
                    src={dateIcon}
                    alt=""
                    width={100}
                    height={100}
                    className="w-[0.75rem] h-[0.833rem]"
                  />

                  <span className="text-text-gray-more text-[0.75rem] font-inter font-normal">
                    {card.date}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-text-secondary text-[0.875rem] font-inter font-normal">
              {card.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
