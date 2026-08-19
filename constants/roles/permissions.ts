import { PermissionModule } from "@/types";

export const initialModules: PermissionModule[] = [
  {
    id: "m1",
    module: "Account Management",
    url: '/account-management',
    checked: true,
  },
  {
    id: "m2",
    module: "Subscription & Access",
    url: '/subscription',
    checked: false,
  },
  {
    id: "m3",
    module: "Marketplace & Order Logs",
    url: '/marketplace',
    checked: false,
  },
  {
    id: "m5",
    module: "Communities & Networking",
    url: '/communities',
    checked: false,
  },
  
  {
    id: "m7",
    module: "Recruitment (Job Board)",
    url: '/jobs',
    checked: false,
  },
  {
    id: "m6",
    module: "Reports",
    url: '/reports',
    checked: false,
  },
];