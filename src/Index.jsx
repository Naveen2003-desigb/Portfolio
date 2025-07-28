import React, { useState } from "react";
import { FiDownload } from "react-icons/fi";

const Index = () => {
  const [activeItem, setActiveItem] = useState(null);

  const menuItems = ["Home", "About", "Skills", "Projects", "Contact"];
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveItem(sectionId);
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-cover bg-center bg-gray-900">
        {/* Navbar */}
        <div className="fixed top-0 left-0  ml-90 w-full bg-gray-900 z-50 flex flex-row text-blue-700 gap-10 justify-center pt-6 cursor-pointer font-bold text-lg">
          {menuItems.map((item, index) => (
            <p
              key={index}
              onClick={() => handleScroll(item)}
              className={`transition duration-300 hover:text-emerald-50 ${
                activeItem === item ? "text-white" : "text-blue-800"
              }`}
            >
              {item}
            </p>
          ))}
        </div>

        <div className="flex flex-row ml-40 pt-5">
          <div>
            <h1 className="text-white text-5xl font-bold pt-30 ml-15">
              Hi, I'm
            </h1>
            <br />
            <h1 className="text-white text-6xl font-bold ml-15">
              Naveen Sam Raj H
            </h1>
            <h2 className="text-white text-3xl font-bold ml-15 mt-5">
              Full Stack Web Developer
            </h2>
            <div className="flex flex-row gap-9 ml-15 mt-5 cursor-pointer">
              <a href="https://www.linkedin.com/in/naveensamraj">
                <p>
                  <img
                    src="/images/5a52b7bec9fe0749290716fe1c09190c.jpg"
                    alt=""
                    srcset=""
                    className="w-6  mt-5 rounded-lg border-1 border-cyan-300  hover:bg-cyan-300 shadow-2xl shadow-cyan-300"
                    style={{
                      boxShadow: "0 0 10px 5px rgba(0, 255, 255, 0.5)", // shadow all sides in cyan
                    }}
                  />
                </p>
              </a>
              <a href="https://github.com/Naveen2003-desigb">
                <p>
                  <img
                    src="/images/30f7f3d8c8454149826e347a0dd24d09.jpg"
                    alt=""
                    srcset=""
                    className="w-6  mt-5 rounded-lg border-1 border-cyan-300  hover:bg-cyan-300 shadow-2xl shadow-cyan-300"
                    style={{
                      boxShadow: "0 0 10px 5px rgba(0, 255, 255, 0.5)", // shadow all sides in cyan
                    }}
                  />
                </p>
              </a>
              <p>
                <img
                  src="/images/8b956163994de7c8c3fb967eb0352d4b.jpg"
                  alt=""
                  srcset=""
                  className="w-6  mt-5 rounded-lg border-1 border-cyan-300  hover:bg-cyan-300 shadow-2xl shadow-cyan-300"
                  style={{
                    boxShadow: "0 0 10px 5px rgba(0, 255, 255, 0.5)", // shadow all sides in cyan
                  }}
                />
              </p>
              <p>
                <img
                  src="/images/4f747ed96769c0d8a939f98ad23f371b.jpg"
                  alt=""
                  srcset=""
                  className="w-6  mt-5 rounded-lg border-1 border-cyan-300  hover:bg-cyan-300 shadow-2xl shadow-cyan-300"
                  style={{
                    boxShadow: "0 0 10px 5px rgba(0, 255, 255, 0.5)", // shadow all sides in cyan
                  }}
                />
              </p>
            </div>

            <div className="flex flex-row mt-8">
              <div
                className="w-40 h-10 bg-cyan-300 hover:bg-cyan-300 shadow-2xl shadow-cyan-300 transition ml-15 cursor-pointer mt-4 text-black font-bold rounded"
                style={{
                  boxShadow: "0 0 10px 5px rgba(0, 255, 255, 0.5)", // shadow all sides in cyan
                }}
              ><a href="Project.jsx">
                <p className="text-center pt-2">View Projects</p>
                </a>
              </div>
              <div
                className="w-40 h-10 bg-cyan-300 hover:bg-cyan-300 transition cursor-pointer ml-5 mt-4 text-black font-bold rounded"
                style={{
                  boxShadow: "0 0 10px 5px rgba(0, 255, 255, 0.5)", // shadow all sides in cyan
                }}
              >
              <a href="/Naveen Resume.pdf">
                <p className="text-center pt-2">Download Resume</p>

                </a>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="ml-[-120px]">
            <div
              className="w-80 h-80 border-3 rounded-full shadow-xl shadow-cyan-500 border-cyan-300 bg-amber-50 ml-50 mt-23"
              style={{
                boxShadow: "0 0 10px 10px rgba(0, 255, 255, 0.5)", // shadow all sides in cyan
              }}
            >
              <img
                src="/images/WhatsApp Image 2025-07-26 at 12.30.43_ac782e1b.jpg"
                alt=""
                className="w-80 h-80 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
