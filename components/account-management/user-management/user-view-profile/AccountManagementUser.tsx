import React from 'react'
import BackButtonMain from '../../../common/BackButtonMain'
import ProfileCard from './AccountManagementProfile'
import ExperienceEntry from './ExperienceEntry'
import Education from './Education'

export default function AccountManagementUser() {
  return (
    <div>
       <BackButtonMain text="Back" />
       <ProfileCard/>
       <ExperienceEntry/>
       <Education/>
    </div>
  )
}
