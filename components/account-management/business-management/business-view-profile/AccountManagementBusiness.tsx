import React from 'react'
import BackButtonMain from '../../../common/BackButtonMain'
import BusinessProfileManagement from './BusinessProfileManagement'
import BusinessOperations from './BusinessOperations'
import BusinessIntelligence from './BusinessIntelligence'
import OperationalAndTradeProfile from './OperationalAndTradeProfile'
import AmlAndTransactionProfile from './AmlAndTransactionProfile'
import RequiredDocuments from './RequiredDocuments'
import ActionButtons from '../../ActionButtons'

export default function AccountManagementBusiness() {
  return (
    <div>
       <BackButtonMain text="Back" />
       <BusinessProfileManagement/>
       <BusinessOperations/>
       <BusinessIntelligence/>
       <OperationalAndTradeProfile/>
       <AmlAndTransactionProfile/>
       <RequiredDocuments/>
       <ActionButtons/>
    </div>
  )
}
