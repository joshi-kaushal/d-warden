import CardInput from "./CardInput";
import CredentialsInput from "./CredentialsInput";
import DocumentInput from "./DocumentInput";
import PrivateInfoInput from "./PrivateInfoInput";

import { RenderOnScreenProps, DataSecretProps } from "../../types";
import { ReactElement } from "react";

function RenderInput({
  type,
  updateFields,
}: RenderOnScreenProps): ReactElement {
  switch (type) {
    case "document":
      return <DocumentInput updateFields={updateFields} />;
    case "credentials":
      return <CredentialsInput updateFields={updateFields} />;
    case "card":
      return <CardInput updateFields={updateFields} />;
    case "privateInfo":
      return <PrivateInfoInput updateFields={updateFields} />;
    default:
      return <DocumentInput updateFields={updateFields} />;
  }
}

export default function DataSecret({ data, updateFields }: DataSecretProps) {
  // dataType, data, updateFn
  return (
    <>
      <h2 className="my-2 font-serif text-2xl font-semibold text-purple-600">
        Enter your data
      </h2>

      <section className="flex flex-col items-center">
        {RenderInput({
          type: data.dataType,
          updateFields,
        })}
      </section>
    </>
  );
}
