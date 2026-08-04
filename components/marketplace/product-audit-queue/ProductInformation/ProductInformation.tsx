import React from "react";
import { product } from "@/constants/marketplace/product";
import ProductImageGallery from "./ProductImageGallery";
import ProductInfo from "./ProductInfo";
import ProductSpecifications from "./ProductSpecifications";
import BackButtonMain from "@/components/common/BackButtonMain";
import RejectButtons from "./RejectButtons";
import ProductApprovedBy from "./ProductApprovedBy";

export default function ProductDetail({
  marketplace,
}: {
  marketplace: string | null;
}) {
  return (
    <div className="p-4 md:p-6 ">
      <BackButtonMain text="Back" />
      <div className="mb-8 flex flex-col gap-8 lg:flex-row">
        <ProductImageGallery images={product.images} />

        <ProductInfo />
      </div>

      <ProductSpecifications product={product} />
      {marketplace === "product-approve-reject" && <ProductApprovedBy />}
      {marketplace === "product-audit-queue" && <RejectButtons />}
    </div>
  );
}
