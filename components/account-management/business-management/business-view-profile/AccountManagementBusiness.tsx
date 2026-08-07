'use client'
import BackButtonMain from '../../../common/BackButtonMain'
import BusinessProfileManagement from './BusinessProfileManagement'
import BusinessOperations from './BusinessOperations'
import BusinessIntelligence from './BusinessIntelligence'
import OperationalAndTradeProfile from './OperationalAndTradeProfile'
import AmlAndTransactionProfile from './AmlAndTransactionProfile'
import RequiredDocuments from './RequiredDocuments'
import ActionButtons from '../../ActionButtons'
import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { keys } from '@/keys'
import { viewBusinessProfiles } from '@/services/account-management'

export default function AccountManagementBusiness() {
  const { id } = useParams()
  const { data, isPending } = useQuery({
    queryKey: [keys.viewBusinessProfile, id],
    queryFn: () => viewBusinessProfiles(id),
  });

  const viewBusinessProfileData = data?.data

  console.log(viewBusinessProfileData, 'view businesses')

  return (
    <div>
      <BackButtonMain text="Back" />
      <BusinessProfileManagement
        companyName={viewBusinessProfileData?.companyName}
        businessType={viewBusinessProfileData?.businessType}
        primaryIndustry={viewBusinessProfileData?.primaryIndustry}
        companySize={viewBusinessProfileData?.companySize}
        foundedDate={viewBusinessProfileData?.foundedDate}
        headOfficeCountry={viewBusinessProfileData?.headOffice?.country}
        ownerName={viewBusinessProfileData?.ownerName}
        tradeName={viewBusinessProfileData?.tradeName ?? 'N/A'}
        businessRegistrationNumber={viewBusinessProfileData?.businessRegistrationNumber}
        taxIdentificationNumber={viewBusinessProfileData?.taxIdentificationNumber}
        dunsNumber={viewBusinessProfileData?.dunsNumber ?? 'N/A'}
        operationHour={viewBusinessProfileData?.operationHour}
        website={viewBusinessProfileData?.website ?? 'N/A'}
        description={viewBusinessProfileData?.description}
      />
      <BusinessOperations
        addressLine={viewBusinessProfileData?.headOffice?.addressLine}
        city={viewBusinessProfileData?.headOffice?.city}
        country={viewBusinessProfileData?.headOffice?.country}
        warehouseAddress={viewBusinessProfileData?.warehouseAddress ?? 'N/A'}
        additionalWarehouseAddress={viewBusinessProfileData?.additionalWarehouseAddress ?? 'N/A'}
      />
      <BusinessIntelligence />
      <OperationalAndTradeProfile />
      <AmlAndTransactionProfile />
      <RequiredDocuments />
      <ActionButtons />
    </div>
  )
}
