import { ReactNode, useState, FormEvent } from "react";
import { useMultiStepForm } from "../../hooks/useMultistepForm";
import DataSecret from "./dataSecret";
import DataType from "./dataType";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

enum dataTypes {
  document = "document",
  credentials = "credentials",
  card = "card",
  privateInfo = "privateInfo",
}

type Data = {
  dataType: dataTypes;
  data: {};
};

const INITIAL_DATA = {
  dataType: "document",
  data: {},
};

export function FormWrapper() {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <DataType data={data} updateFields={updateFields} />,
      <DataSecret data={data} updateFields={updateFields} />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Successful Account Creation");
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        {step}
        {!isFirstStep && (
          <button
            type="button"
            onClick={back}
            className="mr-2 mt-4 rounded-xl border border-purple-400 px-4 py-1 font-semibold text-purple-600 transition-all duration-300 hover:bg-purple-400 hover:text-white"
          >
            Back
          </button>
        )}
        <button
          type="submit"
          className="mr-2 mt-4 rounded-xl border border-purple-600 bg-purple-600 px-4 py-1 font-semibold text-white transition-all  duration-300 hover:bg-white hover:text-purple-600"
        >
          {isLastStep ? "Finish" : "Next"}
        </button>
      </form>
    </>
  );
}
