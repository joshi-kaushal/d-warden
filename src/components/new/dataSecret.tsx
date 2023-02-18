import { FaFileUpload } from "react-icons/fa";
const RenderDocumentInput = () => {
  return (
    <>
      <label
        htmlFor="fileInput"
        className="flex h-[324px] w-60 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-[#FDFDFD] text-center hover:shadow-xl sm:h-[248px] sm:px-3 md:w-96"
        role="presentation"
        tabIndex={0}
      >
        <input
          id="fileInput"
          accept="image/png,image/jpeg"
          multiple
          type="file"
          tabIndex={-1}
          className="hidden"
        />
        <div className="mb-[18px] flex justify-center">
          <FaFileUpload className="h-8 w-8 text-purple-600" />
        </div>
        <h3 className="mb-2 text-lg font-semibold text-purple-600 sm:text-xl md:text-2xl">
          Browse files or Drag and Drop
        </h3>
      </label>
    </>
  );
};

const RenderCredentials = () => {
  return (
    <>
      <div className="relative mt-5">
        <input
          type="website"
          name="website"
          id="website"
          placeholder="Website URL"
          className="peer w-96 rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
          autoComplete="off"
        />
        <label
          htmlFor="website"
          className="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800"
        >
          Website URL
        </label>
      </div>
      <div className="relative mt-5">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          className="peer w-96 rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
          autoComplete="off"
        />
        <label
          htmlFor="email"
          className="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800"
        >
          Email Address
        </label>
      </div>
      <div className="relative mt-5">
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          className="peer w-96 rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
          autoComplete="off"
        />
        <label
          htmlFor="password"
          className="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800"
        >
          Password
        </label>
      </div>
    </>
  );
};

const RenderCardInput = () => {
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
        />
        <label
          htmlFor="owner"
          className="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800"
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
          className="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800"
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
          className="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800"
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
          className="pointer-events-none absolute top-0 right-0 ml-3 origin-left -translate-y-1/2 transform px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800"
        >
          CVV
        </label>
      </div>
    </>
  );
};

export default function DataSecret() {
  return (
    <>
      <h2 className="font-serif text-2xl text-white">Enter your data</h2>
      {/* <RenderCredentials />
      <RenderDocumentInput /> */}
      <RenderCardInput />
    </>
  );
}
