import React from "react";
import { Education } from "@/assests/Data";

const About = () => {
  return (
    <div
      id="about"
      className=" w-full px-[12%] py-10 scroll-mt-20 mx-auto flex  flex-col items-center justify-center"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>
      <p className="text-center max-x-2xl mx-auto. mb-12 font-Ovo">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem saepe
        fugit,
      </p>
      <div className="flex flex-row gap-8">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          {" "}
          <img
            src="https://plus.unsplash.com/premium_photo-1738614647383-0435fcb26a55?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="pic "
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1  ">
          <p className=" mb-10 max-w-2xl font-Ovo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            exercitationem quisquam eveniet sit eaque, nihil, dolores voluptas
            accusamus totam enim quia inventore temporibus id harum dignissimos
            veritatis sint illo in!
          </p>

          {Education.map((item) => {
            return (
              <div
                key={item.key}
                className="border-l border-black hover:to-lightHover hover:shadow-black"
              >
                {item.title}
                {item.cgpa}
              </div>
            );
          })}
          <div>
            <div className="box"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
