import api from "@/lib/axios";
import { ParamValue } from "next/dist/server/request/params";
import { toast } from "react-toastify";


export const jobsInitiator = async () => {
  try {
    const { data } = await api.get(`/jobManagement/init`);
    return data;
  } catch (error: any) {
    toast.error(error?.message);
    console.error(error?.message);
    throw error;
  }
};

export const getJobsStat = async (dateRange: string) => {
  try {
    const { data } = await api.get(
      `/jobManagement/stats?dateRange=${dateRange}`,
    );
    return data;
  } catch (error: any) {
    toast.error(error?.message);
    console.error(error?.message);
    throw error;
  }
};

export const getJobsgraph = async () => {
  try {
    const { data } = await api.get(`/jobManagement/graph`);
    return data;
  } catch (error: any) {
    toast.error(error?.message);
    console.error(error?.message);
    throw error;
  }
};

export const getActiveJobs = async (
  dateRange: string,
  limit: number,
  page: number,
) => {
  try {
    const { data } = await api.get(
      `/jobManagement/activeJobs?dateRange=${dateRange}&limit=${limit}&page=${page}`,
    );

    return data;
  } catch (error: any) {
    toast.error(error?.message);
    console.error(error?.message);
    throw error;
  }
};

export const viewActiveProfile = async (id: ParamValue) => {
  try {
    const { data } = await api.get(`/jobManagement/activeJobs/${id}`);
    return data;
  } catch (error: any) {
    toast.error(error?.message);
    console.error(error?.message);
    throw error;
  }
};

export const getReportedJobs = async (
  dateRange: string,
  page: number,
) => {
  try {
    const { data } = await api.get(
      `/jobManagement/reportedJobs?dateRange=${dateRange}&limit=10&page=${page}`,
    );

    return data;
  } catch (error: any) {
    toast.error(error?.message);
    console.error(error?.message);
    throw error;
  }
};


export const viewReportedProfile = async (id: ParamValue) => {
  try {
    const { data } = await api.get(`/jobManagement/reportedJobs/${id}`);
    return data;
  } catch (error: any) {
    toast.error(error?.message);
    console.error(error?.message);
    throw error;
  }
};

export const deleteReport = async (id: ParamValue) => {
  try {
    const { data } = await api.delete(`/jobManagement/reportedJobs/${id}`);
    return data;
  } catch (error: any) {
    toast.error(error?.message);
    console.error(error?.message);
    throw error;
  }
};