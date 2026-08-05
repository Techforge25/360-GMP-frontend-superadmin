import * as yup from "yup";

export const notesSchema = yup.object({
     note: yup
          .string()
          .trim()
          .max(5000, "Note cannot exceed 5000 characters.")
          .required("Note is required."),
});
