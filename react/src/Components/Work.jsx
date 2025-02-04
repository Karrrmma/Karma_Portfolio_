import React, { useState } from "react";

const Work = () => {
  const experiences = [
    {
      company: "Hydrated Company.",
      description:
        `Maintained and enhanced features for SaaS-based cross-platform applications using React Native and Supabase.
        Assisted in designing and implementing web application components, improving user functionality and performance.
        Collaborated with product managers and designers in an Agile environment to translate business 
        requirements into technical solutions, delivering 100% of features within sprint deadlines.
        `,
        date:"Oct 2024 - Dec 2024"
    },
    {
      company: "Reality AI.",
      description:
            `Led the creation of DynamoCards, an open-source tool utilizing the Semantic Extraction Algorithm (SEA), which improved the accuracy of YouTube transcript parsing by 20%, benefiting 200+ users in educational settings.
            Designed Gemini Flights, a conversational platform powered by Google's Gemini LLM, enabling natural language flight search and booking, with real-time backend interaction.
            `,
      date: "April 2024 - June 2024",
    },
    
  ];

  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleDescription = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index); // Toggle visibility
  };

  return (
    <div className="bg-gradient-to-b from-blue-700 to-blue-300 min-h-screen flex flex-col items-center text-white px-4 py-8">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-yellow-400">Work Experience</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white rounded-lg p-6 shadow-lg flex flex-col relative"
          >
            <div className="absolute top-4 left-4 w-4 h-4 bg-green-400 rounded-full"></div>
            <h2 className="text-xl font-bold text-yellow-400">
              {experience.company}
            </h2>
            <p
              className={`text-gray-300 mt-2 ${
                visibleIndex === index ? "block" : "hidden"
              }`}
            >
              {experience.description}
            </p>
            <span className="block mt-4 text-yellow-400 font-semibold">
              {experience.date}
            </span>
            <button
              className="text-yellow-400 mt-2 hover:underline"
              onClick={() => toggleDescription(index)}
            >
              {visibleIndex === index ? "Show less" : "Click for more"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
