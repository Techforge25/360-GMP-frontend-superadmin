import api from "@/lib/axios";
import { toast } from "react-toastify";

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

export const getBusinessReports = async (dateRange: string, search: string, page: number) => {
     try {
          const { data } = await api.get(`/reportManagement/businessProfile?dateRange=${dateRange}&search=${search}&page=${page}&limit=10`);
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};

export const getProductReports = async (dateRange: string, search: string, page: number) => {
     try {
          const { data } = await api.get(`/reportManagement/product?dateRange=${dateRange}&search=${search}&page=${page}&limit=10`);
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};

export const getCommunityReports = async (dateRange: string, search: string, page: number) => {
     try {
          const { data } = await api.get(`/reportManagement/community?dateRange=${dateRange}&search=${search}&page=${page}&limit=10`);
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};

export const viewJobReports = async (reportId: string) => {
     try {
          const { data } = await api.get(`/reportManagement/job/${reportId}`)
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};

export const viewBusinessReports = async (reportId: string) => {
     try {
          const { data } = await api.get(`/reportManagement/business/${reportId}`)
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};

export const viewProductReports = async (reportId: string) => {
     try {
          const { data } = await api.get(`/reportManagement/product/${reportId}`)
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};

export const viewCommunityReports = async (reportId: string) => {
     try {
          const { data } = await api.get(`/reportManagement/community/${reportId}`)
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};

