import { stripHtml } from "@/helpers";
import moment from "moment";

export default function useCommunityCards(companyName: string, ownerName: string, logo: string, createdAt: string, description: string, purpose: string, rules: string) {
     return [
          {
               title: "Community Owner",
               image: logo,
               name: ownerName,
               description: companyName,
               date: `Join on ${moment(createdAt).format('MMM DD, YYYY')}`,
          },
          {
               title: "Community Details",
               titleinner: "Community Purpose",
               titleinnertwo: "Rules & Guidelines",
               description: purpose,
               rules: rules,
          },
     ]
}