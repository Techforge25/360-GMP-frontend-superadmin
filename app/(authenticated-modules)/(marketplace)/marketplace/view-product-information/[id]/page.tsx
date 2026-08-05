import ProductPage from "@/components/marketplace/product-audit-queue/ProductInformation/ProductInformation";

interface Props {
  params: Promise<{ id: string }>
  searchParams: Promise<{
    marketplace?: string;
  }>;
}

export default async function Page({ params, searchParams }: Props) {
  const { marketplace } = await searchParams
  const { id } = await params;
  return <ProductPage marketplace={marketplace ?? null} productId={id} />;
}