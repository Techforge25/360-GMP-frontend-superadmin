import api from "@/lib/axios";
import { TypeCommunityPayload } from "@/types";
import { ParamValue } from "next/dist/server/request/params";
import { toast } from "react-toastify";

export const getCommunitiesStats = async () => {
     try {
          const { data } = await api.get(`/communityManagement/stats`);
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};

export const getAllCommunities = async (status: string, category: string, page: number, search: string) => {
     try {
          const { data } = await api.get(`/communityManagement?status=${status}&category=${category}&search=${search}&page=${page}&limit=10`);
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};

export const getCommunityDetails = async (communityId: ParamValue) => {
     try {
          const { data } = await api.get(`/communityManagement/${communityId}`)
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};

export const getCommunityMembers = async (communityId: ParamValue, debouncedSearch: string, page: number) => {
     try {
          const { data } = await api.get(`/communityManagement/${communityId}/members?search=${debouncedSearch}&page=${page}&limit=10`)
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};

export const getCommunityPosts = async (communityId: ParamValue, dateRange: string, page: number) => {
     try {
          const { data } = await api.get(`/communityManagement/${communityId}/posts?dateRange=${dateRange}&page=${page}&limit=10`)
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};

export const sendWarning = async ({ communityId, reason, description }: TypeCommunityPayload) => {
     try {
          const { data } = await api.post(`/communityManagement/${communityId}/warn`, { reason, description })
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};

export const suspend = async (communityId: ParamValue) => {
     try {
          const { data } = await api.post(`/communityManagement/${communityId}/suspend`)
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};

export const activate = async (communityId: ParamValue) => {
     try {
          const { data } = await api.post(`/communityManagement/${communityId}/activate`)
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};