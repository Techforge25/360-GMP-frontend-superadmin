import api from "@/lib/axios";
import { toast } from "react-toastify";

export const getReportStat = async (dateRange: string) => {
     try {
          const { data } = await api.get(`/reportManagement/stats?dateRange=${dateRange}`);
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};