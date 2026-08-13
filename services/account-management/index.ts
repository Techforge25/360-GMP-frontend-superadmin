import api from "@/lib/axios";
import { ParamValue } from "next/dist/server/request/params";
import { toast } from "react-toastify";

interface RejectBusinessPayload {
     id: ParamValue;
     note: string;
}

export const accountInitiator = async () => {
     try {
          const { data } = await api.get(`/accountManagement/init`);
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};


export const getAccountStat = async (dateRange: string) => {
     try {
          const { data } = await api.get(`/accountManagement/stats?dateRange=${dateRange}`);
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};

export const getUserProfiles = async (dateRange: string, debounceSearch: string, page: number, validityChange: string) => {
     try {
          const { data } = await api.get(`/accountManagement/userProfiles?dateRange=${dateRange}&search=${debounceSearch}&page=${page}&limit=10&type=${validityChange}`);
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};

export const viewUserProfile = async (id: ParamValue) => {
     try {
          const { data } = await api.get(`/accountManagement/userProfile/${id}`)
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};

export const getBusinessProfiles = async (dateRange: string, page: number, validityChange: string, status: string, debounceSearch: string) => {
     try {
          const { data } = await api.get(`/accountManagement/businessProfiles?dateRange=${dateRange}&page=${page}&limit=10&type=${validityChange}&status=${status}&search=${debounceSearch}`);
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};

export const viewBusinessProfiles = async (id: ParamValue) => {
     try {
          const { data } = await api.get(`/accountManagement/businessProfile/${id}`);
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};

export const approveBusiness = async (id: ParamValue) => {
     try {
          const { data } = await api.patch(`/accountManagement/businessProfile/${id}/approve`);
          toast.success(data?.message)
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};

export const rejectBusiness = async ({
     id,
     note,
}: RejectBusinessPayload) => {
     try {
          const { data } = await api.patch(
               `/accountManagement/businessProfile/${id}/reject`,
               { note }
          );
          toast.success(data?.message)
          return data;
     } catch (error: any) {
          toast.error(error?.message);
          console.error(error?.message);
          throw error;
     }
};