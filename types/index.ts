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
  email: string;
  userProfile: {
    fullName: string;
    logo: string;
  };
  daysConsumed: number;
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
  email: string;
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

export interface AdminInviteSentRef {
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
  category: string;
  shippingCompany: string;
  shippingCost: number;
  estimatedDeliveryDays: string;
  minOrderQty: number;
  detail: string;
}

export type TypeNotes = {
  note: string;
}

export type ProductRejectionPayload = {
  productId: string;
  note: string;
};

export type TypeProductApproveReject = {
  _id: string,
  title: string,
  category: string,
  status: string,
  createdAt: string,
  seller: {
    ownerName: string,
    companyName: string,
    logo: string
  }
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

export type ReportType =
  | "job"
  | "business"
  | "product"
  | "community";

export interface ReportModalProps {
  reportType: ReportType;
  ReportId: string;
  reportModal: string;
  onClose: () => void;
  isOpen: boolean
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

export type TypeOrderItems = {
  image: string;
  pricePerUnit: number;
  title: string;
}

export interface RestoreAdminModalRef {
  open: () => void;
  close: () => void;
}
export interface ApprovedModalModalRef {
  open: () => void;
  close: () => void;
}


export type TypeProductData = {
  _id: string,
  title: string,
  category: string,
  createdAt: string,
  sellerInfo: {
    ownerName: string,
    companyName: string,
    logo: string
  }
}

export type ReportStats = {
  jobReports: number,
  businessReports: number,
  productReports: number,
  communityReports: number
}
export interface SubscriptionLastPlan {
  startDate: string;
  endDate: string;
  planName: string;
  planPrice: number;
}
// export type ReportStats = {

export type ReportsData = {
  _id: string,
  reason: string,
  createdAt: string,
  reportedBy: {
    fullName: string,
    email: string,
    logo: string
  },
  reportedJob: {
    jobTitle: string,
    owner: {
      companyName: string,
      logo: string,
      email: string
    }
  }
}

export type TypeViewJobReport = {
  _id: string,
  reason: string,
  media: string[],
  description: string,
  createdAt: string,
  reportedBy: {
    fullName: string,
    email: string,
    logo: string
  },
  reportedJob: {
    jobTitle: string,
    employmentType: string,
    owner: {
      companyName: string
    }
  }
}

export type TypeViewBusinessReport = {
  _id: string,
  reason: string,
  media: string[],
  description: string,
  createdAt: string,
  reportedBy: {
    fullName: string,
    email: string,
    logo: string
  },
  reportedBusiness: {
    ownerName: string,
    companyName: string,
    primaryIndustry: string,
    email: string
  }
}

export type TypeViewProductReport = {
  _id: string,
  reason: string,
  media: string[],
  description: string,
  createdAt: string,
  reportedBy: {
    fullName: string,
    email: string,
    logo: string
  },
  reportedProduct: {
    title: string,
    category: string,
    pricePerUnit: number,
    owner: {
      companyName: string,
      email: string
    }
  }
}

export type TypeViewCommunityReport = {
  _id: string,
  reason: string,
  media: string[],
  description: string,
  createdAt: string,
  reportedBy: {
    fullName: string,
    email: string,
    logo: string
  },
  reportedCommunity: {
    name: string,
    type: string,
    owner: {
      companyName: string,
      email: string
    }
  }
}

export type TypeProductReport = {
  _id: string,
  reason: string,
  createdAt: string,
  reportedBy: {
    fullName: string,
    email: string,
    logo: string
  },
  reportedProduct: {
    title: string,
    owner: {
      companyName: string,
      logo: string,
      email: string
    }
  }
}

export type TypeCommunityReport = {
  _id: string,
  reason: string,
  createdAt: string,
  reportedBy: {
    fullName: string,
    email: string,
    logo: string
  },
  reportedCommunity: {
    name: string,
    owner: {
      companyName: string,
      logo: string
      email: string
    }
  }
}

export type TypeAccountStats = {
  pendingBusinessProfiles: number;
  totalBusinessProfiles: number;
  totalParentUsers: number;
  totalUserProfiles: number
}

export type TypeAccountManagement = {
  _id: string,
  fullName: string,
  email: string,
  logo: string,
  createdAt: string,
  subscription: {
    subscriptionType: string
  }
}

export type TypeUpdateAdmin = Omit<TypeCreateAdmin, "password" | 'email'>;
export type TypeUpdateAdminPassword = Pick<TypeCreateAdmin, "password">;
