'use client'
import api from "@/lib/axios"
import { TypeNavigation } from "@/types"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function initiatorHook(route: string) {
     const arr = [
          {
               module: 'Account Management',
               url: '/accountManagement/init'
          },
          {
               module: 'Admin Management',
               url: '/adminManagement/init'
          },
          {
               module: 'Report Management',
               url: '/reportManagement/init'
          },
          {
               module: 'Marketplace Management',
               url: '/marketplace/init'
          },
          {
               module: 'Subscription Management',
               url: '/subscriptionAccess/init'
          },
     ]

     const findInitiator: TypeNavigation | undefined = arr.find((init) => init.module === route)
     const router = useRouter()

     useEffect(() => {
          const initiator = async () => {
               try {
                    if (findInitiator?.url) {
                         const res = await api.get(findInitiator?.url)
                         console.log(res)
                    }
               } catch (err: any) {
                    if (err?.data?.redirectURL) {
                         router.replace(err?.data?.redirectURL)
                    }
                    console.error(err)
               }
          }
          initiator()
     }, [])

     return null
}