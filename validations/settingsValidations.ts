import * as yup from "yup";

export const createAdminSchema = yup.object({
  username: yup
    .string()
    .trim()
    .lowercase()
    .min(3, "Username must be at least 3 characters long.")
    .max(20, "Username cannot exceed 20 characters.")
    .matches(
      /^(?=[a-z0-9._-]*[a-z0-9])[a-z0-9]+(?:[._-]?[a-z0-9]+)*$/,
      "Username can only contain letters, numbers, and at most one special character (., _, or -). Spaces are not allowed.",
    )
    .required("Username is required."),

  email: yup
    .string()
    .trim()
    .lowercase()
    .email("Please enter a valid email address.")
    .required("Email is required."),

  password: yup
    .string()
    .trim()
    .min(8, "Password must be at least 8 characters long.")
    .max(50, "Password cannot exceed 50 characters.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()[\]{}|\\<>+=._-])[A-Za-z\d@$!%*?&^#()[\]{}|\\<>+=._-]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.",
    )
    .required("Password is required."),

  allowedModules: yup.array()
    .of(
      yup.object({
        module: yup
          .string()
          .trim()
          .required("Module name is required"),

        url: yup
          .string()
          .trim()
          .required("Module URL is required"),
      })
    )
    .min(1, "At least one module is required")
    .required("Allowed modules is required"),
});

export const updateAdminSchema = yup.object({
  username: yup
    .string()
    .trim()
    .lowercase()
    .min(3, "Username must be at least 3 characters long.")
    .max(20, "Username cannot exceed 20 characters.")
    .matches(
      /^(?=[a-z0-9._-]*[a-z0-9])[a-z0-9]+(?:[._-]?[a-z0-9]+)*$/,
      "Username can only contain letters, numbers, and at most one special character (., _, or -). Spaces are not allowed.",
    )
    .required("Username is required."),

  allowedModules: yup.array()
    .of(
      yup.object({
        module: yup
          .string()
          .trim()
          .required("Module name is required"),

        url: yup
          .string()
          .trim()
          .required("Module URL is required"),
      })
    )
    .min(1, "At least one module is required")
    .required("Allowed modules is required"),
});

export const updatePasswordSchema = yup.object({
  password: yup
    .string()
    .trim()
    .min(8, "Password must be at least 8 characters long.")
    .max(50, "Password cannot exceed 50 characters.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()[\]{}|\\<>+=._-])[A-Za-z\d@$!%*?&^#()[\]{}|\\<>+=._-]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.",
    )
    .required("Password is required."),
});
