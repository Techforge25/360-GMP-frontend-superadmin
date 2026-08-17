import api from "@/lib/axios";
import { TypeLoginForm } from "@/types";
import { toast } from "react-toastify";

export const login = async (payload: TypeLoginForm) => {
     const { username, password } = payload;
     try {
          const { data } = await api.post("/auth/login", { username, password });
          toast.success(data?.message)
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
          throw error
     }
};

export const logout = async () => {
     try {
          const { data } = await api.get("/auth/logout");
          toast.success(data?.message)
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
     }
};

export const authMe = async () => {
     try {
          const { data } = await api.get("/auth/me");
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
     }
};

export const refreshToken = async () => {
     try {
          const { data } = await api.get("/auth/refreshToken");
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
     }
};

export const checkStatus = async () => {
     try {
          const { data } = await api.get("/auth/status");
          return data;
     } catch (error: any) {
          toast.error(error?.message)
          console.error(error?.message)
     }
};