import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { IoIosDocument } from "react-icons/io";
import { FaKey } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";
import { DataTypeProps, DataTypeButtons } from "../../types";

export const BUTTONS: DataTypeButtons = [
  {
    id: "document",
    text: "Document",
    icon: <IoIosDocument className="h-8 w-8" />,
  },
  {
    id: "credentials",
    text: "Log-in Credentials",
    icon: <MdOutlinePassword className="h-8 w-8" />,
  },
  {
    id: "card",
    text: "Debit/ Credit Card Details",
    icon: <BsFillCreditCard2BackFill className="h-8 w-8" />,
  },
  {
    id: "privateInfo",
    text: "Private Information",
    icon: <FaKey className="h-8 w-8" />,
  },
];

export default function DataType({ data, updateFields }: DataTypeProps) {
  // dataType && updateFn
  return (
    <>
      <h2 className="my-2 font-serif text-2xl font-semibold text-purple-600">
        What do you want to secure?
      </h2>

      <div className="my-0 mx-auto mb-1 grid grid-cols-2 gap-4">
        {BUTTONS.map((button) => {
          return (
            <button
              onClick={(e) => updateFields({ dataType: button.id })}
              className="flex flex-col items-center justify-center gap-1 rounded-xl border-2 p-4 text-white transition-all duration-300 hover:border-purple-600 hover:bg-purple-200 hover:shadow-purple-600 md:gap-2 md:p-8"
            >
              <span className="text-purple-600">{button.icon}</span>
              <span className="text-base font-medium text-purple-600 md:text-lg">
                {button.text}
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
}
