import { useState } from "react";
import scrollToSection from "./scrolltosection";

function Features() {
  const featureData = {
    feature1: {
      title: "Bookmark in one click",
      description:
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      img: "/illustration-features-tab-1.svg",
    },
    feature2: {
      title: "Intelligent search",
      description:
        "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      img: "/illustration-features-tab-2.svg",
    },
    feature3: {
      title: "Share your bookmarks",
      description:
        "Easily share your bookmarks and collections with others. Create a shareable a link that you can send at the click of a button.",
      img: "/illustration-features-tab-3.svg",
    },
  };

  const [activeFeature, setActiveFeature] = useState("feature1");

  const handleFeatureClick = (feature) => {
    setActiveFeature(feature);
  };
  return (
    <>
      <section id="features">
        <div className="mt-25 text-center">
          <h2 className="text-4xl font-extrabold">Features</h2>
          <p className="text-gray-500 mt-7 max-w-[29rem] mx-auto">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
      </section>

      {/* Features */}
      <div className="flex-col md:flex-row flex gap-15 justify-center font-thin text-lg text-gray-600 mt-10">
        <button
          onClick={() => handleFeatureClick("feature1")}
          className="cursor-pointer hover:text-red-400"
        >
          Simple Bookmarking
        </button>
        <button
          onClick={() => handleFeatureClick("feature2")}
          className="cursor-pointer hover:text-red-400"
        >
          Speedy Searching
        </button>
        <button
          onClick={() => handleFeatureClick("feature3")}
          className="cursor-pointer hover:text-red-400"
        >
          Easy Searching
        </button>
      </div>
      <div className="h-[1px] max-w-150 mx-auto bg-gray-400"></div>

      {/* features Material */}
      <div className="flex-col md:flex-row flex mx-auto container gap-10 mt-7 md:justify-center items-center">
        <div className="relative">
          <div className="absolute h-[85%] w-[180%] hidden md:block bg-[#5368df] bottom-[-25%] left-[-100%] rounded-r-full"></div>
          <img
            src={featureData[activeFeature].img}
            className="max-w-[100%] relative z-10"
          ></img>
        </div>
        <div className="flex flex-col items-center lg:mb-35 md:items-start text-center md:text-start">
          <h3 className="text-3xl font-extrabold">{featureData[activeFeature].title}</h3>
          <p className="text-base mt-10 text-gray-400 max-w-120">
          {featureData[activeFeature].description}
          </p>
          <button onClick={() =>scrollToSection('info')} className=" w-fit py-2 px-4 mt-5 cursor-pointer rounded-md border-2 border-[#5368df] bg-[#5368df] text-white font-semibold hover:bg-white hover:text-[#5368df]">
            More Info
          </button>
        </div>
      </div>
    </>
  );
}

export default Features;
