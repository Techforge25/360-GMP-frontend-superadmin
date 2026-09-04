import { FiBriefcase, FiUsers } from "react-icons/fi";
export const accountManagementTabs = [
  {
    id: "all-user",
    label: "All Users",
    icon: <FiUsers  className="w-[1.1rem] h-[1.1rem]"/>,
    active: true,
  },
  {
    id: "all-business",
    label: "All Businesses",
    icon: <FiBriefcase className="w-[1.1rem] h-[1.1rem]" />,
  },
];