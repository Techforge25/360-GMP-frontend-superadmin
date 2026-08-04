export  const reportEvidence = [
  {
    id: 1,
    fileName: "Fee_Receipt_Requirement.Png",
    fileType: "PNG Image",
    fileSize: "1.2 MB",
  },
  {
    id: 2,
    fileName: "Fee_Receipt_Requirement.Png",
    fileType: "PNG Image",
    fileSize: "1.2 MB",
  },
];


export const REPORT_CONTENT_MAP = {
  job: {
    headerTitle: "Report Job",
    headerSubtitle: "Reported against Jobs • Submitted 2026-07-24 09:20 AM",
    sectionTitle: "JOB LISTING DETAILS",
    details: [
      { label: "Job Title:", value: "Senior Remote React Engineer ($150k)" },
      { label: "Company Name:", value: "Apex Global Dynamics" },
      { label: "Job Type:", value: "Full-Time / Remote" },
    ],
    violation: {
      reasonLabel: "Primary Reason:",
      reasonValue: "Scam / Fraud",
      date: "2026-07-24 09:20 AM",
      description:
        '"This Job Listing Asks Applicants To Pay A $250 Background Check Fee Upfront Via Crypto Before Receiving An Offer Letter."',
    },
  },
  business: {
    headerTitle: "Report Business",
    headerSubtitle: "Reported against Business • Submitted 2026-07-24 10:00 AM",
    sectionTitle: "BUSINESS PROFILE DETAILS",
    details: [
      { label: "Company Name:", value: "TechVision Solution" },
      { label: "Business Owner:", value: "Justin Hammer" },
      { label: "Business Email:", value: "J.Hammer@Hammer.Tech" },
      { label: "Primary Industry:", value: "Defense Hardware" },
    ],
    violation: {
      reasonLabel: "Primary Reason:",
      reasonValue: "Fraud",
      date: "2026-07-24 09:20 AM",
      description:
        '"Misrepresented Safety Compliance Testing For Industrial Machinery."',
    },
  },
  product: {
    headerTitle: "Report Product",
    headerSubtitle: "Reported against Product • Submitted 2026-07-24 10:00 AM",
    sectionTitle: "PRODUCT LISTING METADATA",
    details: [
      { label: "Product Title:", value: "Vintage Leather Jacket 1940s" },
      { label: "Product Category:", value: "Apparel" },
      { label: "Listed Price:", value: "$350.00" },
      { label: "Company Name:", value: "Retro Closet Inc" },
      { label: "Company Email:", value: "Retro@Closet.Com" },
    ],
    violation: {
      reasonLabel: "Fake Information",
      reasonValue: "Fraud",
      date: "2026-07-24 09:20 AM",
      description:
        '"Jacket Is Brand New Synthetic Polyester, Not Vintage Leather."',
    },
  },
  community: {
    headerTitle: "Report Community",
    headerSubtitle: "Reported against Community • Submitted 2026-07-24 10:00 AM",
    sectionTitle: "COMMUNITY GROUP INFORMATION",
    details: [
      { label: "Community Name:", value: "Arkham Nightlife & Secret Parties" },
      { label: "Community Owner:", value: "Jack Napier" },
      { label: "Creator Email:", value: "Joker@Arkham.Fun" },
      { label: "Privacy Setting:", value: "Public Group" },
    ],
    violation: {
      reasonLabel: "Fake Information",
      reasonValue: "Offensive Content",
      date: "2026-07-24 09:20 AM",
      description:
        '"Organizing Unregulated Gatherings With Illegal Substance Distribution."',
    },
  },
};