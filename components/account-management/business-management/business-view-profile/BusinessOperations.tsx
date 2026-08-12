import { TypeAdditionalWarehouseAddress, TypeInternationalOffices, TypeWarehouseAddress } from "@/types";
import { IoLocationSharp } from "react-icons/io5";

interface Props {
  addressLine: string;
  city: string;
  country: string;
  warehouseAddress: TypeWarehouseAddress | any;
  additionalWarehouseAddress: TypeAdditionalWarehouseAddress[] | any;
  internationalOffices: TypeInternationalOffices[] | any;
  incoterms: string[] | string;
  termsAndCapability: string;
}

export default function BusinessOperations({ addressLine, city, country, warehouseAddress, additionalWarehouseAddress, internationalOffices, incoterms, termsAndCapability }: Props) {
  console.log(incoterms, 'international offices')
  return (
    <div className=" mt-8 border border-[#C3C6D7] rounded-[0.5rem] bg-white font-sans overflow-hidden">
      <div className="flex items-center gap-[0.75rem] bg-[#f5effa] px-[1.5rem] py-[1.25rem] border-b border-[#C3C6D7]">
        <IoLocationSharp className="w-[1.25rem] h-[1.25rem] text-[#2c0a59]" />
        <h2 className="text-[1rem] font-semibold text-[#334155]">
          Business Operations
        </h2>
      </div>

      <div className="p-[1.5rem] flex flex-col gap-[1.5rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem]">
          <div className="bg-[#f8f9fb] border border-gray-100 rounded-[0.5rem] p-[1.25rem] border-l-[0.25rem] border-l-[#a15ced]">
            <h3 className="text-[0.9375rem] font-semibold text-[#22252B] mb-[0.5rem]">
              Head Office
            </h3>
            <div className="flex flex-col gap-[0.25rem] text-[0.8125rem] text-[#64748b]">
              <p>{addressLine}</p>
              <p>{city}</p>
              <p>{country}</p>
            </div>
          </div>

          <div className="bg-[#f8f9fb] border border-gray-100 rounded-[0.5rem] p-[1.25rem] border-l-[0.25rem] border-l-[#a15ced]">
            <h3 className="text-[0.9375rem] font-semibold text-[#22252B] mb-[0.5rem]">
              Warehouse Address
            </h3>
            {warehouseAddress !== 'N/A' ? (
              <div className="flex flex-col gap-[0.25rem] text-[0.8125rem] text-[#64748b]">
                <p>{warehouseAddress?.addressLine}</p>
                <p>{warehouseAddress?.city}</p>
                <p>{warehouseAddress?.country}</p>
              </div>
            ) : (
              <span className="text-[0.9375rem] font-semibold text-gray-400">N/A</span>
            )}

          </div>
        </div>

        <div className="bg-[#f8f9fb] border border-gray-100 rounded-[0.5rem] p-[1.5rem]">
          <h3 className="text-[0.9375rem] font-semibold text-[#64748b] mb-[1.25rem]">
            Additional Warehouse Address
          </h3>

          {additionalWarehouseAddress !== "N/A" &&
            additionalWarehouseAddress?.map((add: TypeAdditionalWarehouseAddress | any, index: number) => (
              <div key={index} className="grid grid-cols-3 gap-[1.5rem]">
                <div className="flex flex-col gap-[0.25rem]">
                  <span className="text-[0.875rem] font-semibold text-[#334155]">
                    Country
                  </span>
                  <span className="text-[0.8125rem] text-[#64748b]">
                    {add.country}
                  </span>
                </div>

                <div className="flex flex-col gap-[0.25rem]">
                  <span className="text-[0.875rem] font-semibold text-[#334155]">
                    City
                  </span>
                  <span className="text-[0.8125rem] text-[#64748b]">
                    {add.city}
                  </span>
                </div>

                <div className="flex flex-col gap-[0.25rem]">
                  <span className="text-[0.875rem] font-semibold text-[#334155]">
                    Address Line
                  </span>
                  <span className="text-[0.8125rem] text-[#64748b]">
                    {add.addressLine}
                  </span>
                </div>
              </div>
            ))}

          <hr className="border-t border-gray-200 my-[1.25rem]" />
        </div>

        <div className="bg-[#f8f9fb] border border-gray-100 rounded-[0.5rem] p-[1.5rem]">
          <h3 className="text-[0.9375rem] font-semibold text-[#64748b] mb-[1.25rem]">
            International Office
          </h3>

          {internationalOffices !== 'N/A' &&
            internationalOffices?.map((international: TypeInternationalOffices | any, index: number) => (
              <div key={index}>
                <div className="grid grid-cols-3 gap-[1.5rem]">
                  <div className="flex flex-col gap-[0.25rem]">
                    <span className="text-[0.875rem] font-semibold text-[#334155]">
                      Office Name
                    </span>
                    <span className="text-[0.8125rem] text-[#64748b]">
                      {international?.officeName}
                    </span>
                  </div>

                  <div className="flex flex-col gap-[0.25rem]">
                    <span className="text-[0.875rem] font-semibold text-[#334155]">
                      Country
                    </span>
                    <span className="text-[0.8125rem] text-[#64748b]">
                      {international?.country}
                    </span>
                  </div>

                  <div className="flex flex-col gap-[0.25rem]">
                    <span className="text-[0.875rem] font-semibold text-[#334155]">
                      City
                    </span>
                    <span className="text-[0.8125rem] text-[#64748b]">
                      {international?.city}
                    </span>
                  </div>

                  <div className="flex flex-col gap-[0.25rem]">
                    <span className="text-[0.875rem] font-semibold text-[#334155]">
                      State
                    </span>
                    <span className="text-[0.8125rem] text-[#64748b]">
                      {international?.state}
                    </span>
                  </div>

                  <div className="flex flex-col gap-[0.25rem]">
                    <span className="text-[0.875rem] font-semibold text-[#334155]">
                      Address Line
                    </span>
                    <span className="text-[0.8125rem] text-[#64748b]">
                      {international?.addressLine}
                    </span>
                  </div>

                  <div className="flex flex-col gap-[0.25rem]">
                    <span className="text-[0.875rem] font-semibold text-[#334155]">
                      Postal/Zip Code
                    </span>
                    <span className="text-[0.8125rem] text-[#64748b]">
                      {international?.zipCode}
                    </span>
                  </div>
                </div>

                <hr className="my-[1.5rem] border-t border-gray-200" />
              </div>
            ))}

        </div>

        <div className="pt-[1rem] border-t border-gray-100 flex flex-col gap-[1.5rem]">
          <div className="flex flex-col gap-[0.75rem]">
            <h3 className="text-[0.9375rem] font-semibold text-[#64748b]">
              Incoterms
            </h3>
            {incoterms !== 'N/A' ? (
              <div className="flex gap-[0.5rem]">
                <span className="px-[1rem] py-[0.375rem] bg-[#2c0a59] text-white text-[0.8125rem] font-medium rounded-[1.25rem]">
                  {incoterms}
                </span>
              </div>
            ) : (
              <span className="text-[0.875rem] text-gray-500">{incoterms}</span>
            )}

          </div>

          <div className="flex flex-col gap-[0.75rem]">
            <h3 className="text-[0.9375rem] font-semibold text-[#64748b]">
              Terms And Capability
            </h3>

            {termsAndCapability !== 'N/A' ? (
              <div className="flex gap-[0.5rem]">
                <span className="px-[1rem] py-[0.375rem] bg-[#2c0a59] text-white text-[0.8125rem] font-medium rounded-[1.25rem]">
                  {termsAndCapability}
                </span>
              </div>
            ) : (
              <span className="text-[0.875rem] text-gray-500">{termsAndCapability}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
