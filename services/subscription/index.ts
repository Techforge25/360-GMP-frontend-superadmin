import api from "@/lib/axios";
import { ParamValue } from "next/dist/server/request/params";
import { toast } from "react-toastify";

export const getSubscriptionStats = async (dateRange: string) => {
     try {
          const { data } = await api.get(`/subscriptionAccess/stats?dateRange=${dateRange}`);
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};

export const getSubscriptionFreeUsers = async (dateRange: string, page: number, validityChange: string, debouncedSearch?: string) => {
     try {
          const { data } = await api.get(`/subscriptionAccess/trialUsers?dateRange=${dateRange}&page=${page}&limit=10&subscriptionStatus=${validityChange}&search=${debouncedSearch}`);
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};

export const getSubscriptionUsersFreeDetails = async (userId: string) => {
     try {
          const { data } = await api.get(`/subscriptionAccess/trialUsers/${userId}`)
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};

export const getSubscriptionUsersPaid = async (dateRange: string, page: number, validityChange: string, debouncedSearch: string, tierType: string) => {
     try {
          const { data } = await api.get(`/subscriptionAccess/paidUsers?search=${debouncedSearch}&tierType=${tierType === 'all' ? '' : tierType}&subscriptionStatus=${validityChange === 'all' ? '' : validityChange}&dateRange=${dateRange}&page=${page}&limit=10`)
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};

export const getSubscriptionUsersPaidDetails = async (userId: ParamValue) => {
     try {
          const { data } = await api.get(`/subscriptionAccess/paidUsers/${userId}`)
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};