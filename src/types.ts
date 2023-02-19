import { ReactElement } from "react";
// Modal
export type TModal = {
  btnText: string;
  children: React.ReactNode;
  modalOpen?: boolean;
  setModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export type DataInputProps = {
  updateFields: (data: any) => void;
};

export type DataSecretProps = {
  data: any;
  updateFields: (data: any) => void;
};

export type RenderOnScreenProps = {
  type: string;
  updateFields: (data: any) => void;
};

export enum dataTypes {
  document = "document",
  credentials = "credentials",
  card = "card",
  privateInfo = "privateInfo",
}

export type DataTypeProps = {
  data: any;
  updateFields: (data: any) => void;
};

export type DataTypeButtons = {
  id: string;
  text: string;
  icon: ReactElement;
}[];

export type CardDetails = {
  owner: string;
  number: number;
  date: Date;
  cvv: number;
};

export type CredentialDetails = {
  website: string;
  username: string;
  password: string;
};
