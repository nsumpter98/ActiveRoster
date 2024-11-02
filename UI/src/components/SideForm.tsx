import React, { useEffect, useRef } from "react";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  children: React.ReactNode;
  title?: string;
}

const SideForm: React.FC<SidebarProps> = ({
  title = "Create New",
  isOpen,
  toggleSidebar,
  children,
}) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        toggleSidebar();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, toggleSidebar]);

  useEffect(() => {
    if (isOpen && sidebarRef.current) {
      const firstInput = sidebarRef.current.querySelector(
        "input, select, textarea"
      ) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
      if (firstInput) {
        firstInput.focus();
      }
    }
  }, [isOpen]);

  return (
    <>
      <div className="relative">
        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleSidebar}
          ></div>
        )}

        {/* Sidebar */}
        <div
          ref={sidebarRef}
          className={`fixed top-0 right-0 h-full md:w-1/2 sm:w-full bg-gray-200 text-black shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="absolute top-2 right-2 text-black focus:outline-none"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="p-6 border-b border-gray-300">
            <h2 className="text-2xl font-bold">{title}</h2>
          </div>
          <div className="p-6 border-t border-gray-300 overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideForm;
