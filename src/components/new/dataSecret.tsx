import CardInput from "./CardInput";
import CredentialsInput from "./CredentialsInput";
import DocumentInput from "./DocumentInput";
import PrivateInfoInput from "./PrivateInfoInput";

type DataSecretProps = {
  data: any;
  updateFields: (data: any) => void;
};

type RenderOnScreenProps = {
  type: string;
  updateFields: (data: any) => void;
};

function RenderInput({ type, updateFields }: RenderOnScreenProps) {
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
      return;
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
