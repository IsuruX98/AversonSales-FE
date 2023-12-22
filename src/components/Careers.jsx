import React from "react";
import heroImage from "../asserts/images/careers1.png";
import heroImage2 from "../asserts/images/careers2.png";

const Careers = () => {
  return (
      <div className="flex flex-row gap-4 xl:px-40 px-16 py-4 lg:pb-28 pb-12">
          {/* Left div with heading, description, and button */}
          <div className="md:w-1/3 flex flex-col justify-center gap-5">
              <div>
                  <h1 className="text-[16px] mb-4">
                      CAREERS
                  </h1>
                  <h1 className="text-2xl lg:text-6xl mb-4">
                      Be a part of<br/>
                      our story
                  </h1>
              </div>
              <div>
                  <p className="text-lg text-black lg:text-xl mb-6">
                      At Avero, we're always looking for creative<br/>
                      problem solvers to join our team
                  </p>
              </div>
              <div>
                  <button
                      className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent border-2 border-black text-black hover:bg-[#1A1A1A] hover:text-white transition duration-300">
                      Join Now
                  </button>
              </div>
          </div>

          {/* Right div with centered image */}
          <div className="md:w-1/3 flex flex-row justify-center">
              <img
                  src={heroImage}
                  alt="Your Hero Image"
                  className=""
              />
          </div>

          <div className="md:w-1/3 flex flex-row justify-center">
              <img
                  src={heroImage2}
                  alt="Your Hero Image"
                  className=""
              />
          </div>
      </div>
  );
};

export default Careers;
