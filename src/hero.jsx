function Hero() {
  return (
    <>
      {/* hero section */}
      <div className=" flex-col-reverse justify-center flex lg:flex-row mt-10 mx-auto container md:gap-20 ">
        <div className="flex flex-col mx-auto space-y-10 items-center lg:items-start lg:mt-16 lg:w-1/2 ">
          <h1 className="text-3xl font-extrabold max-w-[600px] text-center  lg:text-6xl lg:text-left">
            A Simple Bookmark Manager
          </h1>
          <p className="text-gray-500 text-2xl text-left max-w-[500px]">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="flex gap-4 font-semibold">
            <button className="bg-[#5368df] tracking-wider cursor-pointer rounded-md border-2 border-[#5368df] text-white px-5 py-5 hover:bg-white hover:text-[#5368df]">Get it On Chrome</button>
            <button className="bg-[#d1d5db] tracking-wider cursor-pointer rounded-md border-2 border-[#d1d5db] text-black px-5 py-5 hover:bg-white hover:text-gray-700">Get it On Firefox</button>
          </div>
        </div>

        <div className="relative mx-auto lg-mt-20">
            <div className="hidden lg:block  absolute h-[65%] w-[100%] bg-[#5368df] bottom-[-10%] right-[-25%] rounded-bl-[6vw]"></div>
            <img src="/illustration-hero.svg" className="relative z-10 w-100 md:w-165 md:pt-30 xl:pt-0 md:right-10 md:bottom-0 lg:right:20"></img>
        </div>
      </div>
    </>
  );
}

export default Hero;
