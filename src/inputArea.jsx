import scrollToSection from "./scrolltosection"

function InputArea() {



    return(

        <div className="flex flex-col bg-[#5368df] text-center mt-10 ">
            <div className="pt-10 max-w-[30rem] mx-auto">
            <h4 className="text-white text-xl">35,000+ Already Joined</h4>
            <h2 className="text-white text-4xl mt-4 font-extrabold">Stay up-to-date with what we're doing</h2>

            <div className="mt-10 pb-20">
                <input type="text" placeholder="Enter your email here" className="px-5 py-2 bg-white text-gray-600 rounded-md mr-5 border-none outline-none" />
                <button onClick={() => scrollToSection('info')} className="text-white cursor-pointer bg-[#fa5757] px-4 py-2 rounded-md">contact us</button>
            </div>
            </div>
        </div>
    )
}

export default InputArea