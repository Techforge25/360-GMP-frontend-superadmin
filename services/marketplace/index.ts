import api from "@/lib/axios";
import { ProductRejectionPayload } from "@/types";
import { ParamValue } from "next/dist/server/request/params";
import { toast } from "react-toastify";

export const fetchMarketplaceStats = async (dateRange: string) => {
     try {
          const { data } = await api.get(`/marketplace/stats?dateRange=${dateRange}`);
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};

export const fetchOrderLogs = async (dateRange: string, page: number) => {
     try {
          const { data } = await api.get(`/marketplace/orderLogs?dateRange=${dateRange}&page=${page}&limit=10`);
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};

export const fetchOrderLogsDetails = async (orderId: ParamValue) => {
     try {
          const { data } = await api.get(`/marketplace/orderLogs/${orderId}`);
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};

export const productAudits = async (dateRange: string, page: number) => {
     try {
          const { data } = await api.get(`/marketplace/productAudits?dateRange=${dateRange}&page=${page}`);
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};

export const productDetails = async (productId: string) => {
     try {
          const { data } = await api.get(`/marketplace/product/${productId}`);
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};

export const generalProducts = async (dateRange: string, page: number) => {
     try {
          const { data } = await api.get(`/marketplace/generalProducts?dateRange=${dateRange}&page=${page}&limit=10`);
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};

export const productApproval = async (productId: string) => {
     try {
          const { data } = await api.patch(`/marketplace/product/${productId}/approve`);
          toast.success(data?.message)
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};

export const productRejection = async ({
     productId,
     note,
}: ProductRejectionPayload) => {
     try {
          const { data } = await api.patch(
               `/marketplace/product/${productId}/reject`,
               { note }
          );

          return data;
     } catch (error: any) {
          toast.error(error?.message);
          throw error;
     }
};

