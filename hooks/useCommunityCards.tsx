import moment from "moment";

export default function useCommunityCards(ownerName: string, logo: string, createdAt: string, description: string) {
     return [
          {
               title: "Community Owner",
               image: logo,
               name: ownerName,
               description: "Senior Sustainability Consultant",
               date: `Join on ${moment(createdAt).format('MMM DD, YYYY')}`,
          },
          {
               title: "Community info",
               description:
                    description,
          },
     ]
}