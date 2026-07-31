import api from "@/lib/axios";
import { TypeCreateAdmin, TypeUpdateAdmin, TypeUpdateAdminPassword } from "@/types";
import { ParamValue } from "next/dist/server/request/params";
import { toast } from "react-toastify";

export const createAdmin = async (payload: TypeCreateAdmin) => {
     const { username, email, password, allowedModules } = payload;
     try {
          const { data } = await api.post("/adminManagement", { username, email, password, allowedModules });
          toast.success(data?.message)
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};

export const getCreatedAdmins = async () => {
     try {
          const { data } = await api.get("/adminManagement");
          console.log("getCreatedAdmins called");
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};

export const getSingleAdminDetails = async (adminId: ParamValue) => {
     try {
          const { data } = await api.get(`/adminManagement/${adminId}`);
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};

export const updateAdminDetails = async (adminId: ParamValue, payload: TypeUpdateAdmin) => {
     const { username, allowedModules } = payload;
     try {
          const { data } = await api.patch(`/adminManagement/${adminId}`, { username, allowedModules });
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};

export const updatePassword = async (
     adminId: ParamValue,
     payload: TypeUpdateAdminPassword
) => {
     const { password } = payload;

     try {
          const { data } = await api.patch(
               `/adminManagement/${adminId}/password`,
               { password }
          );
          toast.success(data?.message)
          return data;
     } catch (error: any) {
          toast.error(error?.message);
          console.error(error?.message);
          throw error;
     }
};

export const deleteAdmin = async (adminId: ParamValue) => {
     try {
          const { data } = await api.delete(`/adminManagement/${adminId}`);
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};
