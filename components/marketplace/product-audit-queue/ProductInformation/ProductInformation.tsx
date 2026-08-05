'use client'
import { product } from "@/constants/marketplace/product";
import ProductImageGallery from "./ProductImageGallery";
import ProductInfo from "./ProductInfo";
import ProductSpecifications from "./ProductSpecifications";
import BackButtonMain from "@/components/common/BackButtonMain";
import RejectButtons from "./RejectButtons";
import ProductApprovedBy from "./ProductApprovedBy";
import { useQuery } from "@tanstack/react-query";
import { keys } from "@/keys";
import { productDetails } from "@/services/marketplace";
import ProductDetailShimmer from "@/components/skeleton/ProductShimmer";

export default function ProductDetail({
  productId,
  marketplace
}: {
  productId: string,
  marketplace: string | null
}) {
  const { data, isPending } = useQuery({
    queryKey: [keys.orderProductAuditQueueDetails, productId],
    queryFn: () => productDetails(productId),
    enabled: !!productId,
  });

  const productDetail = data?.data

  return (
    <div className="p-4 md:p-6 ">
      <BackButtonMain text="Back" />
      {isPending ? (
        <ProductDetailShimmer />
      ) : (
        <>
          <div className="mb-8 flex flex-col gap-8 lg:flex-row">
            <ProductImageGallery image={productDetail?.image} groupImages={productDetail?.groupImages} />
            <ProductInfo title={productDetail?.title} pricePerUnit={productDetail?.pricePerUnit} minOrderQty={productDetail?.minOrderQty} companyName={productDetail?.businessProfile?.companyName} logo={productDetail?.businessProfile?.logo} category={productDetail?.category} />
          </div>

          <ProductSpecifications category={productDetail?.category} detail={productDetail?.detail} shippingCompany='MAERSK' shippingCost={0} estimatedDeliveryDays={productDetail?.estimatedDeliveryDays} minOrderQty={productDetail?.minOrderQty} />
          {productDetail?.status !== 'pending' && (
            <ProductApprovedBy />
          )}
          {productDetail?.status === 'pending' && (
            <RejectButtons />
          )}
        </>
      )}
    </div>
  );
}
