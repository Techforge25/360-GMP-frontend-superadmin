"use client";

import { authMe, refreshToken } from "@/services/auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

export function QueryProvider({ children }: { children: React.ReactNode }) {
     const pathname = usePathname()
     const router = useRouter();
     const [loading, setLoading] = useState(true);

     useLayoutEffect(() => {
          const checkUserAuthentication = async () => {
               if (pathname === "/") {
                    setLoading(false);
                    return;
               }
               try {
                    const res = await authMe();
                    if (res?.data?.redirectURL) {
                         router.replace("/");
                         return;
                    }
               } finally {
                    setLoading(false);
               }
          };

          checkUserAuthentication();
     }, [router]);

     useEffect(() => {
          if (pathname === '/') {
               return
          }

          const getRefreshToken = async () => {
               const res = await refreshToken();
               if (res?.statusCode === 400) {
                    router.replace('/')
               }
          }

          getRefreshToken()
     }, [])

     const [queryClient] = useState(
          () =>
               new QueryClient({
                    defaultOptions: {
                         queries: {
                              staleTime: 60 * 1000,
                              refetchOnWindowFocus: false,
                              retry: 1,
                         },
                    },
               })
     );

     if (loading) {
          return (
               <div className="flex items-center justify-center min-h-screen bg-surface">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-primary"></div>
               </div>
          );
     }

     return (
          <QueryClientProvider client={queryClient}>
               {children}
               <ToastContainer />
               {process.env.NODE_ENV === "development" && (
                    <ReactQueryDevtools initialIsOpen={false} />
               )}
          </QueryClientProvider>
     );
}