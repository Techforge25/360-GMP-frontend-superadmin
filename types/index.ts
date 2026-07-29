import { ReactNode } from "react";

export interface TabItem {
  id: string;
  label: string;
  icon?: ReactNode;
}

export interface TableRowData {
  id: string;
  name: string;
  email: string;
  moduleAccess: string;
  status: boolean;
}

export interface RoleMember {
  id: string;
  name: string;
  email: string;
  moduleAccess: string;
  status: boolean;
}

export interface PermissionModule {
  id: string;
  name: string;
  checked: boolean;
}