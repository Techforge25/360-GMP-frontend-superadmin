import { FileItem , AmlFileItem} from "@/types";

export const requiredDocuments: FileItem[] = [
  {
    title: "Certificate Of Incorporation",
    filename: "Certificate Of Incorporation",
    subtext: "Certificate.PDF1",
    fileUrl: "#",
  },
  {
    title: "Tax Registration Certificate",
    filename: "Certificate Of Incorporation",
    subtext: "Certificate.PDF2",
    fileUrl: "#",
  },
  {
    title: "Shareholder Register",
    filename: "Certificate Of Incorporation",
    subtext: "Certificate.PDF3",
    fileUrl: "#",
  },
];

export const regulatedDocument: FileItem = {
  title: "Operating License / Sector Permit",
  filename: "Certificate Of Incorporation",
  subtext: "Certificate.PDF2",
  fileUrl: "#",
};

 export const evidenceFile: AmlFileItem = {
    title: "Evidence Of Funds",
    filename: "Certificate Of Incorporation",
    fileUrl: "#",
  };