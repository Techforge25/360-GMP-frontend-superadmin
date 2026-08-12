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
  allowedModules: TypeSingleAdmin[];
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
  module: string;
  url: string;
  checked: boolean;
}

export interface FormValues {
  username: string;
  email: string;
  password: string;
  allowedModules: {
    module: string;
    url: string;
  }[];
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
  allowedModules: {
    module: string;
    url: string;
  }[]
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

export type TypeEducation = {
  degree: string;
  description: string;
  endDate: string;
  fieldOfStudy: string;
  grade: string;
  institution: string;
  isCurrent: boolean;
  startDate: string;
}

export type TypeWorkExperience = {
  _id: string,
  userProfileId: string,
  jobTitle: string,
  employmentType: string[],
  companyName: string,
  startDate: string,
  endDate: string | null,
  location: string,
  description: string,
  isCurrentlyWorking: boolean,
  createdAt: string,
  updatedAt: string,
}

export type TypeBusinessProfile = {
  _id: string,
  companyName: string,
  logo: string,
  createdAt: string,
  status: string,
  subscription: {
    subscriptionType: string
  },
  email: string
}

export type TypeViewBusinessProfile = {
  ownerName: string,
  companyName: string,
  tradeName?: string,
  businessRegistrationNumber: string,
  taxIdentificationNumber: string,
  dunsNumber?: number,
  countryOfRegistration: string,
  businessType: string,
  primaryIndustry: string,
  foundedDate: string,
  companySize: string,
  operationHour: string,
  website?: string,
  description: string,
  logo?: string,
  banner?: string,

  /* BUSINESS OPERATION */
  // Head office address
  headOffice: {
    country: string,
    city: string,
    addressLine: string,
  },

  // Warehouse address
  warehouseAddress?: {
    country: string,
    city: string,
    addressLine: string,
  },

  // Additional warehouse addresses
  additionalWarehouseAddress:
  {
    country: string,
    city: string,
    addressLine: string
  }[]

  // International Commercial Terms
  incoterms: string,
  termsAndCapability: string,

  /* INTERNATIONAL OFFICES */
  internationalOffices?:
  {
    officeName: string,
    country: string,
    city: string,
    state: string,
    addressLine: string,
    zipCode: string
  }[],

  /* BUSINESS INTELLIGENCE & LEADERSHIP */
  primaryContactPerson: {
    name: string,
    title: string,
    phone: string,
    supportEmail: string,
  },

  /* EXECUTIVE LEADERSHIP & STAKEHOLDER */
  executiveAndLeadership: [
    {
      // Required fields
      name: string,
      ownershipPercentage: number,
      role: string,
      votingRights: string[],

      // Ownership percentage is equal or greater than 25% Apply KYC
      kyc: {
        dob: string,
        nationality: string,
        phone: string,
        residentialAddress: string,
        governmentIdType: string,
        idNumber: string,

        // Media files (Documents)
        idFront: string,
        idBack: string,
        proofOfResidentialAddress: string,
        proofOfOwnership: string,
      }
    },
    {
      // Required fields
      name: string,
      ownershipPercentage: number,
      role: string,

      // Ownership percentage is less than 25% Apply Voting rights
      votingRights: string[]
    },
    {
      // Required fields
      name: string,
      ownershipPercentage: number,
      role: string,

      // Ownership percentage is less than 25% Apply Voting rights
      votingRights: string[],
    }
  ],

  // Parent company details if incase owned by another comapany
  ownedByAnotherCompany: boolean,
  parentCompany: {
    companyName: string,
    ownershipPercentage: number,
    countryOfIncorporation: string,
  },

  /* OPERATIONAL & TRADE PROFILE */
  operationalAndTradeProfile: {
    auditingAgency?: string,
    regionOfOperations: string[],
    tradeAffiliations?: string[]
  },

  /* AML & TRANSACTION PROFILE */
  amlAndTransactionProfile: {
    purpose: string,
    revenueRange?: string,
    mainCounterParties?: string[],
    tradeCorridors?: string[],
    pep: boolean
  },

  /* REQUIRED DOCUMENTS (MEDIA FILES) */
  certificateOfIncorporation: string,
  taxRegistrationCertificate: string,
  shareHolderRegister: string,
  operatingLicense: string,
  evidenceOfFunds: string,
}

export type TypeNavigation = {
  module: string,
  url: string,
}

export type TypeWarehouseAddress = Pick<TypeViewBusinessProfile, 'warehouseAddress'>
export type TypeAdditionalWarehouseAddress = Pick<TypeViewBusinessProfile, 'additionalWarehouseAddress'>
export type TypeInternationalOffices = Pick<TypeViewBusinessProfile, 'internationalOffices'>
export type TypeUpdateAdmin = Omit<TypeCreateAdmin, "password" | 'email'>;
export type TypeUpdateAdminPassword = Pick<TypeCreateAdmin, "password">;
export type TypePrimaryContactPerson = Pick<TypeViewBusinessProfile, 'primaryContactPerson'>
export type TypeExecutiveLeadership = Pick<TypeViewBusinessProfile, 'executiveAndLeadership'>
export type TypeParentCompany = Pick<TypeViewBusinessProfile, 'parentCompany'>
export type TypeSingleAdmin = Pick<PermissionModule, "module" | "url">