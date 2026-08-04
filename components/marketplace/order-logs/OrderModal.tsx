"use client";

import React, { forwardRef, useImperativeHandle, useState } from "react";
import { IoClose } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { LuClock3 } from "react-icons/lu";
import { OrderModalRef } from "@/types";
import Image from "next/image";
import EscrowTimeline from "./EscrowTimeline";
import { escrowTimeline } from "@/constants/marketplace/orderTimeline";

const OrderModal = forwardRef<OrderModalRef>((_, ref) => {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setOpen(true),
    close: () => setOpen(false),
  }));

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 sm:p-6">
      <div className="flex w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl max-h-[90vh]">
        <div className="relative border-b border-gray-100 p-6 sm:px-8">
          <button
            className="absolute right-6 top-6 text-gray-400 hover:text-gray-600"
            onClick={() => setOpen(false)}
          >
            <IoClose size={24} />
          </button>
          <h2 className="text-2xl font-medium text-gray-900">
            Order Details #ORD-1234
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Placed on <span className="text-gray-600">Oct 26, 2025</span>
          </p>
          <div className="mt-3 inline-flex items-center rounded-full border border-blue-300 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-600">
            In Escrow
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 sm:px-8 space-y-8 custom-scrollbar">
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
            <div className="flex-1">
              <h3 className="mb-4 text-[1.25rem] font-medium uppercase text-gray-500">
                Seller (PROFILE)
              </h3>
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
                  <Image
                    src="https://res.cloudinary.com/dh5msgx99/image/upload/v1784007258/user/profile/xnp5nspch1oorgtqwblr.jpg"
                    alt="Global Manufacturing.Co"
                    className="h-full w-full rounded-full object-cover"
                    width={88}
                    height={88}
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">Alex Morgan</h4>
                  <p className="text-sm text-gray-500">Alexmorgan@Gmail.Com</p>
                </div>
              </div>
            </div>

            <div className="hidden w-px bg-gray-200 sm:block"></div>

            <div className="flex-1">
              <h3 className="mb-4 text-[1.25rem] font-medium uppercase text-gray-500">
                BUYER (PROFILE)
              </h3>
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
                  <Image
                    src="https://res.cloudinary.com/dh5msgx99/image/upload/v1784276293/logo/jwoy5zvag5bafk7a1e3k.png"
                    alt="Global Manufacturing.Co"
                    className="h-full w-full rounded-full object-cover"
                    width={88}
                    height={88}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Global Manufacturing.Co
                  </h4>
                  <p className="text-sm text-gray-500">
                    Globalmanufactuting@Gmail.Com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              Order Items
            </h3>
            <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&q=80&w=100&h=100"
                    alt="Earbuds"
                    className="object-cover h-full w-full"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    ANC Pro Wireless Earbuds
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Quantity: 100 <span className="mx-1">•</span> Unit Price:
                    $99.00
                  </p>
                </div>
              </div>
              <div className="text-lg font-semibold text-gray-900">$1,256</div>
            </div>
          </div>

          <EscrowTimeline timeline={escrowTimeline} />

          <div className="space-y-3 pt-4">
            <div className="flex justify-between text-gray-600">
              <span>Item Total</span>
              <span>$1256</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>$175</span>
            </div>

            <div className="my-2 border-t border-gray-100 pt-3">
              <div className="flex justify-between font-semibold text-gray-900">
                <span>Grand Total</span>
                <span>$1431</span>
              </div>
            </div>

            <div className="flex justify-between items-center py-2">
              <span className="text-xl font-bold text-gray-900">
                Est. Net Payout
              </span>
              <span className="text-xl font-bold text-gray-900">$1431</span>
            </div>

            <div className="flex justify-between text-[1rem] text-gray-500 pb-2">
              <span>Platform Fee (10%)</span>
              <span>$143.1</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-blue-600 text-[1rem]">
                Escrow Released Date
              </span>
              <span className="text-gray-500 uppercase">NOV 10, 2025,</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

OrderModal.displayName = "OrderModal";

export default OrderModal;
