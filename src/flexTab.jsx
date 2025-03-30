import { useState } from "react";

function FlexTab({ sections }) {
  const [openId, setOpenId] = useState(null); // Track open section ID

  return (
    <div className="flex flex-col  w-[40%] justify-between mt-10 mx-auto p-4">
      {sections.map((section) => (
        <div 
          key={section.id} 
          className="flex flex-col border-b-2 py-4 cursor-pointer border-gray-400 gap-3"
          onClick={() => setOpenId(openId === section.id ? null : section.id)} // Toggle logic
        >
          <div className="flex justify-between items-center">
            <h4 className="text-gray-500">{section.question}</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`size-6 text-gray-500 transition-transform ${
                openId === section.id ? "rotate-180" : ""
              }`} // Rotate arrow when open
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>

          {openId === section.id && (
            <p className="text-gray-600 mt-2">{section.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default FlexTab;

