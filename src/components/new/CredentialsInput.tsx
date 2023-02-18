type InputProps = {
  updateFields: (data: any) => void;
};

const CredentialsInput = ({ updateFields }: InputProps) => {
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
          onChange={(e) => updateFields({ data: {} })}
        />
        <label
          htmlFor="website"
          className="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800"
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
          className="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800"
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
          className="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800"
        >
          Password
        </label>
      </div>
    </>
  );
};

export default CredentialsInput;
