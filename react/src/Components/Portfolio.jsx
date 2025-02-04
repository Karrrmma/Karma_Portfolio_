const Portfolio = () => {
    const projects = [
        {
        name: "AI-HealthAdvisor",
        description: "Machine learning project to predict customer churn.",
        url: "https://github.com/Karrrmma/AI-HealthAdvisor",
        stars: 10,
        forks: 2,
      },
      {
        name: "StudyBot",
        description: "An AI-powered chatbot for efficient study routines.",
        url: "https://github.com/Karrrmma/StudyBot",
        stars: 15,
        forks: 5,
      },
      {
        name: "Gator Connect",
        description: "Web application designed to consolidate academic resources and enhance student communication at San Francisco State University.",
        url: "https://github.com/Karrrmma/Gator-connect",
        stars: 20,
        forks: 8,
      },
      
      {
        name: "Trading Bot",
        description: "Developed an automated trading bot using Alpaca API and FinBERT for sentiment analysis, executing trades based on the real-time sentiments extracted from the news.",
        url: "https://github.com/Karrrmma/Trading_Bot",
        stars: 10,
        forks: 2,
      },
      {
        name: "Facial Recognition",
        description: "full-stack application using Flask for the backend and React for the frontend, implementing a facial recognition system with the OpenCV library",
        url: "https://github.com/Karrrmma/Facial-recognition",
        stars: 10,
        forks: 2,
      },
      {
        name: "Customer Churn Analysis",
        description: "Developed and trained a RaindomForestCLassifier model to predict customer churn, achieving an accuracy of 80%, and AUC-ROC score of 84%. Identified high-risk customers with a high probability of churn and converted their data back to original scales for easy identification and save high-risk customer details for potential follow-up actions, enabling targeted retention strategies",
        url: "https://github.com/Karrrmma/Customer_Churn_Analyis",
        stars: 9,
        forks: 2,
      },

    ];
  
    return (
      <div className="bg-gradient-to-b from-blue-700 to-blue-300 min-h-screen flex flex-col items-center text-white px-4 py-8">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-yellow-400">My Portfolio</h1>
          <p className="text-lg mt-4">Here are some of my favorite projects!</p>
        </header>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 text-white rounded-lg p-6 shadow-lg relative flex flex-col"
            >
              <h2 className="text-xl font-bold text-yellow-400">{project.name}</h2>
              <p className="mt-2 text-gray-300">{project.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  View on GitHub
                </a>
                <span className="text-sm text-gray-400">
                  ⭐ {project.stars} | Forks: {project.forks}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Portfolio;
  