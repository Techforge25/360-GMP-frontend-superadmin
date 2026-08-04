import ProductPage from "@/components/marketplace/product-audit-queue/ProductInformation/ProductInformation";

interface Props {
  searchParams: Promise<{
    marketplace?: string;
  }>;
}

export default async function Page({ searchParams }: Props) {
  const params = await searchParams;

  const marketplace = params.marketplace ?? null;

  return <ProductPage marketplace={marketplace} />;
}