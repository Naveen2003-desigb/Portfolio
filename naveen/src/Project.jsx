import React from 'react'

const Project = () => {
  return (
    <div>
         <h1 className="text-center font-bold text-3xl mt-30 ml-150 flex flex-row">
          <p className="text-white">My</p>
          <p className="text-cyan-300">Projects</p>
        </h1>
        <div className='flex flex-row'>
        <div className='w-55 h-85 border-1 shadow-xl shadow-cyan-500 border-cyan-300 ml-55 mt-20 rounded-xl'
            style={{
                boxShadow: "0 0 10px 5px rgba(0, 255, 255, 0.5)", // shadow all sides in cyan
              }}>
            <img src="/images/ChatGPT Image Jul 26, 2025, 01_50_42 PM.png" alt="" srcset="" className='w-53 h-40 ml-0.5 rounded-xl mt-1'/>
             <h3 className='text-cyan-300 font-bold text-[13px] ml-9 mt-2'>Furniture Ecommerce</h3>
             <p className='text-white text-[12px] ml-2 mt-1'>This project is a modern and responsive furniture eCommerce website designed to showcase and sell home furnishing products.</p>
                  <div
                className="w-40 h-8 bg-cyan-300 hover:bg-cyan-300 transition cursor-pointer ml-5 mt-4 text-black font-bold rounded"
                style={{
                  boxShadow: "0 0 10px 5px rgba(0, 255, 255, 0.5)", // shadow all sides in cyan
                }}
              >
                <a href="https://furniture-pied-sigma.vercel.app/">  <p className="text-center pt-1">View Project</p></a>
              
              </div>
        </div>
          <div className='w-55 h-85 border-1 shadow-xl shadow-cyan-500 border-cyan-300 ml-30 mt-20 rounded-xl'
            style={{
                boxShadow: "0 0 10px 5px rgba(0, 255, 255, 0.5)", // shadow all sides in cyan
              }}>
            <img src="/images/ChatGPT Image Jul 26, 2025, 02_10_27 PM.png" alt="" srcset="" className='w-53 h-40 ml-0.5 rounded-xl mt-1'/>
             <h3 className='text-cyan-300 font-bold text-[13px] ml-9 mt-2'>Simple Calculator</h3>
             <p className='text-white text-[12px] ml-2 mt-1'>A clean and functional calculator built using modern web technologies. It supports basic arithmetic operations </p>
                  <div
                className="w-40 h-8 bg-cyan-300 hover:bg-cyan-300 transition cursor-pointer ml-6 mt-8 text-black font-bold rounded"
                style={{
                  boxShadow: "0 0 10px 5px rgba(0, 255, 255, 0.5)", // shadow all sides in cyan
                }}
              >
                <a href="https://calculator-ten-liard-16.vercel.app/">  <p className="text-center pt-1">View Project</p></a>
              
              </div>
        </div>
          <div className='w-55 h-85 border-1 shadow-xl shadow-cyan-500 border-cyan-300 ml-32 mt-20 rounded-xl'
            style={{
                boxShadow: "0 0 10px 5px rgba(0, 255, 255, 0.5)", // shadow all sides in cyan
              }}>
            <img src="/images/WhatsApp Image 2025-07-26 at 14.31.30_1db87a30.jpg" alt="" srcset="" className='w-53 h-40 ml-0.5 rounded-xl mt-1'/>
             <h3 className='text-cyan-300 font-bold text-[13px] ml-9 mt-2'>Online Learning App</h3>
             <p className='text-white text-[12px] ml-2 mt-1'>This project is a modern and responsive furniture eCommerce website designed to showcase and sell home furnishing products.</p>
                  <div
                className="w-40 h-8 bg-cyan-300 hover:bg-cyan-300 transition cursor-pointer ml-5 mt-4 text-black font-bold rounded"
                style={{
                  boxShadow: "0 0 10px 5px rgba(0, 255, 255, 0.5)", // shadow all sides in cyan
                }}
              >
            <p className="text-center pt-1">Loading.....</p>
              
              </div>
        </div>
        </div>
    </div>
  )
}

export default Project