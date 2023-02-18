import { useEffect, useRef, useState } from "react";
import { MdCloseFullscreen } from "react-icons/md";

// TODO: Check if browser is Safari on ioS < 15.4
export default function Modal({ btnText, children }: TModal) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (modalRef.current !== null) {
      if (isOpen && !modalRef.current.open) {
        modalRef.current.showModal();
      }
    }
  }, [modalRef, isOpen]);

  const closeModal = () => {
    modalRef.current?.close();
    setIsOpen(false);
  };

  // ! If you add a form, remember to add method="dialog" in the form element
  return (
    <>
      <button
        className="rounded-full border border-[hsl(280,100%,70%)] px-4 py-3 font-serif text-xl font-bold tracking-wider text-white outline-none transition-all duration-300 hover:bg-[hsl(280,100%,70%)] hover:px-6 hover:tracking-widest"
        onClick={() => setIsOpen(true)}
      >
        {btnText}
      </button>
      {/* md:w-8/12 lg:w-5/12   w-10/12*/}
      {isOpen && (
        <dialog
          className="modal h-3/5 w-10/12 rounded-xl border border-none pt-8 shadow-xl md:h-[27.5rem] md:w-4/12 "
          ref={modalRef}
        >
          {children}

          <button
            onClick={closeModal}
            className="absolute top-4 right-4 flex items-center justify-center gap-1 rounded-full border border-red-400 p-2 font-semibold uppercase text-red-400 transition-all duration-500 hover:border-white hover:bg-red-400 hover:text-white"
          >
            <MdCloseFullscreen />
          </button>
        </dialog>
      )}
    </>
  );
}

type TModal = {
  btnText: string;
  children: React.ReactNode;
  modalOpen?: boolean;
  setModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};
