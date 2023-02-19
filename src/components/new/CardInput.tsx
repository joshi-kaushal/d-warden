import { useState, useEffect } from "react";
import { CardDetails, DataInputProps } from "../../types";
import isValidCardNumber from "../../utils/validateCreditCardNumber";

const CardInput = ({ updateFields }: DataInputProps) => {
  const [cardDetails, setCardDetails] = useState<CardDetails>(
    {} as CardDetails
  );

  useEffect(() => {
    // Checks if the credit/debit card is valid
    if (!isValidCardNumber) {
      alert("Invalid Card Number");
    }

    // Checks if the CVV is valid
    if (cardDetails.cvv < 100 || cardDetails.cvv > 999) {
      alert("Invalid CVV");
      return;
    }

    updateFields({ data: cardDetails });
  }, [cardDetails]);

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
          onChange={(e) =>
            setCardDetails({ ...cardDetails, owner: e.target.value })
          }
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
          pattern="[0-9]+"
          name="cardNo"
          id="cardNo"
          placeholder="Card Number"
          className="peer w-96 rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
          autoComplete="off"
          onChange={(e) =>
            setCardDetails({ ...cardDetails, number: e.target.valueAsNumber })
          }
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
          onChange={(e) =>
            setCardDetails({ ...cardDetails, expiry: e.target.valueAsDate })
          }
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
          onChange={(e) => {
            setCardDetails({ ...cardDetails, cvv: e.target.valueAsNumber });
          }}
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
