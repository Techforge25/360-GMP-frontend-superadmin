"use client";
import { keys } from "@/keys";
import { deleteAdmin, updateAdminDetails, updatePassword } from "@/services/settings";
import { EditPasswordRef, TypeUpdateAdminPassword } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ParamValue } from "next/dist/server/request/params";
import {
     forwardRef,
     useImperativeHandle,
     useState,
} from "react";
import { FiAlertCircle, FiX } from "react-icons/fi";
import FormInput from "../common/FormInput";
import FormPasswordInput from "../common/FormPasswordInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updatePasswordSchema } from "@/validations/settingsValidations";

interface TypeAdminId {
     adminId: ParamValue;
}

const EditPasswordModal = forwardRef<
     EditPasswordRef,
     TypeAdminId
>(({ adminId }, ref) => {
     const [isOpen, setIsOpen] = useState(false);
     const queryClient = useQueryClient()

     const {
          register,
          handleSubmit,
          formState: { errors, isValid },
     } = useForm<TypeUpdateAdminPassword>({
          resolver: yupResolver(updatePasswordSchema),
          mode: "onChange",
          defaultValues: {
               password: "",
          },
     });

     useImperativeHandle(ref, () => ({
          open: () => setIsOpen(true),
          close: () => setIsOpen(false),
     }));

     const mutation = useMutation({
          mutationFn: ({
               adminId,
               password,
          }: { adminId: ParamValue } & TypeUpdateAdminPassword) =>
               updatePassword(adminId, { password }),

          onSuccess: () => {
               setIsOpen(false);
               queryClient.invalidateQueries({
                    queryKey: [keys.adminList],
               });
          },
     });

     const onSubmit = async (data: TypeUpdateAdminPassword) => {
          mutation.mutate({
               adminId,
               password: data?.password
          })
     }

     if (!isOpen) return null;

     return (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px] p-4">
               <div className="relative w-full max-w-[624px] rounded-[1.25rem] bg-white p-8 shadow-2xl font-sans">
                    <button
                         onClick={() => setIsOpen(false)}
                         className="absolute right-5 top-5 text-gray-500 hover:text-gray-800 transition-colors duration-200 cursor-pointer"
                    >
                         <FiX className="h-5 w-5" />
                    </button>

                    <form onSubmit={handleSubmit(onSubmit)}>
                         <FormPasswordInput
                              label="Password"
                              name="password"
                              register={register}
                              error={errors?.password}
                         />
                         <div className="mt-8 flex gap-4">
                              <button
                                   onClick={() => setIsOpen(false)}
                                   className="flex-1 rounded-md border border-gray-200 bg-white py-2 text-[1rem] font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                              >
                                   Cancel
                              </button>
                              <button
                                   type="submit"
                                   className="confirm-btn"
                                   disabled={mutation.isPending || !isValid}
                              >
                                   {mutation.isPending ? 'Updating...' : 'Update Password'}
                              </button>
                         </div>
                    </form>


               </div>
          </div>
     );
});

EditPasswordModal.displayName = "EditPasswordModal";

export default EditPasswordModal;