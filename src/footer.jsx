import scrollToSection from "./scrolltosection"

function Footer() {





    return(
        <div className="flex flex-col md:flex-row text-center bg-[#252b46] text-gray-400 text-xl gap-10 justify-around items-center pt-20 pb-20">
            <div className="flex flex-col md:flex-row gap-10">
        <img src="/logo-bookmark-footer.svg"></img>
        <a onClick={() => scrollToSection('features')} href="#features" className="hover:text-red-400">
              Features
            </a>
            <a onClick={() => scrollToSection('download')} href="#download" className="hover:text-red-400">
              Download 
            </a>
            <a onClick={() => scrollToSection('faq')} href="#faq" className="hover:text-red-400">
              FAQ
            </a>
            </div>
        <div className="flex gap-10">
        <svg onClick={() => scrollToSection('info')}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  className="w-6 h-6 text-white hover:text-red-300"
>
  <path 
    d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.5V12h2.5V9.5c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.5V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z"
  />
</svg>


        <svg onClick={() => scrollToSection('info')}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  className="w-6 h-6 text-white hover:text-red-300"
>
  <path 
    d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.89-2.37 8.59 8.59 0 0 1-2.72 1.03 4.28 4.28 0 0 0-7.3 3.91 12.1 12.1 0 0 1-8.78-4.45 4.28 4.28 0 0 0 1.32 5.71 4.23 4.23 0 0 1-1.94-.54v.05c0 2.1 1.5 3.85 3.48 4.25-.37.1-.76.15-1.17.15-.28 0-.56-.02-.83-.07a4.29 4.29 0 0 0 4 2.97 8.58 8.58 0 0 1-5.32 1.83A8.77 8.77 0 0 1 2 19.54 12.1 12.1 0 0 0 8.6 21c7.6 0 11.76-6.3 11.76-11.76v-.53a8.5 8.5 0 0 0 2.1-2.17z"
  />
</svg>

        </div>
       </div>
    )
}

export default Footer