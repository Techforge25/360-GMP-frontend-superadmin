import { MarketPlaceOrderLogsTableRowData } from "@/types";

export const MarketPlaceOrderLogsTable: MarketPlaceOrderLogsTableRowData[] = [
  {
    _id: "6a683e6d8d8a8165e30908f7",
    totalAmount: 500.545168522,
    createdAt: "2026-07-28T05:30:21.537Z",
    orderStatus: "completed",
    buyerInfo: {
      fullName: "Jennifer",
      email: "jen@yopmail.com",
      logo: "https://res.cloudinary.com/dh5msgx99/image/upload/v1784007258/user/profile/xnp5nspch1oorgtqwblr.jpg",
    },
    sellerInfo: {
      companyName: "XYZ Company",
      email: "abc@gmail.com",
      logo: "https://res.cloudinary.com/dh5msgx99/image/upload/v1784276293/logo/jwoy5zvag5bafk7a1e3k.png",
    },
  },
  {
    _id: "6a683e6d8d8a8165e30908f8",
    totalAmount: 1200,
    createdAt: "2026-07-29T10:15:45.000Z",
    orderStatus: "pending",
    buyerInfo: {
      fullName: "John Smith",
      email: "john@example.com",
      logo: "https://res.cloudinary.com/dh5msgx99/image/upload/v1784007258/user/profile/xnp5nspch1oorgtqwblr.jpg",
    },
    sellerInfo: {
      companyName: "ABC Solutions",
      email: "contact@abcsolutions.com",
      logo: "https://res.cloudinary.com/dh5msgx99/image/upload/v1784276293/logo/jwoy5zvag5bafk7a1e3k.png",
    },
  },
];