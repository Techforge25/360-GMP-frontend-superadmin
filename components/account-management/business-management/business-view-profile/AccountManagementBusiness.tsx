"use client";
import BackButtonMain from "../../../common/BackButtonMain";
import BusinessProfileManagement from "./BusinessProfileManagement";
import BusinessOperations from "./BusinessOperations";
import BusinessIntelligence from "./BusinessIntelligence";
import OperationalAndTradeProfile from "./OperationalAndTradeProfile";
import AmlAndTransactionProfile from "./AmlAndTransactionProfile";
import RequiredDocuments from "./RequiredDocuments";
import ActionButtons from "../../ActionButtons";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { keys } from "@/keys";
import { viewBusinessProfiles } from "@/services/account-management";
import RejectedReason from "./RejectedReason";
import CompanyProfileShimmer from "@/components/skeleton/CompanyProfileShimmer";
import BusinessOperationsShimmer from "@/components/skeleton/BusinessOperationsShimmer";
import BusinessIntelligenceShimmer from "@/components/skeleton/BusinessIntelligenceShimmer";
import OperationalAndTradeProfileShimmer from "@/components/skeleton/OperationalAndTradeProfileShimmer";
import AmlAndTransactionProfileShimmer from "@/components/skeleton/AmlAndTransactionProfileShimmer";
import RequiredDocumentsShimmer from "@/components/skeleton/RequiredDocumentsShimmer";
import RejectedReasonShimmer from "@/components/skeleton/RejectedReasonShimmer";

export default function AccountManagementBusiness() {
  const { id } = useParams();
  const { data, isPending, isLoading } = useQuery({
    queryKey: [keys.viewBusinessProfile, id],
    queryFn: () => viewBusinessProfiles(id),
    staleTime: 0,
  });

  const viewBusinessProfileData = data?.data;

  return (
    <div>
      <BackButtonMain text="Back" />
      {isLoading ? (
        <CompanyProfileShimmer />
      ) : (
        <BusinessProfileManagement
          companyName={viewBusinessProfileData?.companyName}
          businessType={viewBusinessProfileData?.businessType}
          primaryIndustry={viewBusinessProfileData?.primaryIndustry}
          companySize={viewBusinessProfileData?.companySize}
          foundedDate={viewBusinessProfileData?.foundedDate}
          headOfficeCountry={viewBusinessProfileData?.headOffice?.country}
          ownerName={viewBusinessProfileData?.ownerName}
          tradeName={viewBusinessProfileData?.tradeName ?? "N/A"}
          businessRegistrationNumber={
            viewBusinessProfileData?.businessRegistrationNumber
          }
          taxIdentificationNumber={
            viewBusinessProfileData?.taxIdentificationNumber
          }
          dunsNumber={viewBusinessProfileData?.dunsNumber ?? "N/A"}
          operationHour={viewBusinessProfileData?.operationHour}
          website={viewBusinessProfileData?.website ?? "N/A"}
          description={viewBusinessProfileData?.description}
          logo={viewBusinessProfileData?.logo}
        />
      )}
      {isLoading ? (
        <BusinessOperationsShimmer />
      ) : (
        <BusinessOperations
          addressLine={viewBusinessProfileData?.headOffice?.addressLine}
          city={viewBusinessProfileData?.headOffice?.city}
          country={viewBusinessProfileData?.headOffice?.country}
          warehouseAddress={viewBusinessProfileData?.warehouseAddress ?? "N/A"}
          additionalWarehouseAddress={
            viewBusinessProfileData?.additionalWarehouseAddress ?? "N/A"
          }
          internationalOffices={
            viewBusinessProfileData?.internationalOffices ?? "N/A"
          }
          incoterms={viewBusinessProfileData?.incoterms ?? "N/A"}
          termsAndCapability={
            viewBusinessProfileData?.termsAndCapability ?? "N/A"
          }
        />
      )}
      {isLoading ? (
        <BusinessIntelligenceShimmer />
      ) : (
        <BusinessIntelligence
          primaryContactPerson={viewBusinessProfileData?.primaryContactPerson}
          executiveAndLeadership={
            viewBusinessProfileData?.executiveAndLeadership
          }
          ownedByAnotherCompany={viewBusinessProfileData?.ownedByAnotherCompany}
          parentCompany={viewBusinessProfileData?.parentCompany ?? "N/A"}
        />
      )}
      {isLoading ? (
        <OperationalAndTradeProfileShimmer />
      ) : (
        <OperationalAndTradeProfile
          auditingAgency={
            viewBusinessProfileData?.operationalAndTradeProfile
              ?.auditingAgency ?? "N/A"
          }
          tradeAffiliations={
            viewBusinessProfileData?.operationalAndTradeProfile
              ?.tradeAffiliations ?? "N/A"
          }
          regionOfOperations={
            viewBusinessProfileData?.operationalAndTradeProfile
              ?.regionOfOperations
          }
        />
      )}
      {isLoading ? (
        <AmlAndTransactionProfileShimmer />
      ) : (
        <AmlAndTransactionProfile
          purpose={viewBusinessProfileData?.amlAndTransactionProfile?.purpose}
          revenueRange={
            viewBusinessProfileData?.amlAndTransactionProfile?.revenueRange ??
            "N/A"
          }
          tradeCorridors={
            viewBusinessProfileData?.amlAndTransactionProfile?.tradeCorridors
          }
          mainCounterParties={
            viewBusinessProfileData?.amlAndTransactionProfile
              ?.mainCounterParties ?? []
          }
          pep={viewBusinessProfileData?.amlAndTransactionProfile?.pep}
          evidenceOfFunds={viewBusinessProfileData?.evidenceOfFunds}
        />
      )}
      {isLoading ? (
        <RequiredDocumentsShimmer />
      ) : (
        <RequiredDocuments
          certificateOfIncorporation={
            viewBusinessProfileData?.certificateOfIncorporation
          }
          taxRegistrationCertificate={
            viewBusinessProfileData?.taxRegistrationCertificate
          }
          shareHolderRegister={viewBusinessProfileData?.shareHolderRegister}
          operatingLicense={viewBusinessProfileData?.operatingLicense}
        />
      )}

      {(viewBusinessProfileData?.status === "rejected" ||
        viewBusinessProfileData?.status === "approved") &&
        (isLoading ? (
          <RejectedReasonShimmer />
        ) : (
          <RejectedReason viewBusinessProfileData={viewBusinessProfileData} />
        ))}

      {viewBusinessProfileData?.status !== "rejected" &&
        viewBusinessProfileData?.status !== "approved" && (
          <ActionButtons id={viewBusinessProfileData?._id} />
        )}
    </div>
  );
}
