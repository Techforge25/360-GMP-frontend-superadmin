"use client";

function ProductApprovedBy() {
  return (
    <div className="space-y-3 text-sm pt-6">
      <div className="flex items-center gap-2">
        <span className="font-semibold text-gray-800">Approved by:</span>
        <span className="text-gray-500">alexajohn@gmail.com</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="font-semibold text-gray-800">Approval Date:</span>
        <span className="text-gray-500">Approval Date:</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="font-semibold text-gray-800">Status:</span>

        <span className="flex items-center gap-1 text-gray-500">
          <span className="flex h-4 w-4 items-center justify-center rounded-sm bg-green-500 text-[11px] text-white">
            ✓
          </span>
          Approved
        </span>
      </div>
    </div>
  );
}

export default ProductApprovedBy;
