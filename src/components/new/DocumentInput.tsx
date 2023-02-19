import { FaFileUpload } from "react-icons/fa";
import { DataInputProps } from "../../types";

const DocumentInput = ({ updateFields }: DataInputProps) => {
  return (
    <>
      <label
        htmlFor="fileInput"
        className="my-0 mx-auto flex h-[324px] w-full cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-[#FDFDFD] text-center hover:shadow-xl sm:h-[248px] sm:px-3 md:w-96"
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

export default DocumentInput;
