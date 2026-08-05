"use client";
import React, { useRef, useState } from "react";
import { OrderModalRef } from "@/types";
import { FaEye } from "react-icons/fa6";
import OrderModal from "./OrderModal";

export default function OrderLogActionButtons({ OrderId }: { OrderId: string }) {
  const modalRef = useRef<OrderModalRef>(null);
  console.log("OrderLogActionButtons Props:", OrderId);
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <div className="flex justify-end items-center gap-[1rem] font-sans">
        <span
          onClick={() => {
            modalRef.current?.open()
            setOpenModal(true)
          }}
          className="flex cursor-pointer items-center justify-center text-text-secondary text-[1rem]"
        >
          <FaEye />
        </span>
      </div>
      <OrderModal ref={modalRef} orderId={OrderId} openModal={openModal} />
    </>
  );
}
