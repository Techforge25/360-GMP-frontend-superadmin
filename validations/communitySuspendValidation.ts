import * as yup from "yup";

export const warnCommunityOwnerValidator = yup.object({
     reason: yup
          .string()
          .trim()
          .min(4, "Reason must be at least 4 characters")
          .max(50, "Reason must be less than or equal to 50 characters")
          .required("Reason is required"),

     description: yup
          .string()
          .trim()
          .max(1000, "Description must be less than or equal to 1000 characters")
          .required("Description is required"),
});