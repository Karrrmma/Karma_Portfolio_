import { Link } from "react-router-dom";
const Tools = () => {
    return (
      <div className="bg-gradient-to-b from-blue-800 to-blue-500 min-h-screen flex flex-col items-center text-white">
        {/* Header Section */}
        <header className="w-full text-center py-8">
          <h1 className="text-4xl font-bold">About me</h1>
          <p className="text-lg mt-4 px-6">
          I am a highly motivated software developer with a diverse background that equips me to thrive as a collaborative team player. I excel in effective communication, analytical problem-solving, and leveraging technical expertise to overcome challenges and deliver impactful solutions.
          </p>
        </header>
  
        {/* Skills Section */}
        <section className="w-4/5 md:w-3/5 mt-10">
          <h2 className="text-3xl font-bold mb-6 text-yellow-400">Frameworks & libraries</h2>
          <div className="space-y-4">
            {[
                
              { label: "React", years: 2, color: "bg-orange-500" },
              { label: "Nodejs", years: 2, color: "bg-yellow-400" },
              { label: "Nextjs", years: 2, color: "bg-green-500" },
              { label: "OpenAI", years: 1.5, color: "bg-purple-400" },
              { label: "Huggin Face", years: 1, color: "bg-gray-700" },
              { label: "PostgreSql", years: 1, color: "bg-green-700" },
            ].map((skill, idx) => (
              <div key={idx}>
                <span className="block text-sm mb-1">{skill.label}: {skill.years} years</span>
                <div className="w-full bg-gray-300 rounded-full h-2.5">
                  <div className={`${skill.color} h-2.5 rounded-full`} style={{ width: `${skill.years * 25}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </section>

       
  
        {/* Buttons Section */}
        <section className="mt-10 flex space-x-4">
        <Link
          to="/about"
          className="px-6 py-2 border-2 border-yellow-400 text-black font-bold rounded-lg bg-blue-700 hover:bg-yellow-400 hover:text-blue-900 transition"
          style={{color:'yellow'}}
          >
          Language
        </Link>
            
            
       
          

        </section>
      </div>
    );
  };
  
  export default Tools;
  