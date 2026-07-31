import { ReactNode } from "react";

export interface TabItem {
  id: string;
  label: string;
  icon?: ReactNode;
  active?: boolean;
}

export interface TableRowData {
  _id: string;
  name: string;
  email: string;
  allowedModules: string[];
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

export interface FormValues {
  username: string;
  email: string;
  password: string;
  allowedModules: string[];
}

export type TypeLoginForm = {
  username: string;
  password: string;
}

export type TypeCreateAdmin = {
  username: string;
  email: string;
  password: string;
  allowedModules: string[]
}

export interface EditPasswordRef {
  open: () => void;
  close: () => void;
}

export type TypeUpdateAdmin = Omit<TypeCreateAdmin, "password" | 'email'>;
export type TypeUpdateAdminPassword = Pick<TypeCreateAdmin, "password">;