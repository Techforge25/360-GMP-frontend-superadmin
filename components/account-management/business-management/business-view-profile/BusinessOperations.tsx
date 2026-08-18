import {
  TypeAdditionalWarehouseAddress,
  TypeInternationalOffices,
  TypeWarehouseAddress,
} from "@/types";
import locationIcon from "@/assets/locationIcon.svg";
import Image from "next/image";
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

export default function BusinessOperations({
  addressLine,
  city,
  country,
  warehouseAddress,
  additionalWarehouseAddress,
  internationalOffices,
  incoterms,
  termsAndCapability,
}: Props) {
  console.log(incoterms, "international offices");

  const hasInternationalOffice =
    Array.isArray(internationalOffices) &&
    internationalOffices.length > 0 &&
    internationalOffices.some((office) => Object.keys(office).length > 1);

  const hasadditionalWarehouseAddress =
    Array.isArray(additionalWarehouseAddress) &&
    additionalWarehouseAddress.length > 0 &&
    additionalWarehouseAddress.some(
      (address) => Object.keys(address).length > 1,
    );

  return (
    <div className=" mt-[1.5rem] border border-border-shadow-50 rounded-[0.75rem] bg-white font-sans overflow-hidden">
      <div className="flex items-center gap-[0.75rem] bg-brand-btn-pills-background px-[1.5rem] py-[1.25rem] border-b border-border-shadow-dark">
        <Image
          src={locationIcon}
          width={100}
          height={100}
          alt=""
          className="w-[1.083rem] h-[1.083rem] text-brand-primary"
        />
        <h2 className="text-[1.125rem] font-semibold font-open-sans text-text-light">
          Business Operations
        </h2>
      </div>

      <div className="p-[1.5rem] flex flex-col gap-[1.5rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem]">
          <div
            className="bg-bg-gray-200 border border-gray-100 rounded-[0.75rem] p-[1rem] border-l-[0.25rem]
           border-l-brand-btn-pills"
          >
            <h3 className="text-[1rem] font-semibold font-open-sans text-text-light mb-[0.5rem] break-words whitespace-normal  ">
              Head Office
            </h3>
            <div className="flex flex-col gap-[0.25rem] text-[0.875rem] font-normal font-inter text-text-secondary">
              <p className="break-words whitespace-normals">{addressLine}</p>
              <p>{city}</p>
              <p>{country}</p>
            </div>
          </div>

          <div
            className="bg-bg-gray-200 border border-gray-100 rounded-[0.75rem] p-[1rem] border-l-[0.25rem]
           border-l-brand-btn-pills"
          >
            <h3 className="text-[1rem] font-semibold font-open-sans text-text-light mb-[0.5rem]">
              Warehouse Address
            </h3>
            {warehouseAddress !== "N/A" ? (
              <div className="flex flex-col gap-[0.25rem] text-[0.875rem] font-normal font-inter text-text-secondary break-words whitespace-normal ">
                <p>{warehouseAddress?.addressLine}</p>
                <p>{warehouseAddress?.city}</p>
                <p>{warehouseAddress?.country}</p>
              </div>
            ) : (
              <span className="text-[0.9375rem] font-semibold font-inter text-gray-400">
                N/A
              </span>
            )}
          </div>
        </div>
        {hasadditionalWarehouseAddress && (
          <div className="bg-bg-gray-200 border border-border-gray-dark rounded-[0.75rem] p-[1rem]">
            <h3 className="text-[1.125rem] font-semibold font-open-sans text-text-secondary mb-[1.25rem]">
              Additional Warehouse Address
            </h3>

            {additionalWarehouseAddress.map(
              (add: TypeAdditionalWarehouseAddress | any, index: number) => (
                <div key={index}>
                  <div className="grid grid-cols-3 gap-[1.5rem]">
                    <div className="flex flex-col gap-[0.25rem]">
                      <span className="text-[1rem] font-semibold font-open-sans text-text-light break-words whitespace-normal">
                        {additionalWarehouseAddress.length > 1 && (
                          <span className="text-black">{index + 1})</span>
                        )}{" "}
                        Country
                      </span>
                      <span className="text-[0.875rem] font-normal font-inter  text-text-secondary break-words whitespace-normal ">
                        {add.country}
                      </span>
                    </div>

                    <div className="flex flex-col gap-[0.25rem]">
                      <span className="text-[1rem] font-semibold font-open-sans text-text-light">
                        City
                      </span>
                      <span className="text-[0.875rem] font-normal font-inter  text-text-secondary break-words whitespace-normal ">
                        {add.city}
                      </span>
                    </div>

                    <div className="flex flex-col gap-[0.25rem]">
                      <span className="text-[1rem] font-semibold font-open-sans text-text-light">
                        Address Line
                      </span>
                      <span className="text-[0.875rem] font-normal font-inter  text-text-secondary break-words whitespace-normal">
                        {add.addressLine}
                      </span>
                    </div>
                  </div>

                  {index < additionalWarehouseAddress.length - 1 && (
                    <hr className="border-t border-gray-200 my-[1.25rem]" />
                  )}
                </div>
              ),
            )}
          </div>
        )}

        {hasInternationalOffice && (
          <div className="bg-bg-gray-200 border border-border-gray-dark rounded-[0.75rem] p-[1rem]">
            <h3 className="text-[1.125rem] font-semibold font-open-sans text-text-secondary mb-[1.25rem]">
              International Office
            </h3>

            {internationalOffices?.map(
              (
                international: TypeInternationalOffices | any,
                index: number,
              ) => (
                <div key={index}>
                  <div className="grid grid-cols-3 gap-[1.5rem]">
                    <div className="flex flex-col gap-[0.25rem]">
                      <span className="text-[1rem] font-semibold font-open-sans text-text-light">
                        {internationalOffices.length > 1 && (
                          <span className="text-black">{index + 1})</span>
                        )}{" "}
                        Office Name
                      </span>
                      <span className="text-[0.875rem] font-normal font-inter  text-text-secondary">
                        {international?.officeName}
                      </span>
                    </div>

                    <div className="flex flex-col gap-[0.25rem]">
                      <span className="text-[1rem] font-semibold font-open-sans text-text-light">
                        Country
                      </span>
                      <span className="text-[0.875rem] font-normal font-inter  text-text-secondary">
                        {international?.country}
                      </span>
                    </div>

                    <div className="flex flex-col gap-[0.25rem]">
                      <span className="text-[1rem] font-semibold font-open-sans text-text-light">
                        City
                      </span>
                      <span className="text-[0.875rem] font-normal font-inter  text-text-secondary break-words whitespace-normal">
                        {international?.city}
                      </span>
                    </div>

                    <div className="flex flex-col gap-[0.25rem]">
                      <span className="text-[1rem] font-semibold font-open-sans text-text-light">
                        State
                      </span>
                      <span className="text-[0.875rem] font-normal font-inter  text-text-secondary break-words whitespace-normal">
                        {international?.state}
                      </span>
                    </div>

                    <div className="flex flex-col gap-[0.25rem]">
                      <span className="text-[1rem] font-semibold font-open-sans text-text-light">
                        Address Line
                      </span>
                      <span className="text-[0.875rem] font-normal font-inter  text-text-secondary break-words whitespace-normal">
                        {international?.addressLine}
                      </span>
                    </div>

                    <div className="flex flex-col gap-[0.25rem]">
                      <span className="text-[1rem] font-semibold font-open-sans text-text-light">
                        Postal/Zip Code
                      </span>
                      <span className="text-[0.875rem] font-normal font-inter  text-text-secondary">
                        {international?.zipCode}
                      </span>
                    </div>
                  </div>
                  {index < internationalOffices.length - 1 && (
                    <hr className="border-t border-gray-200 my-[1.25rem]" />
                  )}
                </div>
              ),
            )}
          </div>
        )}

        <div className="pt-[1rem] border-t border-gray-100 flex flex-col gap-[1.5rem]">
          <div className="flex flex-col gap-[0.75rem]">
            <h3 className="text-[1.125rem] font-semibold font-open-sans text-text-secondary">
              Incoterms
            </h3>
            {incoterms !== "N/A" ? (
              <div className="flex gap-[0.5rem]">
                <span className="px-[1rem] py-[0.375rem] bg-brand-primary text-white text-[1rem] font-normal font-inter rounded-[5.75rem]">
                  {incoterms}
                </span>
              </div>
            ) : (
              <span className="text-[1rem] text-gray-500">{incoterms}</span>
            )}
          </div>

          <div className="flex flex-col gap-[0.75rem]">
            <h3 className="font-semibold text-[1.125rem]  font-open-sans text-text-secondary">
              Terms And Capability
            </h3>

            {termsAndCapability !== "N/A" ? (
              <div className="flex gap-[0.5rem]">
                <span className="px-[1rem] py-[0.375rem] bg-brand-primary text-white text-[1rem] font-normal font-inter rounded-[5.75rem]">
                  {termsAndCapability}
                </span>
              </div>
            ) : (
              <span className="text-[1rem] text-gray-500">
                {termsAndCapability}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
