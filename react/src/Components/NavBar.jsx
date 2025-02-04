import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="bg-blue-900 text-white fixed top-0 left-0 w-full shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-xl font-bold">Karma Gyalpo</div>
          </div>
          {/*Navigation ink*/}
          <div className="hidden md:flex space-x-6">
            <Link to='/' className='hover:text-yellow-400'>Home</Link>
            <Link to='/about' className='hover:text-yellow-400'>About</Link>
            <Link to='/contact' className='hover:text-yellow-400'>Contact</Link>
            <Link to='/Work' className="hover:text-yellow-400">Work</Link>
            <Link to='/Portfolio' className="hover:text-yellow-400">Portfolio</Link>
          </div>
  
          {/* Hamburger Menu */}
          
          <div className="space-y-2 md:hidden">
            <span className="block w-8 h-0.5 bg-yellow-400"></span>
            <span className="block w-8 h-0.5 bg-yellow-400"></span>
            <span className="block w-8 h-0.5 bg-yellow-400"></span>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  