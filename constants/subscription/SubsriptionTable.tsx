import { FreeTrialTableRowData } from "@/types";

export const SubsriptionTable: FreeTrialTableRowData[] = [
  {
    _id: "6a514d91ffa807766212be9f",
    userProfile: {
      fullName: "Dante Harris",
      email: "danteharris22@gmail.com",
      logo: "",
    },
    daysRemaining: 12,
    status: "active",
  },
  {
    _id: "6a514d91ffa807766212be10",
    userProfile: {
      fullName: "Ali Khan",
      email: "ali@gmail.com",
      logo: "",
    },
    daysRemaining: 5,
    status: "expired",
  },
];

export const dropdownOptions = [
  { value: 'all', label: 'All Time' },
  { value: '7d', label: 'Last 7 Days' },
  { value: '1m', label: 'Last 1 Month' },
  { value: '6m', label: 'Last 6 Months' },
  { value: '1y', label: 'Last Year' }
]