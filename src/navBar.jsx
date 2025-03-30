import { useState } from "react";

function NavBar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="container relative mx-auto p-6">
        {/* container for nav items */}
        <div className="flex items-center justify-between space-x-40 my-6">
          {/* the logo */}
          <div className="z-30">
            <img src="/logo-bookmark.svg"></img>
          </div>

          {!isMenuOpen && (
            <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="block md:hidden cursor-pointer size-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          )}
       { isMenuOpen &&  <div
         onClick={() => setIsMenuOpen(!isMenuOpen)}
       >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div> 
}
{isMenuOpen && (
  <div className="fixed inset-0 z-[9999] w-screen bg-blue-300/50 backdrop-blur-md flex flex-col items-center space-y-6 py-8 md:hidden">
    <a href="#features" className="text-white text-lg font-semibold tracking-wide hover:text-red-400 drop-shadow-lg">
      Features
    </a>
    <a href="#download" className="text-white text-lg font-semibold tracking-wide hover:text-red-400 drop-shadow-lg">
      Download
    </a>
    <a href="#faq" className="text-white text-lg font-semibold tracking-wide hover:text-red-400 drop-shadow-lg">
      FAQ
    </a>
    <a className="border-white border-2 py-3 px-6 cursor-pointer text-white font-semibold bg-[#fa5757] rounded-lg hover:bg-white hover:text-[#fa5757] transition-all duration-300">
      Login
    </a>
  </div>
)}

          {/* menu items */}

          <div className="hidden md:flex text-grayish-blue uppercase space-x-10 items-center tracking-widest">
            <a href="#features" className="hover:text-red-400">
              Features
            </a>
            <a href="#download" className="hover:text-red-400">
              Download
            </a>
            <a href="#faq" className="hover:text-red-400">
              FAQ
            </a>

            <a className="border-[#fa5757] border-solid border-2 py-3 px-6 cursor-pointer text-white font-semibold bg-[#fa5757] rounded-md hover:text-[#fa5757] hover:bg-white">
              Login
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
