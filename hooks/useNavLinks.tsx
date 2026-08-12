import { useNavigationStore } from "@/store/modulesStore";
import { FaUsers } from "react-icons/fa";
import {
     FiActivity,
     FiAward,
     FiBriefcase,
     FiFileText,
     FiGrid,
} from "react-icons/fi";
import { IoAlertCircleOutline } from "react-icons/io5";

export default function useNavLinks() {
     const Icons = [
          <FiGrid key="Dashboard" />,
          <FaUsers key="Account Management" />,
          <FiAward key="Subscription & Access" />,
          <FiFileText key="Marketplace & Order Logs" />,
          <FiActivity key="Communities & Networking" />,
          <FiBriefcase key="Recruitment (Job Board)" />,
          <IoAlertCircleOutline key="Reports" />,
     ];

     const nav = useNavigationStore((state) => state.nav);
     const navWithIcons = nav?.map((item: any, index: number) => ({
          ...item,
          icon: Icons[index] ?? null,
     }));

     return navWithIcons;


}