import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { IoIosDocument } from "react-icons/io";
import { FaKey } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";
import { DataTypeButtons } from "./types";

export const HOMEPAGE_LINKS = [
  {
    id: 1,
    title: "Passwords",
    description:
      " Stop writing down your log-in credentials, private keys on a paper.",
    link: "/add",
  },
  {
    id: 2,
    title: "Documents",
    description:
      " Be in-charge of your documents and choose who can access them.",
    link: "/add",
  },
  {
    id: 3,
    title: "Private Information",
    description:
      "Save your sensitive data securely, with no fear of data breach.",
    link: "/add",
  },
  {
    id: 4,
    title: "Card Details",
    description:
      "Don't waste time looking at your card. The session is expiring.",
    link: "/add",
  },
];

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
