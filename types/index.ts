import { ReactNode } from "react";

export interface TabItem {
  id: string;
  label: string;
  icon?: ReactNode;
  active?: boolean;
}

export interface TableRowData {
  id: string;
  name: string;
  email: string;
  moduleAccess: boolean;
}
export interface AccountTableRowData {
  id: string;
  name: string;
  email: string;
  subscriptionType: string;
  img: string;
  createdAt: string;
}

export interface AccountBusinessTableRowData {
  id: string;
  name: string;
  email: string;
  subscriptionType: string;
  status: string;
  img: string;
  createdAt: string;
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

export interface FormValues {
  username: string;
  email: string;
  password: string;
  allowedModules: string[];
}

export interface ExperienceEntry {
  title: string;
  company: string;
  dateRange: string;
  duration: string;
  achievements: string[];
}

export interface FileItem {
  title: string;
  filename: string;
  subtext: string;
  fileUrl: string;
}

export interface AmlFileItem {
  title: string;
  filename: string;
  fileUrl: string;
}

export type TypeLoginForm = {
  username: string;
  password: string;
}