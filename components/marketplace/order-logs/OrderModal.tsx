"use client";

import { forwardRef, useImperativeHandle, useState } from "react";
import { IoClose } from "react-icons/io5";
import { OrderModalRef, TypeOrderItems } from "@/types";
import Image from "next/image";
import EscrowTimeline from "./EscrowTimeline";
import { escrowTimeline } from "@/constants/marketplace/orderTimeline";
import { useQuery } from "@tanstack/react-query";
import { keys } from "@/keys";
import { fetchOrderLogsDetails } from "@/services/marketplace";
import moment from "moment";

interface Props {
  orderId: string;
  openModal: boolean;
}

const OrderModal = forwardRef<OrderModalRef, Props>(({ orderId }, ref) => {
  const [open, setOpen] = useState(false);

  const { data, isPending } = useQuery({
    queryKey: [keys.orderLogDetails, orderId],
    queryFn: () => fetchOrderLogsDetails(orderId),
    enabled: open && !!orderId,
  });

  useImperativeHandle(ref, () => ({
    open: () => setOpen(true),
    close: () => setOpen(false),
  }));

  if (!open) return null;

  const orderData = data?.data;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-[1.25rem]">
      <div className="flex w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl max-h-[90vh]">
        <div className="relative  p-6 sm:px-6">
          <button
            className="absolute right-6 top-6 cursor-pointer text-text-light hover:text-gray-600"
            onClick={() => setOpen(false)}
          >
            <IoClose size={24} />
          </button>
          <h2 className="text-[1.375rem] font-medium font-inter text-text-light">
            Order Details #ORD-{orderData?._id?.slice(-5).toUpperCase()}
          </h2>
          <p className="mt-1 text-[0.875rem] font-normal font-inter text-text-setting-dark">
            Placed on{" "}
            <span className="text-text-gray-more">
              {moment(orderData?.createdAt).format("DD MM YYYY")}
            </span>
          </p>
        </div>
        <div className="pl-6 pr-6">
          <hr className="border-border-gray-200" />
        </div>
        <div className="flex-1 overflow-y-auto p-6 sm:px-6 space-y-8 custom-scrollbar">
          <div className="flex flex-col gap-6 p-4 sm:flex-row sm:gap-12">
            <div className="flex-1">
              <h3 className="mb-4 text-[1.125rem] font-normal uppercase text-text-setting-light font-inter">
                Seller (PROFILE)
              </h3>
              <div className="flex items-center gap-4">
                <div className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full bg-gray-100">
                  <Image
                    src={orderData?.seller?.logo}
                    alt="Global Manufacturing.Co"
                    className="h-full w-full rounded-full object-cover"
                    width={88}
                    height={88}
                  />
                </div>

                <div>
                  <h4 className="font-medium text-[1rem] font-inter text-text-light">
                    {orderData?.seller?.companyName}
                  </h4>
                  <p className="text-[1rem] font-normal font-inter text-text-light-gray-50">
                    {orderData?.seller?.email}
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden w-px bg-gray-200 sm:block"></div>

            <div className="flex-1">
              <h3 className="mb-4 text-[1.125rem] font-normal uppercase text-text-setting-light font-inter">
                BUYER (PROFILE)
              </h3>
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
                  <Image
                    src={orderData?.buyer?.logo}
                    alt="Global Manufacturing.Co"
                    className="h-full w-full rounded-full object-cover"
                    width={88}
                    height={88}
                  />
                </div>
                <div>
                  <h4 className="font-medium text-[1rem] font-inter text-text-light">
                    {orderData?.buyer?.fullName}
                  </h4>
                  <p className="text-[1rem] font-normal font-inter text-text-light-gray-50">
                    {orderData?.buyer?.email}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-[1.125rem] font-medium font-inter text-text-light">
              Order Items
            </h3>
            {orderData?.orderItems?.map(
              (order: TypeOrderItems, index: number) => {
                return (
                  <div
                    key={index}
                    className="rounded-xl border border-border-gray-200 bg-white p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-border-gray-200 overflow-hidden">
                        <img
                          src={order?.image}
                          alt="Earbuds"
                          className="object-cover h-full w-full"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[1rem] text-text-light font-inter">
                          {order?.title}
                        </h4>
                        <p className="text-[1rem] font-normal text-text-secondary mt-1">
                          Quantity: 100{" "}
                          <span className="mx-1 w-[0.25rem] h-[0.25rem]">
                            •
                          </span>{" "}
                          Unit Price: ${order?.pricePerUnit?.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <div className="text-[1rem] font-medium font-inter text-text-light">
                      $1,256
                    </div>
                  </div>
                );
              },
            )}
          </div>

          <EscrowTimeline timeline={escrowTimeline} />

          <div className="space-y-3 pt-0 p-4">
            <div className="flex justify-between text-[1rem] font-inter font-normal text-text-secondary">
              <span>Item Total</span>
              <span>$1256</span>
            </div>
            <div className="flex justify-between text-[1rem] font-inter font-normal text-text-secondary pb-3">
              <span>Shipping</span>
              <span>$175</span>
            </div>

            <hr className="text-border-gray-200 " />
            <div className="flex justify-between items-center py-0">
              <span className="text-[1.25rem] font-inter font-bold text-border-dark-black">
                Est. Net Payout
              </span>
              <span className="text-[1.25rem] font-semibold text-border-dark-black font-inter">
                $1431
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

OrderModal.displayName = "OrderModal";

export default OrderModal;
