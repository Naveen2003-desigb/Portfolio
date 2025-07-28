import React from 'react'

const About = () => {
  return (
    <div><div className="mt-[-250px]">
          <div className="text-white font-bold ml-180 text-3xl pt-60">
            <div className="flex flex-row gap-1.5 ml-[-120px]">
              <p>About </p>
              <p className="text-cyan-300">Me</p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="ml-[-120px]">
              <div className="w-80 h-80 border-3 rounded-full shadow-lg shadow-cyan-500 border-cyan-300 bg-amber-50 ml-60 mt-8">
                <img
                  src="/images/WhatsApp Image 2025-07-26 at 12.30.43_ac782e1b.jpg"
                  alt=""
                  className="w-80 h-80 rounded-full"
                   style={{
                  boxShadow: "0 0 10px 10px rgba(0, 255, 255, 0.5)", // shadow all sides in cyan
                }}
                />
              </div>
            </div>
            <p className="w-140 h-40 border-0 border-gray-100 text-white ml-40 text-xl mt-15">
              {" "}
              I’m H. Naveen Sam Raj, a passionate Full Stack Web Developer
              currently pursuing Computer Science Engineering. I specialize in
              building responsive websites using technologies like React,
              Django, and MySQL, Node js, Mango Db. I’ve presented several
              technical papers and developed projects like an eCommerce
              platform. I’m always eager to learn new technologies and apply
              them to solve real-world problems. My long-term goal is to grow in
              the IT industry and start my own tech-driven business.
            </p>
          </div>
          <div
            className="w-40 h-10 bg-cyan-300 hover:bg-cyan-300 shadow-2xl shadow-cyan-300 transition ml-150 mt-[-25px] cursor-pointer text-black font-bold rounded"
            style={{
              boxShadow: "0 0 10px 5px rgba(0, 255, 255, 0.5)", // shadow all sides in cyan
            }}
          >
            <p className="text-center pt-2">More About Me</p>
          </div>
        </div></div>
  )
}

export default About