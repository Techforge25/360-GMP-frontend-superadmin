import { create } from "zustand";
import { TypeNavigation } from "@/types";

interface NavigationState {
     nav: TypeNavigation | null | any;
     setNav: (nav: TypeNavigation | null) => void;
     loading: boolean;
     setLoading: (loading: boolean) => void;
     type: string | null;
     setType: (type: string | null) => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
     nav: null,
     loading: false,
     type: null,
     setNav: (nav) =>
          set({
               nav,
          }),
     setLoading: (loading) =>
          set({
               loading,
          }),
     setType: (type) =>
          set({
               type,
          })
}));