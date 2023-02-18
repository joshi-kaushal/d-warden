import { ReactNode, useState } from "react";

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
  dataType: null,
  data: {},
};
export function FormWrapper({ title, children }: FormWrapperProps) {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  //   const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
  //     // useMultistepForm([

  //     // ]);

  //   function onSubmit(e: FormEvent) {
  //     e.preventDefault();
  //     if (!isLastStep) return next();
  //     alert("Successful Account Creation");
  //   }

  return (
    <>
      <h2 className="center m-0 mb-8">{title}</h2>
      <div className="grid-col grid grid-cols-a400 justify-start gap-y-4 gap-x-2">
        {children}
      </div>
    </>
  );
}
