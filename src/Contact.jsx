import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zcx7jv5", // replace with your EmailJS service ID
        "template_fca8rm9", // replace with your EmailJS template ID
        form.current,
        "wUsO6V4EJSmz7scT7" // replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <h1 className="text-center font-bold text-3xl mt-30 ml-150 flex flex-row gap-2">
        <p className="text-white">Contact</p>
        <p className="text-cyan-300">Me</p>
      </h1>
      <div className="flex flex-row gap-60">
        <div>
          <p className="text-xl text-white mt-20 font-bold ml-25">
            Let's Work Together
          </p>
          <p className="text-white text-[14px] mt-3 ml-25">
            Feel free to reach out if you're interested in collaborating or have
            any questions about my work. <br />
            You can contact me via email or connect with me on LinkedIn—I'd love
            to hear from you!
          </p>
          <div className="flex flex-row gap-2 ml-25">
            <p>
              <img
                src="public/images/54de000e63daac2b763707a5ef36ec49.jpg"
                alt=""
                srcset=""
                className="w-6  mt-5 rounded-lg border-1 border-cyan-300  hover:bg-cyan-300 shadow-2xl shadow-cyan-300"
                style={{
                  boxShadow: "0 0 10px 5px rgba(0, 255, 255, 0.5)", // shadow all sides in cyan
                }}
              />
            </p>
            <p className="text-white font-bold text-[13px] mt-5">
              hnaveensamraj@gmail.com
            </p>
          </div>
          <div className="flex flex-row gap-2 ml-25">
            <p>
              <img
                src="/images/ad6e8c17a5c3869aaff6d51eaf5ea3de.jpg"
                alt=""
                srcset=""
                className="w-6  mt-5 rounded-lg border-1 border-cyan-300  hover:bg-cyan-300 shadow-2xl shadow-cyan-300"
                style={{
                  boxShadow: "0 0 10px 5px rgba(0, 255, 255, 0.5)", // shadow all sides in cyan
                }}
              />
            </p>
            <p className="text-white font-bold text-[13px] mt-5">9943269660</p>
          </div>
          <div className="flex flex-row gap-6 ml-25 mt-5 cursor-pointer">
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
        </div>
        <div>
          <form ref={form} onSubmit={sendEmail} className="mt-20">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-80 h-8 border-0 bg-gray-500 text-white rounded-[5px]  pt-[-100px]"
            />{" "}
            <br />
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-80 h-8 border-0 bg-gray-500 text-white rounded-[5px]  mt-2 pt-[-100px]"
            />{" "}
            <br />
            <input
              type="text"
              placeholder="Enter Your Subject"
              className="w-80 h-8 border-0 bg-gray-500 text-white rounded-[5px]   mt-2 pt-[-100px]"
            />{" "}
            <br />
            <input
              type="text"
              placeholder="Enter Your Message"
              className="w-80 h-40 border-0 bg-gray-500 text-white rounded-[5px]  mt-2 pt-[-100px]
        "
            />
            <button
              className="w-80 h-8 border-0 bg-cyan-300 rounded-[9px] border-cyan-300 shadow-xl shadow-cyan-300 mt-2"
              style={{
                boxShadow: "0 0 10px 5px rgba(0, 255, 255, 0.5)", // shadow all sides in cyan
              }}
            >
              <p className="text-center text-blue-500 ">Submit</p>
            </button>
          </form>
        </div>
      </div>
      <br />
      <br />
      <div className="w-full h-10 bg-cyan-950 text-center text-white ">
        <p className="pt-3"> Developed with love by Naveen@2025</p>
      </div>
    </div>
  );
};

export default Contact;
