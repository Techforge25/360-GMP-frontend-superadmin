import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import { ReactNode } from "react";

export interface TabItem {
  id: string;
  label: string;
  icon?: ReactNode;
  active?: boolean;
}

export interface TableRowData {
  _id: string;
  username: string;
  email: string;
  allowedModules: string[];
  status: boolean;
}

export interface FreeTrialTableRowData {
  _id: string;
  userProfile: {
    fullName: string;
    email: string;
    logo: string;
  };
  daysRemaining: number;
  status: string;
}

export interface PaidMemberTableRowData {
  _id: string;
  fullName: string;
  logo: string;
  companyName: string;
  subscriptionTier: string;
  joinDate: string;
  status: string;
}

export interface OrderModalRef {
  open: () => void;
  close: () => void;
}

export interface MarketPlaceOrderLogsTableRowData {
  _id: string;
  totalAmount: number;
  createdAt: string;
  orderStatus: string;
  buyerInfo: {
    fullName: string;
    email: string;
    logo: string;
  };
  sellerInfo: {
    companyName: string;
    logo: string;
    email: string;
  };
}

export interface SubscriptionTransactionTableRowData {
  _id: string;
  date: string;
  payment_method: string;
  amount: number;
  status: string;
}

export interface AccountBusinessTableRowData {
  _id: string;
  companyName: string;
  email: string;
  logo: string;
  createdAt: string;
  subscription: {
    subscriptionType: string;
  };
  status: string;
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

export interface OrderModalRef {
  open: () => void;
  close: () => void;
}


export interface ProductAuditTableRowData {
  _id: string;
  title: string;
  category: string;
  createdAt: string;
  sellerInfo: {
    ownerName: string;
    companyName: string;
    logo: string;
  };
}


export interface ProductApprovedTableRowData {
  _id: string;
  title: string;
  category: string;
  createdAt: string;
  sellerInfo: {
    ownerName: string;
    companyName: string;
    logo: string;
  };
  status: string;
}

export interface AccountTableRowData {
  _id: string;
  fullName: string;
  email: string;
  logo: string;
  createdAt: string;
  subscription: {
    subscriptionType: string;
  };
}

interface ProductSpecification {
  label: string;
  value: string;
}

interface Product {
  specifications: ProductSpecification[];
  productDetail: string;
}

export interface ProductSpecificationsProps {
  product: Product;
}

export interface RejectProductModalRef {
  open: () => void;
  close: () => void;
}


export interface MarketplaceReportTableRowData {
  _id: string;
  reason: string;
  createdAt: string;
  reportedBy: {
    fullName: string;
    email: string;
    logo: string;
  };
  reportedJob: {
    jobTitle: string;
    owner: {
      companyName: string;
      logo: string;
      email: string;
    };
  };
}

export interface ReportModalRef {
  open: () => void;
  close: () => void;

}

export interface ReportModalProps {
  reportType: "job" | "business" | "product" | "community";
}
export interface ReportEvidenceItem {
  id: number;
  fileName: string;
  fileType: string;
  fileSize: string;
}


export type TypeDropdownOption = {
  value: string;
  label: string;
};

export type TypeSubscriptionStats = {
  totalPaidMembers: number;
  totalTrialMembers: number;
  trialConversionPercentage: number;
}

export type TypeMarketplaceStats = {
  title: string,
  value: number | string,
  subtitle: string,
  subtitletwo: string,
  showDot: boolean,
  iconBg: string,
  iconColor: string,
  icon: React.ReactNode,
}

export type TypeMarketplaceStat = {
  totalSales: number;
  totalPendingProducts: number;
  totalFundsHeldInEscrow: number;
  totalDisputedOrders: number;
}

export type TypeOrderLog = {
  _id: string,
  totalAmount: number,
  createdAt: string,
  orderStatus: string,
  buyerInfo: {
    fullName: string,
    email: string,
    logo: string
  },
  sellerInfo: {
    companyName: string,
    logo: string,
    email: string
  }
  ,
}

export type TypeUpdateAdmin = Omit<TypeCreateAdmin, "password" | 'email'>;
export type TypeUpdateAdminPassword = Pick<TypeCreateAdmin, "password">;
