import { FiUsers } from "react-icons/fi";
import { IoAlertCircleOutline } from "react-icons/io5";

export const roleTabs = [
  {
    id: "role-control",
    label: "Role & Access Control",
    icon: <FiUsers />,
    active: true,
  },
    {
    id: "deleted-admins",
    label: "Deleted Admins",
    icon: <IoAlertCircleOutline  />,
    active: false,
  },
];