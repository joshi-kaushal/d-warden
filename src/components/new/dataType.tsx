import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { IoIosDocument } from "react-icons/io";
import { FaKey } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";
import { ReactElement } from "react";

type dataTypeButtons = {
  id: string;
  text: string;
  icon: ReactElement;
}[];

enum dataTypes {
  document = "document",
  credentials = "credentials",
  card = "card",
  privateInfo = "privateInfo",
}

const BUTTONS: dataTypeButtons = [
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

type DataTypeProps = {
  data: any;
  updateFields: (data: any) => void;
};

export default function DataType({ data, updateFields }: DataTypeProps) {
  // dataType && updateFn
  return (
    <>
      <h2 className="my-2 font-serif text-2xl font-semibold text-purple-600">
        What do you want to secure?
      </h2>

      <div className="grid-col-1 my-0 mx-auto mb-1 grid gap-4 md:grid-cols-2">
        {BUTTONS.map((button) => {
          return (
            <button
              onClick={(e) => updateFields({ dataType: button.id })}
              className="flex flex-col items-center gap-2 rounded-xl border-2 p-8 text-white transition-all duration-300 hover:border-purple-600 hover:bg-purple-200 hover:shadow-purple-600"
            >
              <span className="text-purple-600">{button.icon}</span>
              <span className="text-lg font-medium text-purple-600">
                {button.text}
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
}
