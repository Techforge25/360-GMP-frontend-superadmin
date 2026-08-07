type BundlePricingProps = {
  bundles: {
    qty: string;
    price: number;
    _id: string;
  }[];
};

export default function BundlePricing({ bundles }: BundlePricingProps) {
  if (!bundles?.length) return null;

  return (
    <div className="mt-5 w-full">
      <h3 className="mb-4 font-open-sans text-[1.125rem] font-semibold text-text-primary">
        Bundle Pricing
      </h3>

      <div className="rounded-[0.75rem] border border-bg-light-icon bg-brand-business-button-light p-6">
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
         {bundles.map((bundle) => (
  <div key={bundle._id} className="flex items-center gap-3">
    <span className="h-4 w-4 rounded-full bg-[#2D005C]" />

    <p className="text-[1rem] font-normal text-text-secondary">
      {bundle.qty} Pcs - ${bundle.price.toFixed(2)}/pc
    </p>
  </div>
))}
        </div>
      </div>
    </div>
  );
}