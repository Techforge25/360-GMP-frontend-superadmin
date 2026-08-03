import React from 'react';

export default function ProductDetail() {
  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 font-sans">
      
      {/* Top Section: Image Gallery & Product Info */}
      <div className="flex flex-col lg:flex-row gap-8 mb-8">
        
        {/* Left: Image Gallery */}
        <div className="w-full lg:w-[55%] flex flex-col gap-4">
          {/* Main Image with Navigation */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-sm border border-gray-100">
            {/* Replace src with actual image */}
            <img 
              src="https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&q=80&w=1200" 
              alt="ANC Pro Wireless Earbuds" 
              className="w-full h-full object-cover object-center"
            />
            
            {/* Left Arrow */}
            <button className="absolute left-4 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center bg-white rounded-full shadow-md text-gray-600 hover:text-gray-900 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Right Arrow */}
            <button className="absolute right-4 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center bg-white rounded-full shadow-md text-gray-600 hover:text-gray-900 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 border border-gray-100 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&q=80&w=400" 
                  alt={`Thumbnail ${item}`} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="w-full lg:w-[45%] flex flex-col pt-2">
          <h1 className="text-[1.75rem] font-semibold text-gray-900 leading-tight">
            ANC Pro Wireless Earbuds
          </h1>
          <p className="mt-2 text-[15px] text-gray-600 leading-relaxed">
            High-fidelity audio with Active Noise Cancellation for hands-free factory communication.
          </p>

          {/* Price & MOQ */}
          <div className="mt-8 flex items-end justify-between border-b border-gray-100 pb-6">
            <div className="flex items-baseline gap-1">
              <span className="text-[2rem] font-bold text-gray-900 leading-none">$98.00</span>
              <span className="text-[15px] text-gray-500 font-medium">/Pc</span>
            </div>
            <span className="text-sm text-gray-400 font-medium uppercase tracking-wider">
              MOQ: 100 pc
            </span>
          </div>

          {/* Seller / Manufacturer Card */}
          <div className="mt-6 w-full rounded-xl bg-[#F4F4F5] p-4 flex items-center justify-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-white border border-gray-200 shadow-sm">
              <span className="text-sm font-bold text-blue-500">M</span>
            </div>
            <span className="text-[15px] font-medium text-gray-800">
              Global Manufacturing Co.
            </span>
          </div>

          {/* Additional Details */}
          <div className="mt-8 flex flex-col gap-5">
            <div className="flex justify-between items-center pb-5 border-b border-gray-100">
              <span className="text-[15px] text-gray-500">Product category</span>
              <span className="text-[15px] font-medium text-gray-700">Electronic</span>
            </div>
            <div className="flex justify-between items-center pb-5 border-b border-gray-100">
              <span className="text-[15px] text-gray-500">MOQ</span>
              <span className="text-[15px] font-medium text-gray-700">100</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Technical Specifications */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
        <h2 className="text-xl font-medium text-slate-500 mb-6">
          Technical Specifications
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Left Table: Specs */}
          <div className="flex flex-col rounded-xl overflow-hidden border border-gray-100">
            {/* Row 1 */}
            <div className="flex justify-between bg-[#F8F9FA] p-4">
              <span className="text-[15px] font-semibold text-gray-800 w-1/2">Model Number</span>
              <span className="text-[15px] text-gray-600 w-1/2">ANC-X200 Pro</span>
            </div>
            {/* Row 2 */}
            <div className="flex justify-between bg-white p-4">
              <span className="text-[15px] font-semibold text-gray-800 w-1/2">Bluetooth Version</span>
              <span className="text-[15px] text-gray-600 w-1/2">V5.3 + EDR</span>
            </div>
            {/* Row 3 */}
            <div className="flex justify-between bg-[#F8F9FA] p-4">
              <span className="text-[15px] font-semibold text-gray-800 w-1/2">Battery Life</span>
              <span className="text-[15px] text-gray-600 w-1/2">30 Hours (with Case)</span>
            </div>
            {/* Row 4 */}
            <div className="flex justify-between bg-white p-4">
              <span className="text-[15px] font-semibold text-gray-800 w-1/2">Waterproof Standard</span>
              <span className="text-[15px] text-gray-600 w-1/2">IPX5</span>
            </div>
            {/* Row 5 */}
            <div className="flex justify-between bg-[#F8F9FA] p-4">
              <span className="text-[15px] font-semibold text-gray-800 w-1/2">Certification</span>
              <span className="text-[15px] text-gray-600 w-1/2">CE, RoHS, FCC</span>
            </div>
          </div>

          {/* Right Highlights: Box */}
          <div className="rounded-xl bg-[#F4F4F5] p-6">
            <h3 className="text-[17px] font-semibold text-gray-900 mb-4">
              Product Highlights
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400"></span>
                <span className="text-[15px] text-gray-600">Active Noise Cancellation up to 35dB</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400"></span>
                <span className="text-[15px] text-gray-600">Transparency Mode for ambient awareness</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400"></span>
                <span className="text-[15px] text-gray-600">Dual-mic ENC for crystal clear calls</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400"></span>
                <span className="text-[15px] text-gray-600">Low latency gaming mode (60ms)</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  );
}