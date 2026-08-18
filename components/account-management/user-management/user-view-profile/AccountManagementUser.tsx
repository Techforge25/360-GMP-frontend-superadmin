'use client'
import BackButtonMain from '../../../common/BackButtonMain'
import ProfileCard from './AccountManagementProfile'
import ExperienceEntry from './ExperienceEntry'
import Education from './Education'
import { useQuery } from '@tanstack/react-query'
import { viewUserProfile } from '@/services/account-management'
import { useParams } from 'next/navigation'
import { keys } from '@/keys'
import UserProfileShimmer from '@/components/skeleton/UserProfileShimmer'

export default function AccountManagementUser() {
  const { id } = useParams()

  const { data, isPending } = useQuery({
    queryKey: [keys.accountStats, id],
    queryFn: () => viewUserProfile(id),
  });

  const userProfileViewData = data?.data

  console.log(userProfileViewData, 'user profile view data')

  return (
    <div>
      <BackButtonMain text="Back" />
      {isPending ? (
        <UserProfileShimmer />
      ) : (
        <>
          <ProfileCard fullName={userProfileViewData?.fullName} email={userProfileViewData?.email} bio={userProfileViewData?.bio} year={userProfileViewData?.createdAt} logo={userProfileViewData?.logo} location={userProfileViewData?.location} phone={userProfileViewData?.phone} />
          {userProfileViewData?.workExperience?.length > 0 && (
            <ExperienceEntry workExperience={userProfileViewData?.workExperience} />
          )}
          <Education education={userProfileViewData?.education} employmentType={userProfileViewData?.employmentType} title={userProfileViewData?.title} targetJob={userProfileViewData?.targetJob} resumeUrl={userProfileViewData?.resumeUrl} />
        </>
      )}

    </div>
  )
}
