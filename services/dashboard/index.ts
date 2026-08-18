import api from "@/lib/axios";
import { toast } from "react-toastify";

export const dashboardStats = async () => {
     try {
          const { data } = await api.get(`/dashboard/stats`);
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};

export const fetchSubscriptionChart = async () => {
     try {
          const { data } = await api.get(`/dashboard/subscriptionChart`);
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};

export const fetchRevenueGraph = async () => {
     try {
          const { data } = await api.get(`/dashboard/revenueGraph`);
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};

export const fetchLatestBusinesses = async (page: number) => {
     try {
          const { data } = await api.get(`/dashboard/latestBusinesses?page=${page}&limit=2`);
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};
