import { AccountBusinessTableRowData } from "@/types";

export const accountManagementBusinessTable: AccountBusinessTableRowData[] = [
  {
    _id: "1",
    companyName: "Muhammad Umair",
    email: "umairstack.dev@gmail.com",
    logo: "/images/image 95.png",
    createdAt: "2023-01-01T00:00:00.000Z",
    subscription: {
      subscriptionType: "Trial",
    },
    
    status: "active",
  },
  {
    _id: "2",
    companyName: "Ali Khan",
    email: "ali@gmail.com",
    logo: "/images/image 95.png",
    createdAt: "2023-01-01T00:00:00.000Z",
    subscription: {
      subscriptionType: "Silver",
    },
      status: "pending",
  },
];