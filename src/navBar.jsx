function NavBar() {
  return (
    <>
      <nav className="container relative mx-auto p-6">
        {/* container for nav items */}
        <div className="flex items-center justify-between space-x-40 my-6">
          {/* the logo */}
          <div className="z-30">
            <img src="/logo-bookmark.svg"></img>
          </div>
          {/* menu items */}

          <div className="hidden md:flex text-grayish-blue uppercase space-x-10 tracking-widest">
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
