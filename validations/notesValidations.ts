import * as yup from "yup";

export const notesSchema = yup.object({
     note: yup
          .string()
          .trim()
          .max(1000, "Note cannot exceed 1000 characters.")
          .required("Note is required."),
});
