import moment from "moment";

export default function useReportDetails(data: any) {
     return {
          job: {
               headerTitle: "Report Job",
               headerSubtitle: `Reported against Jobs • Submitted ${moment(data?.createdAt).format("YYYY MM DD")}`,
               sectionTitle: "JOB LISTING DETAILS",
               details: [
                    { label: "Job Title:", value: data?.reportedJob?.jobTitle },
                    { label: "Company Name:", value: data?.reportedJob?.owner?.companyName },
                    { label: "Job Type:", value: data?.reportedJob?.employmentType },
               ],
               violation: {
                    reasonLabel: "Primary Reason:",
                    reasonValue: data?.reason,
                    date: moment(data?.createdAt).format('YYYY-MM-DD'),
                    description: data?.description,
               },
          },
          business: {
               headerTitle: "Report Business",
               headerSubtitle: `Reported against Business • Submitted ${moment(data?.createdAt).format('YYYY-MM-DD')}`,
               sectionTitle: "BUSINESS PROFILE DETAILS",
               details: [
                    { label: "Company Name:", value: data?.reportedBusiness?.companyName },
                    { label: "Business Owner:", value: data?.reportedBusiness?.owner },
                    { label: "Business Email:", value: data?.reportedBusiness?.email },
                    { label: "Primary Industry:", value: data?.reportedBusiness?.primaryIndustry },
               ],
               violation: {
                    reasonLabel: "Primary Reason:",
                    reasonValue: data?.reason,
                    date: moment(data?.createdAt).format('YYYY-MM-DD'),
                    description:
                         data?.description,
               },
          },
          product: {
               headerTitle: "Report Product",
               headerSubtitle: "Reported against Product • Submitted 2026-07-24 10:00 AM",
               sectionTitle: "PRODUCT LISTING METADATA",
               details: [
                    { label: "Product Title:", value: data?.reportedProduct?.title },
                    { label: "Product Category:", value: data?.reportedProduct?.category },
                    { label: "Listed Price:", value: data?.reportedProduct?.pricePerUnit },
                    { label: "Company Name:", value: data?.reportedProduct?.owner?.companyName },
                    { label: "Company Email:", value: data?.reportedProduct?.owner?.email },
               ],
               violation: {
                    reasonLabel: "Fake Information",
                    reasonValue: data?.reason,
                    date: moment(data?.createdAt).format('YYYY-MM-DD'),
                    description:
                         data?.description,
               },
          },
          community: {
               headerTitle: "Report Community",
               headerSubtitle: `Reported against Community • Submitted ${data?.createdAt}`,
               sectionTitle: "COMMUNITY GROUP INFORMATION",
               details: [
                    { label: "Community Name:", value: data?.reportedCommunity?.name },
                    { label: "Community Owner:", value: data?.reportedCommunity?.owner?.companyName },
                    { label: "Creator Email:", value: data?.reportedCommunity?.owner?.email },
                    { label: "Privacy Setting:", value: data?.reportedCommunity?.type },
               ],
               violation: {
                    reasonLabel: "Reason",
                    reasonValue: data?.reason,
                    date: moment(data?.createdAt).format('YYYY-MM-DD'),
                    description:
                         data?.description,
               },
          },
     }
}