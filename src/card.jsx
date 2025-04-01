import scrollToSection from "./scrolltosection"

function Card(props) {


    return(
        <>
              <div onClick={() => scrollToSection('info')} className= {`w-[20rem] h-80 p-6 shadow-lg ${props.className} rounded-lg`}>
  <img src={props.img} className="w-20 mx-auto" />
  <h3 className="text-xl font-bold mt-6 text-center">{props.title}</h3>
  <p className="text-gray-500 mt-4 text-center">{props.description}</p>

  <div className="flex justify-center items-center gap-2 mt-4">
  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
</div>



  <button className="bg-[#5368df] text-white border-[#5348df] cursor-pointer border-2 w-full mt-4 py-3 rounded-md hover:text-[#5368df] hover:bg-white hover:duration-200 ease-in-out">Add to Chrome</button>
</div>
        </>
    )
}


export default Card