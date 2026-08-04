import { PiSuitcaseSimple } from "react-icons/pi";
import { IoBagRemoveSharp } from "react-icons/io5";
import { BsBox } from "react-icons/bs";
import { FaUsers } from "react-icons/fa6";

export const Reporttabs = [
  {
    id: "jobs-reports",
    label: "Jobs Reports",
    icon: <PiSuitcaseSimple />,
    active: true,
  },
  {
    id: "business-reports",
    label: "Business Reports",
    icon: <IoBagRemoveSharp />,
  },
  {
    id: "product-reports",
    label: "Product Reports",
    icon: <BsBox />,
  },
  {
    id: "coummunity-reports",
    label: "Community Reports",
    icon: <FaUsers />,
  },
];