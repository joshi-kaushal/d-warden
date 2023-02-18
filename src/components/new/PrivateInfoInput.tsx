type InputProps = {
  updateFields: (data: any) => void;
};

const PrivateInfoInput = ({ updateFields }: InputProps) => {
  return (
    <>
      <div className="relative mt-5">
        <textarea
          name="privateInfo"
          id="privateInfo"
          placeholder="Private Information"
          className="peer w-96 rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
          autoComplete="off"
          rows={8}
          onChange={(e) => updateFields({ data: e.target.value })}
        />
        <label
          htmlFor="privateInfo"
          className="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800"
        >
          Private Information
        </label>
      </div>
    </>
  );
};

export default PrivateInfoInput;
