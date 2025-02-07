const Homepage = () => {
    return (
      <div className="bg-gradient-to-b from-blue-900 to-blue-500 min-h-screen text-white">
        {/* Hero Section */}
        <header className="flex flex-col items-center justify-center text-center h-screen px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Welcome to <span className="text-yellow-400">Karma Portfolio</span>
          </h1>
          <br/>
          <a href="/Karma_Resume_.pdf" 
          download
          className='text-yellow-400 font-bold hover:underline'
          style={{ color: 'Yellow' }}>
              Download my Resume
          </a>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl">
           
          </p>
          
        </header>
  
       

  
        {/* Footer Section */}
        <footer className="py-6 bg-blue-900 text-center text-gray-300">
          
          <p className="mb-4">Thank you for visting my Portfolio!</p>
        
          
          <a href="/Karma_Resume_.pdf" 
        
          download
          className='text-yellow-400 font-bold hover:underline'>
              Download my Resume
          </a>
        </footer>
      </div>
    );
  };
  
  export default Homepage;
  