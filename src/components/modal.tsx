
"use client";

import { CustomFlowbiteTheme, Modal } from "flowbite-react";
import { ReactElement, useState } from "react";

const customTheme: CustomFlowbiteTheme["modal"] = {
    root:{
        positions:{
            center: "items-center justify-center"
        },
        show:{
          on: "flex bg-gray-900 bg-opacity-60 dark:bg-opacity-60"
        }
    },
    header: {
        close: {
            base: "ml-auto inline-flex items-center bg-transparent p-1 text-sm text-[#8EA700] dark:hover:text-[#8EA700] border border-[#8EA700] rounded-full ",
      },
    },
    content:{
      base: "relative h-full p-4 md:h-auto flex flex-col justify-center items-center",
      inner: "relative flex max-h-[90dvh] flex-col rounded-2xl bg-white shadow-2xl dark:bg-gray-700 border border-[#8EA700] justify-self-center w-[90%] md:w-full"
    }
  };

export function ModalComponent({icon, message}:{icon: ReactElement, message: ReactElement}) {
  const [openModal, setOpenModal] = useState(true);

  return (
    <>
      <Modal show={openModal} theme={customTheme} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body className="px-8">
          <div className="text-center">
            {icon}
            <h3 className="mb-8 mt-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              {message}
            </h3>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
