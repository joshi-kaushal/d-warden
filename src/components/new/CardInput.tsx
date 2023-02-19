import { DataInputProps } from "../../types";

const CardInput = ({ updateFields }: DataInputProps) => {
  return (
    <>
      <div className="relative mt-5">
        <input
          type="text"
          name="owner"
          id="owner"
          placeholder="Owner Name"
          className="peer w-96 rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
          autoComplete="off"
          onChange={(e) => updateFields({ data: e.target.value })}
        />
        <label
          htmlFor="owner"
          className="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800"
        >
          Owner Name
        </label>
      </div>
      <div className="relative mt-5">
        <input
          type="text"
          pattern="^[0-9]*$"
          name="cardNo"
          id="cardNo"
          placeholder="Card Number"
          className="peer w-96 rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
          autoComplete="off"
        />
        <label
          htmlFor="cardNo"
          className="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800"
        >
          Card Number
        </label>
      </div>
      <div className="relative mt-5 flex gap-2">
        <input
          type="month"
          name="expiry"
          id="expiry"
          placeholder="Expiry Date"
          className="peer w-[190px] rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
          autoComplete="off"
        />
        <label
          htmlFor="expiry"
          className="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800"
        >
          Expiry Date
        </label>
        <input
          type="text"
          pattern="[0-9]+"
          inputMode="numeric"
          name="cvv"
          id="cvv"
          placeholder="CVV"
          className="peer w-[190px] rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
          autoComplete="off"
        />
        <label
          htmlFor="cvv"
          className="pointer-events-none absolute top-0 right-4 ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800"
        >
          CVV
        </label>
      </div>
    </>
  );
};

export default CardInput;
