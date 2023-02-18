import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { IoIosDocument } from "react-icons/io";
import { FaKey } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";
import { ReactElement } from "react";

type dataTypeButtons = {
  text: string;
  icon: ReactElement;
};

const BUTTONS = [
  {
    id: "doc",
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
export default function DataType() {
  return (
    <>
      <h2 className="font-serif text-2xl text-white">
        What do you want to secure?
      </h2>

      <div className="grid-col-1 grid gap-4 md:grid-cols-2">
        {BUTTONS.map((button) => {
          return (
            <button className="flex flex-col items-center gap-2 rounded-xl border p-8 text-white transition-all duration-300 hover:bg-purple-400">
              <span>{button.icon}</span>
              <span className="text-lg font-medium">{button.text}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
