import React, { useState } from "react";

export default function Modal({ title, description }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-orange-400 mr-2 inline-block transition duration-300 ease-in-out text-dark-800 hover:bg-custom-azul cursor-pointer py-2 px-4 rounded-lg border text-sm"
      >
        Abrir Descripción
      </button>

      {isModalOpen && (
        <div className="fixed z-10 inset-16 overflow-y-scroll">
          <div className="p-20 flex items-center justify-center">
            <div className="fixed inset-0 bg-gray-800 opacity-80"></div>

            <div className="bg-blue-200 p-4 rounded-lg shadow-lg relative flex items-center justify-between rounded-t-md border-b-2  border-neutral-100 border-opacity-100 dark:border-opacity-50">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 m-2 text-gray-600 hover:text-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div>
                <div className="p-5">
                  <h3 className="indie text-3xl font-medium  text-red-800 pt-5 pb-3 pl-2">
                    <b>{title}</b>
                  </h3>
                  <div className="quick relative p-4 text-gray-900 text-justify">
                    <p>{description}</p>
                  </div>
                </div>
                <div className="mt-4 pl-10">
                  <button
                    onClick={closeModal}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}