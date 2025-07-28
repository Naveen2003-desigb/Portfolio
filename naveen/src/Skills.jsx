import React from "react";

const Skills = () => {
  const skillSet = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 50 },
    { name: "React", level: 30 },
    { name: "Node.js", level: 30 },
    { name: "Django", level: 40 },
    { name: "MySQL", level: 40 },
    { name: "MongoDB", level: 60 },
  ];
  return (
    <div>
      <div>
        <h1 className="text-center font-bold text-3xl mt-50 ml-150 flex flex-row">
          <p className="text-white">My</p>
          <p className="text-cyan-300">Skills</p>
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-13 px-40 mt-10">
        {skillSet.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-white font-semibold">{skill.name}</span>
              <span className="text-white">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 h-3 rounded-full">
              <div
                className="bg-cyan-400 h-3 rounded-full transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
