import NavBar from "./navBar";
import Hero from "./hero";
import Features from "./features"
import Download from "./download"
import Card from "./card";
import FaqHeading from "./faq"
import FlexTab from "./flexTab";
import InputArea from "./inputArea"
import Footer from "./footer"

function HomePage() {


  const faqDetails = [
    {
      id: 1,
      question: "What is Bookmark?",
      answer:
        "Bookmark is a simple tool to manage and sync your favorite websites.",
    },
    {
      id: 2,
      question: "How can I request a new browser?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?",
    },
    {
      id: 3,
      question: "Is it free to use?",
      answer: "Yes, Bookmark is completely free to use for everyone.",
    },
    {
      id: 4,
      question: "Can I use it on mobile?",
      answer:
        "Currently, we support desktop browsers, but a mobile version is coming soon.",
    },
  ];
  return (
    <>
      <div className="h-screen bg-background font-rubik">
        <NavBar />
        <Hero />
        <Features />
        <Download />

        <div className="flex gap-5 justify-center flex-wrap mt-30">
        <Card title = {"Add to Chrome"}  description = {"Minimum Version 62"} img = {"/logo-chrome.svg"} />
        <Card title = {"Add to Firefox"} description = {"Minimum Version 55"} img = {"/logo-firefox.svg"} className={"mt-10"} />
        <Card title = {"Add to Opera"}   description = {"Minimum Version 46"} img = {"/logo-opera.svg"}   className={"mt-20"}/>
        </div>

        <FaqHeading />
        <FlexTab sections = {faqDetails}/>

        <InputArea />

        <Footer />
      </div>
    </>
  )
}

export default HomePage;
