export default function useProductSpecifications(category: string, shippingCompany: string, shippingCost: number, estimatedDelivery: string, minOrderQty: number) {
     return [
          {
               label: "Category",
               value: category,
          },
          {
               label: "Shipping Company",
               value: shippingCompany,
          },
          {
               label: "Shipping Cost",
               value: "$" + shippingCost,
          },
          {
               label: "Estimated Delivery",
               value: estimatedDelivery,
          },
          {
               label: "Min Order Qty",
               value: minOrderQty,
          },
     ]
}